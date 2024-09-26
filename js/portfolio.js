
$(function () {
   
    // 홈화면 화면이동

    $('header .pc a:nth-child(4)').click(function () {

        let sectionDistance = $('.submenu').offset().top - (0)

        $('html, body').animate({
            scrollTop: sectionDistance
        }, 800)
    })
    $('.submenu .sp').click(function(e){
        e.preventDefault()  //이벤트차단,막기
        $('html, body').stop().animate({
            scrollTop : 0
        },800)
    })
    $('header .tablet a:nth-child(2)').click(function () {

        let sectionDistance = $('.submenu').offset().top - (0)

        $('html, body').animate({
            scrollTop: sectionDistance
        }, 800)
    })
    $('.submenu .sp').click(function(e){
        e.preventDefault()  //이벤트차단,막기
        $('html, body').stop().animate({
            scrollTop : 0
        },800)
    })
    $('header .mobile a:nth-child(2)').click(function () {

        let sectionDistance = $('.submenu').offset().top - (0)

        $('html, body').animate({
            scrollTop: sectionDistance
        }, 800)
    })
    $('.submenu .sp').click(function(e){
        e.preventDefault()  //이벤트차단,막기
        $('html, body').stop().animate({
            scrollTop : 0
        },800)
    })
   
   
    // 화면 스크롤

$(window).scroll(function(e){
    e.preventDefault() 
    console.log($(window).scrollTop())
        if($(window).scrollTop() == 200){
            let sectionDistance = $('.submenu').offset().top
            $('html, body').animate({
                scrollTop: sectionDistance
            }, 800)
        }
})


$('.submenu .sp').click(function(e){
    e.preventDefault()  //이벤트차단,막기
    $('html, body').stop().animate({
        scrollTop : 0
    },800)

 })

   
 //홈화면


    $('header .pc a:nth-child(3) ').click(function (e) {
        e.preventDefault()
        $('.itview').stop().animate({
            left: '0%'
    },800)
    }) 
    $('.homeimg').click(function () {
     $('.itview').stop().animate({
            left: '-100%'
        },800)
    })
    
    $('header .tablet a:nth-child(1)').click(function (e) {
        e.preventDefault()
        $('.itview').stop().animate({
            left: '0%'
    },800)
    }) 
    $('.homeimg').click(function () {
     $('.itview').stop().animate({
            left: '-100%'
        },800)
    })
    
    $('header .mobile a:nth-child(1)').click(function (e) {
        e.preventDefault()
        $('.itview').stop().animate({
            left: '0%'
    },800)
    }) 
    $('.homeimg').click(function () {
     $('.itview').stop().animate({
            left: '-100%'
        },800)
    })

    
    $('header .pc a:nth-child(5)').click(function (e) {
        e.preventDefault()
        $('.myself').stop().animate({
            top:'0%',
            opacity: '1',
            visibility:'visible'
        },600)
    })
    
    $('header .tablet a:nth-child(3)').click(function (e) {
        e.preventDefault()
        $('.myself').stop().animate({
            top:'0%',
            opacity: '1',
            visibility:'visible'
        },600)
    })
    $('header .mobile a:nth-child(3)').click(function (e) {
        e.preventDefault()
        $('.myself').stop().animate({
            top:'0%',
            opacity: '1',
            visibility:'visible'
        },500)
    })
   
   
    $('.homeimg').click(function () {
        $('.myself').stop().animate({
            top:'100%',
            opacity: '0',
            visibility:'hidden'
           },700)
       })
    


       


    // .click(function(e) {e.preventDefault()}) a링크의 #때문에 이상한데로 이동할 떄 안가도록 함

    $('main .submenu .one').click(function (e) {
        e.preventDefault()
        $('.video1').fadeIn(1000)
    })
     $('main .submenu .two').click(function (e) {
        e.preventDefault()
        $('.video2').fadeIn(1000)
    })
    $('main .submenu .three').click(function (e) {
        e.preventDefault()
        $('.video3').fadeIn(1000)
    })
    $('.fa-house').click(function () {
        $('.video1').fadeOut()
    })
    $('.fa-house').click(function () {
        $('.video2').fadeOut()
    })
    $('.fa-house').click(function () {
        $('.video3').fadeOut()
    })



})