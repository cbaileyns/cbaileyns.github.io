var displayMenu = function() {
	/*I wanted to differentiate my resume by adding a menu at the top. I didn't want viewers to have to scroll down
	the page, similar to a normal resume where it is just the one page. So I added buttons/divs that allowed users to 
	click to other sections. Here I declare the desired sections in the "section" var. Then, by using the amount
	of items in the sections var and the width of the parent div container... I determine how wide each button div should 
	be when I append it to my resume*/
	var sections = ["About Me",'Work Experience',"Projects","Education","Interest & Skills", "Other"];
	var sLength = sections.length;
	var pWidth = $("#menu").css("width");
	var swidth = parseInt(pWidth) / sLength;
	for (section in sections) {
 		var menuItem = document.createElement("div");
		$("#menu").append(menuItem);
		$(menuItem).attr("id","menu-item").text(sections[section]).css("width", swidth + "px");
	}
};

displayMenu();


var displayMyFace = function() {
	/*image that gets appended in the left column of my resume*/
	var picUrl = "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/005/099/2e8/30b8f11.jpg"
	var picDiv = '<div id = "pic-holder">%cntnt%</div>'
	var pic = HTMLbioPic.replace("%data%", picUrl);
	var picfin = picDiv.replace("%cntnt%",pic)
	$("#left").prepend(picfin);
};

displayMyFace();


/*I am leaving these outside of the JSON, even thought the contactInfo JSON references all of them. I represent
skills differently than in the template provided so I felt that they should be on their own*/

var skills = ["Python", "R", "Java", "SQL", "HTML", "CSS", "JavaScript"];
var softSkills = ["Teamwork", "Communication", "Project Management", "Leadership"];
var chartSkills = ["d3.js"];
var educSkills = ["Time Management","Multi-tasking","Goal Prioritization"];


/*these next five functions all display skills. For each section of my resume, I wanted different skills to show up. 
TO do this, I add a div container on the left hand side (skills-holder) and then append each skill div to it. Later on,
you'll see that each of these functions gets called at different occassions!*/

var displaySkills = function() {
	/*takes the skills holder div parent and appends it to left. Then each skills in the above arrays gets appended 
	as its own div to the skills holder div. this allows me to easily remove skills*/
	$("#skills-holder").prepend(HTMLskillsStart);
	for (var q = 0; q < skills.length; q++) {
		var sk = HTMLskills.replace("%data%", skills[q]);
		$("#skills-holder").append(sk);
	}
	for (var q = 0; q < educSkills.length; q++) {
		var sk = HTMLskills.replace("%data%", educSkills[q]);
		$("#skills-holder").append(sk);
	}
	for (var q = 0; q < softSkills.length; q++) {
		var sk = HTMLskills.replace("%data%", softSkills[q]);
		$("#skills-holder").append(sk);
	}
	for (var q = 0; q < chartSkills.length; q++) {
		var sk = HTMLskills.replace("%data%", chartSkills[q]);
		$("#skills-holder").append(sk);
	}
}


var displaySkillsProjects = function() {
	/*only displays skills relevant to my online project work*/
	$("#skills-holder").prepend(HTMLskillsStart);
	for (var q = 0; q < skills.length; q++) {
		var sk = HTMLskills.replace("%data%", skills[q]);
		$("#skills-holder").append(sk);
	}
}

var displaySkillsEducation = function() {
	/*only displays the skills that related to my education*/
	$("#skills-holder").prepend(HTMLskillsStart);
	for (var q = 0; q < educSkills.length; q++) {
		var sk = HTMLskills.replace("%data%", educSkills[q]);
		$("#skills-holder").append(sk);
	}
}

var displaySkillsSoft = function() {
	/*only displays career related skills*/
	$("#skills-holder").prepend(HTMLskillsStart);
	for (var q = 0; q < softSkills.length; q++) {
		var sk = HTMLskills.replace("%data%", softSkills[q]);
		$("#skills-holder").append(sk);
	}
}

var displaySkillsChart = function() {
	/*displays the skills required to make my skill chart*/
	$("#skills-holder").prepend(HTMLskillsStart);
	for (var q = 0; q < chartSkills.length; q++) {
		var sk = HTMLskills.replace("%data%", chartSkills[q]);
		$("#skills-holder").append(sk);
	}
}
	
