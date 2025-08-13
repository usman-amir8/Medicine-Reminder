# Medicine Reminder App

A cross-platform mobile application designed to help users track and manage their medication schedules efficiently. The app allows users to log medications, set reminders, and receive timely notifications — improving medication adherence and health outcomes.

---

## Problem
Many people forget to take their medicines on time, leading to missed doses and reduced treatment effectiveness.

## Solution
I built a mobile app that allows users to log their medications, set schedules, and receive push notifications exactly when needed. This ensures timely intake and helps maintain consistent treatment routines.

---

## Tech Stack
- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **State Management:** Built-in React hooks
- **Notifications:** Expo Notifications API
- **Storage:** Async Storage
- **UI Components:** Custom reusable components with responsive styling

---

## Features
- Add, edit, and delete medications.
- Set daily, weekly, or custom reminder frequencies.
- Local notifications at scheduled times.
- Progress tracking with visual indicators.
- Quick actions from the home screen.
- Persistent storage so data remains after app restarts.

---

## Project Structure
app/
_layout.tsx
index.tsx
home.tsx
medications/
add-medication.tsx

assets/
fonts/
images/

components/
AddMedicationScreen/
date-picker.tsx
duration.ts
frequency.ts
reminder-section.tsx
render-duration-option.tsx
render-frequency-option.tsx
time-picker.tsx
types.ts
HomeScreenComponents/
circular-progress.tsx
medication-card.tsx
modal.tsx
quick-action-card.tsx
quick-action.ts
ui/
button.tsx
heading.tsx
icon-container.tsx
input.tsx

utils/
notification.ts
storage.ts

screenshots/
home-screen.png
add-medication.png
reminder.png

yaml
Copy
Edit

---

## Screenshots

### Home Screen
![Home Screen](https://github.com/usman-amir8/Medicine-Reminder/blob/main/screenshots/home-screen.png?raw=true)

### Add Medication
![Add Medication](https://github.com/usman-amir8/Medicine-Reminder/blob/main/screenshots/add-medication.png?raw=true)

### Reminder Notification
![Reminder Notification](https://github.com/usman-amir8/Medicine-Reminder/blob/main/screenshots/reminder.png?raw=true)

---

## Installation & Running Locally
```bash
# Clone repository
git clone https://github.com/usman-amir8/Medicine-Reminder.git

# Navigate into the project
cd Medicine-Reminder

# Install dependencies
npm install

# Start Expo server
npx expo start
License
This project is licensed under the MIT License.
