/*! jquery.music.player.js © yamoo9.net, 2017 */

var coverList = [
  {
    src: "001.EdSheeran-ShapeOfYou.jpg",
    alt: "Ed Sheeran - Shape Of You"
  },
  {
    src: "002.TheChainsmokers&Halsey-Closer.jpg",
    alt: "The Chainsmokers & Halsey - Closer"
  },
  {
    src: "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
    alt: "Zayn & TaylorSwift - I Don't Wanna Live Forever (Fifty Shades Darker)"
  },
  {
    src: "004.KatyPerry&SkipMarley-ChainedToTheRhythm.jpg",
    alt: "Katy Perry & Skip Marley - Chained To The Rhythm"
  },
  {
    src: "005.Migos&LilUziVert-BadAndBoujee.jpg",
    alt: "Migos & Lil Uzi Vert - Bad And Boujee"
  },
  {
    src: "006.TheChainsmokers-Paris.jpg",
    alt: "The Chainsmokers - Paris"
  },
  {
    src: "007.Rihanna-LoveOnTheBrain.jpg",
    alt: "Rihanna - Love On The Brain"
  },
  {
    src: "008.BrunoMars-That'sWhatILike.jpg",
    alt: "Bruno Mars - That's What I Like"
  },
  {
    src: "009.BigSean-BounceBack.jpg",
    alt: "Big Sean - Bounce Back"
  },
  {
    src: "010.MachineGunKelly&CamilaCabello-BadThings.jpg",
    alt: "Machine Gun Kelly & Camila Cabello - Bad Things"
  }
];

jQuery(function($){

  /////////////
  // STEP 1. //
  /////////////

  // `.music-player` 요소 만들기
  var $m_player = $('<div class="music-player">');

  // <body> 요소의 첫번째 자식으로 추가(삽입)
  $m_player.prependTo('body');

  // 변수 $m_player에 담긴 객체 확인
  console.log('$m_player:', $m_player);


  /////////////
  // STEP 2. //
  /////////////

  // ul.music-coverlist 요소 $m_player 객체 내부에 추가하기
  // $('<ul class="music-coverlist is-list">').appendTo($m_player);
  $m_player.append('<ul class="music-coverlist is-list">');

  // ul.music-coverlist 요소를 참조하는 jQuery 객체 변수에 할당
  // var $m_coverlist = $('.music-coverlist', $m_player);
  var $m_coverlist = $m_player.find('.music-coverlist');
  // console.log('$m_coverlist:', $m_coverlist);

  // JavaScript 스타일 코드
  for ( var i=0, l=coverList.length; i<l; ++i ) {
    var cover = coverList[i];
    var $cover = $([
      '<li class="music-cover-item">',
        '<img class="music-cover is-rwd" src="../../media/cover/'+ cover.src +'" alt="'+ cover.alt +'">',
      '</li>'
    ].join('')).appendTo($m_coverlist);
    // console.log($cover.html());
    // $m_coverlist.append($cover);
  }

  // jQuery 스타일 코드

});
