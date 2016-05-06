/*$("#main").append("radhika"); */

var bio={
	"name":"Radhika Jaju", 
	"role":"Front End Web Developer", 
	"contacts":{
		"mobile":"+91-860470367",
		"email":"jaju_radhika@gmail.com",
		"gitHub":"rjaju@gmail.com",
		"location":"Mumbai,India"
	},
	"WelcomeMessage":"Welcome to my online resume!!",
	"skills":["Learner","Observer","Awesome","Creative"],
	"bioPic":"images/fry.jpg"
};
bio.display=function(){
	var formattedHeaderRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedHeaderRole);
	var formattedHeaderName=HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedHeaderName);
	var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedbioGithub=HTMLgithub.replace("%data%",bio.contacts.gitHub);
	$("#topContacts").append(formattedbioGithub);
	var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	var formattedPic=HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").append(formattedPic);
	if(bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
};
bio.display();

var education={
	"schools":[{
		"name":"Study Hall",
		"location":"Lucknow,India",
		"degree":"12th",
		"majors":"physics, Chemistry, Mathematics",
		"dates":"20-04-2009"
	},
	{
		"name":"SRMCEM",
		"location":"Lucknow, India",
		"degree":"B.TECH",
		"majors":"Information Technology",
		"dates":"18-08-2011"
	}],
	"onlineCourses":[{
		"title":"udacity-Front End Developer",
		"school":"Google",
		"date":"17-01-2016",
		"url":"www.udacity.com"
	},
	{
		"title":"Hewlett Packard",
		"school":"HP",
		"date":"16-05-2014",
		"url":"www.hpes.com"
	}]
};
education.display=function(){
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName=HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedNameDegree=formattedName+formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);
		var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for(var onlinecourse in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[onlinecourse].title);
		var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[onlinecourse].school);
		var formattedTitleSchool=formattedTitle+formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		var formattedDate=HTMLonlineDates.replace("%data%",education.onlineCourses[onlinecourse].date);
		$(".education-entry:last").append(formattedDate);
		var formattedUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[onlinecourse].url);
		$(".education-entry:last").append(formattedUrl);
	}
};
education.display();

var work={
	"jobs":[{
		"employers":"SRDT pvt. ltd",
		"title":"Associate Software Developer",
		"dates":"01-07-2014",
		"description":"Coordinate with all team projects and monitor all product life cycle and prepare all specifications and perform tests on all configuration and installation.",
		"location":"Indira nagar, Lucknow, India"
		},
		{
		"employers":"HCL",
		"title":"Senior Software Developer",
		"dates":"05-02-2016",
		"description":"Works on problems of diverse scope where analysis of data requires evaluation of identifiable factors. Demonstrates good judgment in selecting methods and techniques for obtaining solutions. Networks with senior internal and external personnel in own area of expertise.",
		"location":"gomti nagar, Lucknow, India"
	}]
};
work.display=function(){
	for(var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employers);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").prepend(formattedLocation);
	}
};
work.display();

var projects={
	"proj":[{
		"title":"Marine Operations and Management System",
		"date":"12-02-2013",
		"description":"Marine Operations And Management System is a web application that maintains all the information about marines operations.In order to streamline activities and information flow, computerization on special tasks is most suited option.",
		"image":["images/moms1.jpg","images/moms2.jpg"]
		},
		{
		"title":"Credit Card Fraud Monitoring System",
		"date":"15-05-2014",
		"description":"You might not know it, but your credit card company is tracking your every move. Advances in how card providers and networks process massive amounts of data from card usage means they often alert consumers to potential fraud before consumers notice anything amiss.",
		"image" :["images/ccfds1.png","images/ccfds2.jpg"] 
		}]
};
projects.display=function(){
	for(var project in projects.proj){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.proj[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates=HTMLprojectDates.replace("%data%",projects.proj[project].date);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.proj[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.proj[project].image.length>0)
		{
			for(var images in projects.proj[project].image){
				formattedImages=HTMLprojectImage.replace("%data%",projects.proj[project].image[images]);
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
};
projects.display();

$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});

$("#mapDiv").append(googleMap);

var footer={
	"contacts":{
		"mobile":"+91-860470367",
		"email":"jaju_radhika@gmail.com",
		"gitHub":"rjaju@gmail.com",
		"location":"Mumbai,India"
	}
};

footer.display=function(){
	var formattedMobile=HTMLmobile.replace("%data%",footer.contacts.mobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail=HTMLemail.replace("%data%",footer.contacts.email);
	$("#footerContacts").append(formattedEmail);
	var formattedbioGithub=HTMLgithub.replace("%data%",footer.contacts.gitHub);
	$("#footerContacts").append(formattedbioGithub);
	var formattedLocation=HTMLlocation.replace("%data%",footer.contacts.location);
	$("#footerContacts").append(formattedLocation);
};
footer.display(); 

