# Profile Management System

## 📌 Overview
This is a **React-based Profile Management System** that allows users to store, view, edit, delete, and locate profiles on a map. The application utilizes **localStorage** for data persistence and OpenStreetMap's **Nominatim API** to fetch location coordinates.

## 🚀 Features
- **View Profiles:** Displays stored profiles with images, names, and addresses.
- **Edit & Delete Profiles:** Modify or remove profiles from the list.
- **Store Profiles Locally:** Uses `localStorage` for data persistence.
- **Map Integration:** Fetches coordinates using OpenStreetMap API and displays them using `react-leaflet`.
- **Navigation between Pages:** Uses `react-router-dom` for seamless navigation.

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Routing:** React Router (`useNavigate`, `useLocation`)
- **Mapping API:** OpenStreetMap + `react-leaflet`
- **Data Persistence:** `localStorage`



## 📌 Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/Profile-Management-System.git
   cd Profile-Management-System
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the project:**
   ```sh
   npm start
   ```

## 🛠 How It Works
### 1️⃣ Viewing Profiles
- Retrieves stored profiles from `localStorage`.
- Displays profiles with **images, names, summaries, and addresses**.
- Clicking "Summary" navigates to the `MapComponent`.

### 2️⃣ Editing & Deleting Profiles
- **Edit:** Redirects to `/admin` with profile data.
- **Delete:** Removes profile from `localStorage` and updates the UI.

### 3️⃣ Mapping API
- Fetches latitude & longitude using OpenStreetMap’s **Nominatim API**.
- Displays location on an interactive **Leaflet map**.

## 🛠 Troubleshooting
**Issue:** Warning: "An empty string ('') was passed to the src attribute."
**Solution:** Modify image rendering to avoid empty URLs:
```js
{profile.image ? (
    <img src={profile.image} alt={profile.name} />
) : (
    <div className="bg-gray-200">No Image</div>
)}
```

## 🔥 Future Enhancements
- ✅ **Profile Creation Form** (Currently, profiles are manually added to `localStorage`)
- ✅ **Redux/Context API for State Management**
- ✅ **Better UI with Tailwind CSS Animations**
- ✅ **User Authentication** for profile management

---

### 📧 Contact
For questions or feature requests, feel free to reach out!

🚀 Happy Coding! 🎉

