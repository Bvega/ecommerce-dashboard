# Registration Form Project

A simple React + TypeScript application demonstrating a styled registration form with live validation and state management using `useState`.

## Features

* Username, Password, Confirm Password, Email fields
* Live password match validation with inline error message
* Email validation (checks for `@`)
* "Subscribe to Newsletter" checkbox enabled only with valid email
* Disabled "Register" button until all validations pass
* Styled with CSS Modules for scoped, maintainable styles
* Dark theme with centered form card

## Tech Stack

* React 18
* TypeScript
* Vite
* CSS Modules

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd mod-10
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173`.

## File Structure

```
mod-10/
├── public/
│   └── index.html
├── src/
│   ├── index.css        # Global dark theme and centering styles
│   ├── main.tsx         # Entry point, imports global styles and App component
│   ├── App.tsx          # Wraps RegistrationForm in centered container
│   ├── RegistrationForm.tsx
│   └── RegistrationForm.module.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Usage

* Fill in all fields. The Register button remains disabled until:

  * Username is non-empty
  * Password is non-empty and matches Confirm Password
  * Email is empty or contains `@`
* The newsletter checkbox only becomes clickable when a valid email is entered.
* Upon successful validation, clicking "Register" logs the form data to the console.

## Customization

* **Styling**: Modify `RegistrationForm.module.css` to adjust colors, spacing, or typography.
* **Validation**: Enhance validation logic in `RegistrationForm.tsx` (e.g., stronger email regex, password strength).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source and available under the MIT License.
