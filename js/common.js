$(document).ready(function() {
//---------------------------Responsive Menu--------------------------//
	var onclick = $('.onclick_menu');
	var menu = $('.main_nav');

	$(onclick).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var W_width = $(window).width();
		if (W_width > 768 && menu.is(':hidden')) {
			menu.removeAttr('style')
		};
	});

//---------------------------Order Calendar--------------------------//	
	$('#datetimepicker1').datetimepicker({
		yearOffset:0,
		lang:'ru',
		timepicker:false,
		format:'d/m/Y',
		formatDate:'Y/m/d'
		//minDate:'-1970/01/02', // yesterday is minimum date
		//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
	});
	$('#datetimepicker2').datetimepicker({
		yearOffset:0,
		lang:'ru',
		timepicker:false,
		format:'d/m/Y',
		formatDate:'Y/m/d'
		//minDate:'-1970/01/02', // yesterday is minimum date
		//maxDate:'+1970/01/02' // and tommorow is maximum date calendar
	});
//---------------------------End Order Calendar--------------------------//	


//-----------------------Order list----------------------------------//
	 $('.room_type_lists').click(function(){
		 $(".room_type").slideToggle('fast');
	 });
	 $('.room_type li').click(function(){
		var tx = $(this).html();
	 	$(".room_type").slideUp('fast');
	 	$(".room_type_lists span").html(tx);
	 	$
	 });
//-----------------------End Order list----------------------------------//	 


//---------------------Header Slider---------------------------------//
	$('.slick').slick({
		slidesToShow: 3,
        slidesToScroll: 1,
  		variableWidth: true,
  		prevArrow: $('.prev-arrow'),
  		nextArrow: $('.next-arrow'),
  		autoplay: true,
  		autoplaySpeed: 2000
	});
//---------------------End Header Slider---------------------------------//	

//---------------------Slider---------------------------------//
	$('.slide_show').slick({
		dots: false,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 2000
	});
//---------------------Slider---------------------------------//


//----------------------------MagnificPopup---------------------//
	$('.open_popup').magnificPopup({
		type:'inline',
  		midClick: true 
	});
	
	$(".rooms_descr").each(function(i) {
		$(this).find("a").attr("href", "#room_" + i);
		$(this).find(".room").attr("id", "room_" + i);
	});
//---------------------------End MagnificPopup init-------------//

	$(".main_nav li").click(function() {
		$(".main_nav li").removeClass("active");
		$(this).addClass("active");
	});
});
	


