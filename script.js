/* SLIDER PROJECTS */
const $ = (selector) => {
  return document.querySelector(selector);
};

function next() {
  // if ($('.hide')) {
  //   $('.hide').remove();
  // }

  /* Step */

  if ($('.prev')) {
    $('.prev').classList.add('hide');
    $('.prev').classList.remove('prev');
  }

  $('.act').classList.add('prev');
  $('.act').classList.remove('act');

  $('.next').classList.add('act');
  $('.next').classList.remove('next');

  /* New Next */
  $('.new-next').classList.add('next');
  $('.new-next').classList.remove('new-next');

  $('.new-next-2').classList.add('new-next');
  $('.new-next-2').classList.remove('new-next-2');

  $('.new-next-3').classList.add('new-next-2');
  $('.new-next-3').classList.remove('new-next-3');

  $('.new-next-4').classList.add('new-next-3');
  $('.new-next-4').classList.remove('new-next-4');

  $('.hide').classList.add('new-next-4');
  $('.hide').classList.remove('hide');

  // const addedEl = document.createElement('li');

  // $('.photo-list').appendChild(addedEl);
  // addedEl.classList.add('next', 'new-next');
}

function prev() {
  // $('.new-next').remove();

  /* Step */
  $('.next').classList.add('new-next');
  $('.next').classList.remove('next');

  $('.act').classList.add('next');
  $('.act').classList.remove('act');

  $('.prev').classList.add('act');
  $('.prev').classList.remove('prev');

  $('.hide').classList.add('prev');
  $('.hide').classList.remove('hide');

  $('.new-next-4').classList.add('hide');
  $('.new-next-4').classList.remove('new-next-4');

  $('.new-next-3').classList.add('new-next-4');
  $('.new-next-3').classList.remove('new-next-3');

  $('.new-next-2').classList.add('new-next-3');
  $('.new-next-2').classList.remove('new-next-2');

  $('.new-next').classList.add('new-next-2');
  $('.new-next').classList.remove('new-next');

  /* New Prev */

  // const addedEl = document.createElement('li');

  // $('.photo-list').insertBefore(addedEl, $('.photo-list').firstChild);
  // addedEl.classList.add('hide');
}

slide = (element) => {
  /* Next slide */

  if (element.classList.contains('next')) {
    next();

    /* Previous slide */
  } else if (element.classList.contains('prev')) {
    prev();
  }
};

const slider = $('.photo-list');
// TODO activate swipe for MOBILE
// const swipe = new Hammer($('.swipe'));

slider.onclick = (event) => {
  slide(event.target);
};

// swipe.on('swipeleft', (ev) => {
//   next();
// });

// swipe.on('swiperight', (ev) => {
//   prev();
// });
