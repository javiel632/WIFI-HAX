<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WiFi Hacker TOOL| XENOCRYPT TECH</title>
  <style>
    body {
      background: #000;
      color: #0f0;
      font-family: 'Courier New', Courier, monospace;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
    canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 0;
    }h1 {
  color: #f00;
  text-align: center;
  font-size: 2.5em;
  letter-spacing: 2px;
  animation: glitch 1s infinite;
  z-index: 1;
  position: relative;
}

@keyframes glitch {
  0% { text-shadow: 2px 2px #00f, -2px -2px #0f0; }
  25% { text-shadow: -2px 2px #f0f, 2px -2px #0ff; }
  50% { text-shadow: 2px -2px #f00, -2px 2px #ff0; }
  75% { text-shadow: -2px -2px #0ff, 2px 2px #f0f; }
  100% { text-shadow: 0 0 10px #0f0; }
}

#authSection, #recoverySection {
  position: relative;
  z-index: 1;
  padding: 30px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #0f0;
  border-radius: 10px;
  width: 300px;
  margin: 40px auto;
  color: white;
  box-shadow: 0 0 10px #0f0, 0 0 20px #0f0 inset;
}

#authSection label, #recoverySection label {
  color: white;
  font-weight: bold;
  display: block;
  margin-top: 15px;
  text-shadow: 0 0 5px #0ff;
}

#authSection input, #recoverySection input {
  padding: 10px;
  margin-top: 5px;
  width: 90%;
  border: none;
  border-radius: 5px;
  background: #111;
  color: white;
  outline: none;
  box-shadow: 0 0 5px #0ff;
}

#authSection button, #recoverySection button {
  background: linear-gradient(90deg, #ff0040, #ff8000);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 15px;
  box-shadow: 0 0 10px #ff0040;
}

#forgotPassword {
  text-align: center;
  color: cyan;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;
}

#startSection {
  z-index: 1;
  position: relative;
}

#startSection button {
  background: red;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0 0 10px red;
}

#output {
  white-space: pre-wrap;
  margin-top: 20px;
  z-index: 1;
  position: relative;
  padding: 20px;
  color: #0f0;
}

#contactBtn {
  background: #0f0;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  box-shadow: 0 0 10px #0f0;
  z-index: 1;
}

footer {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  box-shadow: 0 0 5px #0f0;
}

#wifiNameContainer {
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #0f0;
  margin: 20px auto;
  width: 300px;
  text-align: center;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px #0f0;
}

#wifiNameContainer input {
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  background: #111;
  color: white;
  outline: none;
  box-shadow: 0 0 5px #0ff;
}

#wifiNameContainer button {
  background: #ff0040;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0 0 10px #ff0040;
}

  </style>
</head>
<body>
<canvas id="matrix"></canvas><h1>XENOCRYPT TECH HACKS</h1><div id="authSection">
  <label>Enter Email Address: <input type="email" id="email"></label>
  <label>Password: <input type="password" id="password"></label>
  <label>Confirm Password: <input type="password" id="confirm"></label>
  <button onclick="register()">Register / Login</button>
  <div id="forgotPassword" onclick="showRecovery()">Forgot Password?</div>
</div><div id="recoverySection" style="display:none;">
  <label>Email: <input type="email" id="recoverEmail"></label>
  <button onclick="sendRecoveryCode()">Send Recovery Code</button>
  <label>Enter Code: <input type="text" id="recoveryCode"></label>
  <label>New Password: <input type="password" id="newPass"></label>
  <label>Confirm New Password: <input type="password" id="confirmNewPass"></label>
  <button onclick="resetPassword()">Reset Password</button>
</div><div id="wifiNameContainer" style="display:none;">
  <label>Enter WiFi Name: <input type="text" id="wifiNameInput" placeholder="e.g., Linksys_Office"></label>
  <button onclick="startHack()">Start Hack</button>
</div><div id="startSection" style="display:none;">
  <button onclick="startHack()">Start Hack</button>
</div><div id="output"></div><button id="contactBtn" onclick="contactSupport()">Contact for Help</button>

<footer>
  <p>Created by Xenocrypt Tech© 2025</p>
</footer><script>
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const letters = '01';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = `${fontSize}px monospace`;
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 33);
  function stopMatrixEffect() {
    canvas.style.display = 'none';
  }

  let storedUser = localStorage.getItem("user");
  let storedPass = localStorage.getItem("pass");
  let recoveryCode = "";

  function isValidPassword(pass) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}/.test(pass);
  }

  function register() {
    const user = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    if (!user || !pass || !confirm) return alert("Please fill all fields.");
    if (storedUser && storedPass) {
      if (user === storedUser && pass === storedPass) return showHack();
      else return alert("Incorrect credentials.");
    }
    if (pass !== confirm) return alert("Passwords do not match.");
    if (!isValidPassword(pass)) return alert("Password must have symbols, upper/lowercase letters, numbers and be 12+ characters long.");
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Registered successfully!");
    showHack();
  }

  function showHack() {
    stopMatrixEffect();
    document.getElementById("authSection").style.display = "none";
    document.getElementById("wifiNameContainer").style.display = "block";
  }

  const output = document.getElementById('output');
  const messages = [
    "Found WiFi: ${wifiName}",
    "Targeting: ${wifiName}",
    "Initializing handshake...",
    "Capturing WPA handshake...",
    "Cracking password...",
    "Brute force in progress...",
    "Password sent to your Dark web account",
    "Access granted! enjoy 😊."
  
  ];

  function startHack() {
    const wifiName = document.getElementById("wifiNameInput").value || "Unknown";
    messages[1] = `Found WiFi: ${wifiName}`;

    output.innerHTML = "";
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        output.innerHTML += messages[index] + "\n";
        index++;
      } else clearInterval(interval);
    }, 1000);
  }

  function showRecovery() {
    document.getElementById("authSection").style.display = "none";
    document.getElementById("recoverySection").style.display = "block";
  }

  function sendRecoveryCode() {
    const email = document.getElementById("recoverEmail").value;
    if (email !== localStorage.getItem("user")) return alert("Email not registered.");
    recoveryCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Recovery code sent to your email: " + recoveryCode);
  }

  function resetPassword() {
    const code = document.getElementById("recoveryCode").value;
    const newPass = document.getElementById("newPass").value;
    const confirmNew = document.getElementById("confirmNewPass").value;
    if (code !== recoveryCode) return alert("Invalid recovery code.");
    if (newPass !== confirmNew) return alert("Passwords do not match.");
    if (!isValidPassword(newPass)) return alert("Password must be strong and 12+ characters.");
    localStorage.setItem("pass", newPass);
    alert("Password reset successful. Please login.");
    window.location.reload();
  }

  function contactSupport() {
    window.open("https://wa.me/254107065646?text=HELLO%20LONLEY,%20I%20need%20help%20with%20the%20WI-FI%20HACK%20TOOL.", "_blank");
  }
</script></body>
</html>
