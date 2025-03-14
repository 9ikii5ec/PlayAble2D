using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
[RequireComponent(typeof(SpriteRenderer))]
public class Build : MonoBehaviour
{
	[SerializeField]
	private BuildGrid buildGrid;

	[SerializeField]
	private float snapSpeed = 10f;

	private Vector3 offset;

	private bool isDragging = false;

	private Vector2 originalPosition;

	private Vector3 targetPosition;

	private bool isSnapping = false;

	private SpriteRenderer spriteRenderer;

	private int originalSortingOrder;

	private void Awake()
	{
		originalPosition = base.transform.position;
		targetPosition = base.transform.position;
		spriteRenderer = GetComponent<SpriteRenderer>();
		originalSortingOrder = spriteRenderer.sortingOrder;
	}

	private void Update()
	{
		if (isSnapping)
		{
			base.transform.position = Vector3.Lerp(base.transform.position, targetPosition, snapSpeed * Time.deltaTime);
			if (Vector3.Distance(base.transform.position, targetPosition) < 0.01f)
			{
				base.transform.position = targetPosition;
				isSnapping = false;
			}
		}
	}

	private void OnMouseDown()
	{
		offset = base.transform.position - GetMouseWorldPosition();
		isDragging = true;
		originalSortingOrder = spriteRenderer.sortingOrder;
		spriteRenderer.sortingOrder++;
		isSnapping = false;
	}

	private void OnMouseDrag()
	{
		base.transform.position = GetMouseWorldPosition() + offset;
	}

	private void OnMouseUp()
	{
		isDragging = false;
		SnapToCell();
		spriteRenderer.sortingOrder = originalSortingOrder;
	}

	private void SnapToCell()
	{
		List<Vector2> cellPositions = buildGrid.CellPositions;
		Vector2 bestPosition = originalPosition;
		float minDistance = float.MaxValue;
		foreach (Vector2 cellPosition in cellPositions)
		{
			if (!IsCellOccupied(cellPosition))
			{
				float distance = Vector2.Distance(base.transform.position, cellPosition);
				if (distance < minDistance)
				{
					minDistance = distance;
					bestPosition = cellPosition;
				}
			}
		}
		targetPosition = bestPosition;
		originalPosition = bestPosition;
		isSnapping = true;
	}

	private bool IsCellOccupied(Vector2 cellPosition)
	{
		Collider2D[] colliders = Physics2D.OverlapCircleAll(cellPosition, 0.1f);
		Collider2D[] array = colliders;
		foreach (Collider2D collider in array)
		{
			if (collider.gameObject != base.gameObject)
			{
				return true;
			}
		}
		return false;
	}

	private Vector3 GetMouseWorldPosition()
	{
		Vector3 mousePosition = Input.mousePosition;
		mousePosition.z = Camera.main.WorldToScreenPoint(base.transform.position).z;
		return Camera.main.ScreenToWorldPoint(mousePosition);
	}
}
