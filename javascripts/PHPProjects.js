var PHPProjectSPortfolio = 
//------------------------------------------insert/paste json data below
{ 
  "PHPProjects": [
    {  
	  "id":1,
      "project_name": "Project Portfolio Tracker",
      "owner": {       
        "avatar_url": "ProjectPortfolioTracker.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Project-Portfolio-Tracker/blob/master/description.txt", 
	  "summary": "A web portal for tracking information on all projects from a central location. Has reporting features for managerment to evaluate priorities ",  
      "code_url": "https://github.com/vernkennedy/Project-Portfolio-Tracker",  
	   "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,CSS3,JavaScript,jQuery, Google Charts/Google Visualization API",      
      "backend_infor": "Php5,SQL,MySQL",
	  "demotype":"Video Demo"
    },	

	
    {
		"id":2,
        "project_name": "Database Driven Google Map",
      "owner": {       
        "avatar_url": "DatabaseDrivenMaps.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Database-Google-Map/blob/master/description.txt", 
      "summary": "An HTML5 web application that plots arbitrary points on a map. Each point has a tooltip where the information about the point is populated from a MySQL database",	  
      "code_url": "https://github.com/vernkennedy/Database-Google-Map", 
	   "demo_url": "https://www.youtube.com/watch?v=QAgBDwnvH3I",
      "frontend_infor": "Html5,CSS3,JavaScript,Google Maps API",      
      "backend_infor": "Php5,SQL,MySQL",
	  "demotype":"Video Demo"
    },
  
  	{
		"id":3,
       "project_name": "ScotBoard",
      "owner": {       
        "avatar_url": "ScotBoard.jpg", 
      },           
      "description": "https://github.com/vernkennedy/IS-ScotBoard/blob/master/description.txt",  
	  "summary": "A Rule Based Expert System / web portal for academic planning and exploration of student opportunities at The College of Wooster",
      "code_url": "https://github.com/vernkennedy/IS-ScotBoard",
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,CSS3,JavaScript,Html5 Drag and Drop API",      
      "backend_infor": "Php5,SQL,MySQL",
	  "demotype":"Video Demo"
	  
    }
	
	 
  ]
}

//-----------------------------------------------------------------------insert data above

content = "";
var i;
for (i = 0; i < PHPProjectSPortfolio.PHPProjects.length; i++) {
    content +="<li>"
				+"<img src="+PHPProjectSPortfolio.PHPProjects[i].owner.avatar_url+">"
				+"<h3 align=center>"+ PHPProjectSPortfolio.PHPProjects[i].project_name +"</h3>"
				+"<a href="+PHPProjectSPortfolio.PHPProjects[i].description+">Description</a>"
				+" <a href="+PHPProjectSPortfolio.PHPProjects[i].demo_url+">"+PHPProjectSPortfolio.PHPProjects[i].demotype+"</a>"
				+" <a href="+PHPProjectSPortfolio.PHPProjects[i].code_url + ">Code</a><br><br>"
				+"<b>Summary</b><br>"+PHPProjectSPortfolio.PHPProjects[i].summary + "<br><br>"
				+"<b>Front-end Technologies used:</b><br>"+PHPProjectSPortfolio.PHPProjects[i].frontend_infor +"<br><br>"
				+"<b>Middle Tier and Backend Technologies used:</b><br>"+ PHPProjectSPortfolio.PHPProjects[i].backend_infor 
			+"</li>";
}


document.getElementById("demo").innerHTML = "<ol>"+content+"</ol>";
