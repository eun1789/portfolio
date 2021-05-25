var auto;
function autoSlide(){ //자동슬라이드
    auto = setInterval(function(){
        $('#slide a:first-child').stop().animate({marginLeft:'-100vw' }, 900, function(){ //pc용 슬라이드
            $('#slide').append(this);
            $('#slide a:last-child').css('marginLeft','0');
        }); 

        $('#mobileSlide a:first-child').animate({marginRiht:'=100vw' }, 900, function(){ //mobile용 슬라이드
            $('#mobileSlide').append(this);
            $('#mobileSlide a:last-child').css('marginLeft','');
        });
    },3000); 
    
    
}



$(document).ready(function(){

        autoSlide();//자동슬라이드 실행
    
        $('.next_btn').click(function(){ //다음 버튼 클릭시  다음 슬라이드 이동
            $('#mobileSlide a:first-child').stop().animate({marginLeft:'-100vw' }, 100, function(){
                $('#mobileSlide').append(this);
                $('#mobileSlide a:last-child').css('marginLeft','0');
            });
        });

        $('.prev_btn').click(function(){ //이전 버튼 클릭시 이전 슬라이드로 이동
            $('#mobileSlide a:last-child').stop().animate({marginLeft:'100vw' }, 100, function(){
                $('#mobileSlide').prepend(this);
                $('#mobileSlide a:first-child').css('marginRight','0').css('marginLeft','initial');
            });
        });

        
        $('.next_btn').click(function(){ //다음 버튼 클릭시  다음 슬라이드 이동
            $('#slide a:first-child').stop().animate({marginLeft:'-=100vw' }, 300, function(){
                $('#slide').append(this);
                $('#slide a:last-child').css('marginLeft','0');
            });
        });

        $('.prev_btn').click(function(){ //이전 버튼 클릭시 이전 슬라이드로 이동
            $('#slide a:last-child').stop().animate({marginLeft:'=100vw' }, 300, function(){
                $('#slide').prepend(this);
                $('#slide a:first-child').css('marginRight','0').css('marginLeft','initial');
            });
        });


        //슬라이드에 마우스 올렸을때 자동슬라이드 멈춤,내렸을시 실행
        $('#slide a').mouseenter(function(){
            clearInterval(auto);
        });
        $('#slide a').mouseleave(function(){
            autoSlide();
        });


        //썸네일 마우스 올렸을시 상품이름 가격 나타냄,내렸을시 사라짐
        $('.prod > .prodImg').mouseenter(function(){
            $(this).find('p').stop().fadeIn();
        });

        $('.prod > .prodImg').mouseleave(function(){
            $(this).find('p').stop().fadeOut(0);
        });
    
});

