const btn = document.getElementById("startBtn");
const tooltip = document.getElementById("tooltip");

btn.addEventListener("click", () => {
  const dobValue = document.getElementById("dob").value;

  if (!dobValue) {
    alert("Please select your date of birth");
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  const diffTime = today - dob;
  const weeksLived = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));

  const totalWeeks = 90 * 52;
  const weeksLeft = totalWeeks - weeksLived;

  renderGrid(weeksLived, totalWeeks, weeksLeft);
});

function renderGrid(weeksLived, totalWeeks, weeksLeft) {
  const app = document.getElementById("app");

  const yearsLived = (weeksLived / 52).toFixed(1);
  const yearsLeft = (weeksLeft / 52).toFixed(1);

  app.innerHTML = `
    <h1 class="title">Your Life</h1>
    <p class="subtitle">Each box = 1 week</p>

    <div class="stats">
      You’ve lived <b>${weeksLived}</b> weeks (~${yearsLived} years)<br>
      You have ~<b>${weeksLeft}</b> weeks left (~${yearsLeft} years)
    </div>

    <div class="grid" id="grid"></div>
  `;

  const grid = document.getElementById("grid");

  for (let i = 0; i < totalWeeks; i++) {
    const div = document.createElement("div");
    div.classList.add("week");

    if (i < weeksLived) {
      div.classList.add("past");
    }

    div.addEventListener("mousemove", (e) => {
      const age = (i / 52).toFixed(1);

      tooltip.style.left = e.pageX + 10 + "px";
      tooltip.style.top = e.pageY + 10 + "px";
      tooltip.style.opacity = 1;

      tooltip.innerHTML = `
        Week ${i + 1}<br>
        Age: ${age} yrs
      `;
    });

    div.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });

    grid.appendChild(div);
  }
}