displaySkillsProjects();


/*this is my bio JSON. I deviated a bit from template. sorry udacity :( */
var contactInfo = {};

contactInfo.name = "Christopher Bailey"
contactInfo.role = "Data Scientist"
contactInfo.welcomemessage = "I'm Christopher Bailey, but please call me Chris. Currently, I work in Risk Management at The Bank of Nova Scotia in Toronto. Like many Canadians, my first passion is hockey and for 9 months of the year you can find me ardently supporting the Montreal Canadiens. During other parts of the year you can find me following other sports, or travelling, or enjoying a coffee at one of Toronto's cafes. I also volunteer with Big Brothers Big Sisters of Toronto as a Big Brother every weekend.<br></br>In May of 2014, a discussion at a wedding helped me find love of another sort. Data Science and Machine Learning. Fast forward through eights months, and a variety of online courses, and I'm now engaged in a series of projects called a Nanodegree. I still have much to learn, but learning is one of the things I'm best at. While currently located in Toronto, Canada, I hope to soon make the jump to Silicon Valley and bring my host of skills and experience with me."
contactInfo.mobile = "647-405-4406"
contactInfo.email = "<a href='mailto:christopher.charles.bailey@gmail.com'>christopher.charles.bailey@gmail.com</a>"
contactInfo.github = "<a href='http://www.github.com/cbaileyns'>cbaileyns</a>"
contactInfo.kaggle = "<a href='https://www.kaggle.com/users/248868/christopher-bailey'>kaggle</a>"
contactInfo.linkedin = "<a href='https://www.linkedin.com/profile/view?id=63221404'>linkedin</a>"
contactInfo.location = "Toronto, Ontario, Canada"
contactInfo.locationlink = "<a href='http://www.toronto.ca'>Toronto</a>"
contactInfo.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", contactInfo.name);
	var formattedRole = HTMLheaderRole.replace("%data%", contactInfo.role);
	var mobile = HTMLmobile.replace("%data%",contactInfo.mobile);
	var email = HTMLemail.replace("%data%",contactInfo.email);
	var github = HTMLgithub.replace("%data%",contactInfo.github);
	var kaggle = HTMLkaggle.replace("%data%",contactInfo.kaggle);
	var linkedin = HTMLlinkedin.replace("%data%",contactInfo.linkedin);
	var loc = HTMLlocation.replace("%data%",contactInfo.locationlink);
	var welcomemessage = HTMLWelcomeMsg.replace("%data%",contactInfo.welcomemessage)
	$("#right").append(welcomemessage);
	$(".welcome-message").hide();
	$("#top-contacts").append(mobile);
	$("#top-contacts").append(email);
	$("#top-contacts").append(github);
	$("#top-contacts").append(kaggle);
	$("#top-contacts").append(linkedin);
	$("#top-contacts").append(loc);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
}

contactInfo.display();

var bio = {
	"contacts" : {
		"location": "Toronto, Ontario"}
};


