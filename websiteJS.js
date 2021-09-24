function initialize()
{
	content1 = document.getElementById("contentDiv1");
	content2 = document.getElementById("contentDiv2");
	content3 = document.getElementById("contentDiv3");
	subtopic1 = document.getElementById("subdiv1");
	subtopic2 = document.getElementById("subdiv2");
	subtopic3 = document.getElementById("subdiv3");

	
	contentList = [content1, content2, content3];
	subtopicList = [subtopic1, subtopic2, subtopic3];
	contentDisplay = [true, false, false];
	contentList[1].style.display = "none";
	for(var i = 0; i<contentDisplay.length; i++)
	{
		if(contentDisplay[i])
		{
			contentList[i].style.display = "inline-block";
			subtopicList[i].style.backgroundColor = "#ccebff";
		}
		else
		{
			contentList[i].style.display = "none";
			subtopicList[i].style.backgroundColor = "white";
		}
	}
}
function changeContent(idx)
{
	contentDisplay = [false, false, false];
	contentDisplay[idx] = true;
	display();
}
function display()
{
	for(var i = 0; i<contentDisplay.length; i++)
	{
		if(contentDisplay[i])
		{
			contentList[i].style.display = "inline-block";
			subtopicList[i].style.backgroundColor = "#ccebff";
		}
		else
		{
			contentList[i].style.display = "none";
			subtopicList[i].style.backgroundColor = "white";
		}
	}
}