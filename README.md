# 🎬 PurpleFlix - Vertical Drama Streaming Platform

<div align="center">

![PurpleFlix Banner](https://img.shields.io/badge/PurpleFlix-Streaming%20Platform-8B5CF6?style=for-the-badge&logo=react)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**A modern streaming platform for vertical dramas with exceptional user experience**

*Developed as a technical assessment for Andia Company internship position*

[Live Demo](#) • [Documentation](#features) • [Installation](#installation)

</div>

---

## 📋 Project Context

This project was developed as a **technical assessment** for an **internship position at Andia Company**. The task was to create a fully responsive, modern streaming platform with advanced UI/UX features using React and Tailwind CSS.

### 🎯 Requirements Met
- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Modern UI with smooth animations
- ✅ Interactive video player
- ✅ RTL (Right-to-Left) support for Persian content
- ✅ Advanced search functionality
- ✅ User interaction features (Like, Bookmark, etc.)
- ✅ Clean, maintainable code structure

---

## ✨ Key Features

### 🎯 **Advanced User Experience**
- 📱 **Fully Responsive Design** - Seamless experience across mobile, tablet, and desktop
- 🌙 **Modern Dark Theme** - Beautiful UI with purple and dark color scheme
- ⚡ **Smooth Animations** - Fluid transitions and hover effects
- 🎨 **Glassmorphism & Gradients** - Modern UI effects and design patterns

### 🎬 **Video Features**
- 📹 **Vertical Full-Screen Player** - Optimized viewing experience for vertical dramas
- 🎮 **Interactive Controls** - Play/Pause, Bookmark, Like functionality
- 📊 **Information Display** - Rating, views, and movie details
- 🔄 **Expandable Descriptions** - Show more/less text functionality

### 🗂️ **Content Management**
- 🎯 **Smart Categorization** - Latest, Most Viewed, Various genres
- 🔍 **Advanced Search** - Search bar with suggestions
- 📑 **Load More Functionality** - Progressive content loading
- ⭐ **Rating System** - Display ratings for each movie

### 🎭 **User Interactions**
- ❤️ **Like & Bookmark** - Save favorite content
- 📱 **Mobile Slide Menu** - Beautiful menu sliding from right
- 🎨 **Hover Effects** - More details on card hover
- 🔔 **Newsletter** - Newsletter subscription system

---

## 🛠️ Technologies Used

### **Frontend Framework**
- ⚛️ **React 18+** - Core library for building UI
- 🎨 **Tailwind CSS 3+** - Utility-first CSS framework
- ⚡ **Vite** - Fast and modern build tool

### **Libraries & Tools**
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^5.0.0",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.4.0",
  "vite": "^5.0.0"
}
```

### **Fonts**
- 🔤 **Vazirmatn** - Modern and readable Persian font

---

## 📦 Installation & Setup

### **Prerequisites**
```bash
Node.js >= 16.x
npm >= 8.x or yarn >= 1.22.x
```

### **Installation Steps**

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/yourusername/purpleflix.git
cd purpleflix
```

2️⃣ **Install Dependencies**
```bash
npm install
# or
yarn install
```

3️⃣ **Tailwind Configuration**

In `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

4️⃣ **Add Font**

In `index.css` or `App.css`:
```css
@import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body, html, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
}
```

5️⃣ **Run the Project**
```bash
npm run dev
# or
yarn dev
```

The project will run on `http://localhost:5173` 🚀

---

## 📂 Project Structure

