$(window).load(function(){
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
});
});

$(document).ready(function(){
		$('.persons__tabs-item').on('click', function(e){
		e.preventDefault();
		
		var 
			$this = $(this),
			container = $this.closest('.persons__tabs'),
			items = container.find('.persons__tabs-item'),
			active = items.filter('active'),
			index = $this.index(),
			require = $('.persons__tabs-i').eq(index);
		
		$this
			.addClass('active')
			.siblings()
			.removeClass('active');
		
		require
			.addClass('active')
			.siblings()
			.removeClass('active');
	});
});
	
	$('.acco__list-link').on('click', function(e){
		e.preventDefault();
	
	var pic = true;	
		
	var	
		$this = $(this),
		item = $this.closest('.acco__list-item'),
		current = item.find('.acco__list-2'),
		container = $this.closest('.acco'),
		content = container.find('.acco__list-2'),
		duration = 500;
	
	if (pic) {
		pic = false;
	if (!item.hasClass('active')){
		content.slideUp().stop(true,true);	
		current.slideDown(duration, function(){
			pic = true;
		});
		current.stop(true,true);
		item
		.addClass('active')
		.siblings()
		.removeClass('active');
	
	} else {
		current.slideUp(function(){
			pic = true;
		});
		current.stop(true,true);
		item.removeClass('active');
		
	}
	}
		
	});

$(document).ready(function(){
    createMap();
}); // -> ready_end;

function createMap() {
    ymaps.ready(init);

    function init(){
        var myMap = new ymaps.Map("map", {
            center: [56.2, 34.56],
            zoom: 14,
            controls : ['zoomControl']
        });

        var myPlacemark = new ymaps.Placemark(
            [56.2, 34.56],
            {
                hintContent: 'отметка',
                balloonContent: 'отметка'
            },{
                iconLayout: 'default#image',
                iconImageHref: '../img/icons/map.png',
                iconImageSize: [42, 59],
                iconImageOffset: [-5, -10]
            });

        myMap.behaviors.disable('scrollZoom');
        
        myMap.geoObjects.add('myPlacemark');

    }
}

$('a[href^="#form"]').click(function(){
	var el = $(this).attr('href');
	$('body').animate({
	scrollTop: $(el).offset().top}, 1000);
	return false;
	});

(function($){
   $("#phone").mask("8(999)999-99-99");
});
