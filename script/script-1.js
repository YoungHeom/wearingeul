$(document).ready(function () {

    // support_top 버튼 ---------------------------------------------------------------
    // 스크롤 위치에 따라 탑버튼 표시
    $(window).scroll(function () {

        if ($(this).scrollTop() > 400) {
            $('.support_top_btn').addClass('show');
        } else {
            $('.support_top_btn').removeClass('show');
        }
    });

    // 위로 올라가는 애니메이션
    $('.support_top_btn, .support_top_btn_white').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200)
    });

    // 페이지 하단에서 100픽셀 이내에 도달했을 때 하얀 버튼 표시
    $(window).scroll(function () {

        if ($(this).scrollTop() + $(window).height() >= $(document).height() - 100) {
            $('.support_top_btn_white').addClass('show');
            $('.support_top_btn').hide();
        } else {
            $('.support_top_btn_white').removeClass('show');
            $('.support_top_btn').show();
        }
    });



    // banner 이미지 스와이퍼 슬라이드 --------------------------------------------------------
    var swiper = new Swiper(".main_banner", {
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
        },
        // navigation: {
        //     nextEl: ".banner_next",
        //     prevEl: ".banner_prev"
        // }
    });
});