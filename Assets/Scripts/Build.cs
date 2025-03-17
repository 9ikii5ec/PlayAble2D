using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
[RequireComponent(typeof(SpriteRenderer))]
public class Build : MonoBehaviour
{
    [SerializeField] private BuildGrid buildGrid;
    [SerializeField] private GameObject buildPrefab;
    [SerializeField] private float snapSpeed = 10f;
    [SerializeField] private float mergeSpeed = 5f;
    [SerializeField] private int buildingLevel = 0;

    public bool IsSnapping => isSnapping;
    public int BuildingLevel => buildingLevel;
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
    private List<Build> mergingBuildings = new();

    private void Awake()
    {
        defaultPosition = transform.position;
        targetPosition = transform.position;
        spriteRenderer = GetComponent<SpriteRenderer>();
        defaultSortingOrder = spriteRenderer.sortingOrder;
        buildGrid = FindObjectOfType<BuildGrid>();
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
                TryMergeNearby();
            }
        }

        if (isMerging)
        {
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
    }

    private void OnMouseDown()
    {
        // Не разрешать перетаскивание, если объект сливается или привязан
        if (isMerging || isSnapping || isInMergeProcess)
        {
            return;
        }

        offset = transform.position - GetMouseWorldPosition();
        spriteRenderer.sortingOrder++;
        isSnapping = false;
    }

    private void OnMouseDrag()
    {
        // Не разрешать перетаскивание, если объект сливается или привязан
        if (isMerging || isSnapping || isInMergeProcess || !isMovable)
        {
            return;
        }

        transform.position = GetMouseWorldPosition() + offset;
    }

    private void OnMouseUp()
    {
        // Не разрешать завершение перетаскивания, если объект сливается или привязан
        if (isMerging || isSnapping || isInMergeProcess || !isMovable)
        {
            return;
        }

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
        Collider2D[] colliders = Physics2D.OverlapCircleAll(cellPosition, 0.2f);
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

    private void TryMerge()
    {
        if (isInMergeProcess || isMerging) return;

        List<Build> matchingNeighbors = GetMatchingNeighbors();

        // Если количество соседей больше двух, пытаемся объединить
        if (matchingNeighbors.Count >= 2)
        {
            // Формируем группу для слияния
            List<Build> group = new List<Build> { this };
            group.AddRange(matchingNeighbors);

            Build leader = GetMergeLeader(group); // Определяем лидера для слияния

            if (leader != this) return; // Если этот объект не лидер, не начинаем слияние

            // Проверка, не в процессе ли слияния
            if (group.Exists(b => b.isInMergeProcess)) return;

            // Отмечаем все объекты как в процессе слияния
            foreach (Build b in group)
                b.isInMergeProcess = true;

            mergingBuildings = group;
            mergeTarget = transform.position; // Используем текущую позицию для слияния
            isMerging = true;

            // В дальнейшем слияние будет происходить в другом месте (например, в Update)
        }
    }

    private List<Build> GetMatchingNeighbors()
    {
        List<Build> matchingNeighbors = new List<Build>();
        Collider2D[] colliders = Physics2D.OverlapCircleAll(transform.position, 1.5f); // Позиция и радиус проверки

        foreach (Collider2D collider in colliders)
        {
            if (collider.gameObject != gameObject)
            {
                Build otherBuild = collider.GetComponent<Build>();
                if (otherBuild != null && otherBuild.buildingLevel == buildingLevel)
                {
                    matchingNeighbors.Add(otherBuild); // Добавляем в список соседей
                }
            }
        }
        return matchingNeighbors;
    }

    private Build GetMergeLeader(List<Build> builds)
    {
        Build leader = builds[0];
        foreach (Build b in builds)
        {
            if (b.GetInstanceID() < leader.GetInstanceID())
            {
                leader = b;
            }
        }
        return leader;
    }

    private void CompleteMerge()
    {
        isMerging = false;

        foreach (Build build in mergingBuildings)
        {
            build.isInMergeProcess = false;

            if (build != this)
            {
                Destroy(build.gameObject);
            }
        }

        Destroy(this.gameObject);

        int nextLevel = buildingLevel + 1;
        GameObject newBuild = Instantiate(buildPrefab, mergeTarget, Quaternion.identity);
        newBuild.GetComponent<Build>().buildingLevel = nextLevel;
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
}
