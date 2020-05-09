//import { handleFormSubmit } from 'form-submission-handler.js';
var start_session;
var tweet_select;
var user_input = [];
var image;
var tweet_text =
["@FortniteGame I found a bug with the Choppa.If the tail of the Choppa is in a Box with a stair in it or a 1 by 1 then you hop in the Choppa despawns and send you inder the map and then you can just swim around the die from barrier",
"fortnite is the best game ever not joking",
"Bizarro draft: Spouses might be discouraged from streaming Tiger King and the kids might have to forsake Fortnite so GMs have enough bandwidth to make picks. And the NFL has asked cell phone providers to avoid tower work near homes of GMs/coaches.",
"Unpopular opinion. The minigun should take 2 slots in Fortnite.",
"Who squading up w me and dropping in on the Travis Scott fortnite concert",
"@trvisXX bout to make fortnite rage",
"Fortnite is so fun when ur getting spammed by two miniguns and an rpg #welovefortnite",
"What are the 3 POIs that you miss the most in Fortnite? Mine: 1 - Tilted (duh) 2- Greasy Grove 3- Paradise Palms",
"I'm impressed they were able to do the shows without disabling any modes. You can dislike the event all you want, but I will forever be thankful that Fortnite does these things for us. They literally don't have to do this. The drops were great, and I enjoyed it.",
"just got off the phone with ninja we've decided to add a nurse scrubs skin to fortnite and all the profits go toward corona. so powerful #ltsNotlustAGame"];

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
	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("tweet_rating");
		localStorage.setItem("tweet_rating", input);
	}
}

function rateMore(){
	dataSubmit();
}

function dataSubmit(){

	var tempText = getTweetSelectStore()[getRatedPosition()];
	//alert(tempText);

	document.getElementById("tweet_id").value = tempText;//tweet_text[getTweetSelectStore()[getRatedPosition()]];
	document.getElementById("game_selected").value = localStorage.getItem("game_selected");
  document.getElementById("tweet_category").value = localStorage.getItem("category");
	document.getElementById("tweet_intent").value = localStorage.getItem("intent_selected");
	document.getElementById("tweet_rate").value = localStorage.getItem("tweet_rating");
	document.getElementById("honeypot").value;

	var tweet_id = document.getElementById("game_selected").value;
	var game_selected = document.getElementById("game_selected").value;
	var tweet_category = document.getElementById("tweet_category").value;
	var tweet_intent = document.getElementById("tweet_intent").value;
	var tweet_rate = document.getElementById("tweet_rate").value;
	var honeypot = document.getElementById("honeypot").value;

	//https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
	document.getElementById("send_trigger").click();

	var current_rated_pos = getRatedPosition();
	setRatedPosition(current_rated_pos + 1 );
	//alert(current_rated_tweet);

	tweetSelect("option_s_1");
}


function getTweetSelectStore(){

	if (localStorage.hasOwnProperty("tweet_select")){
		return JSON.parse(localStorage.getItem("tweet_select"));
	}
}

function tweetSelectStore(input){
	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("tweet_select");
		localStorage.setItem("tweet_select", JSON.stringify(input));
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
	}

	if(current_page.includes("tweet_category_1.html")){
		randomizer2();
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

	var toString = getTweetSelectStore();
	var tempNum = getRatedPosition();
	//alert(toString[tempNum]);

	var tempString = "images_2" + "//tweet_" + toString[tempNum] + ".png";
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

//Fisher-Yates Shuffle....https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function tweetSelect(button_id){
	if ( button_id == "option_s_1") {

		var current_pos = 0;
		var toRand = [1,2,3,4,5,6,7,8,9,10];

		if(getRatedPosition() > 9){
			setRatedPosition(0);
		}

		//alert(getRatedPosition());

		if(!localStorage.hasOwnProperty("current_pos")){
			setRatedPosition(0);
			toRand = shuffle(toRand);
			tweetSelectStore(toRand);
		}else {
			toRand = getTweetSelectStore();
			tweetSelectStore(toRand);
			current_pos = getRatedPosition();
		}
		loadPage("which_game_1.html");
	}
}

function setRatedPosition(new_pos){

	if (typeof(Storage) !== "undefined") {
		localStorage.removeItem("current_pos");
		localStorage.setItem("current_pos", new_pos);
	}
}

function getRatedPosition(){

	var temp_num = 0;

	if (typeof(Storage) !== "undefined") {
		temp_num = parseInt(localStorage.getItem("current_pos"));
	}

	return temp_num;
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

// author: W3schools Link: https://www.w3schools.com/jsref/met_his_back.asp
function goBack() {
	window.history.go(-1);
}

function access_wiki(){
	window.open("https://fortnite.fandom.com/wiki/Fortnite_Wiki");
}

// https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

//https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
/*
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}*/

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
