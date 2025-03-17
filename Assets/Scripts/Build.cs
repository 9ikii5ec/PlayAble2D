using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
[RequireComponent(typeof(SpriteRenderer))]
public class Build : MonoBehaviour
{
    [SerializeField] private BuildGrid buildGrid;
    [SerializeField] private float snapSpeed = 10f;
    [SerializeField] private float rayDistance = 1f;
    [SerializeField] private int buildingLevel = 1;
    [SerializeField] private Color rayColor = Color.green;

    private Vector3 offset;
    private Vector2 defaultPosition;
    private Vector3 targetPosition;
    private bool isSnapping = false;
    private bool isDragging = false;

    private SpriteRenderer spriteRenderer;
    private int defaultSortingOrder;

    private void Awake()
    {
        defaultPosition = transform.position;
        targetPosition = transform.position;
        spriteRenderer = GetComponent<SpriteRenderer>();
        defaultSortingOrder = spriteRenderer.sortingOrder;
    }

    private void Update()
    {
        if (isSnapping)
        {
            transform.position = Vector3.Lerp(transform.position, targetPosition, snapSpeed * Time.deltaTime);

            if (Vector3.Distance(transform.position, targetPosition) < 0.01f)
            {
                transform.position = targetPosition;
                isSnapping = false;

                PerformRaycastCheck();
            }
        }
    }

    private void OnMouseDown()
    {
        offset = transform.position - GetMouseWorldPosition();
        isDragging = true;

        defaultSortingOrder = spriteRenderer.sortingOrder;
        spriteRenderer.sortingOrder++;

        isSnapping = false;
    }

    private void OnMouseDrag()
    {
        transform.position = GetMouseWorldPosition() + offset;
    }

    private void OnMouseUp()
    {
        isDragging = false;
        SnapToCell();
        spriteRenderer.sortingOrder = defaultSortingOrder;
    }

    private void SnapToCell()
    {
        List<Vector2> cellPositions = buildGrid.CellPositions;
        Vector2 bestPosition = defaultPosition;
        float minDistance = float.MaxValue;

        foreach (Vector2 cellPosition in cellPositions)
        {
            if (!IsBusyCell(cellPosition))
            {
                float distance = Vector2.Distance(transform.position, cellPosition);
                if (distance < minDistance)
                {
                    minDistance = distance;
                    bestPosition = cellPosition;
                }
            }
        }

        targetPosition = bestPosition;
        defaultPosition = bestPosition;
        isSnapping = true;
    }

    private bool IsBusyCell(Vector2 cellPosition)
    {
        Collider2D[] colliders = Physics2D.OverlapCircleAll(cellPosition, 0.1f);
        foreach (Collider2D collider in colliders)
        {
            if (collider.gameObject != gameObject)
            {
                return true;
            }
        }
        return false;
    }

    private Vector3 GetMouseWorldPosition()
    {
        Vector3 mousePosition = Input.mousePosition;
        mousePosition.z = Camera.main.WorldToScreenPoint(transform.position).z;
        return Camera.main.ScreenToWorldPoint(mousePosition);
    }

    private void OnDrawGizmos()
    {
        DrawRaycasts();
    }

    private void PerformRaycastCheck()
    {
        Vector3 origin = transform.position;
        float angleOffset = 60f;
        float angleStep = 60f;
        int matchingCount = 0;

        for (int i = 0; i < 6; i++)
        {
            float angle = angleOffset + angleStep * i;
            Vector3 direction = Quaternion.Euler(0, 0, angle) * Vector3.up;

            RaycastHit2D hit = Physics2D.Raycast(origin, direction.normalized, rayDistance);


            Build otherBuild = hit.collider.GetComponent<Build>();
            if (otherBuild.buildingLevel == buildingLevel)
            {
                matchingCount++;
            }

            if (matchingCount == 2)
            {
                Debug.Log($"Найдено 2 совпадения уровня ({buildingLevel}) рядом с объектом: {name}");
                return;
            }
        }
    }

    private void DrawRaycasts()
    {
        Vector3 origin = transform.position;
        float angleOffset = 60f;
        float angleStep = 60f;

        Gizmos.color = rayColor;

        for (int i = 0; i < 6; i++)
        {
            float angle = angleOffset + angleStep * i;
            Vector3 direction = Quaternion.Euler(0, 0, angle) * Vector3.up;
            Gizmos.DrawLine(origin, origin + direction.normalized * rayDistance);
        }
    }

}
