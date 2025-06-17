import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  // 1) State hooks for each field
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);

  // 2) Simple email validity check
  const isEmailValid = email.includes('@');

  // 3) Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Only log if passwords match and (email is empty or valid)
    if (password === confirmPassword && (!email || isEmailValid)) {
      console.log({ username, password, email, subscribeToNewsletter });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Username */}
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>

      {/* Password */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      {/* Confirm Password + live-match error */}
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {confirmPassword && confirmPassword !== password && (
          <p style={{ color: 'red' }}>Passwords do not match.</p>
        )}
      </div>

      {/* Email (optional) */}
      <div>
        <label>Email (optional):</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      {/* Newsletter checkbox (only enabled if email valid) */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={subscribeToNewsletter}
            onChange={e => setSubscribeToNewsletter(e.target.checked)}
            disabled={!isEmailValid}
          />
          Subscribe to newsletter
        </label>
      </div>

      {/* Submit button */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
