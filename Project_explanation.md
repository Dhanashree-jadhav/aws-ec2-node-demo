# 🚀 AWS EC2 Node.js Deployment Project

## 📌 Project Title
AWS EC2 Node.js Application Deployment using EC2 (Beginner Friendly)

---

## 📖 Project Overview

This project demonstrates how to deploy a simple **Node.js + Express** application on an **AWS EC2 Ubuntu instance** using the AWS Free Tier.

The goal of this project is to understand:
- How AWS EC2 works
- How to deploy a backend application on the cloud
- How to securely access and manage AWS resources
- How to stop and terminate resources to avoid AWS billing

---

## 🎯 Project Objectives

- Launch an EC2 instance on AWS
- Configure security groups (firewall rules)
- Install Node.js and required dependencies
- Deploy and run a Node.js application
- Access the application via browser using EC2 Public IP
- Safely stop and terminate the EC2 instance

---

## 🧰 Technologies & Tools Used

- **AWS EC2 (Ubuntu Linux)**
- **Node.js**
- **Express.js**
- **Git & GitHub**
- **AWS Security Groups**

---

## ☁️ AWS Services Used (What & Why)

### 1️⃣ Amazon EC2
Amazon EC2 is used to create a virtual server where the Node.js application runs.

**Why EC2?**
- Provides full control over the server
- Ideal for learning cloud deployment
- Free Tier eligible

---

### 2️⃣ Security Groups
Security groups act as a firewall for the EC2 instance.

**Inbound Rules Used:**
- Port `22` → SSH access to connect to the instance
- Port `3000` → Access the Node.js application from browser

---

### 3️⃣ Key Pair
A key pair is used for secure authentication to the EC2 instance.

**Why?**
AWS does not use passwords for EC2 login. Key pairs ensure secure access.

---

## 📂 Project Structure

aws-ec2-node-demo/
├── package.json
└── server.js

yaml
Copy code

---

## 🧑‍💻 Application Code Explanation

### `server.js`

```js
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from AWS EC2!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
Explanation:
express → Web framework for Node.js

app.get('/') → Handles browser request to homepage

res.send() → Sends response to browser

0.0.0.0 → Allows external access from internet

PORT 3000 → Application runs on port 3000

⚙️ Commands Executed on EC2 (With Purpose)
Update system packages

sudo apt update
Updates package list to install latest software.

Install Node.js, npm and Git
sudo apt install -y nodejs npm git
nodejs → Runs the application
npm → Installs dependencies
git → Clone project from GitHub

Verify installation
node -v
npm -v
Confirms Node.js and npm are installed correctly.

Clone GitHub repository
git clone https://github.com/Dhanashree-jadhav/aws-ec2-node-demo.git
cd aws-ec2-node-demo

Install dependencies
npm install
Installs Express and required packages.

Run the application
node server.js
Expected output:
Server running on port 3000
🌐 Application Access
The app was accessed using:

http://<EC2-PUBLIC-IP>:3000
Browser Output:
🚀 Hello from AWS EC2!
✅ This confirms successful deployment.
