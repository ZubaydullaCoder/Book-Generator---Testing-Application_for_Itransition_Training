````markdown
# 📚 Book Generator - Testing Application

A modern web application for generating and testing bookstore data with multi-language support. Built with **Next.js 14**, **TailwindCSS**, and **Shadcn UI**.

---

## 🚀 Features

### **Dynamic Book Generation**

✅ Multi-language support (English, German, French)  
✅ Deterministic data generation with seed control  
✅ Realistic book titles, authors, and descriptions  
✅ ISBN generation with validation

### **Interactive Controls**

✅ Language/Region selector  
✅ Seed value input with random generation  
✅ Average likes per book slider (0-10, fractional values)  
✅ Average reviews per book input with fractional support

### **Responsive Data Display**

✅ Infinite scrolling table view  
✅ Expandable book details  
✅ Dynamic cover image generation  
✅ Real-time data updates

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** TailwindCSS + Shadcn UI
- **State Management:** Zustand
- **Data Fetching:** TanStack Query
- **Mock Data:** Faker.js
- **Infinite Scroll:** React Intersection Observer

---

## 📦 Installation

1️⃣ Clone the repository:

```sh
git clone <repository-url>
```
````

2️⃣ Install dependencies:

```sh
npm install
```

3️⃣ Start the development server:

```sh
npm run dev
```

4️⃣ Open in browser:  
 [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
src/
├── app/                   # Next.js App Router
├── components/            # React components
│   ├── books/            # Book-related components
│   ├── controls/         # User input controls
│   └── ui/               # Shadcn UI components
├── lib/                   # Utilities and helpers
│   ├── generators/       # Data generation logic
│   ├── store/            # Zustand store
│   └── utils/            # Helper functions
└── styles/               # Global styles
```

---

## 🎮 Usage

### **Language Selection**

🔹 Choose between **English (US), German, and French**  
🔹 Data automatically regenerates in the selected language

### **Seed Management**

🔹 Enter a specific **seed value** for reproducible results  
🔹 Use the **random seed generator** for varied data

### **Content Controls**

🔹 Adjust **average likes per book (0-10)**  
🔹 Set **average reviews per book**  
🔹 All changes reflect immediately in the table

### **Data Exploration**

🔹 **Infinite scroll** to load more books dynamically  
🔹 Click on rows to **expand book details**  
🔹 View **generated reviews and ratings**

---

## 🧪 Features in Detail

### **📖 Data Generation**

- Books generate **server-side** for consistency
- Seed value ensures **reproducible results**
- Page number affects **generated content**
- **Fractional values** for likes/reviews

### **🎨 UI/UX**

- **Responsive** design for all screen sizes
- **Loading states** and smooth animations
- **Error handling** with fallback mechanisms
- **Seamless infinite scrolling** experience

### **⚡ Performance**

- Optimized for **large datasets**
- **Efficient state management** for minimal re-renders
- **Fast initial load time**

---

## 🤝 Contributing

1️⃣ **Fork** the repository  
2️⃣ **Create** a feature branch:

```sh
git checkout -b feature/amazing-feature
```

3️⃣ **Commit** your changes:

```sh
git commit -m "Add amazing feature"
```

4️⃣ **Push** to the branch:

```sh
git push origin feature/amazing-feature
```

5️⃣ **Open a Pull Request**

---

## 📝 License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

## 🙏 Acknowledgments

💙 **Special thanks to:**

- **Next.js** for the powerful framework
- **Shadcn UI** for the beautiful components
- **Faker.js** for realistic data generation
- **TanStack Query** for efficient data fetching
- **Zustand** for smooth state management

🚀 Built with ❤️ for **Itransition training tasks**

---
