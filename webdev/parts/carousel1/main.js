$('.carousel').slick({
  autoplay: true, // 自動切り替え
  autoplaySpeed: 5000, // 切り替え速度(msec)
  arrows: true, // 矢印
  prevArrow: '<img src="../images/arrow_left.svg" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="../images/arrow_right.svg" class="slide-arrow next-arrow">',
  dots: true, // ドット
  fade: true, // フェードで切り替え
});