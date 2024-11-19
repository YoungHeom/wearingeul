$(document).ready(function () {

    // top 버튼 ---------------------------------------------------------------
    // 스크롤 위치에 따라 탑버튼 표시
    $(window).scroll(function () {

        if ($(this).scrollTop() > 400) {
            $('.top_btn').addClass('show');
        } else {
            $('.top_btn').removeClass('show');
        }
    });

    // 위로 올라가는 애니메이션
    $('.top_btn, .top_btn_white').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200)
    });

    // // 페이지 하단에서 100픽셀 이내에 도달했을 때 하얀 버튼 표시
    // $(window).scroll(function () {

    //     if ($(this).scrollTop() + $(window).height() >= $(document).height() - 100) {
    //         $('.top_btn_white').addClass('show');
    //         $('.top_btn').hide();
    //     } else {
    //         $('.top_btn_white').removeClass('show');
    //         $('.top_btn').show();
    //     }
    // });



    // banner 이미지 스와이퍼 슬라이드 --------------------------------------------------------
    var swiper = new Swiper(".main_banner", {
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        // navigation: {
        //     nextEl: ".banner_next",
        //     prevEl: ".banner_prev"
        // }
    });


});

// pick_swiper 추천상품 이미지 스와이퍼 슬라이드 --------------------------------------------------------
function swiperPick__init() {
	var swiper = new Swiper(".pick_swiper", {
		spaceBetween: 30,
		centeredSlides: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
	});
}
swiperPick__init();

function swiperNew__init() {
	var swiper = new Swiper(".new_swiper", {
		spaceBetween: 16,
		centeredSlides: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
			// dragSize: 300,
		},
	});
}
swiperNew__init();

$('.best_btn').click(function() {
    $('.grid_item_box.show').show();
})