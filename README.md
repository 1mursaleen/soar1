
# Financial Dashboard Application

This project is a responsive financial dashboard web application that showcases multiple views of financial activities. It includes features like card details, transactions, statistical charts, and user settings.

---

## Features

### Dashboard Page

- **My Cards Section**:
  - Display card details (e.g., balance, cardholder name, partially masked card number).
  - "See All" button navigates to a full list of cards.

- **Recent Transactions**:
  - List transactions with icons, descriptions, dates, and amounts (positive/negative).

- **Weekly Activity Chart**:
  - Bar chart showing daily deposits and withdrawals for the week.

- **Expense Statistics**:
  - Pie chart breaking down expenses by category (e.g., Entertainment, Investments).

- **Quick Transfer**:
  - List frequent contacts with profile pictures and roles.
  - UI for entering transfer amounts.

- **Balance History Chart**:
  - Line chart for balance trends over past months.

### Settings Page

- Tabs for "Edit Profile," "Preference," and "Security".
- Edit Profile form with fields like Name, Email, Address, etc.
- Profile picture upload/edit feature.

### Additional Features

- Responsive design for all devices (mobile, tablet, desktop).
- Interactive buttons with hover effects.
- Smooth transitions and consistent icons.

---

## Tech Stack

- **Frontend**: React.js
- **State Management**: Context API
- **Styling**: TailwindCSS
- **Charts**: Chart.js
- **Routing**: React Router

---

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/1mursaleen/soar1.git
   cd soar
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   yarn start
   ```

4. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:

   ```bash
   yarn build
   ```

---

## Project Structure

```
src/
├── components/        # Reusable components
├── pages/             # Dashboard and Settings pages
├── hooks/             # Custom React hooks
├── context/           # State management
├── assets/            # Static assets
├── styles/            # TailwindCSS configuration
├── services/          # Mock API services
└── App.js             # Entry point
```

---

## Demo

- **Live Demo**: [Vercel Link](https://soar1.vercel.app)

---

## Submission Guidelines

1. Provide a link to the Git repository with the source code.origin <https://github.com/1mursaleen/soar1> (fetch)
2. Include a README file (this document) with setup instructions and any assumptions made during development.
3. The application should be deployable locally with minimal setup steps.
4. Provide a Vercel live demo link for the website.

---

## License

This project is licensed under the [MIT License](LICENSE).
