// ========== TIMER ==========
let timerInterval;
function startTimer() {
  let minutes = document.getElementById("minutes").value;
  let time = minutes * 60;
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    document.getElementById("timerDisplay").textContent =
      `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    
    if (time <= 0) {
      clearInterval(timerInterval);
      alert("Time’s up!");
    }
    time--;
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("timerDisplay").textContent = "00:00";
  document.getElementById("minutes").value = "";
}

// ========== RANDOM NAME PICKER ==========
function pickName() {
  let names = document.getElementById("nameList").value.split("\n").filter(n => n.trim() !== "");
  if (names.length === 0) {
    document.getElementById("pickedName").textContent = "Please enter some names.";
    return;
  }
  let randomIndex = Math.floor(Math.random() * names.length);
  document.getElementById("pickedName").textContent = "🎉 " + names[randomIndex];
}
