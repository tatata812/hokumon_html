$(function () {

  $(".header__open-btn").click(function () {
    $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp").click(function () {
    $(".header__open-btn").toggleClass("active"); //ボタン自身に activeクラスを付与し
    $(".header-sp").toggleClass("open-menu"); //ナビゲーションにクラスを付与
  });

  $(".header-sp__nav-link").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $("header__open-btn").removeClass("active"); //ボタンの activeクラスを除去し
  });

  $(".top-to-js").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });


  $(".main-visual-js").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear', // アニメーション
    speed: 1000, // フェードアニメーションの速度設定
    dots: true,
    arrows: true,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        }
      },
    ],
  });

  $(".top-info-js").slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          arrows: false,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ],
  });

  function checkBreakPoint() {
    w = $(window).width();
    if (w <= 600) {
      // スマホ向け（767px以下のとき）
      $('.top-plan-js').not('.slick-initialized').slick({
        //スライドさせる
        autoplay: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
      });
    } else {
      // PC向け
      $('.top-plan-js.slick-initialized').slick('unslick');
    }
  }
  // ウインドウがリサイズする度にチェック
  $(window).resize(function(){
    checkBreakPoint();
  });
  // 初回チェック
  checkBreakPoint();

  //フェードイン
  $(window).scroll(function () {
    const windowHeight = $(window).height(); //ウィンドウの高さ
    const scroll = $(window).scrollTop(); //スクロール量

    $(".fade-in-js").each(function () {
      const targetPosition = $(this).offset().top; //要素の上からの距離
      if (scroll > targetPosition - windowHeight + 50) {
        $(this).addClass("action");
      }
    });
  });


})