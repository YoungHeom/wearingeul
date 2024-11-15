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

$('.tap ul li.detail').click(function() {
    $('.grid_item_box.show').show();
})