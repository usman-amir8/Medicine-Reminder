# Medicine Reminder App

From prescription to perfect timing — your health, handled  

A cross-platform mobile application built to make medication management effortless and reliable. With an intuitive interface and smart scheduling, the app empowers users to log their medicines, set personalized reminders, and receive timely notifications. By reducing the chances of missed doses and improving adherence, it supports better health outcomes and builds consistent treatment habits — all in one streamlined experience.


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
- **Medication Logging** – Add medicines with name, dosage, type, and other essential details.  
- **Customizable Reminders** – Set daily, weekly, or flexible schedules based on your prescription.  
- **Smart Notifications** – Receive timely alerts so you never miss a dose.  
- **Progress Tracking** – Monitor your medication adherence with a clean and visual interface.  
- **Quick Actions** – Access frequently used features instantly from the home screen.  
- **Offline Support** – Manage your medications without requiring constant internet connectivity.  
- **User-Friendly Interface** – Minimal design focused on clarity and ease of use.


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
