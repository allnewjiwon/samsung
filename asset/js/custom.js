
$(function(){
    // 1. 헤더 언어변경 위젯 호버 이벤트

    $('.group-lang').hover(function(){
      $('.lang-list, .header').addClass('active');
    },function(){
      $('.lang-list, .header').removeClass('active');
    })

    // 2. 헤더 위젯 rolling-area 스와이퍼


    // swiper 

    var swiper = new Swiper(".rolling-wrapper",{
        direction: "vertical",
        slidesPerView:1,
        loop: true,
        centeredSlides:true,
        autoplay: {
          delay: 1800,
        }
    });
    // 2-1) 모바일 메뉴 위젯
    var swiper2 = new Swiper(".rolling-wrapper2",{
      direction: "vertical",
      slidesPerView:1,
      loop: true,
      centeredSlides:true,
      autoplay: {
        delay: 1800,
      }
    })


 // 3. 반응형 스와이퍼 (only mobile), sc-story & sc-news

    var ww = $(window).width();
    var storySwiper = undefined;
    var newsSwiper = undefined;

    function initSwiper() {
      if (ww < 768 && storySwiper == undefined) {
        storySwiper = new Swiper(".sc-more-story .m-story", {
          slidesPerView: 1.5, 
        });
      
      } else if (ww >= 768 && storySwiper!= undefined) {
        storySwiper.destroy();
        storySwiper == undefined;
      }

      if (ww < 768 && newsSwiper == undefined) {
        newsSwiper = new Swiper(".sc-news .m-news", {
          slidesPerView: 1.5, 
        });
      
      } else if (ww >= 768 && newsSwiper!= undefined) {
        newsSwiper.destroy();
        newsSwiper == undefined;
      }

    }
    initSwiper(); // 함수 실행
      

    $(window).on("resize", function () {
      ww = $(window).width(); // 윈도우 너비 변경 인식
      initSwiper();
    }); // 해상도 변경 시 initSwiper 실행

    // $(window).trigger("resize"); 

    
    // 4. 모바일 클릭 이벤트
    $('.util-area-m .btn-area-m .btn-menu').click(function(){
      $('.menu-area-m').addClass('active');
      $('.btn-menu').addClass('hide');
      $('.btn-close').addClass('show');
    })
    $('.header-wrap-m .btn-area-m .btn-close').click(function(){
      $('.menu-area-m').removeClass('active');
      $('.btn-menu').removeClass('hide');
      $('.btn-close').removeClass('show');
    })


    //5. gsap 애니메이션
  
    //5-0) small screen (mobile) 메인 텍스트 모션
    const mobile = gsap.matchMedia();

      mobile.add("(max-width: 767px)", () => {
      
      const mainTxt = gsap.timeline({
        scrollTrigger : {
          trigger: '.main-visual',
          start: 'top top',
          end: 'bottom bottom',
          // markers: true,
        }
      })

      mainTxt
      .to('.sc-daylife .txt-area > *',{yPercent:0, opacity:1, stagger: 0.3})

    });


    
    
    // 6-1) sc-daylife txt 모션
    gsap.set('.sc-daylife .txt-area > *', {yPercent:100,opacity:0})
    // gsap.set('.sc-daylife .txt-area span', {yPercent:100,opacity:0})
    
    const mainTxt = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-visual',
        start: '20% 0%',
        end: 'bottom bottom',
      },
    })

    mainTxt 
    .to('.sc-daylife .txt-area > *',{yPercent:0, opacity:1, stagger: 0.3})
    

    // 6-2) sc-latest fix-area 모션
    gsap.set('.sc-latest .fix-area .img-box', {yPercent: 10, opacity:0})
    gsap.set('.sc-latest .fix-area .txt-box > *', {yPercent: 100, opacity:0})

    
    const latestAction1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sc-latest',
        start: '0% 50%',
        end: 'bottom bottom',
        // markers: true,
        // toggleActions : 'restart none none none',
        
      },
      defaults:{
        duration: 1,
        yPercent:0, 
        opacity:1,
      }

    })

    latestAction1
    .to('.sc-latest .fix-area .img-box',{})
   
    // fix-area 텍스트 모션
    const latestAction2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sc-latest',
        start: '0% 50%',
        end: 'bottom bottom',
        // markers: true,
        // toggleActions : 'restart none none none',
        
      },
      defaults:{
        duration: .8,
        yPercent:0, 
        opacity:1,
      }
    })

    latestAction2
    .to('.sc-latest .fix-area .txt-box > *',{stagger: .3})

    // sc-latest scroll area 이미지 모션

    gsap.set('.sc-latest .scroll-area .scroll-item .thumb-box img ', {yPercent: 100, opacity:0})
    
    gsap.utils.toArray('.sc-latest .scroll-area .scroll-item .thumb-box img').forEach(element => {
      gsap.to(element,{
        scrollTrigger: {
          trigger: element.parentElement.parentElement.parentElement, 
          start: '-25% 60%',
          end: '100% 100%',
          // markers: true,
      
        },
          duration: .8,
          yPercent:0, 
          opacity:1
        
      })
    });
        


    // 6-3) sc-latest scroll area 텍스트 모션
    gsap.set('.sc-latest .scroll-area .scroll-item .txt-box', {yPercent: 30, opacity:0})
    gsap.set('.sc-latest .scroll-area .scroll-item .info-box', {yPercent: 30, opacity:0})
    
    gsap.utils.toArray('.sc-latest .scroll-area .scroll-item .info-box').forEach(element => {
        gsap.to(element,{
          scrollTrigger: {
            trigger: element.parentElement, //scroll-item
            start: '-25% 60%',
            end: '100% 100%',
            // markers: true,
            // toggleActions : 'restart none none none',
          },
         
            duration: .8,
            yPercent:0, 
            opacity:1,
        })
      });

    gsap.utils.toArray('.sc-latest .scroll-area .scroll-item .txt-box').forEach(element => {
      gsap.to(element,{
        scrollTrigger: {
          trigger: element.parentElement.parentElement,
          start: '-25% 60%',
          end: '100% 100%',
          // markers: true,
          // toggleActions : 'restart none none none',
        },
        
          duration: .8,
          yPercent:0, 
          opacity:1,
      })
    })

    //  6-4) 레이아웃 공통 모션  

    gsap.set('.common .thumb-box img',{yPercent: 100, opacity:0})
    gsap.set('.common .txt-box',{yPercent: 30, opacity:0})

    $('.contents-list.scroll').each(function(i,el){
      parentEl = $(this).parents('.scroll-parent');
      imgEl = $(this).find('img');
      txtEl =  $(this).find('.txt-box');

      const commonMotion = gsap.timeline({
        scrollTrigger: {
          trigger: parentEl,
          start: '20% 50%',
          end: '0% 80%',
          // markers: true,
          // toggleActions : 'play none reset none', //enter // leave //
        },
      })

      commonMotion
      .addLabel('a')
      .to(imgEl,{
        duration: .8,
        yPercent:0, 
        opacity:1,
        stagger: .1 
      },'a')
      .to(txtEl,{
        duration: .8,
        yPercent:0, 
        opacity:1,
        stagger: .1 
      },'a+=0.5')
    })

