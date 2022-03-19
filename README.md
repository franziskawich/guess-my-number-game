# Guess my number (game)

This is a small game based on a project from a JS course (The Complete JavaScript Course by Jonas Schmedtman). I completely changed the visual design and rewrote the code myself using what I have learned so far and made some small changes.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The game explained

The user has to guess a random number between 1 and 50 correctly in 10 attempts and can try to beat their own high score by trying again. If the user guesses wrong, a message is displayed indicating whether the guess was too low or too high. The user loses the game when they cannot guess the secret number in 10 attempts.

### Screenshot

![Screenshot](/design/screenshot.PNG)

### Links

- URL: [https://github.com/franziskawich/](https://github.com/franziskawich/guess-my-number-game)
- Live Site URL: [https://franziskawich.github.io/guess-my-number-game/](https://franziskawich.github.io/guess-my-number-game/)

## My process

### Built with

- HTML5
- CSS
- JavaScript
- BEM
- Mobile-first workflow

### What I learned

I wanted an inner border with a border-radius for my main content, which is not possible with the `border` CSS property. I have heard about `outline` before, but I didn't know then that I could combine it with `border-radius`:

```css
outline: 3px solid rgba(255, 255, 255, 0.3);
outline-offset: -1.5rem;
border-radius: 2.25rem;
```

However, it is a bit strange that the outline becomes rectangular when you make the `border-radius` relatively small. Unfortunately, I don't know why this happens.

At first I wanted to add `autofocus` to the `<input>` element, but I reconsidered after reading that this could confuse visually-impaired people and people with cognitive impairments.

I have learned that it is always good to use a label for an input.

It was a bit difficult to arrange the elements at the same height in the two-column layout. I achieved my goal, but there is probably a more elegant solution.

I relearned the order of pseudo-classes for anchors: a:link, a:visited, a:hover and then a:active.

### Useful resources

- [MDN: <input>-attribute autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) - Useful explanation for the use of the autofocus attribute.
- [CSS-Tricks: HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/) - Useful article that helped me decide whether or not to use a `<label>` for my `<input>` element.
- [w3schools](https://www.w3schools.com/css/css_pseudo_classes.asp) - Useful to remember the order of pseudo-classes for an anchor.

## Author

- Frontend Mentor - [@franziskawich](https://www.frontendmentor.io/profile/franziskawich)
- freeCodeCamp - [Franziska Wich](https://www.freecodecamp.org/franziska-wich)
