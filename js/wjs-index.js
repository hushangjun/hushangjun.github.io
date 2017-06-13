
$(function () {
    //先给每个div动态的添加a标签
    var items = $(".wjs_banner .item");
    $(window).on("resize", function () {
        var width = $(window).width();
        //判断屏幕的大小 在移动端只加载小图片  pc端只加载大图片
        if(width<768){
            $(items).each(function (index,value) {

                var imgSrc = $(this).data('smallImg');
                $(this).html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>')
            });
        }else{
            $(items).each(function (index,value) {
                var imgSrc = $(this).data('bigImg');
                $(this).html('<a href="javascript:;" class="pcImg" style="background-image: url('+imgSrc+')"></a>');
            });
        }
    }).trigger("resize");
    //实现轮播图移动端滑动操作
    var carouselInner = $(".carousel-inner")[0];
    var startX= 0,endX= 0,distancesX=0;
    carouselInner.addEventListener("touchstart", function (e) {
        startX = e.targetTouches[0].clientX;
    })
    carouselInner.addEventListener("touchmove", function () {

    })
    carouselInner.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        distancesX = endX-startX;
        if(distancesX>0){
            //下一张
            $('.carousel').carousel('prev')
        }
        if(distancesX<0){
            //上一张
            $('.carousel').carousel('next')
        }
    });

    //产品块的移动端的滑动
    //计算产品导航的实际高度
    var tabs = $('.wjs_product .nav-tabs');
    var lis = tabs.find("li");
    //设置ul的宽 ul的宽是每个li的宽相加
        var total = 0;
    lis.each(function (index,value) {
        /*
        * width():的得到是当前内容的宽度
        * innerWidth()  得到的是当前内容+padding的宽度
        * outerWidth() 得到的是当前元素的内容+padding+boder的宽度
        * outerWidth(true) 得到的是当前元素内容+padding+boder+magin的宽度*/
        total+=$(this).innerWidth();
    });
    //设置ul的宽度
    $(tabs).width(total);

    //使用插件来实现导航标签的滑动
    //IScroll插件是默认垂直滑动的  如果要水平滑动的话 要修改
    var myScroll=new IScroll(".tab_parent",{
        scrollX:true,
        scrollY:false
    })

    $('[data-toggle="tooltip"]').tooltip();



});