// 7) sc-sort 스크롤 & 클릭 이벤트 작동 후 초기화 & 재실행
    $(window).scroll(function(){
      curr = $(this).scrollTop();
      sortPatent = $('.sc-sort').offset().top;

      $('.accordion-item').each(function(i,el){
        sortOffset = $(this).offset().top;
      
        if(curr >= sortOffset-(window.innerHeight/2) && $(this).find('.group-contents').hasClass('on')){
          $(this).addClass('effect-motion');
        }
      })
      
      if(curr < sortPatent-window.innerHeight){
        $('.accordion-item').removeClass('effect-motion')
      }

    })
 

    $('.accordion-item').click(function(){
      if($(this).hasClass('effect-motion')){
        $(this).removeClass('effect-motion')  
        $(this).find('.group-contents').removeClass('on')
        $(this).find('.desc').removeClass('effect')
        $(this).find('.contents-list').removeClass('effect')
      }else{
        $(this).addClass('effect-motion')
        $(this).find('.group-contents').addClass('on')
        $(this).find('.desc').addClass('effect')
        $(this).find('.contents-list').addClass('effect')
      }

      if($(this).find('.group-contents').hasClass('on')){
        $(this).find('.group-flex span').addClass('active')
      }else{
        $(this).find('.group-flex span').removeClass('active')
      }
      
    })
    // 8. view-more area action
    $('.view-more-area').each(function(i,el){
      parentEl = $(this).parents();
      lineEl = $(this).find('.line');
      txtEl = $(this).find('.txt');

      const viewAction = gsap.timeline({
        scrollTrigger : {
          trigger: parentEl,
          start: "40% 0%",
          end: "100% 0%",
          // markers : true,
        }
      })
      viewAction 
      .addLabel('a')
      .to(lineEl,{
        height:"30px",
        duration: .5,
        ease:Power2.easeIn
      },'a')
      .to(txtEl,{
        opacity:1, 
        duration: 1,
      },'a+=.5')
    })
      
  }) 

