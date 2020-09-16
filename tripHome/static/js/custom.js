$(document).ready(function(){

	"use strict";

    

        /*==================================
* Author        : "ThemeSine"
* Template Name : Travel HTML Template
* Version       : 1.0
==================================== */


        /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. Range js
3. Countdown timer
4. owl carousel
5. datepicker
6. Smooth Scroll spy
7. Animation support
======================================*/
    

    // 1. Scroll To Top 

		$(window).on('scroll',function () {

			if ($(this).scrollTop() > 600) {

				$('.return-to-top').fadeIn();

			} else {

				$('.return-to-top').fadeOut();

			}

		});

		$('.return-to-top').on('click',function(){

				$('html, body').animate({

				scrollTop: 0

			}, 1500);

			return false;

		});

    // 2. range js
        
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 12000,
            values: [ 2677, 9241 ],
            slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
        
        
        // Quantity Buttons Shop
    
        $(".qtyplus").on("click", function(){
        var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) + 1,
                d = parseInt(b.attr("max"), 10);
            d || (d = 9999999999), c <= d && (b.val(c), b.change())
        });
        $(".qtyminus").on("click", function(){
            var b = $(this).parents(".quantity-form").find("input.qty"),
                c = parseInt(b.val(), 10) - 1,
                d = parseInt(b.attr("min"), 10);
            d || (d = 1), c >= d && (b.val(c), b.change())
        });


    // 3.Countdown timer 
        
        function makeTimer() {

                var endTime = new Date("March 7, 2018 12:00:00 PDT");            
                var endTime = (Date.parse(endTime)) / 1000;

                var now = new Date();
                var now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $("#days").html(days + '<span class="camp">Days</span>');
                $("#hours").html(hours + '<span class="camp">Hour</span>');
                $("#minutes").html(minutes + '<span class="camp">Minute</span>');
                $("#seconds").html(seconds + '<span class="camp">Second</span>');       

        }
        
        setInterval(function() { makeTimer(); }, 1000);

    // 4. owl carousel
    
        // i. #testimonial-carousel
    
        
        var owl=$('#testemonial-carousel');
        owl.owlCarousel({
            items:3,
            margin:0,
            
            loop:true,
            autoplay:true,
            smartSpeed:1000,
            
            //nav:false,
            //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            
            dots:true,
            autoplayHoverPause:true,
        
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    640:{
                        items:1
                    },
                    767:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            
            
        });

    // 5. datepicker
            $('[data-toggle="datepicker"]').datepicker();

    // 6. Smooth Scroll spy
        
        $('.header-area').sticky({
           topSpacing:0
        });
        
        //=============

        $('li.smooth-menu a').bind("click", function(event) {
            event.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - -1
            }, 1200,'easeInOutExpo');
        });
        
        $('body').scrollspy({
            target:'.navbar-collapse',
            offset:0
        });

    // 7.animation support

        $(window).load(function(){

            $(".about-us-txt h2").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".about-us-txt h2").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".about-us-txt button").addClass("animated fadeInDown").css({'opacity':'0'});

        });
        

});	

$("#destinationSelection").select2({
    maximumSelectionLength: 2
  });

  $("#sourceSelection").select2({
    maximumSelectionLength: 1
  });

  $("#travelSelection").select2({
    maximumSelectionLength: 2
  });

  $("#transportSelection").select2({
    maximumSelectionLength: 2
  });

//   const userAction = async () => {
//       alert("Entered");
//   const response = await fetch("https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Raleigh&key=AIzaSyAIsboWfXVchmgBxPGKG5lUF9AENUKcSI8");
//   const myJson = await response.json(); //extract JSON from the http response
//   alert(myJson);
// }
// async function userAction() {
//     alert("entered");
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementsByClassName("html-tag").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "demo_get.asp", true);
//   xhttp.send();
// }
  // function saveData(){
  //
  //   destination_choices = [];
  //   var destinationChoice = $("#destinationSelection").select2('data');
  //   destinationChoice.forEach(function(d){destination_choices.push(d.id)});
  //   var destination = destination_choices[0];
  //   var request = new XMLHttpRequest();
  //   request.open('GET', "https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Raleigh&key=AIzaSyAIsboWfXVchmgBxPGKG5lUF9AENUKcSI8", true);
  //   request.onload = function () {
  // // Begin accessing JSON data here
  //        var data = JSON.parse(this.response)
  //
  //         if (request.status >= 200 && request.status < 400) {
  //           data.forEach((movie) => {
  //             console.log(movie.title)
  //           })
  //         } else {
  //           console.log('error')
  //         }
  //       }
  //
  //       request.send()
  //
  //   source_choices = [];
  //   var sourceChoice = $("#sourceSelection").select2('data');
  //   sourceChoice.forEach(function(d){source_choices.push(d.id)});
  //   source_choices = source_choices[0];
  //
  //   trip_kinds = [];
  //   var tripKind = $("#travelSelection").select2('data');
  //   tripKind.forEach(function(d){trip_kinds.push(d.id)});
  //
  //   mode_transports =[];
  //   var modeTransport = $("#transportSelection").select2('data');
  //   modeTransport.forEach(function(d){mode_transports.push(d.id)});
  //
  //   start_date = $("#start_date")[0].value
  //   end_date = $("#end_date")[0].value
  //
  //   members_count = $("#members_count")[0].value
  //
  //   budget_range = $("#amount")[0].value
    // var token = '{{csrf_token}}';
    // $.ajax({
    //     headers: { "X-CSRFToken": token },
    //     method: 'POST',
    //     url: 'ajax/submit/',
    //     data: {'yourJavaScriptArrayKey': members_count},
    //
    //     success: function (data) {
    //          //this gets called when server returns an OK response
    //          alert("it worked!");
    //     },
    //     error: function (data) {
    //          alert("it didnt work");
    //     }
    // });

  // }