# Project Structure

## 📁 Component Architecture

```
src/
├── App.js (Main component - manages state and logic)
├── index.js (Entry point)
└── components/
    ├── Header.jsx (App header with title and theme toggle)
    ├── TaskModal.jsx (Modal for creating new tasks)
    ├── TaskList.jsx (Container for all task cards)
    ├── TaskCard.jsx (Individual task item with checkbox)
    ├── EmptyState.jsx (Shown when no tasks exist)
    └── AddTaskButton.jsx (Button to open task modal)
```

## 🎨 Component Hierarchy

```
App
├── TaskModal
│   └── Form inputs (title, description, priority)
│
└── Container
    ├── Header
    │   ├── Title & Active task counter
    │   └── Theme toggle button
    │
    ├── TaskList
    │   ├── TaskCard (for each task)
    │   │   ├── Checkbox
    │   │   ├── Task details
    │   │   ├── Priority badge
    │   │   └── Delete button
    │   │
    │   └── EmptyState (when no tasks)
    │
    └── AddTaskButton
```

## 🔄 Data Flow

1. **App.js** - Main state management
   - Manages tasks array
   - Handles CRUD operations
   - Controls modal visibility
   - Manages theme (dark/light mode)

2. **Components** - Pure presentational components
   - Receive data via props
   - Call callback functions for actions
   - No direct state management
   - Fully reusable

## 🎯 Key Features

- ✅ Task completion checkbox
- 🎨 Priority levels (High, Medium, Low)
- 🌙 Dark/Light theme toggle
- 💾 LocalStorage persistence
- 🗑️ Delete tasks
- ✨ Beautiful animations

## 🚀 Component Responsibilities

### **App.js**
- State management
- Business logic
- Data persistence
- Theme management

### **Header.jsx**
- Display app title
- Show active task count
- Theme toggle button

### **TaskModal.jsx**
- New task form
- Input validation
- Priority selection

### **TaskList.jsx**
- Render task cards
- Handle empty state

### **TaskCard.jsx**
- Display task details
- Toggle completion
- Delete task

### **EmptyState.jsx**
- Show when no tasks

### **AddTaskButton.jsx**
- Trigger modal open
