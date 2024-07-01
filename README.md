# Image Slider

<img src="./assets/images/image-slider.png" alt="image slider" width="100%" height="auto">

## Project Structure

Basic structure of the **Image Slider** project.

```
└── 📁image-slider
    └── 📁assets
        └── 📁images
            └── large-image-1.jpg
            └── large-image-2.jpg
            └── large-image-3.jpg
            └── large-image-4.jpg
            └── small-image-1.jpg
            └── small-image-2.jpg
            └── small-image-3.jpg
            └── small-image-4.jpg
    └── 📁css
        └── styles.css
    └── 📁js
        └── main.js
    └── index.html
    └── README.md
```

> **NOTE**: photos used in this project were downloaded from [unsplash](https://unsplash.com/es).

I've seen some videos on [YouTube](https://www.youtube.com/) about how to create an *image slider* and they inspired me to create my own. I thank all the programmers who do a magnificent job in sharing their knowladge.

### Technologies used

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JavasScript)

### Custom function

* query selectors:
  - querySelector()
  - querySelectorAll()

  ```js
  // element selector
  const querySelector = (element) => document.querySelector(element);
  const querySelectorAll = (element) => document.querySelectorAll(element);
  ```
* event handler:
  - eventHandler()

  ```js
  // event handler
  const eventHandler = ($, event, callback, capture = false) => $.addEventListener(event, callback, !!capture);
  ```
* create element:
  - createElement()

  ```js
  // create element
  const createElement = (element) => document.createElement(element)
  ```

With the custom functions mentioned above, they help us avoid repeatedly writing ```document.querySelector()```, ```document.querySelectorAll()``` and ```element.addEventListener('click', () => {})```, these functions only need to be called when needed.

When you want to select an element by **class**, **id**, **element** or **data**-*, you can use the custom functions ```querySelector()``` or ```querySelectorAll()```.

```js
const images = querySelectorAll('[data-images]')
const prevBtn = querySelector('[data-state="prev"]')
```

If you want to trigger an event without constantly typing ```element.addEventListner()``` method, you can use the following custom function.

```js
const prevBtn = querySelector('[data-state="prev"');

const handlePrevImage = () => {}

eventHandler(prevBtn, 'click', handlePrevImage)
```

or 

```js
eventHandler(prevBtn, 'click', () => {
  // code here
})
```

### YouTube channels

To create these custom features, I was inpired by [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode) on his YouTube channel, on [Traversy Media](https://www.outube.com/@TraversyMedia)'s YouTube channel, on how to create an expandable cards in his [50projects50days](https://50projects50days.com) project, on [developedbyed](https://www.youtube.com/@developedbyed)'s YouTube channel on how to create a text animation.

### Maximum number

To get the maximum number of an element, we use the **.map()**, **.reduce()** and **.filter()** methods, like so.

```js
// get maximum length
const legnth = split
  .map(string => parseInt(string.length + 1))
  .filter(index => index)
  .reduce((acc, cur) => acc + cur, 48)
```

The code snippet above is a modification of the [meech_ward](https://www.instagram.com/meech_ward?igsh=enN6bDdqcnZhOGxq) Instagram account code, below is his original code.

```js
const output = "what's your perfect first date?"
  .split("")
  .map(parseInt)
  .filter(a => a)
  .reduce((a, b) => a + b)
  .toString()
  .split("")
  .reverse()
  .join("")
```

> **NOTE**: as we have four headings, we use the **.forEach()** method to iterate over them, so we need to create a variable called *length*, to get the maximum number and make the text get a fancy animation and stop when the *length* variable is equal to the variable called *char*.

Example:

```js
const selector = {
  headings: querySelectorAll('[data-title]')
}

const { headings } = selector;

const textAnimation = () => {
  headings.forEach(text => {
    const string = text.textContent;
    const split = string.split('');

    let char;
    let timeout = 30;

    text.textContent = '';

    split.forEach(element => text.innerHTML += `<span>${element}</span>`);

    const showAnimation = () =>  {
      span = querySelectorAll('span')[char];
      span.classList.add('fade');
      char++;

      // get maximum length
      const legnth = split
        .map(string => parseInt(string.length + 1))
        .filter(index => index)
        .reduce((acc, cur) => acc + cur, 48);

      if(char === length){
        completeAnimation();
        return
      }
    }

    const completeAnimation = () => {
      clearIterval(interval);
      interval = null;
    }

    let interval = setInterval(showAnimation, timeout)
  })
}

textAnimation();
```