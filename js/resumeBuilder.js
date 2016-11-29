

var bio = {
	"name": "Michael Reinhard",
	"role": "Data Scientist",
	"contacts": {
		"email": "michaelreinhard@me.com",
		"mobile": "312-000-0000",
		"github": "michaelreinhard",
		"location": "Chicago, Illinois"
	},
	"skills": ["Sumo Wrestling","Programming","Teaching","Jazz Guitar"],
	"biopic": "images/me.jpg",
	"welcomeMessage": "Welcome, One and All!"
};



var work = {
	"jobs" : [{
		"employer": "Udacity",
		"title": "Forum Mentor/Grader",
		"location": "Chicago, Illinois",
		"dates": "2015-present",
		"description": "graded student code and answered questions"
	},{
		"employer": "Benedictine University",
		"title": "Adjunct Professor",
		"location": "Chicago, Illinois",
		"dates": "2014-2015",
		"description": "taught courses in Law and Political Science"
	},{
		"employer": "Millsaps College",
		"title": "Professor/Director of Public Management",
		"location": "Jackson, Mississippi",
		"dates": "2005-2014",
		"description": "Taught courses in Statistics, Organiztional Decision Making and Political Science"
	},{
		"employer": "University of Republic of Korea at Busan",
		"title": "Visiting Professor",
		"location": "Busan, South Korea",
		"dates": "2013",
		"description": "Taught course in International Terrorism"
	},{
		"employer": "Garjistan Univeristy",
		"title": "Guest Professor",
		"location": "Kabul, Afghanistan",
		"dates": "2012",
		"description": "Taught course on American politics and political science"
	},{
		"employer": "American University of Central Asia",
		"title": "Fullbright Scholar",
		"location": "Bishkek, Kyrgyzstan",
		"dates": "2005",
		"description": "Taught courses on American politics and Organization Theory"
	},{
		"employer": "Gettysburg College",
		"title": "Visting Professor",
		"location": "Gettysburg, Pennsylvania",
		"dates": "2004-2005",
		"description": "Taught courses in statistical methods and political science"
	},{
		"employer": "University of Chicago",
		"title": "Grodzins Prize Lecturer",
		"location": "Chicago, Illinois",
		"dates": "2003-2004",
		"description": "Designed and taught courses in quantitative methods and political science"
	},{
		"employer": "Interac",
		"title": "English as a Second Language Instructor",
		"location": "Tokyo, Japan",
		"dates": "1987-2001",
		"description": "Taught ESL courses to business people"
	}]
};

var projects = {
	"projects": [{
		"title": "Comin' in Out of the Rain: Predicting Hourly NYC Subway Ridership",
		"dates": "2015",
		"description": "Analysis using Python of one year of New York Subway use predicting hourly ridership by day and hour",
		"images": ["https://github.com/michaelreinhard/nano/projects/1"]
	}, {
		"title": "Religious Demographics in Middle-America: Analysis of Religious Institutions in OSM Data for Dayton, Ohio",
		"dates": "2016",
		"description": "",
		"images": ["https://github.com/michaelreinhard/nano/projects/2"]
	}]
}

var education = {
	"schools": [{
		"name": "University of Chicago",
		"url": "http://www.uchicago.edu/",
		"degree": "Ph.D.",
		"dates": "1994-2004",
		"majors": ["Political Science"],
		"location": "Chicago, Illinois"
	},{
		"name": "Antioch College",
		"url": "http://www.antioch.edu/",
		"degree": "B.A.",
		"dates": "1983-1985",
		"majors": ["Philosophy", "History"],
		"location": "Yellow-Springs, Ohio"
	},{
		"name": "Antioch College London Center",
		"url": "http://www.antioch.edu/",
		"degree": "B.A.",
		"dates": "1984",
		"majors": ["Philosophy", "History"],
		"location": "London, England"
	},{
		"name": "University of North Texas",
		"url": "https://www.unt.edu/",
		"degree": "",
		"dates": "1982-1983",
		"majors": ["Jazz performance"],
		"location": "Denton, Texas"
	},{
		"name": "Morehead State University",
		"url": "",
		"degree": "",
		"dates": "1982-1983",
		"majors": ["Jazz performance"],
		"location": "Morehead, Kentucky"
	}],
	"onlineCourses": [{
		"title": "Intro to Programming Nano Degree",
		"school": "Udacity",
		"dates": "11/2016-present",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	}, {
		"title": "Data Analyst Nano Degree",
		"school": "Udacity",
		"dates": "2015-present",
		"url": "https://www.udacity.com/course/data-analyst-nanodegree--nd002?v=a4"
	}]
}

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedName);

var pic = bio.biopic;
formattedPic = HTMLbioPic.replace("%data%",pic);
$("#header").append(formattedPic);


var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[0].title);
var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[0].dates);
var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[0].description);
var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[0].images[0])

$("#projects").append(HTMLprojectStart);
$(".project-entry:last").append(formattedProjectTitle);
$(".project-entry:last").append(formattedDates);
$(".project-entry:last").append(formattedDescription);
$(".project-entry:last").append(formattedImage);


 
if(bio.skills.length > 0) {
 	$("#header").append(HTMLskillsStart);
	skill0 = HTMLskills.replace("%data%",bio.skills[0]);
	skill1 = HTMLskills.replace("%data%",bio.skills[1]);
	skill2 = HTMLskills.replace("%data%",bio.skills[2]);
	skill3 = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append( skill1 , skill2 , skill3 , skill0);
} else {
	console.log("didn't have any skills")
}



$("#workExperience").append(HTMLworkStart);

work.jobs.forEach(function(i) {
	formattedEmployer = HTMLworkEmployer.replace("%data%",i.employer);
	formattedTitle = HTMLworkTitle.replace("%data%", i.title);
	formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry").append(formattedEmployerTitle);
	formattedDates = HTMLworkDates.replace("%data%",i.dates);
	$(".work-entry").append(formattedDates);
	formattedLocation = HTMLworkLocation.replace("%data%",i.location);
	$(".work-entry").append(formattedLocation);
	formattedDescription = HTMLworkDescription.replace("%data%",i.description);
	$(".work-entry").append(formattedDescription);

});



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);

