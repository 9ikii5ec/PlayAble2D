using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Stage2Animation : MonoBehaviour
{
    [Header("Появление объектов")]
    [SerializeField] private List<GameObject> objectsToAppear = new();
    [SerializeField] private float appearDelay = 0.2f;
    [SerializeField] private float appearRiseDistance = 1f;
    [SerializeField] private float appearDuration = 1f;

    [Header("Исчезновение объектов")]
    [SerializeField] private List<GameObject> objectsToDisappear = new();
    [SerializeField] private float disappearDelay = 0.2f;
    [SerializeField] private float disappearRiseDistance = 1f;
    [SerializeField] private float disappearDuration = 1f;

    public void StartSequence()
    {
        StartCoroutine(AppearSequence());
    }

    public void StartDisappearSequence()
    {
        StartCoroutine(DisappearSequence());
    }

    private IEnumerator AppearSequence()
    {
        // Появление сверху вниз
        for (int i = 0; i < objectsToAppear.Count; i++)
        {
            GameObject obj = objectsToAppear[i];
            if (obj != null)
            {
                StartCoroutine(Appear(obj));
                yield return new WaitForSeconds(appearDelay);
            }
        }
    }

    private IEnumerator DisappearSequence()
    {
        // Исчезновение снизу вверх
        for (int i = objectsToDisappear.Count - 1; i >= 0; i--)
        {
            GameObject obj = objectsToDisappear[i];
            if (obj != null)
            {
                StartCoroutine(Disappear(obj));
                yield return new WaitForSeconds(disappearDelay);
            }
        }
    }

    private IEnumerator Appear(GameObject obj)
    {
        SpriteRenderer sr = obj.GetComponent<SpriteRenderer>();
        Vector3 endPos = obj.transform.position;
        Vector3 startPos = endPos + Vector3.up * appearRiseDistance;
        obj.transform.position = startPos;

        if (sr != null)
        {
            Color color = sr.color;
            color.a = 0f;
            sr.color = color;
        }

        float timer = 0f;
        while (timer < appearDuration)
        {
            timer += Time.deltaTime;
            float t = timer / appearDuration;

            obj.transform.position = Vector3.Lerp(startPos, endPos, t);

            if (sr != null)
            {
                Color color = sr.color;
                color.a = Mathf.Lerp(0f, 1f, t);
                sr.color = color;
            }

            yield return null;
        }

        obj.transform.position = endPos;
        if (sr != null)
        {
            Color color = sr.color;
            color.a = 1f;
            sr.color = color;
        }
    }

    private IEnumerator Disappear(GameObject obj)
    {
        SpriteRenderer sr = obj.GetComponent<SpriteRenderer>();
        Vector3 startPos = obj.transform.position;
        Vector3 endPos = startPos + Vector3.up * disappearRiseDistance;

        float timer = 0f;
        while (timer < disappearDuration)
        {
            timer += Time.deltaTime;
            float t = timer / disappearDuration;

            obj.transform.position = Vector3.Lerp(startPos, endPos, t);

            if (sr != null)
            {
                Color color = sr.color;
                color.a = Mathf.Lerp(1f, 0f, t);
                sr.color = color;
            }

            yield return null;
        }

        obj.transform.position = endPos;
        if (sr != null)
        {
            Color color = sr.color;
            color.a = 0f;
            sr.color = color;
        }

        // Можно удалить объект, если нужно
        // Destroy(obj);
    }
}
