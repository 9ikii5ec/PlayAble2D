using UnityEngine;

[RequireComponent(typeof(Build))]
public class FinalMerge : MonoBehaviour
{
    [SerializeField] private Transform targetObject;
    [SerializeField] private CameraMoving cameraFollow;

    private Build build;
    private new Collider2D collider;
    private bool isInteractble = true;

    private void Awake()
    {
        build = GetComponent<Build>();
        collider = GetComponent<Collider2D>();
        cameraFollow = FindObjectOfType<CameraMoving>();
        targetObject = GameObject.FindWithTag("Target").transform;
    }

    private void Update()
    {
        if (isInteractble)
        {
            float distance = Vector3.Distance(transform.position, targetObject.position);

            if (distance <= 1f)
            {
                build.isMovable = false;
                build.enabled = false;
                transform.position = Vector3.Lerp(transform.position, targetObject.position, 10f * Time.deltaTime);
            }


            if (distance <= 0.1f)
            {
                isInteractble = false;
                collider.enabled = false;
                Destroy(targetObject.gameObject);
                cameraFollow.MoveTo(transform.position);
            }
        }
    }
}
