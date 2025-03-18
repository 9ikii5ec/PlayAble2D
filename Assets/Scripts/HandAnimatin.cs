using UnityEngine;

public class HandAnimatin : MonoBehaviour
{
    [SerializeField] private GameObject handPrefab;   // Префаб руки
    [SerializeField] private float showDelay = 1f;    // Задержка перед появлением руки
    [SerializeField] private Vector3 handOffset = new Vector3(0, 1f, 0); // Смещение для руки (например, над зданием)

    private float timer = 0f;
    private GameObject currentHand;   // Текущая рука
    private Build selectedBuild;      // Строение, которое перетаскивается
    private Build targetBuild;        // Строение, куда нужно переместить для объединения

    private void Update()
    {
        if (selectedBuild == null) return;

        timer += Time.deltaTime;

        // Если здание не перетаскивается, то скрываем руку
        if (!selectedBuild.IsDragging)
        {
            if (currentHand != null)
            {
                Destroy(currentHand);  // Убираем руку
            }
            return;
        }

        // Проверяем, когда нужно показать руку
        if (timer >= showDelay)
        {
            TryShowHand();
            timer = 0f;
        }

        // Если рука показана, то она будет указывать на соседнюю ячейку
        if (currentHand != null && targetBuild != null)
        {
            ShowHandAtTarget();
        }
    }

    private void TryShowHand()
    {
        // Ищем соседей, с которыми можно объединить текущее здание
        Build[] builds = FindObjectsOfType<Build>();
        foreach (var build in builds)
        {
            if (build != selectedBuild && build.BuildingLevel == selectedBuild.BuildingLevel)
            {
                // Если найдено здание для объединения, показываем руку
                targetBuild = build;
                ShowHandAtTarget();
                return;
            }
        }
    }

    private void ShowHandAtTarget()
    {
        if (currentHand != null) return;  // Если рука уже есть, не создаём новую

        Vector3 spawnPos = selectedBuild.transform.position + handOffset;
        currentHand = Instantiate(handPrefab, spawnPos, Quaternion.identity);

        // Позиционируем руку рядом с целью (соседним зданием)
        Vector3 targetPos = targetBuild.transform.position;
        Vector3 direction = targetPos - selectedBuild.transform.position;

        // Поворачиваем руку, чтобы она указывала на соседнее здание
        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        currentHand.transform.rotation = Quaternion.Euler(0, 0, angle);
    }

    public void SetSelectedBuild(Build build)
    {
        selectedBuild = build;
    }
}
