using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
[RequireComponent(typeof(SpriteRenderer))]
public class Build : MonoBehaviour
{
    [SerializeField] private BuildGrid buildGrid;
    [SerializeField] private GameObject buildPrefab; // Один префаб для следующего уровня
    [SerializeField] private float snapSpeed = 10f;
    [SerializeField] private float mergeSpeed = 5f; // Скорость слияния
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

                // Проверяем объединение после привязки
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
        if (!isMovable) return;

        offset = transform.position - GetMouseWorldPosition();
        spriteRenderer.sortingOrder++;
        isSnapping = false;
    }

    private void OnMouseDrag()
    {
        if (!isMovable) return;

        transform.position = GetMouseWorldPosition() + offset;
    }

    private void OnMouseUp()
    {
        if (!isMovable) return;

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
        Collider2D[] colliders = Physics2D.OverlapCircleAll(cellPosition, 0.2f); // Увеличили радиус до 0.2
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

    private List<Build> GetMatchingNeighbors()
    {
        List<Build> matchingNeighbors = new List<Build>();
        Collider2D[] colliders = Physics2D.OverlapCircleAll(transform.position, 0.8f); // Увеличили радиус до 0.8

        foreach (Collider2D collider in colliders)
        {
            if (collider.gameObject != gameObject)
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

    private void TryMerge()
    {
        if (isInMergeProcess) return;

        List<Build> matchingNeighbors = GetMatchingNeighbors();

        // Только если нашлось 2 соседа — продолжать
        if (matchingNeighbors.Count >= 2)
        {
            List<Build> group = new List<Build> { this, matchingNeighbors[0], matchingNeighbors[1] };

            // Проверяем, я ли главный среди трёх (по InstanceID или позиции — ты можешь выбрать свой критерий)
            Build leader = GetMergeLeader(group);

            if (leader != this) return;

            // Зафиксировать, что все участвуют в слиянии
            foreach (Build b in group)
            {
                b.isInMergeProcess = true;
            }

            mergingBuildings = group;
            mergeTarget = leader.transform.position;
            isMerging = true;
        }
    }

    private Build GetMergeLeader(List<Build> builds)
    {
        // Простой способ: выбираем объект с минимальным InstanceID
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


    private void OnDrawGizmos()
    {
        // Убедитесь, что вы работаете с этим объектом
        if (buildGrid == null) return;

        Gizmos.color = Color.green; // Цвет для визуализации рейкастов

        // Получаем все соседние здания того же уровня
        List<Build> matchingNeighbors = GetMatchingNeighbors();

        // Отображаем рейкасты
        Collider2D[] colliders = Physics2D.OverlapCircleAll(transform.position, 0.8f); // Увеличили радиус до 0.8
        foreach (Collider2D collider in colliders)
        {
            if (collider.gameObject != gameObject)
            {
                Build otherBuild = collider.GetComponent<Build>();
                if (otherBuild != null && otherBuild.buildingLevel == buildingLevel)
                {
                    // Рисуем линию от текущего здания к соседнему зданию того же уровня
                    Gizmos.DrawLine(transform.position, otherBuild.transform.position);
                }
            }
        }
    }

    private void TryMergeNearby()
    {
        List<Build> neighbors = GetMatchingNeighbors();

        // Проверка для себя
        TryMerge();

        // Инициируем проверку слияния у соседей
        foreach (Build neighbor in neighbors)
        {
            if (neighbor != null && neighbor != this)
            {
                neighbor.TryMerge();
            }
        }
    }
}