var education = {
	"schools": [
	{
		"name": "University of Toronto",
		"location": "Toronto, Ontario, Canada",
		"degree": "Masters of Financial Economics",
		"date": "Aug 2010 to Jan 2012",
		"major": ["None"],
		"url" : "http://www.economics.utoronto.ca/index.php/index/mfe",
		"notes": "<li>Accepted to program with <10% acceptance rate</li><li>Top 5 placing in Rotman International Trading Competition</li>"
	},
	{
		"name": "Dalhousie University",
		"location": "Halifax, Nova Scotia, Canada",
		"degree": "Bachelor of Commerce Co-op",
		"date": "Sep 2004 to Jun 2009",
		"major": ["Finance"],
		"url" : "http://www.dal.ca",
		"notes": "<li>Graduated with distinction</li>"
	}
],
	"online": [
	{
		"title": "Front-end Web Development Nanodegree",
		"school": "Udacity",
		"date": "October 2014 to Current",
		"url" : "https://www.udacity.com/course/nd001",
		"classes" : ["Intro to HTML/CSS", "JavaScript Basics", "Intro to jQuery"],
		"classurl" : ["https://www.udacity.com/course/ud304","https://www.udacity.com/course/ud804","https://www.udacity.com/course/ud245"]
	},
	{
		"title": "Data Analyst Nanodegree",
		"school": "Udacity",
		"date": "October 2014 to Current",
		"url" : "https://www.udacity.com/course/nd002",
		"classes" : ["Intro to Data Science"],
		"classurl" : ["https://www.udacity.com/course/ud359","https://www.udacity.com/course/ud032","https://www.udacity.com/course/ud651"]
	}
]
}
education.display = function() {
	/*this functions takes all the content in the education JSON and replaces it into the relevant variables defined
	in helper.js. these are then appended to the education-entry div. this goes through all my schools. I also added 
	functionality at the end to make an education-entry background color to be grey. Basically, ever second entry has 
	a grey background and I felt this added some aesthetic appeal to an otherwise colorless resume.*/
	var i = 0;
	for (school in education.schools) {
		i += 1;
		$("#brick-and-mortar").append(HTMLschoolStart);
		var skl = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url);
		var dgr = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var skldgr = skl.concat(dgr);
		var dts = HTMLschoolDates.replace("%data%",education.schools[school].date);
		var lca = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var mjr = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		var nte = HTMLschoolNote.replace("%data%",education.schools[school].notes);
		$(".education-entry:last").append(skldgr);
		$(".education-entry:last").append(dts);
		$(".education-entry:last").append(lca);
		$(".education-entry:last").append(mjr);
		$(".education-entry:last").append(nte);
		if (i%2 === 0) {
			$(".education-entry:last").css("background-color","#F3F3F3");	
		};
	}
	i = 0;
	for (nano in education.online) {
		i+=1;
		$("#online").append(HTMLschoolStart);
		var skl = HTMLonlineSchool.replace("%data%",education.online[nano].school);
		var dgr = HTMLonlineTitle.replace("%data%",education.online[nano].title).replace('#',education.online[nano].url);
		var skldgr = dgr.concat(skl);
		var dts = HTMLonlineDates.replace("%data%", education.online[nano].date)
		var list = HTMLonlineClassList;
		$(".education-entry:last").append(skldgr);
		$(".education-entry:last").append(dts);
		$(".education-entry:last").append(list);
		var clst = "";
		for (clas in education.online[nano].classes) {
			var cls = HTMLonlineClass.replace("%data%",education.online[nano].classes[clas]).replace('#',education.online[nano].classurl[clas]);
			clst = clst.concat(cls);
		};
		var cl = HTMLonlineClasses.replace("%data%",clst);
		$(".education-entry:last").append(cl);
		if (i%2 === 0) {
			$(".education-entry:last").css("background-color","#F3F3F3");	
		};
	}
}

education.display();



var work = {
	"jobs": [
	{
		"name": "The Bank of Nova Scotia",
		"title": "Manager",
		"location": "Toronto, Ontario",
		"datesworked": "January 2012 to Present",
		"des": "<li>Oversee monthly procedures that generate non-retail Economic Credit Capital (ECC) holdings for the bank</li><li>Produce monthly & daily early warning credit reports which are distributed to VPs and SVPs throughout GRM</li><li>Developed new stress testing scenarios (global financial crisis, European debt crisis, US government shutdown) using historical data for implementation in quarterly ECC production runs</li>"
	},
	{
		"name": "MFE Daily Market Report",
		"title": "Writer",
		"location": "Toronto, Ontario",
		"datesworked": "January 2011 to April 2011",
		"des": "<li>Co-wrote daily market summary covering financial markets and economic events delivered to 375 subscribers</li><li>Aggregated numerous news sources on a daily basis to produce market summary using Microsoft Excel and Bloomberg</li>"
	},
	{
		"name": "Halinova Trading",
		"title": "Intraday Equities Trader",
		"location": "Halifax, Nova Scotia",
		"datesworked": "May 2010 to August 2010",
		"des": "<li>Traded securities on NYSE targeting symbols below $20 with average daily volumes ranging between 3 and 20 million shares</li><li>Analyzed ECNs and exchanges to create a strategy that minimized trading fees and maximized speed of trade execution</li>"
	},
	{
		"name": "Domino's Pizza",
		"title": "Delivery Expert",
		"location": "Halifax, Nova Scotia",
		"datesworked": "July 2007 to May 2010",
		"des": "<li>Worked 25-35 hours per week during undergrad as means to fund schooling</li>"
	}
	]
}

