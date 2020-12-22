;(function(window,document,$,undefined){
   
var circle = $(".circle"); //each()메소드 객체 배열처리
var totLen = []; //배열의 틀로 비어놓으면 밑에서 idx의 값을 받아와서 입력시킴
var s = [6,4,5,7]; //배열을 사용하는 경우는 [5,6,8,4];써ㅏ도ㅓㅁ //각각 그래프가 채워지는데 걸리는 시간을 배열을 사용하여 각기 따로조정
var slice = [];//1초당 채워지는 조각의 길이를 말함
var tot = [0,0,0,0]; //누적합계, 누적변수는 무조건 초기값 0, 말그대로 누적된것이기때문에 비워두면 안됨(NaN뜸)
var setId = [];
var per = [.87, .45, .69, 1];
var x = [];
var color = ["#c77","#99c","#9c9","#b7b"]

sbgAnimFn();

function sbgAnimFn(){

    //totLen이 4개 배열이니까 다 배열처리/여러개하겠다는의미임/대괄호쳐줌
    $.each(circle, function(idx,obj){
        totLen[idx] = obj.getTotalLength();
        //배열의 경우 이렇게 써도 됨->totLen[idx] = obj.getTotalLength(); //4개의 객체를 각각 저장 = 전체길이 추출
        //console.log( totLen[idx] );

        obj.style.strokeDasharray = totLen[idx];
        obj.style.strokeDashoffset = totLen[idx];

        //카운트 초당 조각길이 계산
        slice[idx] = (totLen[idx] / s[idx])/100; //만약 전체길이가 100이라면 초 당 채워지는 길이는 20, 5초동안 채워질거임

        setId[idx] = setInterval(function(){

            tot[idx] += slice[idx];
            console.log( totLen[idx] );

            if( tot[idx] > totLen[idx]*per[idx] ){
                clearInterval(setId[idx]);
            }

            $(obj).css({ strokeDashoffset : totLen[idx]-tot[idx] });//totLen[idx]-tot[idx] 선채우기 ,tot[idx] 선지우기
            x[idx] = Math.round( (tot[idx]/totLen[idx])*100 ) + "%";
            $(".num").eq(idx).find("h2").text( x[idx] ).css({ color : color[idx] });
            circle.eq(idx).css({ stroke : color[idx] });

        },1000/100)
    })

}
    
})(window,document,jQuery);