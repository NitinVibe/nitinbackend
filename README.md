# Nitin Singh Tanwar — Developer Portfolio

A responsive, high-performance developer portfolio built with **React**, **Tailwind CSS**, **Vite**, and **Lucide Icons** tailored specifically for a **Python Backend & Full-Stack Developer**.

---

## 🌟 Key Features

- **⚡ Modern & Responsive Design**: Seamlessly adapts across mobile, tablet, and ultra-wide displays with smooth scrolling and animations.
- **🌓 Dark & Light Theme Switcher**: Persisted in `localStorage` with glassmorphism visual styling.
- **🚀 Interactive FastAPI / OpenAPI Playground**: Recruiters can test simulated REST endpoints live (`GET /api/v1/profile`, `GET /api/v1/skills/backend`, `GET /api/v1/projects/flagship`, `POST /api/v1/hire-me`) with formatted JSON responses and latency metrics.
- **📂 Flagship Project Showcase**: Highlights **RajPedia (RSS News Aggregator)** along with wedding event platforms, enterprise vendor management, furniture e-commerce, and web scraping utilities with an architectural details modal.
- **💼 Detailed Experience Timeline**: Displays responsibilities and production achievements during the internship at **ONEPIXEL Soft**.
- **🛠️ Structured Technical Stack**: Organized by Languages, Backend (FastAPI, REST, Pydantic, JWT), Databases (PostgreSQL, psycopg), Scraping (BeautifulSoup), Python Ecosystem (Pandas, Pillow, QRCode), and Ongoing Learning (AWS, Cloud, Advanced Python).
- **🎓 Education & Bootcamps**: B.Tech CSE (AI) from Shri Balaji College of Engineering & Technology (RTU) and intensive C/C++ in-house training.
- **📄 Printable & Downloadable Resume Modal**: Dedicated modal mirroring the exact resume format with one-click print to PDF and plain-text copy.
- **📬 Interactive Contact**: Quick email copy, WhatsApp/phone link, and contact form with celebration confetti.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
portfolio_test/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header navigation & theme switch
│   │   ├── Hero.jsx            # Dynamic typing hero & active terminal
│   │   ├── About.jsx           # Summary & engineering pillars
│   │   ├── Experience.jsx      # ONEPIXEL Soft internship timeline
│   │   ├── Projects.jsx        # Project grid & modal viewer
│   │   ├── Skills.jsx          # Technical stack badges & categories
│   │   ├── ApiPlayground.jsx   # Interactive FastAPI live sandbox
│   │   ├── Education.jsx       # Academic & training cards
│   │   ├── Contact.jsx         # Contact forms & direct links
│   │   ├── Footer.jsx          # Footer with back-to-top
│   │   ├── ResumeModal.jsx     # Printable resume popup
│   │   └── Icons.jsx           # Custom SVG brand icons
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio data
│   ├── App.jsx                 # App root & confetti triggers
│   ├── main.jsx                # React DOM entry
│   └── index.css               # Tailwind & custom utilities
├── package.json
├── tailwind.config.js
└── vite.config.js
```
