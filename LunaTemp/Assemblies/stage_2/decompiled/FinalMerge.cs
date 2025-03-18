using UnityEngine;

[RequireComponent(typeof(Build))]
public class FinalMerge : MonoBehaviour
{
	[SerializeField]
	private Transform targetObject;

	[SerializeField]
	private CameraMoving cameraFollow;

	private Build build;

	private new Collider2D collider;

	private bool isInteractble = true;

	private void Awake()
	{
		build = GetComponent<Build>();
		collider = GetComponent<Collider2D>();
		cameraFollow = Object.FindObjectOfType<CameraMoving>();
		targetObject = GameObject.FindWithTag("Target").transform;
	}

	private void Update()
	{
		if (isInteractble)
		{
			float distance = Vector3.Distance(base.transform.position, targetObject.position);
			if (distance <= 1f)
			{
				build.isMovable = false;
				build.enabled = false;
				base.transform.position = Vector3.Lerp(base.transform.position, targetObject.position, 10f * Time.deltaTime);
			}
			if (distance <= 0.1f)
			{
				isInteractble = false;
				collider.enabled = false;
				Object.Destroy(targetObject.gameObject);
				cameraFollow.MoveTo(base.transform.position);
			}
		}
	}
}
