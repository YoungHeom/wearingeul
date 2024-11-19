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


// pick_swiper 추천상품 이미지 스와이퍼 슬라이드 --------------------------------------------------------
function swiperPick__init() {
	var swiper = new Swiper(".pick_swiper", {
		spaceBetween: 16,
		centeredSlides: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
}
swiperPick__init();

$('.tap ul li.detail').click(function () {
	$('.grid_item_box.show').show();
})

$('.btn_box > .detail_btn').click(function () {
	$('.detail_info > .detail_inner > .img_box').toggleClass('active');
	$('.detail_info > .detail_inner .btn_bg').toggleClass('active');
	
	// $('.detail_btn').html('상세정보 접기 <img src="img/arrow-down.svg" alt="">');
	// $('.detail_btn > img').toggleClass('active');
	if ($(this).hasClass('more')) {
		$(this).html('상세정보 더 보기 <img src="img/arrow_down.svg" alt="">');
		$(this).removeClass('more');
	  } else {
		$(this).html('상세정보 접기 <img src="img/arrow_up.svg" alt="">');
		$(this).addClass('more');
	  }
})
$('.product > .inner .img_box > .img_1').click(function () {
	$('.product > .inner .pd_box > div > img').attr('src', 'https://cdn.imweb.me/thumbnail/20230318/a5b4c7fdc9e38.jpg');
})
$('.product > .inner .img_box > .img_2').click(function () {
	$('.product > .inner .pd_box > div > img').attr('src', 'https://cdn.imweb.me/thumbnail/20230318/4f168599b9888.jpg');
})
$('.product > .inner .img_box > .img_3').click(function () {
	$('.product > .inner .pd_box > div > img').attr('src', 'https://cdn.imweb.me/thumbnail/20230318/12f0a99395462.jpg');
})


// type number 인풋 박스 --------------------------------------------------------
function numberInput() {
	$('.btn_box > .plus').click(function () {
		let $numberInput = $('.btn_box > .number');
		let currentValue = parseInt($numberInput.val()) || 0;
		$numberInput.val(currentValue + 1);
		$('.btn_box > .number').
		console.log('adfsdf');
	})
	$('.btn_box > .minus').click(function () {
		// 숫자 입력 필드 선택
		let $numberInput = $('.btn_box > input[type="number"]');
		
		// 현재 값 가져오기 (숫자형 변환)
		let currentValue = parseInt($numberInput.val()) || 1;
	  
		// 값 감소 (최소값 1)
		if (currentValue > 1) {
		  $numberInput.val(currentValue - 1);
		}
	  });
}
numberInput();