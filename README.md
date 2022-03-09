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

Blaah

### Screenshot

### Links

- URL: [https://github.com/franziskawich/](https://github.com/franziskawich/guess-my-number-game)
- Live Site URL: [https://franziskawich.github.io/guess-my-number-game/](https://franziskawich.github.io/guess-my-number-game/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Mobile-first workflow
- BEM

### What I learned

I wanted an inner border with a border-radius for my main content, which is not possible with the `border` CSS property. I have heard about `outline` before, but I didn't know then that I could combine it with `border-radius`:

```css
outline: 3px solid rgba(255, 255, 255, 0.3);
outline-offset: -1.5rem;
border-radius: 2.25rem;
```

However, it is a bit strange that the outline becomes rectangular when you make the `border-radius` relatively small. Unfortunately, I don't know why this happens.

### Useful resources

- []() - Reason

## Author

- Frontend Mentor - [@franziskawich](https://www.frontendmentor.io/profile/franziskawich)
- freeCodeCamp - [Franziska Wich](https://www.freecodecamp.org/franziska-wich)
