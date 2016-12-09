// Whole-script strict mode syntax
"use strict";
var v = "Hi!  I'm a strict mode script!";

var bio = {
    "name": "Michael Reinhard",
    "role": "Data Scientist",
    "contacts": {
        "email": "michaelreinhard@me.com",
        "mobile": "312-000-0000",
        "github": "michaelreinhard",
        "location": "Chicago, Illinois"
    },
    "skills": ["Programming", "Teaching", "Jazz Guitar", "Japanese"],
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome!"
};



var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Forum Mentor/Grader",
        "location": "Chicago, Illinois",
        "dates": "2015-present",
        "description": "graded student code and answered questions"
    }, {
        "employer": "Benedictine University",
        "title": "Adjunct Professor",
        "location": "Chicago, Illinois",
        "dates": "2014-2015",
        "description": "taught courses in Law and Political Science"
    }, {
        "employer": "Millsaps College",
        "title": "Professor/Director of Public Management",
        "location": "Jackson, Mississippi",
        "dates": "2005-2014",
        "description": "Taught courses in Statistics, Organiztional Decision Making and Political Science"
    }, {
        "employer": "University of Republic of Korea at Busan",
        "title": "Visiting Professor",
        "location": "Busan, South Korea",
        "dates": "2013",
        "description": "Taught course in International Terrorism"
    }, {
        "employer": "Garjistan Univeristy",
        "title": "Guest Professor",
        "location": "Kabul, Afghanistan",
        "dates": "2012",
        "description": "Taught course on American politics and political science"
    }, {
        "employer": "American University of Central Asia",
        "title": "Fullbright Scholar",
        "location": "Bishkek, Kyrgyzstan",
        "dates": "2005",
        "description": "Taught courses on American politics and Organization Theory"
    }, {
        "employer": "Gettysburg College",
        "title": "Visting Professor",
        "location": "Gettysburg, Pennsylvania",
        "dates": "2004-2005",
        "description": "Taught courses in statistical methods and political science"
    }, {
        "employer": "University of Chicago",
        "title": "Grodzins Prize Lecturer",
        "location": "Chicago, Illinois",
        "dates": "2003-2004",
        "description": "Designed and taught courses in quantitative methods and political science"
    }, {
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
        "images": ["images/nyc_subway.png"]
    }, {
        "title": "Test of a Perceptual Phenomenon",
        "dates": "2016",
        "description": "Statistical test of differences in perception",
        "images": ["images/chopsticks.png"]
    }]
};

var education = {
    "schools": [{
        "name": "University of Chicago",
        "url": "http://www.uchicago.edu/",
        "degree": "Ph.D., M.A.",
        "dates": "1994-2004",
        "majors": ["Political Science"],
        "location": "Chicago, Illinois"
    }, {
        "name": "Antioch College",
        "url": "http://www.antioch.edu/",
        "degree": "B.A.",
        "dates": "1983-1985",
        "majors": ["Philosophy", "History"],
        "location": "Yellow-Springs, Ohio"
    }, {
        "name": "Antioch College: London Center",
        "url": "http://www.antioch.edu/",
        "degree": "",
        "dates": "1984",
        "majors": ["Philosophy", "History"],
        "location": "London, England"
    }, {
        "name": "University of North Texas",
        "url": "https://www.unt.edu/",
        "degree": "",
        "dates": "1982-1983",
        "majors": ["Jazz performance"],
        "location": "Denton, Texas"
    }, {
        "name": "Morehead State University",
        "url": "",
        "degree": "",
        "dates": "1980-1982",
        "majors": ["Jazz performance"],
        "location": "Morehead, Kentucky"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Nano Degree",
        "school": "Udacity",
        "dates": "11/2016-present",
        "url": "https://www.udacity.com"
    }, {
        "title": "Data Analyst Nano Degree",
        "school": "Udacity",
        "dates": "2015-present",
        "url": "https://www.udacity.com"
    }]
};


bio.display = function() {
    
    var data = "%data%";
    var role = bio.role;
    var formattedRole = HTMLheaderRole.replace(data, role);
    $("#header").prepend(formattedRole);

    var name = bio.name;
    var formattedName = HTMLheaderName.replace(data, name);
    $("#header").prepend(formattedName);

    var pic = bio.biopic;
    var formattedPic = HTMLbioPic.replace(data, pic);
    $("#header").append(formattedPic);

    var welcome = bio.welcomeMessage;
    var formattedWelcome = HTMLwelcomeMsg.replace(data, welcome);
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var skill_i = HTMLskills.replace(data, bio.skills[skill]);
        $("#skills").append(skill_i);
    }

    var location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace(data, location);
    // $("#topContacts, #footerContacts").append(formattedLocation);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace(data, mobile);
    // $("#topContacts, #footerContacts").append(formattedMobile);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace(data, email);
    // $("#topContacts, #footerContacts").append(formattedEmail);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace(data, github);
    

    $("#topContacts, #footerContacts").append(formattedLocation, formattedMobile, formattedEmail, formattedGithub);
};




bio.display();


projects.display = function() {
    $("#projects").append(HTMLprojectStart);

    for (var p = 0; p < projects.projects.length; p++) {
        console.log(p);

        var data = "%data%";
        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[p].title);
        var formattedDates = HTMLprojectDates.replace(data, projects.projects[p].dates);
        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[p].description);
        // var formattedImage = HTMLprojectImage.replace(data, projects.projects[p].images);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        // var formattedImage = HTMLprojectImage.replace(data, projects.projects[p].images);
        // console.log(formattedImage);
        // var a = projects.projects[p].images;

        projects.projects[p].images.forEach(function(image) {
            console.log(image);
            var formattedImage = HTMLprojectImage.replace(data, image);
            $(".project-entry:last").append(formattedImage); 
        });
        // $(".project-entry:last").append(formattedImage);
    }
};


projects.display();

work.display = function() {

    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job_i) {

            var data = "%data%";
            var formattedEmployer = HTMLworkEmployer.replace(data, job_i.employer);
            var formattedTitle = HTMLworkTitle.replace(data, job_i.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace(data, job_i.dates);
            $(".work-entry").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace(data, job_i.location);
            $(".work-entry").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace(data, job_i.description);
            $(".work-entry").append(formattedDescription);
        });
    } else {
        console.log("no jobs");
    }
};

work.display();

education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school_i) {

        var data = "%data%";
        var formattedSchool = HTMLschoolName.replace(data, school_i.name);
        $(".education-entry").append(formattedSchool);

        if (school_i.degree === "") {
            console.log("no degree");
        } else {
            var formattedDegree = HTMLschoolDegree.replace(data, school_i.degree);
            $(".education-entry").append(formattedDegree);
        }

        var formattedDates = HTMLschoolDates.replace(data, school_i.dates);
        $(".education-entry").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace(data, school_i.location);
        $(".education-entry").append(formattedLocation);

        for (var major = 0; major < school_i.majors.length; major++) {
            var formattedMajor = HTMLschoolMajor.replace(data, school_i.majors[major]);
            $(".education-entry").append(formattedMajor);
        }
    });


    $(".education-entry").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course_i) {
        // title, school, dates, url
        var data = "%data%";
        var formattedTitle = HTMLonlineTitle.replace(data, course_i.title);
        $(".education-entry").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace(data, course_i.school);
        $(".education-entry").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace(data, course_i.dates);
        $(".education-entry").append(formattedDates);
        var formattedURL = HTMLonlineURL.replace(data, course_i.url);
        $(".education-entry").append(formattedURL);

    });
};

education.display();



$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);

