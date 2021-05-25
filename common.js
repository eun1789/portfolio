$(document).ready(function(e){

    $('nav').mouseenter(function(){ //nav영역에 마우스올렸을시
        $('nav').find('#sub_menu').stop().slideDown();//메뉴 슬라이드다운
    });

    $('nav').mouseleave(function(){ //nav 영역에 마우스 치웠을시
        $('nav').find('#sub_menu').stop().slideUp(); //메뉴 슬라이드업
    });

    var tempHeight;
    $('#menuBtn').click(function(){ // 모바일 메뉴 버튼을 클릭했을때 

        tempHeight = $(window).height();

       // console.log("test1 : "+tempHeight);
        $('#mobileMenu').stop().animate({'left':0},300);// 모바일 메뉴화면 띄우기
        $('#mobileMenu').height($(window).height());
        $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
        $('html, body').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
            event.preventDefault();   
            event.stopPropagation(); 
            return false; 
        });
    });

    

    $('#menuClose').click(function(){  //모바일 메뉴닫기 버튼을 클릭했을때

       // console.log("test2: "+tempHeight);
        
        $('#mobileMenu').stop().animate({'left':-300},300);//모바일 메뉴 닫기
        $('html, body').css({'overflow': 'auto', 'height': tempHeight});
        $('html, body').off('scroll touchmove mousewheel');
    }); 

  
  
  

    
       

});