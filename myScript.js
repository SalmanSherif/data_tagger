"use strict";

var start_session;
var tweet_select;
var user_input = [];

var image;

function category_submit(){

	var other_category = document.getElementById("other_category").value;

	if(other_category != ""){
		if (typeof(Storage) !== "undefined") {
			localStorage.removeItem("category");
			localStorage.setItem("category", other_category);
		}

		loadPage("tweet_intent_1.html");

	} else{
		alert("\nYou haven't named the category.\n\nPlease fill or select a category to proceed.");
	}

}

function capValue(input){
	//alert(input);
	if (typeof(Storage) !== "undefined") {
		// Store
		localStorage.removeItem("tweet_rating");
		localStorage.setItem("tweet_rating", input);
		// Retrieve
		//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	}
	//alert(user_inputs);
	/*
	var mysql = require('mysql');

	var con = mysql.createConnection({
		host: "localhost",
		user: "yourusername",
		password: "yourpassword"
	});

	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		con.query("CREATE DATABASE mydb", function (err, result) {
			if (err) throw err;
			console.log("Database created");
		});
	});*/
}

function rateMore(){
	var user_inputs;

	user_inputs = [[
		"blank",
		localStorage.getItem("game_selected"),
		localStorage.getItem("category"),
		localStorage.getItem("intent_selected"),
		localStorage.getItem("tweet_rating"),
	]];
	
}

function tweetSelectStore(input){
	// Check browser support
	if (typeof(Storage) !== "undefined") {
		// Store
		localStorage.removeItem("tweet_select");
		localStorage.setItem("tweet_select", input);
		// Retrieve
		//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	}
}

function loadPage(nextPage){
	//"which_game_1.html"
	location.href = nextPage;
}

function loadExtras(){

	var current_page = window.location.href;

	if(current_page.includes("which_game_1.html")){
		randomizer1();
	}else if(current_page.includes("tweet_category_1.html")){
		randomizer2();
	}else if(current_page.includes("tweet_intent_1.html")){

	}
}

function randomizer2(){
	var random_number = Math.floor(Math.random() * 7);
	//random_number = 1;
	//alert("1");

	if(random_number == 0){
		document.querySelector("#option_1").innerText ='Comparing Games';
		document.querySelector("#option_2").innerText ='Highlighting Features';
		document.querySelector("#option_3").innerText ='Requesting Changes';
		//document.querySelector("#option_4").innerText ='Other';
	} else if(random_number == 1){
		document.querySelector("#option_2").innerText ='Comparing Games';
		document.querySelector("#option_1").innerText ='Highlighting Features';
		document.querySelector("#option_3").innerText ='Requesting Changes';
		//document.querySelector("#option_4").innerText ='Other';
	} else if(random_number == 2){
		document.querySelector("#option_2").innerText ='Comparing Games';
		document.querySelector("#option_3").innerText ='Highlighting Features';
		document.querySelector("#option_1").innerText ='Requesting Changes';
		//document.querySelector("#option_4").innerText ='Other';
	} else if(random_number == 3){
		document.querySelector("#option_2").innerText ='Comparing Games';
		document.querySelector("#option_3").innerText ='Highlighting Features';
		//document.querySelector("#option_4").innerText ='Requesting Changes';
		document.querySelector("#option_1").innerText ='Requesting Changes';
	} else if(random_number == 4){
		document.querySelector("#option_3").innerText ='Comparing Games';
		document.querySelector("#option_2").innerText ='Highlighting Features';
		//document.querySelector("#option_4").innerText ='Requesting Changes';
		document.querySelector("#option_1").innerText ='Requesting Changes';
	} else if(random_number == 5){
		document.querySelector("#option_3").innerText ='Comparing Games';
		//document.querySelector("#option_4").innerText ='Highlighting Features';
		document.querySelector("#option_2").innerText ='Requesting Changes';
		document.querySelector("#option_1").innerText ='Highlighting Features';
	} else if(random_number == 6){
		document.querySelector("#option_3").innerText ='Comparing Games';
		//document.querySelector("#option_4").innerText ='Highlighting Features';
		document.querySelector("#option_1").innerText ='Requesting Changes';
		document.querySelector("#option_2").innerText ='Highlighting Features';
	} else if(random_number == 7){
		//document.querySelector("#option_4").innerText ='Comparing Games';
		document.querySelector("#option_3").innerText ='Highlighting Features';
		document.querySelector("#option_1").innerText ='Requesting Changes';
		document.querySelector("#option_2").innerText ='Comparing Games';
	}

}

function randomizer1(){

	var random_number = Math.floor(Math.random() * 6);
	//random_number = 1;

	if(random_number == 0){
		document.querySelector("#option_1").innerText ='Fortnite';
		document.querySelector("#option_2").innerText ='Apex';
		document.querySelector("#option_3").innerText ='Other';

	} else if(random_number == 1){
		document.querySelector("#option_1").innerText ='Apex';
		document.querySelector("#option_2").innerText ='Fortnite';
		document.querySelector("#option_3").innerText ='Other';

		document.querySelector("#option_1").className ="btn btn-danger";
		document.querySelector("#option_2").className ="btn btn-primary";
		document.querySelector("#option_3").className ="btn btn-success";
	} else if(random_number == 2){
		document.querySelector("#option_3").innerText ='Other';
		document.querySelector("#option_2").innerText ='Apex';
		document.querySelector("#option_1").innerText ='Fortnite';

		document.querySelector("#option_1").className ="btn btn-success";
		document.querySelector("#option_2").className ="btn btn-danger";
		document.querySelector("#option_3").className ="btn btn-primary";
	} else if(random_number == 3){
		document.querySelector("#option_3").innerText ='Apex';
		document.querySelector("#option_2").innerText ='Other';
		document.querySelector("#option_1").innerText ='Fortnite';

		document.querySelector("#option_1").className ="btn btn-danger";
		document.querySelector("#option_2").className ="btn btn-success";
		document.querySelector("#option_3").className ="btn btn-primary";
	} else if(random_number == 4){
		document.querySelector("#option_3").innerText ='Fortnite';
		document.querySelector("#option_2").innerText ='Other';
		document.querySelector("#option_1").innerText ='Apex';

		document.querySelector("#option_1").className ="btn btn-primary";
		document.querySelector("#option_2").className ="btn btn-success";
		document.querySelector("#option_3").className ="btn btn-danger";
	} else if(random_number == 5){
		document.querySelector("#option_3").innerText ='Other';
		document.querySelector("#option_2").innerText ='Fortnite';
		document.querySelector("#option_1").innerText ='Apex';

		document.querySelector("#option_1").className ="btn btn-danger";
		document.querySelector("#option_2").className ="btn btn-primary";
		document.querySelector("#option_3").className ="btn btn-success";
	}
}

function loadImg(){

	var toString = localStorage.getItem("tweet_select").toString();
	var tempString = "images_2" + "//tweet_" + toString + ".png";
	image = document.getElementById('image_to_rate');
	image.src = tempString;

	loadExtras();
}

function categorySelect(button_id){

	var category = document.getElementById(button_id).innerText;

	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("category");
		localStorage.setItem("category", category);
	}

	loadPage("tweet_intent_1.html");
}

function tweetSelect(button_id){

	if ( button_id == "option_s_1") {

		if (typeof(Storage) !== "undefined") {
			localStorage.removeItem("rate_start");
			localStorage.setItem("rate_start", true);
		}

		var random_number = Math.floor(Math.random() * 5);
		tweetSelectStore(random_number + 1);

		loadPage("which_game_1.html");
	}
	// Store
	// Retrieve
	//document.getElementById("result").innerHTML = localStorage.getItem("lastname");
	//alert(random_number);
}

function gameSelected(button_id){

	var in_btn_text = document.getElementById(button_id).innerText;
	//alert(in_btn_text);

	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("game_selected");
		localStorage.setItem("game_selected", in_btn_text);
	}

	location.href = "tweet_category_1.html";
	//exportToCsv("data.csv", [user_input])
}

