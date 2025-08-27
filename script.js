@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

:root {
  --bg-color: #f4f4f9;
  --text-color: #333;
  --widget-bg: white;
}

body.dark {
  --bg-color: #1e1e1e;
  --text-color: #eee;
  --widget-bg: #2b2b2b;
}

header {
  background: #4CAF50;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.widget {
  background: var(--widget-bg);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: background 0.3s ease;
}
