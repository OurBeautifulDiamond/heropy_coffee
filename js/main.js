// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    // 상단으로 이동 버튼 보이기!
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    // 상단으로 이동 버튼 숨기기!
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
  }
});

toTopEl.addEventListener('click', function () {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
});

// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

new Swiper('.notice .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function() {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

gsap.to('.floating1', 1.5, {
  delay: 1,
  y: 15, // transform: translateY(수치); 와 같음. 수직으로 얼마나 움직일지를 설정.
  repeat: -1, // 반복회수를 설정, -1 은 무한 반복을 의미.
  yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
  ease: Power1.easeInOut // Easing 함수 적용.
});
gsap.to('.floating2', 1.5, {
  delay: .5,
  y: 15, // transform: translateY(수치); 와 같음. 수직으로 얼마나 움직일지를 설정.
  repeat: -1, // 반복회수를 설정, -1 은 무한 반복을 의미.
  yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
  ease: Power1.easeInOut // Easing 함수 적용.
});
gsap.to('.floating3', 1.5, {
  delay: 1.5,
  y: 20, // transform: translateY(수치); 와 같음. 수직으로 얼마나 움직일지를 설정.
  repeat: -1, // 반복회수를 설정, -1 은 무한 반복을 의미.
  yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
  ease: Power1.easeInOut // Easing 함수 적용.
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({ // 감시할 장면을 추가
    triggerElement: spyEl, // 감시할 요소를 지정
    triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부를 감시함
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스를 추가함
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당!
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5
});