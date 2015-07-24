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
      "code_url": "https://github.com/vernkennedy/Project-Portfolio-Tracker",  
	   "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,CSS3,JavaScript,jQuery, Google Charts/Google Visualization API",      
      "backend_infor": "Php5,SQL,MySQL"    
    },
	
	{
		"id":2,
       "project_name": "ScotBoard",
      "owner": {       
        "avatar_url": "ScotBoard.jpg", 
      },           
      "description": "https://github.com/vernkennedy/IS-ScotBoard/blob/master/description.txt",      
      "code_url": "https://github.com/vernkennedy/IS-ScotBoard",
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,CSS3,JavaScript,Html5 Drag and Drop API",      
      "backend_infor": "Php5,SQL,MySQL"  
    },
	
    {
		"id":3,
        "project_name": "Database Driven Google Map",
      "owner": {       
        "avatar_url": "DatabaseDrivenMaps.jpg", 
      },           
      "description": "https://github.com/vernkennedy/Database-Google-Map/blob/master/description.txt",      
      "code_url": "https://github.com/vernkennedy/Database-Google-Map", 
	   "demo_url": "https://www.youtube.com/watch?v=QAgBDwnvH3I",
      "frontend_infor": "Html5,CSS3,JavaScript,Google Maps API",      
      "backend_infor": "Php5,SQL,MySQL"  
    }
  
	
	 
  ]
}

//-----------------------------------------------------------------------insert data above

text = "";
var i;
for (i = 0; i < PHPProjectSPortfolio.PHPProjects.length; i++) {
    text +="<li><img src="+PHPProjectSPortfolio.PHPProjects[i].owner.avatar_url+"><br><br><h3 align=center>"+ PHPProjectSPortfolio.PHPProjects[i].project_name + "</h3><a href="+PHPProjectSPortfolio.PHPProjects[i].description+ ">Description</a> <a href="+PHPProjectSPortfolio.PHPProjects[i].demo_url+ ">Demo</a> <a href="+PHPProjectSPortfolio.PHPProjects[i].code_url + ">Code</a><br><br><br><br><br></li>";
}


document.getElementById("demo").innerHTML = "<ol>"+text+"</ol>";