var projects = {
	"project": [
	{
		"title": "PDF to Web Mock-Up",
		"dates": "October 2014 to Present",
		"des": "<li>Initial Project of Udacity's Front-end Web Development Nanodegree</li><li>Students are given a project template PDF (mock-up) and are tasked with creating a webpage around template</li><li>Enrolled in Udacity's Intro to HTML and CSS, and codecademy's HTML and CSS modules</li><li>Created portfolio viewable across multiples devices</li>",
		"image": "http://placehold.it/200x150"
	},
	{
		"title": "Online Resume",
		"dates": "November 2014 to Present",
		"des": "<li>Second Project of Udacity's Front-end Web Development Nanodegree</li><li>Students are given resume design template and are asked to complete it and excapsulate JavaScript functions</li><li>Completed Udacity's JavaScript Basics and Intro to jQuery classes, in addition to d3.js tutorials and codecademy's JavaScript and jQuery modules</li><li>Developed own online template and submitted project three weeks in advance</li>",
		"image": "http://placehold.it/200x150"
	},
	{
		"title": "New York City Subway Data",
		"dates": "December 2014 to Present",
		"des": "<li>First Project of Udacity's Data Science Nanodegree</li><li>Currently enrolled in Udacity's Intro to Data Science class</li><li>Goal: Mid-December 2014 completion</li>",
		"image": "http://placehold.it/200x150"
	}
	]
}

var displayWork = function() {
	/*this function cycles through the work JSON by type and then by company. all of the details then are appended*/
	for (type in work) {
		for (company in work.jobs) {
			$("#work-experience").append(HTMLworkStart);
			var employer = HTMLworkEmployer.replace("%data%",work.jobs[company].name);
			var title = HTMLworkTitle.replace("%data%", work.jobs[company].title);
			var both = employer.concat(title);
			$(".work-entry:last").append(both);
			var dates = HTMLworkDates.replace("%data%", work.jobs[company].datesworked);
			$(".work-entry:last").append(dates);
			var locale = HTMLworkLocation.replace("%data%", work.jobs[company].location);
			$(".work-entry:last").append(locale);
			var desc = HTMLworkDescription.replace("%data%", work.jobs[company].des);
			$(".work-entry:last").append(desc);
		}
	}
}

displayWork();

var locationizer = function(work_obj) {
	locations = [];
	for (comp in work_obj.companies) {
		locations.push(work_obj.companies[comp].location);
	}
	return locations;
}

var inName = function(name) {
	/*this internationalizes my name. ultimately, i removed it from my resume as I plan to stay in North America.*/
	var nameArray = name.split(" ");
	var first = nameArray[0].slice(0,1).toUpperCase();
	var firsrleft = nameArray[0].slice(1);
	var last = nameArray[1].toUpperCase();
	return first.concat(firsrleft).concat(" ").concat(last);

}



projects.display = function() {
	/*this is identical to education.display, but it is for projects*/
	var i = 0
	for (prjct in projects.project) {
		i += 1;
		$("#projects").append(HTMLprojectStart);
		var pTitle = HTMLprojectTitle.replace("%data%",projects.project[prjct].title);
		$(".project-entry:last").append(pTitle);
		var pDates = HTMLprojectDates.replace("%data%",projects.project[prjct].dates);
		$(".project-entry:last").append(pDates);
		var pDes = HTMLprojectDescription.replace("%data%",projects.project[prjct].des);
		$(".project-entry:last").append(pDes);	
		if (i%2 === 0) {
			$(".project-entry:last").css("background-color","#F3F3F3");	
		};

	}
}

projects.display();

$("#map-div").append(googleMap);

/*data defined for my skill chart*/
var data = [
  {skill: "Python",    value:  "Intermediate"},
  {skill: "JavaScript",   value: "Developing"},
  {skill: "HTML/CSS", value: "Intermediate"},
  {skill: "Communication",	value: "Advanced"},
  {skill: "Leadership",	value: "Advanced"},
  {skill: "Teamwork",	value: "Expert"},
  {skill: "R",     value: "Intermediate"},
  {skill: "Project Management",	value: "Expert"},
  {skill: "SQL",    value:  "Developing"},
  
];

InitChart();

