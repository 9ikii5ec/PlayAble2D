using System.Collections.Generic;
using UnityEngine;

public class Build : MonoBehaviour
{
    [SerializeField] private BuildGrid buildGrid;
    [SerializeField] private float snapDistance = 0.5f;

    private Camera mainCamera;
    private Rigidbody2D rigidBody;
    private bool isDragging = false;
    private Vector2 originalPosition;

    private void Awake()
    {
        mainCamera = Camera.main;
        rigidBody = GetComponent<Rigidbody2D>();
        originalPosition = rigidBody.position;

    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Vector2 mousePosition = mainCamera.ScreenToWorldPoint(Input.mousePosition);
            RaycastHit2D hit = Physics2D.Raycast(mousePosition, Vector2.zero);

            if (hit.collider != null && hit.collider.gameObject == gameObject)
            {
                isDragging = true;
            }
        }

        if (Input.GetMouseButtonUp(0))
        {
            isDragging = false;
            SnapToCell();
        }

        if (isDragging)
        {
            Vector2 mousePosition = mainCamera.ScreenToWorldPoint(Input.mousePosition);
            rigidBody.MovePosition(mousePosition);
        }
    }

    private void SnapToCell()
{
    List<Vector2> cellPositions = buildGrid.CellPositions;
    Vector2 targetPosition = originalPosition;

    foreach (Vector2 cellPosition in cellPositions)
    {
        if (Vector2.Distance(rigidBody.position, cellPosition) < snapDistance)
        {
            Collider2D[] colliders = Physics2D.OverlapCircleAll(cellPosition, snapDistance);
            bool isOccupied = false;

            foreach (Collider2D collider in colliders)
            {
                if (collider.gameObject != gameObject)
                {
                    isOccupied = true;
                    break;
                }
            }

            if (!isOccupied)
            {
                targetPosition = cellPosition;
                originalPosition = targetPosition;
            }
        }
    }

    rigidBody.MovePosition(targetPosition);
}
}
