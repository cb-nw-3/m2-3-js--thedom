# 2.3.1 - The DOM

##

When you load a web page in the browser...

1. Retrieves the HTML text and parses it.
2. Builds a _model_ of the document structure
3. Uses this model to render the page on the screen.

This is the **D**ocument **O**bject **M**odel.

---

The DOM is a data structure that we can read and modify.

It acts as a _live_ data structure. When it's modified, the page on the screen is updated. 🤯

---

## So what does DOM look like?

You can see it in your developer tools in the browser.

It looks _almost_ identical to the HTML you wrote...

---

The DOM is actually your _corrected_ HTML.

⚠️ This means that it is actually impossible to debug your HMTL with devTools.

---

A nested set of boxes

<img src="assets/dom_example.png" />

---

- For each box, there is an objet that we can interact with
- Each node may contain/refer to other nodes that we call _children_.
- Similar to a tree.

---

End nodes are usually called leaves.

<img src="assets/dom_tree.png" />

---

JavaScript can modify _all_ of the HTML elements on the page.

<img src="assets/html_tree.gif" style="height: 400px" />

---

## Getting an element

---

You can access a single DOM node using [`document.querySelector()`](https://www.w3schools.com/jsref/met_document_queryselector.asp).

This takes a CSS selector.

---

You can also get _all_ of the elements matching a selector with [`document.querySelectorAll()`](https://www.w3schools.com/jsref/met_document_queryselectorall.asp)

---

## Modify Elements

---

### Modify a Node

You can modify the content of a node with:

- [`.innerText()`](https://www.w3schools.com/jsref/prop_node_innertext.asp)
- [`.innerHTML()`](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

```js
// Example
```

---

### Creating and Appending nodes

---

To add a new node to an HTML page, you need to do it in 3 steps.

1. Create the new node
2. Add content to that node
3. add that node to an existing node.

---

- [`document.createElement()`](https://www.w3schools.com/jsref/met_document_createelement.asp)
- [`node.appendChild()`](https://www.w3schools.com/jsref/met_node_appendchild.asp)

```js
// Example
```

---

### Styling DOM elements

We can style elements from JavaScript.

- Use the element's `style` attribute.
- Modify the `classList` of the element.

---

#### The `style` attribute

1. Target the element using one of the methods we've just learned.
2. Modify its `style` attribute.

`<div id="my-div">...content...</div>`

```js
const myDiv = document.querySelector("#my-div");

myDiv.style.background = "purple";
```

---

Inline styles are not ideal:

- Very high specificity
- No access to media queries, pseudo-elements...

---

#### Using `classList`

Calling `myDiv.classList` returns a [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList).

😭 It is _read-only_, but ...

---

... it is _modifiable_. 😃

...

To modify a `classList`, we have a few methods we can call.

- `.add()`
- `.remove()`
- `.toggle()`

```js
// Example
myDiv.classList.add("primary");

myDiv.classList.remove("secondary");

myDiv.classList.toggle("active");
```

---

## Changing attributes

---

[`node.setAttribute`](https://www.w3schools.com/jsref/met_element_setattribute.asp) lets you change any HTML attribute.

---

---

---

---

---

# Lecture april 29 2020.

# CLI Tips and Definitions

import mdxTheme from ‘../theme’;
export const theme = mdxTheme;

# Command Line Interface

[object Object]
We’ve been using the command line for a little while now.

Let’s develop some context.

[object Object]

# What is Bash?

Two things:

1. An environment to run commands
2. A programming language

[object Object]
The Bash shell lets us run commands.

\$ cd some-project

```


$ git clone https://github.com/some-project
```

[object Object]
Bash can also be used for programming - it has things like if/else statements!

It’s not a very nice language though. We won’t be learning it.

[object Object]

# What is Zsh?

Zsh is an _alternative to Bash_.

Every Mac and Linux computer comes with either Bash or Zsh pre-installed as the default “terminal environment”.

[object Object]
In the past, it was quite a bit different. Over the years, the two have converged.

Nowadays there is very little difference.

[object Object]
None of the things we’ve seen change depending on whether you use Bash or Zsh

Differences include autocompletion, advanced configuration options.

[object Object]

# What is Node?

Node is a _javascript runtime_. It’s a Javascript engine, much like the one that is built into the browser.

[object Object]
Node can be launched through Bash/Zsh:

\$ node

```

[object Object]
This is an _interactive environment_ similar to the Chrome developer tools (like what I use in lecture).

It is not identical though. For example: `window`.

[object Object]
When you launch Node, you stop being in Bash. You’ve switched environments.

[object Object]
Node is an _active process_. It runs until you quit it. You can press `CTRL+C` to quit.

[object Object]
Node can also be used to _run scripts_.


$ node exercise-1.js
```

[object Object]
Think of this as:

- Opening `node`
- Copy/pasting the contents of the file into the JS environment
- Quitting `node`

[object Object]

## Recommended workflow

[object Object]
Most of the time, you should use Node to run scripts (`node my-script.js`). Re-run the script whenever you make a change to see the new result.

[object Object]
If you want to play with an idea, or experiment, or see what an expression evaluates to, an interactive environment (`node`) is useful.

[object Object]
Any questions?
