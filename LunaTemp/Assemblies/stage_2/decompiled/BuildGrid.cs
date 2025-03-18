using System.Collections.Generic;
using UnityEngine;

public class BuildGrid : MonoBehaviour
{
	[SerializeField]
	private List<Transform> cells;

	public List<Vector2> CellPositions
	{
		get
		{
			List<Vector2> positions = new List<Vector2>();
			foreach (Transform cell in cells)
			{
				positions.Add(new Vector2(cell.position.x, cell.position.y));
			}
			return positions;
		}
	}
}
