# Image Slider

Photos used in this project were downloaded from [unsplash](https://unsplash.com/es).

I've seen some videos on [YouTube](https://www.youtube.com/) about how to create an *image slider* and they inspired me to create my own. I thank all the programmers who do a magnificent job in sharing their knowladge.

## Technologies used

* **HTML5**
* **CSS3**
* **JS**

## Custom function

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

The custom function mentioned above, intent to avoid to write repeadly *document.querySelector()*, *document.querySelectorAll()* and *element.addEventListener('click', () => {})*, you use need to call these function when you need them, like so.

When you want to select an element by a **class**, **id**, **element** or **data**-*, you can use *querySelector()* or *querySelectorAll()* custom functions.

```js
const images = querySelectorAll('[data-images]')
const prevBtn = querySelector('[data-state="prev"]')
```

If you want to trigger an event without writing constantly *element.addEventListner()* method, you can use this custom function.

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

## YouTube channels

To create these custom features, I was inpired by [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode) on his YouTube channel, on [Traversy Media](https://www.outube.com/@TraversyMedia)'s YouTube channel, on how to create an expandable cards in his [50projects50days](https://50projects50days.com) project, on [developedbyed](https://www.youtube.com/@developedbyed)'s YouTube channel on how to create a text animation.

## Maximum number

To get the maximum number of an element, we can use the **.map()**, **.reduce()** and **.filter()** methods, like so.

```js
// get maximum length
const legnth = split
  .map(string => parseInt(string.length + 1))
  .filter(index => index)
  .reduce((acc, cur) => acc + cur, 48)
```

The code snippet above was taken from [meech_ward](https://www.instagram.com/meech_ward?igsh=enN6bDdqcnZhOGxq) Instagram account.

As we have four headings, we use the **.forEach()** method to iterate over them, so we need create a variable called *length*, to get the maximum number and make the text get a fancy animation and stop when the *length* variable is equal to the variable called *char*.

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