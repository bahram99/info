$(document).ready(function() {

	/* wow js animations activation */
	new WOW().init();

	/* Navigation burger onclick side navigation show */
	$('.burger-container').on('click', function() {
		$('.main-navigation').toggle('slow');

		if($('#myBtn').hasClass('change')) {
			$('body').addClass('stop-scroll');
		} else {
			$('body').removeClass('stop-scroll');
		}
	});


	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});




});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});


      var fade = setInterval( function() {fading()} ,  100)
      setInterval(function() {show()} , 4000)
var i = 0;
function show() {
  var item = document.querySelector('#slides').getElementsByTagName('img');
  ++i;
  if(i== item.length){
      i=0;
  }

  if(i==0){
      item[item.length-1].style.display="none";
  } else{
      item[i-1].style.display="none";
  } item[i].style.display="inline";

  item[i].style.opacity=1;
  clearInterval(fade)
  fade = setInterval( function() {fading()} ,  100)
}  

function fading(){
var item = document.getElementById('slides').getElementsByTagName('img');
var opacity = item[i].style.opacity >= 0 ? item[i].style.opacity : 1;
item[i].style.opacity = opacity - 0.025
}

function ttt(){
	document.getElementById('form-message-success').innerHTML="salam"
}

function ssh(){
	window.alert('ok');
}