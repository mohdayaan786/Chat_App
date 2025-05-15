## 💬 Real-Time Chat App

A simple and responsive real-time chat application built using **Node.js**, **Express**, **Socket.io**, **MongoDB**, and **EJS**. Users can join chat rooms, send messages in real time, and see when others are typing — all with persistent chat history.

---

### ✨ Features

* 🔐 Join unique chat rooms
* 💬 Real-time messaging using WebSockets
* 👀 Typing indicators for active users
* 🧠 Messages stored in MongoDB for persistence
* 🛠 Built with clean modular code and EJS templating

---

### 🏗️ Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript, EJS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB with Mongoose
* **Realtime**: Socket.io

---

### 🚀 Getting Started

#### 🧰 Prerequisites

* Node.js v14+ and npm
* MongoDB (local or Atlas)

#### 📦 Installation

```bash
git clone https://github.com/mohdayaan786/Chat_App
cd Chat_App
npm install
```

#### ⚙️ Configuration

Update your MongoDB URI in `/config/database-config.js`.

```js
const mongoose = require('mongoose');

module.exports = async () => {
    await mongoose.connect('your-mongodb-uri');
};
```

---

### ▶️ Run the App

```bash
node index.js
```

Visit: [http://localhost:3000/chat/room1](http://localhost:3000/chat/room1)

---

### 🧪 Sample Chat Flow

1. Open multiple tabs/windows.
2. Join the same room (e.g., `room1`).
3. Type a message or watch others type in real-time.
4. Messages are stored and displayed on refresh.

---

### 📁 Project Structure

```
chat-app/
│
├── config/
│   └── database-config.js
│
├── models/
│   └── chat.js
│
├── public/
│   ├── script.js
│   └── index.html
│
├── views/
│   └── index.ejs
│
├── index.js
├── package.json
└── README.md
```

---

### 📜 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute.