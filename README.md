# 💼 Ritik Ranjan - Portfolio

A modern, responsive portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. Showcase your skills, projects, education, and experience with a stunning interactive interface.

**Live Demo:** [https://rajritik21.github.io/Ritik_Portfolio/](https://rajritik21.github.io/Ritik_Portfolio/)

---

## 🌟 Features

- ✨ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Modern UI/UX** - Smooth animations and interactive components
- 🎨 **Tailwind CSS** - Beautiful, utility-first styling
- 📧 **Contact Form** - Integrated with EmailJS for direct email notifications
- 🎪 **Icon Cloud** - Visual representation of tech skills
- 📱 **Smooth Scrolling** - Navigation with smooth scroll behavior
- 📊 **Dynamic Sections** - Hero, Skills, Projects, Education, Experience, Training
- 🚀 **Optimized Performance** - Fast load times and smooth interactions
- 📝 **TypeScript** - Type-safe code for better reliability

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **React Scroll** - Smooth scrolling
- **Framer Motion** - Animations

### Tools & Services
- **EmailJS** - Contact form email service
- **React Icon Cloud** - Animated skill icons
- **Simple Icons** - Technology icons
- **Vite/React Scripts** - Build tools
- **GitHub Pages** - Hosting

---

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/rajritik21/Ritik_Portfolio.git
cd Ritik_Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up EmailJS (Optional but Recommended)

To enable the contact form email functionality:

#### Step 1: Create an EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. The free tier allows 200 emails per month (perfect for portfolios)

#### Step 2: Create an Email Service
1. Go to "Email Services" tab
2. Click "Add New Service"
3. Connect your email provider (Gmail, Outlook, etc.)
4. Copy your **Service ID**

#### Step 3: Create an Email Template
1. Go to "Email Templates" tab
2. Create a new template with these variables:
```
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```
3. Copy your **Template ID**

#### Step 4: Get Your Public Key
1. Go to Account Settings
2. Copy your **Public Key**

#### Step 5: Update Environment Variables
Create a `.env.local` file in the root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
REACT_APP_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

Or directly update the values in [src/components/Contact.tsx](src/components/Contact.tsx):
```typescript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### 4. Run Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server at localhost:3000 |
| `npm build` | Build optimized production bundle |
| `npm test` | Run tests in watch mode |
| `npm run deploy` | Deploy to GitHub Pages |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Landing section
│   ├── Skills.tsx          # Skills showcase with icon cloud
│   ├── Projects.tsx        # Portfolio projects
│   ├── Experience.tsx      # Work experience
│   ├── Education.tsx       # Educational background
│   ├── Training.tsx        # Certifications & training
│   ├── Contact.tsx         # Contact form with EmailJS
│   ├── Footer.tsx          # Footer section
│   └── IconCloud.tsx       # Animated icon cloud
├── constants/
│   └── skills.ts           # Skills data
├── App.tsx                 # Main app component
├── index.tsx               # React entry point
├── App.css                 # App styles
└── index.css               # Global styles
public/
├── index.html              # HTML template
└── assets/                 # Images and static files
```

---

## 🎨 Customization

### Update Personal Information
Edit [src/components/Hero.tsx](src/components/Hero.tsx):
```typescript
name: "Your Name",
title: "Your Title",
description: "Your description"
```

### Add/Edit Skills
Update [src/constants/skills.ts](src/constants/skills.ts) with your technologies.

### Modify Content
Edit individual component files in [src/components/](src/components/) to update:
- Projects
- Experience
- Education
- Training certificates

### Customize Styling
- Global styles: [src/index.css](src/index.css)
- Component styles: [src/App.css](src/App.css)
- Tailwind config: [tailwind.config.js](tailwind.config.js)

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `homepage` in [package.json](package.json) with your GitHub Pages URL:
```json
"homepage": "https://YOUR_USERNAME.github.io/Ritik_Portfolio"
```

2. Install gh-pages (if not already installed):
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Select `gh-pages` branch
   - Select `/ (root)` folder

### Deploy to Other Platforms
- **Vercel**: Connect repo → auto-deploys on push
- **Netlify**: Connect repo → configure build settings
- **Render**: Similar to Netlify, select main branch

---

## 📱 Responsive Design

The portfolio is mobile-first responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

All sections adapt beautifully across devices.

---

## 🐛 Troubleshooting

### Contact Form Not Sending Emails?
- Verify EmailJS credentials are correct
- Check browser console for error messages
- Ensure `.env.local` variables are set (if using environment variables)
- Test limit (free tier: 200/month)

### Port 3000 Already in Use?
```bash
npm start -- --port 3001
```

### Build Issues?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 👤 About Author

**Ritik Ranjan**
- Computer Science Engineering Student at Haldia Institute of Technology
- Passionate about Web Development and Full-Stack Applications
- 🔗 [LinkedIn](https://www.linkedin.com/in/ritik-ranjan-7b7799241/)
- 🐙 [GitHub](https://github.com/rajritik21)

---

## 📄 License

This project is open source and available under the MIT License. Feel free to use it as a template for your own portfolio!

---

## 🤝 Contributing

Found a bug or have suggestions? Feel free to open an issue or submit a pull request.

---

## 📧 Support

For questions or support, reach out through:
- Portfolio Contact Form
- Email: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]

---

## ⭐ Acknowledgments

- Created with React and Tailwind CSS
- Icons from Simple Icons and React Icon Cloud
- Email service by EmailJS
- Hosted on GitHub Pages

---

**Built with ❤️ by Ritik Ranjan**
