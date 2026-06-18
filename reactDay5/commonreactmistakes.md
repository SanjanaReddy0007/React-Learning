# Day 05 - React Learning

## Topic Covered

### Common React Mistakes and Best Practices

---

## 1. Missing Export Statement

Problem:
Component cannot be imported into other files.

Solution:
Use export default ComponentName.

---

## 2. Missing Import Statement

Problem:
Component is used without importing.

Solution:
Import component before using it.

---

## 3. Missing Extending React Component Class

Problem:
Class component does not extend Component.

Solution:

class Counter extends Component

---

## 4. class vs className

Problem:
Using HTML class attribute inside JSX.

Incorrect:

class="container"

Correct:

className="container"

---

## 5. onclick vs onClick

Problem:
React event names are case-sensitive.

Incorrect:

onclick

Correct:

onClick

---

## 6. Event Listeners Inside Class Component

Best Practice:
Use arrow functions for event handlers.

Benefit:
Maintains correct this reference.

---

## 7. Passing Event Handler

Incorrect:

onClick={this.onIncrement()}

Correct:

onClick={this.onIncrement}

---

## 8. Modifying State Directly

Incorrect:

this.state.count = this.state.count + 1

Correct:

this.setState()

Reason:
Direct modification does not trigger re-render.

---

## 9. Calling setState() Inside render()

Problem:
Creates infinite rendering loop.

Rule:
Never call setState() inside render().

---

## 10. Invoking Event Handler

Incorrect:

onClick={this.handleClick()}

Correct:

onClick={this.handleClick}

---

## 11. setState() is Asynchronous

Key Learning:
State updates are not immediate.

Best Practice:
Use previous state when updating values.

---

## 12. Component Should Return Single JSX Element

Problem:
Multiple JSX elements returned directly.

Solution:
Wrap using

- div
- Fragment
- <></>

---

## 13. Fragments

Purpose:
Group multiple JSX elements without creating extra DOM nodes.

Syntax:

<>
  ...
</>

---

## 14. Props are Read-Only

Rule:
Never modify props directly.

Props should only be used for reading data passed from parent components.

---

## Key Learnings

- React syntax rules
- State management best practices
- Event handling techniques
- Component structure guidelines
- Common interview mistakes

---

## Practice Summary

Studied frequently occurring React errors, debugging techniques and best practices for writing clean React applications.