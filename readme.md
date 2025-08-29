### `Question - Answer`

---

### 1️⃣ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

#

`Answer:`

The difference between all given element selectors in DOM.
| Method | Key Points |
|--------|-----------|
| `getElementById` | Its selects a single element by a unique _id attribute_ and it returns an element object. |
| `getElementsByClassName` | It selects all elements with same className and it returns a HTML collection of elements. |
| `querySelector` | It selects the first element of matched CSS selector such as _#id_, _.class_, _tag_, _[attribute]_ and it returns an element object. |
| `querySelectorAll` | It selects all element that matches a given CSS selector and it returns a Node list. |

---

### 2️⃣ How do you create and insert a new element into the DOM?

#

`Answer:`
A new element can be created and inserted into the DOM in 3 steps a followed.
| Steps | Details |
|--------|-----------|
| `Step-1` - Creating the element | Create a new HTML element into the DOM using document.createElement(). |
| `Step-2` - Add content | Add necessary content using innerText or innerHTML. |
| `Step-3` - Append to the DOM | Insert the new element as a child of an existing element in the DOM using parentElement.appendChild(newElement). |

---

### 3️⃣ What is Event Bubbling and how does it work?

#

`Answer:`

- **Event Bubbling:** Event bubbling is a default behavior in JavaScript where if an event triggered on a specific HTML element, it propagates upwards through the DOM to its parent elements. That means that if you click on a nested element, the click it will first be handled by that element, and then it will "bubble up" to its direct parent, then to that parent's parent, and so on, until it reaches the root of the document.

- **How it works:** If I click a `button` inside a div, the click event will first be handled by the `button`, then bubble up to the div, then the body, and so on, up to the document.

---

### 4️⃣ What is Event Delegation in JavaScript? Why is it useful?

#

`Answer:`

- **Event Delegation:** Event delegation in JavaScript is a technique for handling events efficiently, particularly when dealing with many similar elements or dynamically added elements. Instead of adding an event listener to each child element, a single event listener is attached to a common parent or ancestor element.

- **How it works:** Event delegation process follows 'Event bubbling' method. When an event occurs on an element, it bubbles up the DOM tree after triggers on the specific element.

- **Usefulness:**
  - It reduces number of event listeners, especially when dealing with a large number of dynamic elements.
  - It works dynamically and handles event automatically for element added to the DOM.
  - It cleans codes and centralized event handling.

---

### 5️⃣ What is the difference between preventDefault() and stopPropagation() methods?

#

`Answer:`
Difference between preventDefault() and stopPropagation()
| Method | What it does | Example |
|--------|--------|-----------|
| `preventDefault()` | Stops browser’s default action. Prevents the default action associated with an event. | It can stop a form from submitting when a submit button is clicked, or prevent a link from navigating when clicked.
| `stopPropagation()` | Stops the event from bubbling up the DOM tree. It prevents the event from reaching parent elements' event listeners. The event still triggers on the element it was originally attached to, but it will not propagate further up. | It stops the event from bubbling or capturing up/down to the DOM tree.

---
