using UnityEngine;

public class ObjectRotator : MonoBehaviour
{
    public float rotationSpeed = 50f;  // Speed of rotation in degrees per second

    private void Update()
    {
        // Rotate the object smoothly on the Y-axis
        transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);
    }
}