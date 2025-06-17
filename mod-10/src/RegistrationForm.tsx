// src/RegistrationForm.tsx
import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);

  const isUsernameValid = username.trim() !== '';
  const isPasswordValid = password !== '';
  const isConfirmValid = password !== '' && confirmPassword === password;
  const isEmailValid = email === '' || email.includes('@');
  const canSubscribe = email.includes('@');

  const isFormValid =
    isUsernameValid &&
    isPasswordValid &&
    isConfirmValid &&
    isEmailValid;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log({ username, password, email, subscribeToNewsletter });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={`${styles.inputField} ${isUsernameValid ? styles.validField : ''}`}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={`${styles.inputField} ${isPasswordValid ? styles.validField : ''}`}
        />
      </div>

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

      <div className={styles.formGroup}>
        <label>Email (optional):</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`${styles.inputField} ${email && isEmailValid ? styles.validField : ''}`}
        />
      </div>

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

      <button
        type="submit"
        className={styles.submitButton}
        disabled={!isFormValid}
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
