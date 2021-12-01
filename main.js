'use strict';
			
						//section 1
let logo_t1= document.querySelector(".logos-t1");
let counter_logos=0;


						//section 2
let clients_container= document.querySelector(".clients-container");
let counter_clients=0;


							//section 1 brain
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");
logosT1("#", "logo");


let logos= document.querySelector(".logo-t1");
console.log(logos);


						//
							//section 2 brain

clients("images/ken-cheung-KonWFWUaAuk-unsplash.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo,tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esscillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat noproident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
clients("images/ken-cheung-KonWFWUaAuk-unsplash.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo,tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esscillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat noproident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
clients("images/ken-cheung-KonWFWUaAuk-unsplash.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo,tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esscillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat noproident, sunt in culpa qui officia deserunt mollit anim id est laborum.");


							
							//section 3 brain
let tiny_slider= tns({
	container: ".my-slider",
	controls: false,
	items: 1,
	width: 50,
	speed: 300,
	lazyload: true,
});

let btn_left=document.querySelector(".slider-button-left").addEventListener("click", ()=>{
	tiny_slider.goTo('prev');
})

let btn_right=document.querySelector(".slider-button-right").addEventListener("click", ()=>{
	tiny_slider.goTo('next');
})











	




									// funtions							
function clients(client_img, text){
	clients_container.innerHTML+=`
		<div class="clients ${classGenerator(counter_clients,"client")}">
			<div class="client-img"><img src="${client_img}"></div>
			<div class="text_client"><p>${text}</p></div>
		</div>
	`
}


function logosT1(logo_img, text){
	logo_t1.innerHTML+=`
		<div class="logo-t1 ${classGenerator(counter_logos,"logo-t1-")}">
			<div class="logo_t1-img"><img src="${logo_img}"></div>
			<div class="text_logo-t1"><p>${text}</p></div>
		</div>
	`
}


function slider(slider_img){
	slider.innerHTML+=`
		<img src="${slider_img}"">
	`

	
}



function classGenerator(counter,name_class){
	counter+=1;
	return name_class+counter_clients;
}
























				// ORIGINALLY FOR LOAD ELEMENTS, BUT COULD BE USE FOR A GALLEY ON FUTURE, REALLY UTIL

// let main= document.getElementById("main");
// let counter=0;

// newImage("images/forrest-cavale-qfmd9bu7IgA-unsplash.jpg");
// newImage("images/ken-cheung-KonWFWUaAuk-unsplash.jpg");
// newImage("images/luca-bravo-zAjdgNXsMeg-unsplash.jpg");
// newImage("images/luca-micheli-r9RW20TrQ0Y-unsplash.jpg");





// 							//functions
// function newImage(img){
// 	main.innerHTML+=`
// 		<div class="image ${classGenerator()}" style="background-image: url(${img});">
// 		</div>
// 		<div class="text"></div>
// 	`
// }


// function classGenerator(){
// 	counter+=1;
// 	return "img"+counter;
// }

