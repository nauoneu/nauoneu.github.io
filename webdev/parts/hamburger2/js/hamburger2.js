var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');

  // .hamburger-menuの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});
