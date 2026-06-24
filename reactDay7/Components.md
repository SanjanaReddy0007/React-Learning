# Comments App

## Project Overview

The Comments App is a React application that allows users to add, like, and delete comments dynamically.

The application updates the UI in real-time using React State Management.

---

## Features

### Add Comment

Users can:

- Enter Name
- Enter Comment
- Click Add Comment

Result:

- New comment added
- Comment count increases
- Input fields become empty

---

### Like Comment

Users can click the Like button.

Behavior:

- Like Image → Liked Image
- Liked Image → Like Image

Purpose:

- Toggle comment likes

---

### Delete Comment

Users can delete comments.

Result:

- Comment removed
- Comment count decreases

---

## React Concepts Used

### Components

Application divided into reusable components.

Example:

- Comments Component
- Comment Item Component

---

### State

State stores:

- Comments List
- Name Input
- Comment Input
- Likes Information

---

### Event Handling

Used for:

- Adding Comments
- Liking Comments
- Deleting Comments

---

### Conditional Rendering

Used to display:

- Like Button State
- Dynamic Images

---

### UUID Package

Used to generate unique IDs for comments.

Example:

import {v4 as uuidv4} from 'uuid'

---

## Component Structure

Comments

├── CommentItem

---

## File Structure

src

├── components

│   ├── Comments

│   │   ├── index.js

│   │   └── index.css

│   │

│   └── CommentItem

│       ├── index.js

│       └── index.css

---

## State Variables

- name
- comment
- commentsList

---

## Functions Implemented

### addComment()

Adds a new comment.

### deleteComment()

Removes selected comment.

### toggleLike()

Updates like status.

---

## Skills Learned

- React State Management
- Event Handling
- Dynamic Rendering
- List Rendering
- UUID Package Usage
- Component-Based Design

---

## Learning Outcome

Built a complete Comments Application using React concepts such as state, components, event handling, conditional rendering, and third-party packages.