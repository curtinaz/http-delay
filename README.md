# HTTP Delay API

A simple Express-based API that introduces a delay in responses for testing timeout behavior in applications.

## 🚀 Features
- Set a custom delay for responses.
- Works with any HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.).
- Simple and easy-to-use API.

## 🌍 Live Demo
Hosted on Render: [https://http-delay.onrender.com](https://http-delay.onrender.com)

## 📌 Endpoints

### 1️⃣ Delay Response
**URL:**
```
GET/POST/... https://http-delay.onrender.com/delay/{seconds}
```

**Description:**
Returns a JSON response after the specified number of seconds.

**Example Usage:**
```
GET https://http-delay.onrender.com/delay/10
```

**Response:**
```json
{
    "message": "Response after 10 seconds",
    "status": "success"
}
```

---

### 2️⃣ Default Instruction Message
**URL:**
```
GET https://http-delay.onrender.com/
```

**Description:**
Returns a JSON response with usage instructions.

**Example Response:**
```json
{
    "message": "Send your request to /delay/{seconds} to receive your response after X seconds.",
    "status": "success"
}
```

## 🛠️ Setup (Run Locally)
1. Clone the repository:
   ```bash
   git clone https://github.com/curtinaz/http-delay.git
   cd http-delay
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```
4. The API will be available at:
   ```
   http://localhost:3000
   ```

## 📜 License
This project is licensed under the MIT License.

---
Developed by [Curtinaz](https://github.com/curtinaz).

