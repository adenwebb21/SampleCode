#version 450 core


out vec4 fColor;

void main()
{
	

    if(position.x > 0.5f && position.y > 0.5f)
	{
		fColor = vec4(0.5, 1, 0.5, 1.0);
	}
	else
	{
		fColor = vec4(1, 1, 0.5, 1.0);
	}
}
