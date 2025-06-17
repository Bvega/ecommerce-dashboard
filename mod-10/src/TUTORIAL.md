# Step-by-Step Tutorial: Registration Form Component

This tutorial guides you through creating a styled React + TypeScript registration form with live validation and CSS Modules. Follow each stage and use the provided code snippets.

---

## Prerequisites

* **Node.js** (v14+)
* **npm** (v6+)
* **Git**
* Basic familiarity with React and TypeScript

---

## Stage 1: Clone & Initialize Project

1. **Clone repository** (or create a new folder):

   ```bash
   git clone <repository-url> mod-10
   cd mod-10
   ```
2. **Initialize with Vite + React + TS**:

   ```bash
   npm create vite@latest . -- --template react-ts
   ```
3. **Install dependencies**:

   ```bash
   npm install
   ```
4. **Verify**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` and you should see the Vite React welcome page.

---

## Stage 2: Global Styles & Centering

1. **Create** `src/index.css`:

   ```css
   html, body {
     height: 100%; margin: 0; background-color: #121212;
     font-family: sans-serif;
   }

   .app-container {
     height: 100%; display: flex;
     justify-content: center; align-items: center;
   }
   ```
2. **Import** in `src/main.tsx` (or `src/index.tsx`):

   ```ts
   import './index.css';
   ```

---

## Stage 3: App Component Setup

1. **Edit** `src/App.tsx`:

   ```tsx
   import React from 'react';
   import RegistrationForm from './RegistrationForm';

   const App: React.FC = () => (
     <div className="app-container">
       <RegistrationForm />
     </div>
   );

   export default App;
   ```

---

## Stage 4: Create RegistrationForm Component

1. **Create** `src/RegistrationForm.tsx` with:

   ```tsx
   import React, { useState } from 'react';
   import styles from './RegistrationForm.module.css';

   const RegistrationForm: React.FC = () => {
     // State hooks
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [email, setEmail] = useState('');
     const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);

     // Validation flags
     const isUsernameValid = username.trim() !== '';
     const isPasswordValid = password !== '';
     const isConfirmValid = confirmPassword === password && password !== '';
     const isEmailValid = email === '' || email.includes('@');
     const canSubscribe = email.includes('@');
     const isFormValid = isUsernameValid && isPasswordValid && isConfirmValid && isEmailValid;

     // Submit handler
     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       if (isFormValid) console.log({ username, password, email, subscribeToNewsletter });
     };

     return (
       <form onSubmit={handleSubmit} className={styles.formContainer}>
         {/* Username */}
         <div className={styles.formGroup}>
           <label>Username:</label>
           <input
             type="text"
             value={username}
             onChange={e => setUsername(e.target.value)}
             className={`${styles.inputField} ${isUsernameValid ? styles.validField : ''}`}
           />
         </div>

         {/* Password */}
         <div className={styles.formGroup}>
           <label>Password:</label>
           <input
             type="password"
             value={password}
             onChange={e => setPassword(e.target.value)}
             className={`${styles.inputField} ${isPasswordValid ? styles.validField : ''}`}
           />
         </div>

         {/* Confirm Password */}
         <div className={styles.formGroup}>
           <label>Confirm Password:</label>
           <input
             type="password"
             value={confirmPassword}
             onChange={e => setConfirmPassword(e.target.value)}
             className={`${styles.inputField} ${isConfirmValid ? styles.validField : ''}`}
           />
           {confirmPassword && !isConfirmValid && (
             <p className={styles.errorText}>Passwords do not match.</p>
           )}
         </div>

         {/* Email */}
         <div className={styles.formGroup}>
           <label>Email (optional):</label>
           <input
             type="email"
             value={email}
             onChange={e => setEmail(e.target.value)}
             className={`${styles.inputField} ${email && isEmailValid ? styles.validField : ''}`}
           />
         </div>

         {/* Newsletter Checkbox */}
         <div className={styles.checkboxContainer}>
           <label>
             <input
               type="checkbox"
               checked={subscribeToNewsletter}
               onChange={e => setSubscribeToNewsletter(e.target.checked)}
               disabled={!canSubscribe}
             />
             Subscribe to newsletter
           </label>
         </div>

         <button type="submit" className={styles.submitButton} disabled={!isFormValid}>
           Register
         </button>
       </form>
     );
   };

   export default RegistrationForm;
   ```

---

## Stage 5: Style with CSS Modules

1. **Create** `src/RegistrationForm.module.css`:

   ```css
   .formContainer {
     width: 320px; padding: 2rem;
     border-radius: 8px; background-color: #1e1e1e;
     box-shadow: 0 4px 12px rgba(0,0,0,0.5);
   }
   .formGroup { margin-bottom: 1rem; }
   .formGroup label { display: block; margin-bottom: 0.25rem; color: #fff; font-weight: 500; }
   .inputField {
     width: 100%; padding: 0.5rem;
     background-color: #2c2c2c; border: 1px solid #444;
     border-radius: 4px; color: #fff; box-sizing: border-box;
   }
   .inputField:focus { border-color: #4caf50; outline: none; }
   .inputField::placeholder { color: #888; }
   .validField { border-color: #4caf50; }
   .errorText { color: #ff7070; font-size: 0.875rem; margin-top: 0.25rem; }
   .checkboxContainer { display: flex; align-items: center; margin-bottom: 1rem; }
   .submitButton {
     width: 100%; padding: 0.75rem; border: none; border-radius: 4px;
     background-color: #4caf50; color: #fff; font-size: 1rem;
     cursor: pointer; transition: background-color 0.2s ease;
   }
   .submitButton:disabled { background-color: #555; cursor: not-allowed; }
   ```
2. **Verify** import in `RegistrationForm.tsx`:

   ```ts
   import styles from './RegistrationForm.module.css';
   ```

---

## Stage 6: Test & Validate

1. **Restart server**:

   ```bash
   npm run dev
   ```
2. **Open** `http://localhost:5173`.
3. **Test** every interaction:

   * Form centered on dark background
   * Labels in white, placeholder in light gray
   * Inputs show green border when valid
   * Inline error for password mismatch
   * Checkbox enables only with valid email
   * Register button disabled until form is valid

---

## Stage 7: Commit & Deploy

1. **Stage & commit**:

   ```bash
   git add .
   git commit -m "Add comprehensive registration form tutorial"
   ```
2. **Push** to your remote:

   ```bash
   git push origin main
   ```
3. (Optional) **Deploy** to GitHub Pages or similar.

---

Congratulations! You now have a fully styled, validated registration form component with a clear, step-by-step guide included in your project as `TUTORIAL.md`. Feel free to adapt or extend this tutorial for future exercises.
