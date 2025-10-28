# Feedback App (Week 10)

Simple React + Redux Toolkit + Material UI feedback form built with Vite.

Features
- Select a rating (1-5)
- Optional comment
- Submits feedback to Redux store and displays list below

Quick start

1. Install dependencies

```powershell
cd "c:\Users\Div\Desktop\FEDF\week10\feedback-app"
npm install
```

2. Run dev server

```powershell
npm run dev
```

Notes
- The app uses Redux Toolkit slice at `src/features/feedbackSlice.js`.
- Store is configured in `src/app/store.js` and wired in `src/main.jsx`.
- UI is built using Material UI components.
