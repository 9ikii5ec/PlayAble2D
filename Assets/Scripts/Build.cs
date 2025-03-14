using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
public class Build : MonoBehaviour
{
    [SerializeField] private BuildGrid buildGrid;

    private Vector3 offset;
    private bool isDragging = false;
    private Vector2 originalPosition;

    private void Awake()
    {
        originalPosition = transform.position;
    }

    private void OnMouseDown()
    {
        offset = transform.position - GetMouseWorldPosition();
        isDragging = true;
    }

    private void OnMouseDrag()
    {
        transform.position = GetMouseWorldPosition() + offset;
    }

    private void OnMouseUp()
    {
        isDragging = false;
        SnapToCell();
    }

    private void SnapToCell()
    {
        List<Vector2> cellPositions = buildGrid.CellPositions;
        Vector2 targetPosition = originalPosition;
        float minDistance = float.MaxValue;

        foreach (Vector2 cellPosition in cellPositions)
        {
            if (!IsCellOccupied(cellPosition))
            {
                float distance = Vector2.Distance(transform.position, cellPosition);
                if (distance < minDistance)
                {
                    minDistance = distance;
                    targetPosition = cellPosition;
                }
            }
        }

        transform.position = targetPosition;
        originalPosition = targetPosition;
    }

    private bool IsCellOccupied(Vector2 cellPosition)
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
}
