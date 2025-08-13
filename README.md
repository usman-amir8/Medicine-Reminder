# Medicine Reminder App

A cross-platform mobile application designed to help users track and manage their medication schedules efficiently. The app allows users to log medications, set reminders, and receive timely notifications — improving medication adherence and health outcomes.

---

## Problem
Forgetting or mismanaging medication schedules is a widespread issue—affecting an estimated 50% of patients with chronic illnesses—leading to reduced treatment effectiveness, prolonged recovery, and increased health risks.

## Solution
Engineered a cross-platform medicine reminder app that enables users to schedule medications, store data offline, and receive precise, automated push notifications—helping improve medication adherence and potentially reducing missed doses by up to 80%.

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

### Auth Screen
![Auth Screen](https://github.com/usman-amir8/Medicine-Reminder/blob/main/screenshots/auth-screen.jpeg?raw=true)

### Home Screen
![Home Screen](https://github.com/usman-amir8/Medicine-Reminder/blob/main/screenshots/home-screen.jpeg?raw=true)

### Add Medication
![Add Medication](https://github.com/usman-amir8/Medicine-Reminder/blob/main/screenshots/add-medication-screen.jpeg?raw=true)



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