function intentSelected(button_id){

	var in_btn_text = document.getElementById(button_id).innerText;
	//alert(in_btn_text);

	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("intent_selected");
		localStorage.setItem("intent_selected", in_btn_text);
	}

	location.href = "tweet_rate_1.html";
	//exportToCsv("data.csv", [user_input])
}


// not my code below Author: Jossef Harush
// Link: https://jsfiddle.net/jossef/m3rrLzk0/
function exportToCsv(filename, rows) {
	var processRow = function (row) {
		var finalVal = '';
		for (var j = 0; j < row.length; j++) {
			var innerValue = row[j] === null ? '' : row[j].toString();
			if (row[j] instanceof Date) {
				innerValue = row[j].toLocaleString();
			};
			var result = innerValue.replace(/"/g, '""');
			if (result.search(/("|,|\n)/g) >= 0)
			result = '"' + result + '"';
			if (j > 0)
			finalVal += ',';
			finalVal += result;
		}
		return finalVal + '\n';
	};

	var csvFile = '';
	for (var i = 0; i < rows.length; i++) {
		csvFile += processRow(rows[i]);
	}

	var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
	if (navigator.msSaveBlob) { // IE 10+
		navigator.msSaveBlob(blob, filename);
	} else {
		var link = document.createElement("a");
		if (link.download !== undefined) { // feature detection
			// Browsers that support HTML5 download attribute
			var url = URL.createObjectURL(blob);
			link.setAttribute("href", url);
			link.setAttribute("download", filename);
			link.style.visibility = 'hidden';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}
}

/*
jQuery('#shards-custom-slider').customSlider({
start: [25, 50],
tooltips: [true, true],
connect: true,
range: {
'min': 0,
'max': 100
},
pips: {
mode: 'positions',
values: [0, 25, 50, 75, 100],
density: 5
}
});*/

//does not work
// Author jgillich, Link: https://stackoverflow.com/questions/15803326/browser-back-button-not-working
/*
history.pushState(null, null, $(window).attr("href"));
$(window).on("popstate", function (e) {
e.preventDefault();
alert("dashboard");
//load dashboard
});*/

// author: W3schools Link: https://www.w3schools.com/jsref/met_his_back.asp
function goBack() {
	window.history.go(-1);
}

function access_wiki(){
	window.open("https://fortnite.fandom.com/wiki/Fortnite_Wiki");
}
