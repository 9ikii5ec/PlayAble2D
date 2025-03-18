using UnityEngine;

public class HandAnimatin : MonoBehaviour
{
    [SerializeField] private GameObject handPrefab;   // ������ ����
    [SerializeField] private float showDelay = 1f;    // �������� ����� ���������� ����
    [SerializeField] private Vector3 handOffset = new Vector3(0, 1f, 0); // �������� ��� ���� (��������, ��� �������)

    private float timer = 0f;
    private GameObject currentHand;   // ������� ����
    private Build selectedBuild;      // ��������, ������� ���������������
    private Build targetBuild;        // ��������, ���� ����� ����������� ��� �����������

    private void Update()
    {
        if (selectedBuild == null) return;

        timer += Time.deltaTime;

        // ���� ������ �� ���������������, �� �������� ����
        if (!selectedBuild.IsDragging)
        {
            if (currentHand != null)
            {
                Destroy(currentHand);  // ������� ����
            }
            return;
        }

        // ���������, ����� ����� �������� ����
        if (timer >= showDelay)
        {
            TryShowHand();
            timer = 0f;
        }

        // ���� ���� ��������, �� ��� ����� ��������� �� �������� ������
        if (currentHand != null && targetBuild != null)
        {
            ShowHandAtTarget();
        }
    }

    private void TryShowHand()
    {
        // ���� �������, � �������� ����� ���������� ������� ������
        Build[] builds = FindObjectsOfType<Build>();
        foreach (var build in builds)
        {
            if (build != selectedBuild && build.BuildingLevel == selectedBuild.BuildingLevel)
            {
                // ���� ������� ������ ��� �����������, ���������� ����
                targetBuild = build;
                ShowHandAtTarget();
                return;
            }
        }
    }

    private void ShowHandAtTarget()
    {
        if (currentHand != null) return;  // ���� ���� ��� ����, �� ������ �����

        Vector3 spawnPos = selectedBuild.transform.position + handOffset;
        currentHand = Instantiate(handPrefab, spawnPos, Quaternion.identity);

        // ������������� ���� ����� � ����� (�������� �������)
        Vector3 targetPos = targetBuild.transform.position;
        Vector3 direction = targetPos - selectedBuild.transform.position;

        // ������������ ����, ����� ��� ��������� �� �������� ������
        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        currentHand.transform.rotation = Quaternion.Euler(0, 0, angle);
    }

    public void SetSelectedBuild(Build build)
    {
        selectedBuild = build;
    }
}
