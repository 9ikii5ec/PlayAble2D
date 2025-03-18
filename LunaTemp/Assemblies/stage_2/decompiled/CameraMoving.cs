using UnityEngine;

public class CameraMoving : MonoBehaviour
{
	[SerializeField]
	private float moveSpeed = 5f;

	[SerializeField]
	private Vector3 offset = new Vector3(0f, 0f, -10f);

	private Vector3 targetPosition;

	private Vector3 velocity = Vector3.zero;

	private bool shouldMove = false;

	private Stage2Animation stage2Animation;

	private void Awake()
	{
		stage2Animation = Object.FindObjectOfType<Stage2Animation>();
	}

	public void MoveTo(Vector3 position)
	{
		targetPosition = position + offset;
		shouldMove = true;
	}

	private void Update()
	{
		if (shouldMove)
		{
			base.transform.position = Vector3.SmoothDamp(base.transform.position, targetPosition, ref velocity, 1f / moveSpeed);
			if (Vector3.Distance(base.transform.position, targetPosition) < 0.05f)
			{
				shouldMove = false;
				stage2Animation.StartSequence();
				stage2Animation.StartDisappearSequence();
			}
		}
	}
}
