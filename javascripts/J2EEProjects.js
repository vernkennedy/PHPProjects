var PHPProjectSPortfolio = 
//------------------------------------------insert/paste json data below
{ 
  "PHPProjects": [
    {  
	  "id":1,
      "project_name": "Facilities Maintainance Portal",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/378863_10150412548993267_1726019535_n-copy.jpg", 
      },           
      "description": "https://github.com/redguide/nodejs",      
      "code_url": "https://api.github.com/repos/redguide/nodejs",
	 "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "Html5,Html5 Drag and Drop API,CSS3,JavaScript,jQuery",      
      "backend_infor": "Php5,MySQL,MS Excel"    
    },
    {
		"id":2,
        "project_name": "Project Portfolio Tracker",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/340896_10150294808933267_508433853_o-copy-2.jpg", 
      },           
      "description": "https://github.com/redguide/nodejs",      
      "code_url": "https://api.github.com/repos/redguide/nodejs", 
	 "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "html",      
      "backend_infor": "mysql"  
    },
    {
		"id":3,
       "project_name": "Client Infor System",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/4.jpg", 
      },           
      "description": "https://github.com/redguide/nodejs",      
      "code_url": "https://api.github.com/repos/redguide/nodejs", 
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "html",      
      "backend_infor": "mysql"  
    },
	
	 {
		"id":4,
       "project_name": "Spring Hibernate Calculator",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/starbacks-copy.jpg", 
      },           
      "description": "https://github.com/redguide/nodejs",      
      "code_url": "https://api.github.com/repos/redguide/nodejs", 
	  "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "html",      
      "backend_infor": "mysql"  
    },
  
    {
		"id":5,
      "project_name": "Struts Calculator",
      "owner": {       
        "avatar_url": "https://vzidana.files.wordpress.com/2014/12/1.jpg", 
      },           
      "description": "https://github.com/redguide/nodejs",      
      "code_url": "https://api.github.com/repos/redguide/nodejs",  
	   "demo_url": "https://www.youtube.com/watch?v=lJM2oFMoDkM",
      "frontend_infor": "html",      
      "backend_infor": "mysql"  
    }
  ]
}

//-----------------------------------------------------------------------insert data above

text = "";
var i;
for (i = 0; i < PHPProjectSPortfolio.PHPProjects.length; i++) {
    text +="<li><img src="+PHPProjectSPortfolio.PHPProjects[i].owner.avatar_url+"><br> <b>Project Name</b><br>"+ PHPProjectSPortfolio.PHPProjects[i].project_name + "<br><b>Description</b><br><a href="+PHPProjectSPortfolio.PHPProjects[i].description+ ">Description</a><br><b>Video Demo</b><br><a href="+PHPProjectSPortfolio.PHPProjects[i].demo_url+ ">Demo</a><br><b>Code Repository</b><br><a href="+PHPProjectSPortfolio.PHPProjects[i].code_url + ">Code</a><br><b>Front-End Technologies</b><br>"+PHPProjectSPortfolio.PHPProjects[i].frontend_infor + "<br><b> Back-End Technologies</b><br>"+PHPProjectSPortfolio.PHPProjects[i].backend_infor +"</li>";
}


document.getElementById("demo").innerHTML = "<ol>"+text+"</ol>";
