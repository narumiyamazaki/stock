/*トップに戻る
$(function () {
    var pagetop = $('#js-pagetop');
    pagetop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({
          scrollTop: 0
      }, 500);
      return false;
    });
  });
*/
document.addEventListener('DOMContentLoaded', function () {
  const pagetop = document.querySelector('#js-pagetop');
  pagetop.style.display = 'none';

  window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 500) {
      fadeIn(pagetop);
    } else {
      fadeOut(pagetop);
    }
  });

  pagetop.addEventListener('click', function () {
    scrollToTop();
    return false;
  });
});

function fadeIn(element) {
  element.style.display = 'block';

  (function fade() {
    let val = parseFloat(element.style.opacity) || 0;
    
    if (val < 1) {
      val += 0.05; // Adjust the step as needed
      element.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function fadeOut(element) {
  element.style.opacity = 1;

  (function fade() {
    if ((element.style.opacity -= 0.1) < 0) { // Adjust the step as needed
      element.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function scrollToTop() {
  let startTime;
  let duration = 500;
  let startOffset = document.documentElement.scrollTop;

  function animateScroll(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }

    let progress = currentTime - startTime;
    let easeInOutQuad;
    if (progress / (duration / 2) < 1) {
      easeInOutQuad = 0.5 * Math.pow(progress / (duration / 2), 2);
    } else {
      easeInOutQuad = 1 - 0.5 * Math.abs(Math.pow((progress - duration) / (duration / 2), 2));
    }

    document.documentElement.scrollTop = easeInOutQuad * (0 - startOffset) + startOffset;

    if (progress < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}