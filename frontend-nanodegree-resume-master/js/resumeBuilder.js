/*
Your code to build the resume will go here.
 */


var bio = {
	"name": "Nicole Heisler",
	"role": "Dreamer, Nutritionist, Dancer, & Aspiring Web Developer",
	"contacts": {
		"email": "nicole.heisler@gmail.com",
		"location": "New Jersey",
		"github": "Nkat88"
	},
	"biopic": "images/me.jpg",
	"welcomeMessage": "Welcome to my resume :) <br> I have an eclectic mix of education, jobs, and interests. <br> Enjoy!",
	"skills": ["Ballroom Dancing", " Juggling", " Blowing Bubbles", "Listening", "Rollerblading", "Untying Knots", "Day Dreaming"]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#titleBox").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#titleBox").append(formattedRole);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMsg);

	var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", "name").replace("%data%", bio.name);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedContactInfo = (formattedContactGeneric + formattedEmail + formattedLocation + formattedGithub);
	$("#topContacts").append(formattedContactInfo);
	$("#footerContacts").append(formattedContactInfo);

	if (bio.skills.length > 0) {
		$("#skillsBox").append(HTMLskillsStart);
		for (let skill of bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		}
	}
};

var work = {
	"jobs": [
		{
			"title": "Project Manager/Research Analyst",
			"employer": "Amerlux",
			"location": "Oakland, NJ",
			"dates": "2013 - Present",
			"description": "Support the sales team, handle commission inquiries, and generate monthly financial reports using excel.",
			"link": "http://www.amerlux.com"
		},
		{
			"title": "Nutrition Assistant",
			"employer": "Thyroid Diet Coach",
			"location": "Brooklyn, NY",
			"dates": "2012 - 2013",
			"description": "Created meal plans for clients, researched and wrote health-related articles, created content (e-books, handouts, etc.), and edited, proofread and optimized website posts for SEO.",
			"link": "http://www.thyroiddietcoach.com"
		},
		{
			"title": "Curative Specialist",
			"employer": "TitleVest",
			"location": "New York City, NY",
			"dates": "2012",
			"description": "Analyzed Title Reports, contacted clients for pertinent information, and made decisions to clear reports based on acceptable risk levels.",
			"link": "http://www.titlevest.com"
		},
		{
			"title": "Dietetic Technician",
			"employer": "Parker Jewish Institute for Healthcare and Rehabilitation",
			"location": "Long Island, NY",
			"dates": "2011",
			"description": "Ensured patients received food in accordance with their dietary restrictions and entered patient food preferences into Gerimenu (nutrition software).",
			"link": "http://www.parkerinstitute.org"
		},
		{
			"title": "Administrative Assistant",
			"employer": "New York University",
			"location": "New York City, NY",
			"dates": "2010 - 2011",
			"description": "Assisted the Director in editing the Journal 'Topics in Clinical Nutrition', submitted expense reimbursement for professors, tallied class evaluations, and created excel spreadsheets for various projects.",
			"link": "http://www.nyu.edu"
		}
	]
};

work.display = function() {
	for (let job of work.jobs) {
		//create new div for work
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		if (job.link) {
			formattedEmployer = formattedEmployer.replace("%link%", job.link);
		} else {
			formattedEmployer = formattedEmployer.replace("%link%", "#");
		}
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	}
};


var education = {
	"schools": [
		{
			"name": "New York University",
			"location": "New York City, NY",
			"degree": "B.S.",
			"major": ["Nutrition & Dietetics"],
			"dates": "2009 - 2011",
			"url": "http://www.nyu.edu"
		},
		{
			"name": "Rhode Island College",
			"location": "Providence, RI",
			"degree": "N/A",
			"major": ["Finance"],
			"dates": "2006 - 2009",
			"url": "http://www.ric.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"dates": "2015 - Present",
			"url": "https://www.udacity.com/"
		},
		{
			"title": "Advanced Level Microsoft Excel",
			"school": "ONLC Training",
			"dates": "2015",
			"url": "https://www.onlc.com/"
		}
	],
};

education.display = function() {
	//create new div for education
	$("#education").append(HTMLschoolStart);
	for (let school of education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", school.name);
		if (school.url) {
			formattedName = formattedName.replace("%link%", school.url);
		} else {
			formattedName = formattedName.replace("%link%", "#");
		}

		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedLocation);

		if (school.major.length > 0) {
			for (let major of school.major) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", major);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	$(".education-entry:last").append(HTMLonlineClasses);
	for (let course of education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("#", course.url).replace("%data%", course.url);
		$(".education-entry:last").append(formattedURL);
	}
};

var projects = {
	"projects": [
		{
			"title": "Create a Movie Website",
			"dates": "2016",
			"description": "Using Python, I created a data structure to store a list of my favorite movies, their posters, and a URL to the movie trailer. I used my code to generate a static web page where visitors can browse movies and watch the trailers.",
			"images": [
				"images/movie_website_image.png",
				"images/movie_website_info_image.png",
				"images/movie_website_trailer_image.png"
				],
			"url": "movie_website/fresh_tomatoes.html"
		},
		{
			"title": "Code Your Own Quiz",
			"dates": "2016",
			"description": "Using Python, I built a fill-in-the-blanks style quiz.",
			"images": [
				"images/code_quiz_project_image.png",
				"images/code_quiz_project_image2.png"
			]
		},
		{
			"title": "Make a Web Page",
			"dates": "2016",
			"description": "Using HTML and CSS, I created a website showcasing my notes from the Intro to Programming Nanodegree.",
			"images": ["images/create_website_image.png"],
			"url": "stage1project/Stage1_Project_Nicole.html"
		}
	]
};

projects.display = function() {
	for (let project of projects.projects) {
		//create new div for projects
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		//console.log(project.link);
		if (project.url) {
			formattedTitle = formattedTitle.replace("%link%", project.url);
		} else {
			formattedTitle = formattedTitle.replace("%link%", "#");
		}
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);

		for (let image of project.images) {
			var formattedImage = HTMLprojectImage.replace("%data%", image);
			$(".project-entry:last").append(formattedImage);
		}
	}
};

bio.display();
education.display();
work.display();
projects.display();

//append google map to the page
$("#mapDiv").append(googleMap);
