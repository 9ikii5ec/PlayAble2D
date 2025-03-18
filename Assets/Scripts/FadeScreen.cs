using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class FadeScreen : MonoBehaviour
{
    [SerializeField] private Image fadePanel;
    [SerializeField] private float fadeDuration = 1f;

    private bool isFading = false;

    private void Awake()
    {
        if (fadePanel == null)
        {
            fadePanel = GameObject.Find("FadePanel")?.GetComponent<Image>();
        }

        if (fadePanel != null)
        {
            Color color = fadePanel.color;
            color.a = 0f;
            fadePanel.color = color;
        }
    }

    public void FadeIn(Action onComplete = null)
    {
        if (!isFading && fadePanel != null)
        {
            StartCoroutine(Fade(0f, 0.9f, onComplete));
        }
    }

    public void FadeOut(Action onComplete = null)
    {
        if (!isFading && fadePanel != null)
        {
            StartCoroutine(Fade(0.9f, 0f, onComplete));
        }
    }

    private IEnumerator Fade(float from, float to, Action onComplete)
    {
        isFading = true;

        float timer = 0f;
        Color color = fadePanel.color;

        while (timer < fadeDuration)
        {
            timer += Time.deltaTime;
            float t = timer / fadeDuration;
            color.a = Mathf.Lerp(from, to, t);
            fadePanel.color = color;
            yield return null;
        }

        color.a = to;
        fadePanel.color = color;

        isFading = false;
        onComplete?.Invoke();
    }
}
