<div align="center">

```
██╗     ██╗███████╗███████╗    ██╗███╗   ██╗    ██╗    ██╗███████╗███████╗██╗  ██╗███████╗
██║     ██║██╔════╝██╔════╝    ██║████╗  ██║    ██║    ██║██╔════╝██╔════╝██║ ██╔╝██╔════╝
██║     ██║█████╗  █████╗      ██║██╔██╗ ██║    ██║ █╗ ██║█████╗  █████╗  █████╔╝ ███████╗
██║     ██║██╔══╝  ██╔══╝      ██║██║╚██╗██║    ██║███╗██║██╔══╝  ██╔══╝  ██╔═██╗ ╚════██║
███████╗██║██║     ███████╗    ██║██║ ╚████║    ╚███╔███╔╝███████╗███████╗██║  ██╗███████║
╚══════╝╚═╝╚═╝     ╚══════╝    ╚═╝╚═╝  ╚═══╝     ╚══╝╚══╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝
```

### *4,680 boxes. One life. How many have you filled?*

<br/>

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-lifeinweeksdax.vercel.app-ffffff?style=for-the-badge&labelColor=000000)](https://lifeinweeksdax.vercel.app/)
&nbsp;
[![GitHub](https://img.shields.io/badge/SOURCE-GitDaksh%2Fsummary-ffffff?style=for-the-badge&labelColor=000000&logo=github&logoColor=white)](https://github.com/GitDaksh/summary)

<br/>

![HTML](https://img.shields.io/badge/HTML-43.5%25-555?style=flat-square&labelColor=111)
![CSS](https://img.shields.io/badge/CSS-51.9%25-555?style=flat-square&labelColor=111)
![JS](https://img.shields.io/badge/JS-4.6%25-555?style=flat-square&labelColor=111)
![No dependencies](https://img.shields.io/badge/dependencies-zero-555?style=flat-square&labelColor=111)

</div>

---

## What is this?

**Life in Weeks** is a memento mori visualizer — a stark, minimal tool that maps your entire life as a grid of small boxes. Each box is one week. Enter your date of birth and watch your existence render itself, one square at a time.

It's part productivity tool, part philosophical gut-punch.

Born from a bored afternoon of vibe coding, it grew into something that genuinely makes you stop and think.

---

## Features

### 🗓 The Grid
Your life rendered as **4,680 boxes** (assuming 90 years). Filled boxes are the weeks you've lived. Empty boxes are the weeks you haven't. It's that simple, and that confronting.

### 🎨 Life Phase Shading
Weeks are color-coded by era — each phase a distinct shade of grey:

| Phase | Age Range | Shade |
|---|---|---|
| Childhood | 0 – 12 | White |
| Adolescence | 12 – 18 | Light grey |
| Young Adult | 18 – 35 | Mid grey |
| Midlife | 35 – 60 | Dark grey |
| Senior | 60+ | Darkest grey |

### ⏱ Live Countdown Clock
A real-time ticker counting down years, days, hours, minutes, and seconds until your set lifespan. It ticks every second. It doesn't stop. Neither does time.

### 🎚 Lifespan Slider
Adjust your expected lifespan from **60 to 110 years**. The grid, countdown, stats, and progress bar all update live. Optimistic? Pessimistic? The math doesn't care.

### 📊 Stats Bar
At a glance:
- Total weeks lived
- Years lived
- Weeks remaining
- Percentage of life used
- Total days on Earth

### 📅 Reflection Panel
Click any box and a panel slides in showing:
- The exact calendar date range of that week
- Your precise age at that moment (years + months)
- The life phase you were in
- The calendar year
- A contextual reflection

### ⊕ Snap to Now
A single button that scroll-jumps to your current week and flashes it. Because sometimes you lose yourself in the past.

### 🏔 Milestone Markers
Key ages (18, 21, 25, 30, 40, 50, 60, 70, 80) are visually marked on the grid. Subtle — but they're there.

### ⇪ Share Card
Generates a formatted text card with your full life stats, ready to copy and share.

### 🎂 Next Birthday Countdown
Footer shows exactly how many days until your next birthday.

---

## Stack

```
Vanilla HTML  ·  CSS  ·  JavaScript
No frameworks. No build tools. No dependencies.
Just three files.
```

Typography: **Playfair Display** + **DM Mono**  
Hosted on: **Vercel**

---

## Running Locally

```bash
git clone https://github.com/GitDaksh/summary.git
cd summary
```

Then open `index.html` in your browser. That's it. No `npm install`. No build step. No config.

```
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## File Structure

```
summary/
├── index.html     # Structure & markup
├── style.css      # All styling, animations, responsive breakpoints
└── script.js      # Logic, grid rendering, countdown, interactions
```

---

## Responsive

Tested and tuned across every screen size:

| Device | Breakpoint |
|---|---|
| 4K displays | 2560px+ |
| Desktop | 1280px+ |
| Tablet landscape | 1024px |
| Tablet / large phone | 768px |
| Small phones | 480px |
| Tiny phones | 360px – 320px |

On mobile, the tooltip becomes a tap-to-open bottom sheet. The countdown condenses. The grid scales. Everything adapts.

---

## The Philosophy

> *"It is not death that a man should fear, but he should fear never beginning to live."*
> — Marcus Aurelius

Memento mori isn't about despair. It's about clarity. Seeing your life as a finite grid of boxes makes the abstract suddenly concrete. It doesn't tell you what to do with your remaining weeks — that part's on you.

---

## License

MIT — do whatever you want with it.

---

<div align="center">

made with an existential crisis and a free afternoon

**[→ lifeinweeksdax.vercel.app](https://lifeinweeksdax.vercel.app/)**

</div>
