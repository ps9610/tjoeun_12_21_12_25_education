;(function(window,document,$,undefined){

    //배열 처리
    //배열 메서드/맨앞에꺼를한칸씩옆으로이동시키는작업
        //ㄴ>shift()<->unshift(), push(), pop()
    var imsi = null;
    var a = [4,3,0,1,2];//배열의가운데숫자가첫번째슬라이드
        //console.log(a);

        //a.shift();//시프트이동결과/맨앞의배열값삭제됨
        //console.log(a);
            //ㄴ>삭제되서 어디로감?/임시(imsi)에 봐관해줌(임시로가게해줌)

            //nextSlide
            //imsi = a.shift();//시프트이동결과/맨앞의배열값삭제됨/삭제되서 어디로감?/임시(imsi)로가게해줌
            //a.push(imsi); // imsi에 보관된 배열값을 a에 다시 넣어준다/순서는가장맨뒤에넣어짐/nextSlide의형태를가짐
            //console.log(a);
    
    $(".nextBtn").on({//버튼누를때마다imsi실행됨/한번누르면한번뒤로/두번누르면두번뒤로/이런식으로
        click : function(){

            imsi = a.shift();
            a.push(imsi);
            console.log(a);
            slide3dMainFn();

        }
    });

    //prevSlide
    $(".prevBtn").on({//버튼누를때마다imsi실행됨/한번누르면한번뒤로/두번누르면두번뒤로/이런식으로
        click : function(){

            imsi = a.pop(imsi);//이게맨뒤의값삭제시켜줌
            a.unshift(imsi); //얘는 배열값이 뒤에 늘어남/맨뒷배열값을삭제하고/임시에추가시켜줌
            console.log(a);
            slide3dMainFn();

        }
    });

    function slide3dMainFn(){ //css에서구현했던그대로갖다쓴거임
        $(".slide").eq(a[0]).css({left:-780}).stop().fadeIn(500,function(){
            $(this).css({ zIndex:1, transform:"perspective(1500px) scale(.5) rotateY(0deg) translateZ(-200px)" ,opacity:.5});
            $(this).find("img").css({ outlineColor:"rgba(0,150,0)" });
        });
        $(".slide").eq(a[1]).css({left:-580, opacity:1}).stop().fadeIn(500,function(){
            $(this).css({ zIndex:2, transform:"perspective(1500px) scale(.8) rotateY(-70deg) translateZ(-50px)" }); 
            $(this).find("img").css({ outlineColor:"rgba(0,150,0)" });
        });
        $(".slide").eq(a[2]).css({left:0, opacity:1}).stop().fadeIn(500,function(){
            $(this).css({ zIndex:3, transform:"perspective(1000px)scale(1.2) rotateY(0deg) translateZ(0px)" });
            $(this).find("img").css({ outlineColor:"rgba(150,0,0)" });
        });
        $(".slide").eq(a[3]).css({left:580, opacity:1}).stop().fadeIn(500,function(){
            $(this).css({ zIndex:2, transform:"perspective(1500px) scale(.8) rotateY(70deg) translateZ(-50px)" }); 
            $(this).find("img").css({ outlineColor:"rgba(0,150,0)" });
            
        });
        $(".slide").eq(a[4]).css({left:780}).stop().fadeIn(500,function(){
            $(this).css({ zIndex:1, transform:"perspective(1500px) scale(.5) rotateY(0deg) translateZ(-200px)" ,opacity:.5}); 
            $(this).find("img").css({ outlineColor:"rgba(0,150,0)" });
        })
        //1.CSS그대로갖다써/2.eq에배열넣어/배열값전달받게
    }
})(window,document,jQuery);