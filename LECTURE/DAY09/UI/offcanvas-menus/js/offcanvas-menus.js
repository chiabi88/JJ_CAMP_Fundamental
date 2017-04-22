/*! offcanvas-menus.js © yamoo9.net, 2017 */
jQuery(function($){
  // 제어하고자 하는 문서 요소를 찾아
  // jQuery 객체화 시킨다.

  // 모바일 뷰에서만 보이는 햄버거 토글 버튼
  var $m_button    = $('.y9-hamburger-menu a');
  // 글로벌 내비게이션 바
  var $gnb         = $('.main-nav');
  // 카트 메뉴 토글 버튼
  var $cart_button = $('.y9-cart-trigger a');
  // 카트 메뉴
  var $cart_menu   = $('.y9-cart');
  // 딤
  var $dim         = $('.y9-shadow-layer');

  /**
   * --------------------------------
   * 이벤트 바인딩 <-> 핸들러
   */
  $m_button.on('click', toggleGnb);
  $cart_button.on('click', toggleCartMenu);
  $dim.on('click', closeMenu);

  /**
   * --------------------------------
   * 이벤트 핸들러 정의
   */
  function toggleGnb() {
    $gnb.toggleClass('out-in');
    $dim.toggle(); // show <-> hide
  }
  function toggleCartMenu() {
    // console.log('toggleCartMenu');
    // 비즈니스 로직(구현할 코드)
    // 카트 메뉴를 밖에서 안으로 이동시킨다.
    if ( $cart_menu.hasClass('out-in') ) {
      $dim.hide();
      $cart_menu.removeClass('out-in');
    } else {
      // 딤처리를 한다.
      $dim.show();
      $cart_menu.addClass('out-in');
    }
  }

  function closeMenu() {
    // dim은 사라진다. (hide)
    $dim.hide();
    // 카트 메뉴도 밖으로 이동한다. (out-in 클래스 제거)
    $gnb.removeClass('out-in');
    $cart_menu.removeClass('out-in');
  }

});
