;(function(window,document,$,undefined){

    var imsi = null;
    var slide3d = [0,1,2,3,4,5,6];

    //imsi = slide3d.shift(); 
    //console.log(slide3d); //결과 [2,3,4,3,2,1];로 length:6;/맨 앞의 배열값 삭제됨/삭제된거임시에보관
    //slide3d.push(imsi);
    //console.log(slide3d);

    $(".slide-container").swipe({
        swipeLeft : function(){

            imsi = slide3d.shift();
            slide3d.push(imsi);
            console.log(slide3d)
            main3dslideFn();
        },
        swipeRight : function(){

            imsi = slide3d.pop();
            slide3d.unshift(imsi);
            console.log(slide3d)
            main3dslideFn();
        }
    })

    function main3dslideFn(){

        $(".slide").eq(slide3d[0]).css({left:-300}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:1, transform:"perspective(2000px) rotate(0) skew(0) scale(.3)" })
        });
        $(".slide").eq(slide3d[1]).css({left:-250}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:2, transform:"perspective(2000px) rotate(0) skew(0) scale(.5)" })
        });
        $(".slide").eq(slide3d[2]).css({left:-150}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:3, transform:"perspective(2000px) rotate(0) skew(0) scale(.8)" })
        });

        $(".slide").eq(slide3d[3]).css({left:0}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:4, transform:"perspective(4000px) rotate(0) skew(0) scale(1.2)" })
        });

        $(".slide").eq(slide3d[4]).css({left:150}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:3, transform:"perspective(2000px) rotate(0) skew(0) scale(.8)" })
        });
        $(".slide").eq(slide3d[5]).css({left:250}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:2, transform:"perspective(2000px) rotate(0) skew(0) scale(.5)" })
        });
        $(".slide").eq(slide3d[6]).css({left:300}).stop().fadeIn(0,function(){
            $(this).css({ zIndex:1, transform:"perspective(2000px) rotate(0) skew(0) scale(.3)" })
        });
    }

})(window,document,jQuery);