function InitChart() {
  var mW = $("#skill-chart-svg").width();	/*width of skillschart area*/
  var vis = d3.select('#visualisation'), 
    WIDTH = mW,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 80
    },
    xRange = d3.scale.ordinal().rangeRoundBands([MARGINS.left, WIDTH - MARGINS.right], 0.1).domain(data.map(function (d) {
      return d.skill;
    })),

    yRange = d3.scale.ordinal()
    	.domain(["Beginner","Developing", "Intermediate","Advanced","Expert"])
    	.rangeBands([HEIGHT-MARGINS.top, MARGINS.bottom])
    /*yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0,
      d3.max(data, function (d) {
        return d.value;
      })*/
    /*]*/,

    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),

    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient("left")
      .tickSubdivide(true);



  vis.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
    .call(xAxis);

  vis.append('svg:g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
    .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("x", -30)
      .attr("dy", "0.71em")
      .style("text-anchor", "end")
      .style("font-size", "10px")
      .text("Perceived Expertise");


  vis.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', function (d) {
      return xRange(d.skill);
    })
    .attr('y', function (d) {
      return yRange(d.value);
    })
    .attr('width', xRange.rangeBand())
    .attr('height', function (d) {
      return ((HEIGHT - MARGINS.bottom) - yRange(d.value));
    });
    

}

var pageLoad = function() {
	/*this sets how my page is displayed upon load. I only want the about me to show and I want all skills to be displayed
	on the left hand side of the page*/
	$(".welcome-message").show();
    $("#work-experience").hide();
    $("#projects").hide();
    $("#education").hide();
    $("#skill-chart-svg").hide();
    $("#map-div").hide();
    $("#letsConnect").hide();
    $(".skill-box").hide();
    displaySkills();
};

pageLoad();

/*the remaining jQuery calls add functionality to my resume. I had created a menu at the top. When you click on the 
different divs, a different section will appear and every other section gets hidden*/

$(document).ready(
    function(){
        $("#menu-item:nth-child(1)").click(function () {
            $(".welcome-message").show();
            $("#work-experience").hide();
            $("#projects").hide();
            $("#education").hide();
            $("#skill-chart-svg").hide();
            $("#map-div").hide();
            $("#letsConnect").hide();
            $(".skill-box").hide();
            displaySkills();
        });
    });

$(document).ready(
    function(){
        $("#menu-item:nth-child(2)").click(function () {
            $("#work-experience").show();
            $("#projects").hide();
            $("#education").hide();
            $("#skill-chart-svg").hide();
            $("#map-div").hide();
            $("#letsConnect").hide();
            $(".welcome-message").hide();
            $(".skill-box").hide();
            displaySkillsSoft();
        });
    });

$(document).ready(
    function(){
        $("#menu-item:nth-child(3)").click(function () {
        	$(".welcome-message").hide();
            $("#work-experience").hide();
            $("#projects").show();
            $("#education").hide();
            $("#skill-chart-svg").hide();
            $("#map-div").hide();
            $("#letsConnect").hide();
            $(".skill-box").hide();
            displaySkillsProjects();
        });
    });

$(document).ready(
    function(){
        $("#menu-item:nth-child(4)").click(function () {
            $(".welcome-message").hide();
            $("#work-experience").hide();
            $("#projects").hide();
            $("#education").show();
            $("#skill-chart-svg").hide();
            $("#map-div").hide();
            $("#letsConnect").hide();
            $(".skill-box").hide();
            displaySkillsEducation();
        });
    });

$(document).ready(
    function(){
        $("#menu-item:nth-child(5)").click(function () {
        	$(".welcome-message").hide();
            $("#work-experience").hide();
            $("#projects").hide();
            $("#education").hide();
            $("#skill-chart-svg").show();
            $("#map-div").hide();
            $("#letsConnect").hide();
            $(".skill-box").hide();
            displaySkillsChart();
        });
    });

$(document).ready(
    function(){
        $("#menu-item:nth-child(6)").click(function () {
            $("#work-experience").hide();
            $(".welcome-message").hide();
            $("#projects").hide();
            $("#education").hide();
            $("#skill-chart-svg").hide();
            $("#map-div").show();
            initializeMap();
            $("#letsConnect").hide();
            $(".skill-box").hide();
            displaySkills();            
        });
    });
