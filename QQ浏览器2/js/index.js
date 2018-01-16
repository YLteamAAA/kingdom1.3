/**
 * Created by Administrator on 2018/1/10.
 */
$(function () {

    var index=0,timer;
    console.log(index);
    /*4.隐藏和显示其它元素*/
    showAndHideOtherEle(index);

    /*1.监听window滚动*/
    $(window).mousewheel(function(event) {
        /*截流*/
        clearTimeout(timer);
        timer=setTimeout(function () {
            /*2.如果event.deltaY 是负数,代表是向下滚动;如果是正数,代表向上滚动*/
            var delY=event.deltaY > 0 ? 1 : -1 ;// 向上 1 ; 向下 -1
            index=index-delY;
            if(index>$('.gps li').length-1){
                index=4;
            }else if(index < 0){
                index=0;
            }
            console.log(index);
            /*3.切换选中的点*/
            $('.gps li').eq(index).addClass('current')
                .siblings('li').removeClass('current');
            /*4.切换屏幕*/
            $('section').eq(index).show()
                .siblings('section').hide();
            /*4.隐藏和显示其它元素*/
            showAndHideOtherEle(index);
            /*5.删除落空类*/
            setTimeout(function () {
                $('section').eq(index).removeClass('current')
                    .siblings('section').addClass('current');
            },20);

        },500);


    });


    /*2.监听点击事件*/
    $('.gps li').on('click',function () {
        /*1.拿到当前索引*/
        index=$(this).index();
        // alert(index);
        /*2.切换选中的点*/
        $(this).addClass('current')
            .siblings('li').removeClass('current');
        /*3.切换屏幕*/
        $('section').eq(index).show()
            .siblings('section').hide();
        /*4.隐藏和显示其它元素*/
        showAndHideOtherEle(index);
        /*5.删除落空类*/
        setTimeout(function () {
            $('section').eq(index).removeClass('current')
                .siblings('section').addClass('current');
        },20);

    })

    /**
     * 隐藏和显示其它元素
     * @param index
     */
    function showAndHideOtherEle(index) {
        /*第一屏*/
        if(index==0){
            $('.header_left').hide();
            $('.scroll').show();
        }else{
            $('.header_left').show();
            $('.scroll').hide();
        }
    }

})