// Udacity - Resume Project -->

/*
This is empty on purpose! Your code to build the resume will go here.
 */

$(function(){
	var model = {
		init: {
			bio: {
			 	"name": "Li Wang",
			 	"role": "Web Developer", "welcomeMsg":"Build Applications And Make A Difference!",
			 	"contacts": {
			 		"email": "wangxbl56@gmail.com",
			 		"github": "llwang8",
			 		"codepen": "http://codepen.io/llwang8/",
			 		"twitter": "@Lwang2015",
			 		"location": "Princeton, NJ"
			 	},
			 	"skills": ["JavaScript", "jQuery", "React",  "AngularJS",  "Ruby on Rails", "SQL", "PostgreSQL",  "MongoDB", "HTML", "CSS", "Bootstrap"]
	 		},

	 		work: {
				"jobs": [
					{
						"employer": "Inlingua Princeton",
						"title": "Voice Talent and Translator",
						"location": "Princeton, NJ",
						"dates": "2006-2015",
						"description": "Record Chinese and verify scripts for clinical trial projects conducted in China. <br>Translator for public schools to help immigrant families."
					},
					{
						"employer": "CherryValley Studio",
						"title": "Founder",
						"location": "Princeton, NJ",
						"dates": "2002-2015",
						"description": "Operated studio to provide comprehensive quality DVD services to businesses and families. <br>Managed all business aspects including accounting, taxation, marketing and website."
					},
					{
						"employer": "C&A and Associates",
						"title": "Associate Programmer",
						"location": "Somerville, NJ",
						"dates": "2000-2001",
						"description": "Using ASP, Javascript, SQL, HTML/DHTML, CSS, Visual  Interdev to participate in the development PPM (people profile management), <br>build Essistme (v1) application, customize CNCv1 (news engine) for various clients ."
					},
					{
						"employer": "PILLSBURY, MADISON & SUTRO LLP",
						"title": "Financial Analyst",
						"location": "San Francisco, CA",
						"dates": "1998",
						"description": "Management reporting, forecasting, budgeting and financial analysis."
					},
					{
						"employer": "Beckman Coulter",
						"title": "Financial Analyst",
						"location": "Palo Alto, CA",
						"dates": "1996-1998",
						"description": "Management reporting, forecasting, budgeting and analysis."
					},
					{
						"employer": "Linus Pauling Institute",
						"title": "Controller",
						"location": "Palo Alto, CA",
						"dates": "1995-1996",
						"description": "Management reporting, budgeting, analysis, accounting, taxation and purchasing."
					}

				]

			},

			projects: {
				"projs": [
					{
						"title": "Pomodoro Clock",
						"dates": "July 2016",
						"description": "I built an interactive Pomodoro Clock with JavaScript, jQuery plugin, HTML and CSS. <br><br>User can start a default 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed and reset itself to break setting. User can change the setting of the clock for user\'s next pomodoro and customize the length of each pomodoro by clicking \"-\" and \"+\". User can click the clock face to start / pause the clock.",
						"link": "https://llwang8.github.io/freecodecamp-pomodoroClock/",
						"images":[]
					},
					{
						"title": "Javascript Calculator",
						"dates": "June 2016",
						"description": "I built an interactive JavaScript Calculator with jQuery, HTML and CSS. <br><br>User can add, subtract, multiply, divide, percentage two numbers, clear the input field with a clear button, and keep chaining mathematical operations together until user hit the equal button, and the calculator will give the correct output.",
						"link": "http://codepen.io/llwang8/pen/LkZgYw",
						"images":[]
					},
					{
						"title": "Building a Serverless YouTube clone - ServerlessConf workshop",
						"dates": "May 2016",
						"description": "I built a classic arcade game - frogger utilizing JavaScript’s object oriented programming features. I wrote eloquently designed classes to explore a variety of ways that inheritance and delegation can be used to create well-architected and performant applications.",
						"link": "",
						"images":[]
					},
					{
						"title": "Frogger Arcade Game",
						"dates": "March 2016",
						"description": "I built a classic arcade game - frogger utilizing JavaScript’s object oriented programming features. I wrote eloquently designed classes to explore a variety of ways that inheritance and delegation can be used to create well-architected and performant applications.",
						"link": "https://llwang8.github.io/Udacity-frontend-p3-arcade-game-master/",
						"images":[]
					},
					{
						"title": "The Local Weather App",
						"dates": "March 2016",
						"description": "I built the The Local Weather App using JavaScript and Open Weather API.  Users can see local weather in my current location and see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather, and push a button to toggle between Fahrenheit and Celsius.",
						"link": "http://codepen.io/llwang8/pen/grOerO",
						"images":[]
					},
					{
						"title": "Infinite Web Design Studio",
						"dates": "2016",
						"description": "I built my home page using JavaScript, jQuery, HTML, CSS, Bootstrap.   I had inspirations from working on projects from free code camp and Udacity.  It is a online showcase of my projects.",
						"link": "http://codepen.io/llwang8/pen/dGgeNN",
						"images":[]
					},
					{
						"title": "Random Quote Machine",
						"dates": "2016",
						"description": "I built this responsive quote machine using JavaScript, jQuery, HTML, CSS.  It shows new quote together with page style changed when \"new quote\" button is clicked.  It can share quote via twitter or Facebook.  Most of the quotes come from http://brainyquote.com.",
						"link": "http://codepen.io/llwang8/pen/QyJNBj",
						"images":[]
					},
					{
						"title": "My Online Interactive Resume",
						"dates": "2016",
						"description": "I developed my online resume using JavaScript, jQuery, JSON, HTML, CSS, Bootstrap and Google Map JavaScript Api. This is  an interactive resume application that can read my resume content from a JSON file and dynamically display resume JSON content within a built template.",
						"link": "https://llwang8.github.io/Udacity-frontend-p2-interactiveResume",
						"images":[]
					},
					{
						"title": "Ruby Rampup Projects",
						"dates": "2015",
						"description": "Blackjack Game, Game Of Life, League Point Calculator, NYC Restaurant Health Check.",
						"link": "",
						"images":[]
					},
					{
						"title": "ResourcesXchange",
						"dates": "2015",
						"description": "Rails app - Follow Michael Hartl's ruby on rails tutorial and build a Twitter clone in rails plus more add-on features.",
						"link": "",
						"images":["images/ResourcesXchange.png"]
					},
					{
						"title": "Send Twilio Message",
						"dates": "2015",
						"description": "Rails app - Use web interface to send twilio message to pre-certify cell number.",
						"link": "",
						"images":[]
					},
					{
						"title": "Movie Store",
						"dates": "2015",
						"description": "Rails app - Online Movie Store using Foundation for responsive page design, Redit for shopping cart tracking, Raintree to accept payments, Ransack for advance search.",
						"link": "",
						"images":["images/MovieStore.png"]
					},
					{
						"title": "Simple Web Blog",
						"dates": "2015",
						"description": "Rails app - Web blog Using MVC (Model, View, Controller) and RESTful design to perform CRUD operations connectting web interface with SQL database.",
						"link": "",
						"images":[]
					}

				]
			},

			education: {
				"schools": [
					{
					"name": "Udacity.com",
					"location": "San Francisco, CA",
					"degree": "Nanodegree",
					"major": "Web Development",
					"dates": "December 2015 to Present",
					"url": "https://www.udacity.com/nanodegree"
				},
				{
					"name": "Startup Institute",
					"location": "New York, NY",
					"degree": "Certificate of Achievement",
					"major": "Web Development",
					"dates": "October to December 2015",
					"url": "https://www.startupinstitute.com"
				},
				{
					"name": "Chubb Institute",
					"location": "Islin, NJ",
					"degree": "Certificate of Achievement",
					"major": "Programming and Web Development",
					"dates": "August to October 1999",
					"url": "http://www.chubb-computer-institute.org/index.html"
				},
				{
					"name": "Bryant University",
					"location": "Smithfield, RI",
					"degree": "MBA",
					"major": "Accounting",
					"dates": "1992-1993",
					"url": "http://www.bryant.edu"
				},
				{
					"name": "Nankai University",
					"location": "Tianjing, P.R. China",
					"degree": "B.S.",
					"major": "Biology",
					"dates": "1984-1988",
					"url": "http://www.nankai.edu.cn"
				}
				],

				"onlineClasses": [
					{
						"title": "You, Me & SVG",
						"school": "W3School.com",
						"dates": "July 2016",
						"url": "https://www.codeschool.com/courses/you-me-svg"
					},
					{
						"title": "Staying Sharp with Angular.js",
						"school": "codeschool.com",
						"dates": "June 2016",
						"url": "https://www.codeschool.com/courses/staying-sharp-with-angular-js"
					},
					{
						"title": "Powering Up with React",
						"school": "codeschool.com",
						"dates": "May 2016",
						"url": "https://www.codeschool.com/courses/powering-up-with-react"
					},
					{
						"title": "The Magical Marvels of MongoDB",
						"school": "codeschool.com",
						"dates": "April 2016",
						"url": "https://www.codeschool.com/courses/the-magical-marvels-of-mongodb"
					},

					{
						"title": "JQuery: The Return Flight",
						"school": "codeschool",
						"dates": "March 2016",
						"url": "https://www.codeschool.com/courses/jquery-the-return-flight"
					},
					{
						"title": "JavaScript",
						"school": "ES2015: The Shape of JavaScript to Come",
						"dates": "March 2016",
						"url": "https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come"
					},
					{
						"title": "Object-Oriented JavaScript",
						"school": "Udacity.com",
						"dates": "February 2016",
						"url": "https://www.udacity.com/courses/ud015"
					},
					{
						"title": "Responsive Images",
						"school": "Udacity.com",
						"dates": "February 2016",
						"url": "https://www.udacity.com/courses/ud882"
					},
					{
						"title": "Responsive Web Design Fundamental",
						"school": "Udacity.com",
						"dates": "February 2016",
						"url": "https://www.udacity.com/courses/ud893"
					},
					{
						"title": "JavaScript Basics - Resume Project",
						"school": "Udacity.com",
						"dates": "January 2016",
						"url": "https://www.udacity.com/courses/ud804"
					},
					{
						"title": "SQL Query",
						"school": "Vertabelo.com",
						"dates": "January 2016",
						"url": "https://academy.vertabelo.com/course/sql-queries"
					},
					{
						"title": "Ruby",
						"school": "RubyMonk.com",
						"dates": "October 2015 to January 2016",
						"url": "https://rubymonk.com"
					}


				]

			},


		}
	};

	var view = {
		init: {
			this.render.displayBio();
			//this.render.displayWork();
			//this.render.displayProjects();
			//this.render.displayEducation();
			//this.render.displayFooter();
		},

		render: {
			displayBio: function(){
				 var name = octopus.inName(model.bio.name);
				 var HTMLheaderName = HTMLheaderName.replace("%data%", name);
				 var HTMLheaderRole = HTMLheaderRole.replace("%data%", model.bio.role);
				 $("#header").prepend(HTMLheaderRole);
				 $("#header").prepend(HTMLheaderName);

				 $("#topContacts").append(HTMLemail.replace("%data%", model.bio.contacts.email));
				 $("#topContacts").append(HTMLgithub.replace("%data%", model.bio.contacts.github));
				 $("#topContacts").append(HTMLtwitter.replace("%data%", model.bio.contacts.twitter));
				 $("#topContacts").append(HTMLlocation.replace("%data%", model.bio.contacts.location));
				 $("#header").append(HTMLbioPic.replace("%data%", "images/selfie4.jpg"));
				 $("#header").append(HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMsg));

				var internationalizedButton = '<input type="button" value="Internationalize Name" onClick=inName(HTMLheaderName)>';
				$("#main").append(internationalizedButton);


				if (model.bio.skills != []) {
				 	$("#header").append(HTMLskillsStart);

				 	for (var i = 0, len = model.bio.skills.length; i < len; i ++) {
				 		$("#skills").append(HTMLskills.replace("%data%", model.bio.skills[i]));
				 		HTMLskills = HTMLskills.replace(model.bio.skills[i], "%data%");
				 	}
				}
			},

			displayWork: function() {
				if (model.work.jobs.length > 1) {
					for (job in work.jobs) {
						$("#workExperience").append(HTMLworkStart);
						var formattedEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[job].employer);
						var formattedTitle = HTMLworkTitle.replace("%data%", model.work.jobs[job].title);
						var formattedEmployerTitle =  formattedEmployer + " " + formattedTitle;
						$(".work-entry:last").append(formattedEmployerTitle);
						$(".work-entry:last").append(HTMLworkDates.replace("%data%", model.work.jobs[job].dates));
						$(".work-entry:last").append(HTMLworkLocation.replace("%data%", model.work.jobs[job].location));
						$(".work-entry:last").append(HTMLworkDescription.replace("%data%", model.work.jobs[job].description));
						//HTMLworkEmployer.replace(work.jobs[job].emppoyer, "%data%");
						//HTMLworkTitle.replace(work.jobs[job].title, "%data%");
					}
				}
			},

			displayProjects: function() {
				$("#projects").append(HTMLprojectStart);
				for (var proj in projects.projs) {
					$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", model.projects.projs[proj].title));
					$(".project-entry:last").append(HTMLprojectDates.replace("%data%", model.projects.projs[proj].dates));
					$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", model.projects.projs[proj].description));
					if (projects.projs[proj].images.length > 1) {
						for (img in projects.proj[proj].images) {
						 $(".project-entry:last").append(HTMLprojectImage.replace("%data%", model.projects.projs[proj].images[img]));
						}
					}
				}
			},

			displayEducation = function() {
				$("#education").append(HTMLschoolStart);
				for (var sch in education.schools) {
					HTMLschoolName = HTMLschoolName.replace("%data%", model.education.schools[sch].name);
					HTMLschoolName = HTMLschoolName.replace("#", model.education.schools[sch].url);

					$(".education-entry:last").append(HTMLschoolName.concat(HTMLschoolDegree.replace("%data%", model.education.schools[sch].degree)));
					$(".education-entry:last").append(HTMLschoolDates.replace("%data%", model.education.schools[sch].dates));
					$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", model.education.schools[sch].location));
					$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", model.education.schools[sch].major));
					$(".education-entry:last").append('<br>');
					HTMLschoolName = HTMLschoolName.replace(model.education.schools[sch].name, "%data%");
					HTMLschoolName = HTMLschoolName.replace(model.education.schools[sch].url, "#");
				}

				$("#online").append(HTMLonlineClasses);
				for (var online in education.onlineClasses) {
					HTMLonlineTitle = HTMLonlineTitle.replace("%data%", model.education.onlineClasses[online].title);
					HTMLonlineTitle = HTMLonlineTitle.replace("#", model.education.onlineClasses[online].url);
					$(".online-entry:last").append(HTMLonlineTitle.concat(HTMLonlineSchool.replace("%data%", model.education.onlineClasses[online].school)));
					$(".online-entry:last").append(HTMLonlineDates.replace("%data%", model.education.onlineClasses[online].dates));
					HTMLonlineTitle = HTMLonlineTitle.replace(model.education.onlineClasses[online].title, "%data%");
					HTMLonlineTitle = HTMLonlineTitle.replace(model.education.onlineClasses[online].url, "#");

				}
			},

			displayFooter: function(){
				$("#mapDiv").append(googleMap);
				$("#footerContacts").append(HTMLemail.replace("%data%", model.bio.contacts.email));
				$("#footerContacts").append(HTMLgithub.replace("%data%", model.bio.contacts.github));
				$("#footerContacts").append(HTMLtwitter.replace("%data%", model.bio.contacts.twitter));
				$("#footerContacts").append(HTMLlocation.replace("%data%", model.bio.contacts.location));

			}

		}


	};

		var octopus = {
		init: {
			model.init();
			view.init();
		},

		inName: function(name){
			name = name.trim().split(" ");
			name[0]= name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
			name[1]= name[1].toUpperCase();
			HTMLheaderName = HTMLheaderName.replace(name[0] + " " + name[1]);
		}

	};

	octopus.init();

});








