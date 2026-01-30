# Expense Tracker (Context API)

## English

### Project overview

Expense Tracker is a small budget planner built with React, TypeScript, and Vite. It lets you define a budget, record expenses, filter them by category, and visualize how much of the budget has been used. Data is persisted in the browser via localStorage.

### Features

- Set and reset a budget.
- Add, edit, and delete expenses.
- Filter expenses by category.
- Visual budget usage indicator.
- Local persistence using localStorage.

### Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Headless UI
- Heroicons
- date-fns
- react-date-picker
- react-swipeable-list
- react-circular-progressbar

### Installation & setup

1. Install dependencies:
   - npm install
2. Start the dev server:
   - npm run dev

### Environment variables

No environment variables are required.

### Scripts

- npm run dev — start the development server
- npm run build — build for production
- npm run preview — preview the production build
- npm run lint — run ESLint

### Project structure

```
src/
  components/        UI components
  context/           React Context provider
  data/              Static data (categories)
  helpers/           Formatting utilities
  hook/              Custom hooks
  reducers/          State reducer
  types/             Shared TypeScript types
```

### Future improvements

- Add tests (unit and integration).
- Improve input validation and error handling.
- Extract localStorage access into a dedicated persistence layer.
- Add i18n support to unify language usage.
- Improve accessibility and keyboard support.

---

