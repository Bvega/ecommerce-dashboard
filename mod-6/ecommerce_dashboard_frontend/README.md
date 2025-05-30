# Ecommerce Dashboard Lab - Promises and Error Handling

## 📋 Project Overview

This is a simulated e-commerce dashboard built for educational purposes. It demonstrates the use of:

* **Promises** and **asynchronous operations** in JavaScript/TypeScript
* **Chained API calls**
* **Error handling** using `.catch` and `.finally`
* **Custom error classes** (`NetworkError`, `DataError`)
* **Retry logic** for improved resilience

---

## 📁 Folder Structure

```
ecommerce-dashboard/
├── src/
│   ├── apiSimulator.ts       # Simulated API calls
│   ├── retryPromise.ts       # Retry utility
│   └── index.ts              # Main application logic
├── tsconfig.json             # TypeScript configuration
├── package.json              # NPM config & scripts
├── README.md                 # Project documentation
└── TUTORIAL.md               # Step-by-step learning guide
```

---

## 🛠 Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/ecommerce-dashboard.git
cd ecommerce-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Build and run the application:

```bash
npm run build
npm start
```

Or use the shorthand:

```bash
npm run dev
```

---

## 🔍 Learning Outcomes

By exploring this project, you’ll understand:

* How to simulate async API behavior
* How to structure error classes for clarity
* The value of retrying failed operations
* Importance of final cleanup steps

---

## 🧪 Example Output

```
Products: [ ... ]
Reviews for Laptop: [ ... ]
Sales Report: { ... }
All API calls have been attempted.
```

---

## 🔗 Resources

* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

## 📦 Scripts Summary

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "tsc && node dist/index.js"
}
```

---

## 👨‍🏫 Instructor Notes

Perfect for lab exercises to teach modern asynchronous JavaScript practices.

---

## License

MIT License
