<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Message</title>
  <meta name="viewport" content="width=device-width,initial-scale=1" />

  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui, Segoe UI, Roboto, Arial;
      overflow: hidden;
      background: linear-gradient(135deg, #f6d8ff, #d4e9ff, #fdf1d6);
      background-size: 400% 400%;
      animation: gradientMove 12s ease infinite;
    }

    @keyframes gradientMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .card {
      text-align: center;
      padding: 32px;
      border-radius: 16px;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.55);
      box-shadow: 0 8px 35px rgba(0,0,0,0.1);