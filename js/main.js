(function() {
    
    toggleGnb();

    function toggleGnb() {
        var el = $('#header .gnb_wrap, body');
        var gnbBg = $('#header .gnb_bg');

        // 메뉴열기
        $('#header .btn_menu').on('click', function() {
            el.addClass('on');
            gnbBg.fadeIn();
        });
        
        // 메뉴닫기
        $('#header .btn_close').on('click', function() {
            el.removeClass('on');
            gnbBg.fadeOut();

            // gnb 초기화
            $('#header .gnb li').removeClass('on');
            setTimeout(function() {
                $('#header .gnb .depth2').slideUp();
            }, 500);
        });
        
        // gnb 배경 클릭시 메뉴닫기
        $('#header .gnb_bg').on('click', function() {
            $('#header .btn_close').trigger('click');
        });

        
        // gnb 아코디언
        $('#header .gnb>li>a').on('click', function() {
            $(this).parent().toggleClass('on').siblings().removeClass('on');
            
            // 클릭한 a의 부모 li를 열고 다른 형제 li안쪽의 depth2는 닫기
            $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();

        });

        // 클릭한 메뉴 모두 열고닫기
        // $('#header .gnb>li>a').on('click', function() {
        //     $(this).toggleClass('on');
        //     $(this).siblings('.depth2').stop().slideToggle();
        // });

        // 서브메뉴 모션 후 링크
        $('#header .gnb .depth2 a').on('click', function(e) {
            // 원래 링크 막기
            e.preventDefault();
            var url = ($(this).attr('href'));

            $(this).addClass('on');

            setTimeout(function() {
                // href 값으로 강제이동
                location.href = url;
            }, 500);
        });
    }


    
    
    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    // 메인 탭메뉴 슬라이더
    var menuSlider = new Swiper('.menu_slider', {
      
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // 메인 탭메뉴
    $('#container .main_menu .tab_menu li').on('click', function(e) {
        e.preventDefault()
        var idx = $(this).index()
        
        $(this).addClass('active').siblings().removeClass('active');
        // console.log(idx);

        $('#container .main_menu .menu_slider_blind').eq(idx).addClass('active').siblings().removeClass('active');
    });

    
    // 서브 lnb
    // 클릭시마다 이전동작 멈추게함
    // $('.lnb .btn_lnb').on('click', function() {
    //     $(this).toggleClass('active');

    //     $('.lnb .list_lnb').stop().slideToggle(250);
    // });
    
    // btn_lnb 에 active 가 없으면 리스트 열고 있으면 닫기
    // $('.lnb .btn_lnb').on('click', function() {
        
    //     if($(this).hasClass('active')) {
    //         // $('.lnb .list_lnb').slideUp(250);
    //         $(this).removeClass('active');
    //         $('.lnb .list_lnb').slideUp(200);
    //     } else {
    //         $(this).addClass('active');
    //         $('.lnb .list_lnb').slideDown(200);
    //     }
    // });

    
    var flag = true;
    
    $('.lnb .btn_lnb').on('click', function() {
        if(flag) {
            $(this).toggleClass('active');
            $('.lnb .list_lnb').slideToggle(200, function() {
                flag = true;
                console.log(flag);
            });
        }
        flag = false;
        console.log(false);
    });



})();