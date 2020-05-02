# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

Note: Window is the parent of document
For example: "window.document..."

setTimeout)\_ takes 2 arguments

1. A function
2. The amount of time to wait.

A number will be given, a number(id) that can be used to cancel the timer.

```js
let id = etTimeout(function () {
  console.log("firing");
}, 2000);

clearTimeout(id);
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

Same as timeOut but will be set in interval.

```js
let intervalID = window.setInterval(function () {
  console.log(new Date());
}, 1000);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
window.clearInterval(intervalId);
```

---
