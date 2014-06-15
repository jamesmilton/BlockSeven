var mover = 0;
var ans = 0;
var score = 0;
var money = 10;
var health = 20;
var streetCred = 0;
var charisma = 0;
var strength = 0;
var businessSense = 0;
var sneakiness = 0;

function answer1() {
	ans = 1;
nextMove(); 

}

function answer2() {
	ans = 2;
	nextMove();
	 
}

function answer3() {
	ans = 3;
	nextMove();
	
}

function answer4() {
	ans = 4;
nextMove(); 

}

function answer5() {
	ans = 5;
	nextMove();
	 
}

function answer6() {
	ans = 6;
	nextMove();
	
}

function answer7() {
	ans = 7;
nextMove(); 

}

function nextMove() {
	switch(mover) {
		case 0:
			switch(ans) {
				case 1:
					strength = 4;
					businessSense = 1;
					sneakiness = 1;
					mover ++; 					
					window.location.assign("Explanation.html");
					
					break;
				case 2:
					strength = 1;
					businessSense = 4;
					sneakiness = 1;
					mover ++; 
					
					window.location.assign("Explanation.html");
					
					break;
				case 3:
					strength = 1;
					businessSense = 1;
					sneakiness = 4;
					mover ++;  
					window.location.assign("Explanation.html");
					
					break;
			}
			break;
			case 1: 
			switch(ans){
				
			}
			
	}
}

function replaceVid(text) {
	$("#scenebox").replaceWith('<video id="video1" autoplay = "autoplay"><source id = "webm" src=' + text + ' alt = "The Ministry of Fostering Obedience - M.O.F.O./MOFO Video" type="video/webm"></video>');
}

