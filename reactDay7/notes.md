# Day 09 - React Learning

## Concepts in Focus

### Third Party Packages

Third-party packages are external libraries that provide additional functionality to React applications.

Benefits:
- Faster development
- Reusable code
- Community support

Example:

npm install package_name

---

## UUID (Universally Unique Identifier)

UUID is used to generate unique IDs.

### Installation

npm install uuid

### Import

import {v4 as uuidv4} from 'uuid'

### Usage

const id = uuidv4()

Purpose:
- Unique identifiers for list items
- Prevent duplicate IDs

---

## State Immutability

State should never be modified directly.

Incorrect:

this.state.contactsList.push(newContact)

Correct:

this.setState(prevState => ({
  contactsList: [...prevState.contactsList, newContact]
}))

Benefits:
- Predictable updates
- Proper component re-rendering
- Better performance

---

## Updating Objects Inside Lists

Do not modify objects directly.

Incorrect:

person.age = 25

Correct:

const updatedPerson = {
  ...person,
  age: 25
}

Purpose:
- Maintain immutability
- Safe state updates

---

## React Concepts Practiced

- Third Party Packages
- UUID Generation
- State Management
- Immutable Updates
- Updating List Items
- Event Handling
- Component Communication

---

## Key Learnings

- Generating unique IDs using UUID
- Managing dynamic lists
- Following React best practices
- Updating nested state safely