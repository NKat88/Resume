# Resume

/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Nicole",
	"role": "Web Developer",
	"contactInfo": {
		"email": "nicole.heisler@gmail.com",
		"location": "New Jersey",
		"github": "Nkat88"
	},
	"bioPicURL": "images/my_picture.jpg",
	"welcomeMsg": "Welcome to my awesome resume!",
	"skills": ["Dancing", " Juggling", " Blowing bubbles"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
};

var work = {
	"jobs": [
		{
			"title": "Project Manager/Research Analyst",
			"employer": "Amerlux",
			"location": "Oakland, NJ",
			"dates": "2013 - Present",
			"description": "Support the sales team, handle commission
				inquiries, and generate monthly financial
				reports using excel."
		},
		{
			"title": "Nutrition Assistant",
			"employer": "Thyroid Diet Coach",
			"location": "Brooklyn, NY",
			"dates": "2012 - 2013",
			"description": "Created meal plans for clients, researched and
				wrote health-related articles, created content
				(e-books, handouts, etc.), and edited, proofread
				and optimized website posts for SEO."
		},
		{
			"title": "Curative Specialist",
			"employer": "TitleVest",
			"location": "New York City, NY",
			"dates": "2012",
			"description": "Analyzed Title Reports, contacted clients for
				pertinent information, and made decisions to
				clear reports based on acceptable risk levels."
		},
		{
			"title": "Dietetic Technician",
			"employer": "Parker Jewish Institute for Healthcare and
				Rehabilitation",
			"location": "Long Island, NY",
			"dates": "2011",
			"description": "Ensured patients received food in accordance
				with their dietary restrictions and entered
				patient food preferences into Gerimenu
				(nutrition software)."
		},
		{
			"title": "Administrative Assistant",
			"employer": "New York University",
			"location": "New York City, NY",
			"dates": "2010 - 2011",
			"description": "Assisted the Director in editing the Journal
				'Topics in Clinical Nutrition', submitted
				expense reimbursement for professors, tallied
				class evaluations, and created excel
				spreadsheets for various projects."
		}
	]
};

for (jobs in work) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
	$("work-entry:last").append(formattedEmployer + formattedTitle);
};

var education = {
	"schools": [
		{
			"name": "New York University",
			"dates": "2009 - 2011",
			"location": "New York City, NY",
			"degree": "B.S.",
			"major": "Nutrition & Dietetics",
			"website": "www.nyu.edu"
		},
		{
			"name": "Rhode Island College",
			"dates": "2006 - 2009",
			"location": "Providence, RI",
			"degree": "N/A",
			"major": "Finance",
			"website": "www.ric.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"name": "Udacity",
			"dates": "2015 - Present",
			"degree": "nanodegree",
			"website": "https://www.udacity.com/"
		}
	],
	"training": [
		{
			"title": "Advanced Level Microsoft Excel",
			"name": "ONLC Training",
			"dates": "2015",
			"website": "https://www.onlc.com/"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Create a Movie Website",
			"dates": "2016",
			"description": "Using Python, I created a data structure to
				store a list of my favorite movies, their
				posters, and a URL to the movie trailer. I
				used my code to generate a static web page
				where visitors can browse movies and watch the
				trailers.",
			"image": ["movie_website_image.png", "movie_website_info_image.png",
			"movie_website_trailer_image.png"]
		},
		{
			"title": "Code Your Own Quiz",
			"dates": "2016",
			"description": "Using Python, I built a fill-in-the-blanks
				style quiz.",
			"image": [
				"code_quiz_project_image.png",
				"code_quiz_project_image2.png"
			]
		},
		{
			"title": "Make a Web Page",
			"dates": "2016",
			"description": "Using HTML and CSS, I created a website
				showcasing my notes from the Intro to
				Programming Nanodegree.",
			"image": "create_website_image.png"
		}
	]
};

//var leadership
