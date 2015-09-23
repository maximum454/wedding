    $(window).on('mousemove', function(e) {
        var w = $(window).width();
        var h = $(window).height();
        var offsetX = 0.5 - e.pageX / w;
        var offsetY = 0.5 - e.pageY / h;

        $(".parallax").each(function(i, el) {
            var offset = parseInt($(el).data('offset'));
            var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

            $(el).css({
                '-webkit-transform': translate,
                'transform': translate,
                'moz-transform': translate
            });
        });
    });
/*отправка почты*/
function send()
	{	
	var name = $('#name').val(),
		phone = $('#phone').val()
		   $.ajax({
			type: "POST",
			url: "/send.php",
			data: "name="+name+"&phone="+phone,
			success: function(html) {
				$("#result").arcticmodal();
				$(".result-text").empty();
				$(".result-text").append(html);
			}
		});
           returnfalse
	}
/*конец отправки почты*/

/*Скрипт для меню*/
// $(window).scroll(function(){
//     var r=$(document).scrollTop();
//         e=0;
//     if(r>e){
//         $(".top-header").addClass("locked");
//     }
//     else{
//         $(".top-header").removeClass("locked");
//         $(".top-header").removeAttr("style");
//     };
// });
/**/

$(function(){
    $('.btm').click(function(){
        return false;
    })
    $('.bx-slider').bxSlider({
        auto:0,
        pager:0,
        controls:1
    });
	/*Макска для телефона*/
	$("#phone").mask("+7 (999) 999-99-99",{placeholder:" "});

	/*Скрипт для модальных окон*/
	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
        return false;
	});

    $(".btm-map").click(function(){
        $('.map-inner').hide('slow');
        $('.btm-con').show('slow');
        return false;
    })
    $(".btm-con").click(function(){
        $('.map-inner').show('slow');
        $('.btm-con').hide('slow');
        return false;
    })

	/* яндекс карта*/
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [51.18053704, 71.40084081],
            zoom: 16,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Свадебный Альянс <br>ул. Московская 18<br> +7 (707) 841 60 05 <br>+7 (7172) 50 97 92'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/i/h-placemark-i.png',
            // Размеры метки.
            iconImageSize: [19, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0,0]
            
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    });
    /**/
})