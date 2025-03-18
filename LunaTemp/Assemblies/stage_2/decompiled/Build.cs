using System.Collections.Generic;
using System.Linq;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
[RequireComponent(typeof(SpriteRenderer))]
public class Build : MonoBehaviour
{
	[SerializeField]
	private BuildGrid buildGrid;

	[SerializeField]
	private GameObject buildPrefab;

	[SerializeField]
	private float snapSpeed = 10f;

	[SerializeField]
	private float mergeSpeed = 5f;

	[SerializeField]
	private int buildingLevel = 0;

	public bool isMovable = true;

	private Vector3 offset;

	private Vector2 defaultPosition;

	private Vector3 targetPosition;

	private SpriteRenderer spriteRenderer;

	private int defaultSortingOrder;

	private bool isSnapping = false;

	private bool isMerging = false;

	private bool isInMergeProcess = false;

	private Vector3 mergeTarget;

	private List<Build> mergingBuildings = new List<Build>();

	public bool IsSnapping => isSnapping;

	public bool IsDragging { get; private set; } = false;


	public int BuildingLevel => buildingLevel;

	private void Awake()
	{
		defaultPosition = base.transform.position;
		targetPosition = base.transform.position;
		spriteRenderer = GetComponent<SpriteRenderer>();
		defaultSortingOrder = spriteRenderer.sortingOrder;
		buildGrid = Object.FindObjectOfType<BuildGrid>();
	}

	private void Update()
	{
		HandleInput();
		HandleSnapping();
		HandleMerging();
	}

	private void HandleInput()
	{
		if (Input.GetMouseButtonDown(0) || IsTouchBegan())
		{
			HandleTouchOrClickStart();
		}
		if (IsDragging && (Input.GetMouseButton(0) || IsTouchMoved()))
		{
			HandleTouchOrClickMove();
		}
		if (IsDragging && (Input.GetMouseButtonUp(0) || IsTouchEnded()))
		{
			HandleTouchOrClickEnd();
		}
	}

	private bool IsTouchBegan()
	{
		return Input.GetMouseButtonDown(0);
	}

	private bool IsTouchMoved()
	{
		return Input.GetMouseButton(0);
	}

	private bool IsTouchEnded()
	{
		return Input.GetMouseButtonUp(0);
	}

	private void HandleTouchOrClickStart()
	{
		if (!isMerging && !isSnapping && !isInMergeProcess)
		{
			IsDragging = true;
			offset = base.transform.position - GetMouseOrTouchPosition();
			spriteRenderer.sortingOrder++;
			isSnapping = false;
		}
	}

	private void HandleTouchOrClickMove()
	{
		if (!isMerging && !isSnapping && !isInMergeProcess && isMovable)
		{
			base.transform.position = GetMouseOrTouchPosition() + offset;
		}
	}

	private void HandleTouchOrClickEnd()
	{
		if (!isMerging && !isSnapping && !isInMergeProcess && isMovable)
		{
			IsDragging = false;
			SnapToCell();
			spriteRenderer.sortingOrder = defaultSortingOrder;
		}
	}

	private Vector3 GetMouseOrTouchPosition()
	{
		Vector3 inputPosition = Input.mousePosition;
		if (Input.touchCount > 0)
		{
			inputPosition = Input.touches[0].position;
		}
		inputPosition.z = Camera.main.WorldToScreenPoint(base.transform.position).z;
		return Camera.main.ScreenToWorldPoint(inputPosition);
	}

	private void HandleSnapping()
	{
		if (isSnapping)
		{
			base.transform.position = Vector3.Lerp(base.transform.position, targetPosition, snapSpeed * Time.deltaTime);
			if (Vector3.Distance(base.transform.position, targetPosition) < 0.01f)
			{
				base.transform.position = targetPosition;
				isSnapping = false;
				TryMergeNearby();
			}
		}
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
				float distance = Vector2.Distance(base.transform.position, cellPosition);
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
		Collider2D[] colliders = Physics2D.OverlapCircleAll(cellPosition, 0.2f);
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

	private void HandleMerging()
	{
		if (!isMerging)
		{
			return;
		}
		bool allMerged = true;
		foreach (Build build in mergingBuildings)
		{
			if (build != this)
			{
				build.transform.position = Vector3.Lerp(build.transform.position, mergeTarget, mergeSpeed * Time.deltaTime);
				if (Vector3.Distance(build.transform.position, mergeTarget) > 0.01f)
				{
					allMerged = false;
				}
			}
		}
		if (allMerged)
		{
			CompleteMerge();
		}
	}

	private void TryMergeNearby()
	{
		List<Build> neighbors = GetMatchingNeighbors();
		TryMerge();
		foreach (Build neighbor in neighbors)
		{
			if (neighbor != null && neighbor != this)
			{
				neighbor.TryMerge();
			}
		}
	}

	private void TryMerge()
	{
		if (isInMergeProcess || isMerging)
		{
			return;
		}
		List<Build> matchingNeighbors = GetMatchingNeighbors();
		if (matchingNeighbors.Count < 2)
		{
			return;
		}
		List<Build> group = new List<Build> { this };
		group.AddRange(matchingNeighbors);
		Build leader = GetMergeLeader(group);
		if (leader != this || group.Exists((Build b) => b.isInMergeProcess))
		{
			return;
		}
		foreach (Build b2 in group)
		{
			b2.isInMergeProcess = true;
		}
		mergingBuildings = group;
		mergeTarget = base.transform.position;
		isMerging = true;
	}

	private List<Build> GetMatchingNeighbors()
	{
		List<Build> matchingNeighbors = new List<Build>();
		Collider2D[] colliders = Physics2D.OverlapCircleAll(base.transform.position, 1.5f);
		Collider2D[] array = colliders;
		foreach (Collider2D collider in array)
		{
			if (collider.gameObject != base.gameObject)
			{
				Build otherBuild = collider.GetComponent<Build>();
				if (otherBuild != null && otherBuild.buildingLevel == buildingLevel)
				{
					matchingNeighbors.Add(otherBuild);
				}
			}
		}
		return matchingNeighbors;
	}

	private Build GetMergeLeader(List<Build> builds)
	{
		return builds.OrderBy((Build b) => b.GetInstanceID()).First();
	}

	private void CompleteMerge()
	{
		foreach (Build build in mergingBuildings)
		{
			if (build != this)
			{
				Object.Destroy(build.gameObject);
			}
		}
		Object.Destroy(base.gameObject);
		GameObject newBuild = Object.Instantiate(buildPrefab, mergeTarget, Quaternion.identity);
		newBuild.GetComponent<Build>().buildingLevel = buildingLevel + 1;
	}
}
