/*! carousel.basic.js © yamoo9.net, 2017 */

// 커버 데이터
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

// --------------------------------------------------------------------------------------------

var coverList_el = document.querySelector('.music-coverlist');

// 템플릿
var i = 0;
var l = coverList.length;
var inner_html_code = '';
var src;
var alt;

for ( ; i<l; ++i ) {
  src = '../media/cover/' + coverList[i].src;
  alt = coverList[i].alt;
  inner_html_code += '<li class="music-cover-item">';
  inner_html_code +=    '<img class="music-cover is-rwd" src="'+ src +'" alt="'+ alt +'">';
  inner_html_code += '</li>';
}

coverList_el.innerHTML += inner_html_code;

// --------------------------------------------------------------------------------------------

var index    = 0;
var distance = 400;

var controller = document.querySelector('.player-controller');
var prev_btn   = controller.querySelector('.is-prev');
var next_btn   = controller.querySelector('.is-next');

prev_btn.onclick = function() {
  if ( --index < 0 ) { index = coverList.length - 1; }
  coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
};

next_btn.onclick = function() {
  if ( ++index === coverList.length ) { index = 0; }
  coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
};

// --------------------------------------------------------------------------------------------

var indicators      = document.querySelector('.player-indicators')
var k               = coverList.length;
var indicators_html = [];

for( ; --k > -1; ) {
  var label = coverList[k].alt;
  indicators_html.push('<a href role="tab" class="indicator" aria-label="'+label+'"></a>');
}

indicators.innerHTML = indicators_html.reverse().join('');


var indicatros_tabs  = indicators.querySelectorAll('a');
var active_indicator = indicatros_tabs[index];
var h = indicatros_tabs.length
var j = 0;
var tab;

active_indicator.classList.add('is-active');

for ( ; j < h; j++ ) {
  tab = indicatros_tabs[j];
  tab.index = j;
  tab.onclick = function(event) {
    index = this.index;
    this.parentNode.querySelector('.is-active').classList.remove('is-active');
    this.classList.add('is-active');
    coverList_el.style.transform = 'translateX(' + index * -1 * distance + 'px)';
  };
}