```
purpleflix/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Showcase.jsx            # Hero section
│   │   ├── MovieCollectionPlayer.jsx  # Player + Cards
│   │   ├── MovieSections.jsx       # Category sections
│   │   ├── MovieRow.jsx            # Movie rows
│   │   ├── MovieCard.jsx           # Single movie card
│   │   └── Footer.jsx              # Footer component
│   ├── assets/
│   │   ├── logo.png
│   │   ├── batman-bg.png
│   │   └── [movie images...]
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Main Components

### **1. Navbar**
Sticky navigation bar with:
- Hamburger menu for mobile
- Dropdown search functionality
- Interactive icons
- Download and login buttons

### **2. Showcase (Hero Section)**
Introduction section with:
- Full-screen background image
- Gradient overlay for readability
- CTA buttons
- Responsive typography

### **3. MovieCollectionPlayer**
Combination of video player and movie cards:
- Vertical player with full controls
- Movie cards with hover effects
- Like/Bookmark system
- Complete movie information

### **4. MovieSections**
Display movies in different categories:
- Horizontal scroll for mobile
- "Load More" button
- Progressive loading

### **5. Footer**
Comprehensive footer with:
- CTA section with Glassmorphism
- Important links
- Newsletter form
- Social media icons

---

## 🎯 Responsive Breakpoints

```css
/* Mobile First Approach */
sm:  640px   /* Large mobile / Small tablet */
md:  768px   /* Tablet */
lg:  1024px  /* Laptop */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Large desktop */
```

---

## 🚀 Optimizations

### **Performance**
- ⚡ Code splitting with React.lazy()
- 🖼️ Image optimization and lazy loading
- 📦 Tree shaking with Vite
- 🗜️ Minification in production

### **SEO**
- 📱 Proper meta tags
- 🔍 Semantic HTML
- ♿ Accessibility (ARIA labels)
- 🌐 Complete RTL support

### **User Experience**
- 🎨 Smooth animations (60fps)
- 📱 Touch-friendly buttons (44x44px min)
- ⌨️ Keyboard navigation support
- 🔄 Loading states and error handling

---

## 💡 Key Implementation Highlights

### **1. Responsive Design Pattern**
```jsx
// Mobile-first approach with Tailwind
<div className="w-full px-4 sm:px-8 lg:px-16">
  <h1 className="text-xl sm:text-2xl lg:text-3xl">Title</h1>
</div>
```

### **2. State Management**
```jsx
// Local state for interactive features
const [liked, setLiked] = useState(false);
const [bookmarked, setBookmarked] = useState(false);
```

### **3. Smooth Animations**
```jsx
// Transition classes for smooth effects
className="transition-all duration-300 transform hover:-translate-y-2"
```

---

## 🎬 Usage Examples

### **Adding a New Movie**

```javascript
const movies = [
  {
    title: "Movie Title",
    rating: 8.5,
    tag: "Genre",
    image: movieImage,
    views: "204K",
    description: "Movie description..."
  }
];
```

### **Customizing Theme Colors**

In `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#8B5CF6',    // Main purple
      secondary: '#7C3AED',  // Dark purple
      dark: '#0F0B1A',       // Background
    }
  }
}
```

---

## 🎓 Learning Outcomes

Through this project, I demonstrated proficiency in:

- ✅ **React Hooks** - useState, useRef for state management
- ✅ **Tailwind CSS** - Utility-first CSS and responsive design
- ✅ **Component Architecture** - Reusable and maintainable components
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **UI/UX Principles** - Smooth animations and user interactions
- ✅ **Code Organization** - Clean and structured codebase
- ✅ **RTL Support** - Right-to-left layout implementation

---

## 📝 Future Enhancements

- [ ] Add Authentication system
- [ ] User dashboard
- [ ] Payment integration
- [ ] Personal playlists
- [ ] Comments and rating system
- [ ] PWA Support
- [ ] Dark/Light mode toggle
- [ ] Multi-language support (i18n)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Mohammad Reza Mirnoori**
- GitHub: [@mohamma8d1](https://github.com/mohamma8d1)
- Email: mmmirnoori@gmail.com
- LinkedIn: [mohammad reza mirnoori]([https://linkedin.com/in/y](https://www.linkedin.com/in/mohammad-reza-mirnoori-031002331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app))

**Developed for:** Andia Company Internship Technical Assessment

---

## 🙏 Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- **Andia Company** for the opportunity and challenge

---

<div align="center">

**⭐ If you found this project interesting, please consider giving it a star! ⭐**

Made with ❤️ for Andia Company

*This project demonstrates technical skills in React, Tailwind CSS, and modern web development practices as part of the Andia Company internship application process.*

</div>
