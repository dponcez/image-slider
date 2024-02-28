const initApp = () => {
  // element selectors
  const querySelectorAll = (element) => document.querySelectorAll(element);
  const querySelector = (element) => document.querySelector(element);

  // event
  const eventHandler = ($, event, callback) => $.addEventListener(event, callback);

  const selectors = {
    headings: querySelectorAll('[data-title]'),
    description: querySelectorAll('[data-description]'),
    userInfo: querySelectorAll('[data-user-info'),
    imageInfoContainer: querySelectorAll('[data-image-info]'),
    images: querySelectorAll('[data-expand-image]'),
    buttons: querySelectorAll('[data-state]'),
    dotContainer: querySelector('[data-navigation]')
  }

  const {
    headings,
    description,
    userInfo,
    imageInfoContainer,
    images,
    buttons,
    dotContainer
  } = selectors

  let index = 0;
  const LENGTH = imageInfoContainer.length - 1;

  // slider buttons
  buttons.forEach(button => {
    eventHandler(button, 'click', () => {
      button.dataset.state === 'next' ?
        index++ : index--;

      index > LENGTH ?
        index = 0 :
        index < 0 ?
        index = LENGTH : 0;
      
        headingAnimation();
        updateActiveClass(index);
        updateImageSlider(index)
    })
  })

  // text animation
  const headingAnimation = () => {
    headings.forEach(text => {
      const string = text.textContent;
      const split = string.split('');

      let char = 0;
      let timeout = 30;

      text.textContent = '';

      split.forEach(element => text.innerHTML += `<span>${element}</span>`);

      const showAnimation = () => {
        const span = querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;

        description.forEach(para => {
          if(para.classList.contains('fade--up')){
            para.classList.remove('fade--up')
          }
        });

        userInfo.forEach(para => {
          if(para.classList.contains('fade--bottom__up')){
            para.classList.remove('fade--bottom__up')
          }
        });

        
        const length = split
          .map(string => parseInt(string.length + 1))
          .filter(index => index)
          .reduce((acc, cur) => acc + cur, 48);

        if(char === length){
          completeAnimation();
          return
        }
      }
      
      const completeAnimation = () => {
        clearInterval(interval);
        description.forEach(para => para.classList.add('fade--up'));
        userInfo.forEach(para => para.classList.add('fade--bottom__up'));

        interval = null;
      }

      let interval = setInterval(showAnimation, timeout)
    })
  }

  headingAnimation();

  // navigation dots
  const createNavigationDots = () => {
    const createElement = (element) => document.createElement(element);

    for(let i = 0; i < imageInfoContainer.length; i++) {
      const dot = createElement('div');
      dot.classList.add('dot');
      dotContainer.appendChild(dot);

      eventHandler(dot, 'click', () => {
        headingAnimation();
        updateActiveClass(i);
        updateImageSlider(i);
      })
    }

    dotContainer.children[0].classList.add('active')
  }

  createNavigationDots();

  // update elements by class
  const updateActiveClass = (i) => {
    const activeElement = querySelector(".sm--image.active");
    activeElement.classList.remove("active");
    images[i].classList.add("active");

    updateNavigationDots(i);
  };

  const updateNavigationDots = (value) => {
    const currentDot = querySelector('.dot.active');
    currentDot.classList.remove('active');
    dotContainer.children[value].classList.add('active');
  }
 
  // update images
  const updateImageSlider = (number = 0) => {
    imageInfoContainer.forEach((slide, index) =>  {
      slide.style.transform = `translateX(${(index - number) * 100}%)`;
    });
  }

  // set 3D effect on images when you hover over them
  const setEffectOnImages = () => {
    images.forEach(image => {
      eventHandler(image, 'mousemove', (event) => {
        const width = image.clientWidth;
        const height = image.clientHeight;

        if(image.classList.contains('active')){
          // piece of code extracted from @midudev on tiktok account
          const { layerX, layerY } = event;
          const rotationXAxis = ((layerX - width / 2) / width) * 20;
          const rotationYAxis = ((layerY - height / 2) / height) * 20;

          const template = `
            perspective(31.25em)
            scale(1, 1.1)
            rotateX(${rotationXAxis}deg)
            rotateY(${rotationYAxis}deg)
          `;

          image.style.transform = template;
          image.style.zIndex = 4;
        }
        
      });

      eventHandler(image, 'mouseleave', () => {
        const template = `
          perspective(0)
          scale(1)
          rotateX(0)
          rotateY(0)
        `;

        image.style.transform = template;
      })
    })
  }

  setEffectOnImages()
}

document.addEventListener('DOMContentLoaded', initApp)