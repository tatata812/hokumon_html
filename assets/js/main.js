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

  $(".footer__scroll-btn").click(function () {
    $("body,html").animate({
        scrollTop: 0 //ページトップまでスクロール
      },
      500
    ); //ページトップスクロールの速さ。
    return false; //親要素へのイベント伝播を止める
  });

  // トップページスクロールでヘッダーロゴ出現

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $('.header-ttl-js').addClass('active');
    } else {
      $('.header-ttl-js').removeClass('active');
    }
  });

  $(".main-visual-js").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, // スライドをフェードイン・フェードアウト
    cssEase: 'linear', // アニメーション
    speed: 1000, // フェードアニメーションの速度設定
    dots: true,
    arrows: false,
    slidesToShow: 1,


  });

  // お知らせタブ
  // $(".information-section__tab-item").on("click", function () {
  //   var i = $(this).index();
  //   $(".information-section__tab-item").removeClass("active");
  //   $(".information-section__box-item").removeClass("active");
  //   $(".information-section__tab-item").eq(i).addClass("active");
  //   $(".information-section__box-item").eq(i).addClass("active");
  // });


})