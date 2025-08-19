import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const categories = ["צלילה", "שחייה", "גלישה וחוף", "שעוני ספורט"];

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
  <>
<style>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
`}</style>
    <div style={{ direction: "rtl", margin: 0, padding: 0, fontFamily: "Arial", height: "100vh", overflow: "hidden" }}>
      {/* HEADER קבוע למעלה */}
      <header
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: "70px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 2rem",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          zIndex: 1000
        }}
      >
        {/* קטגוריות */}
        <nav style={{ display: "flex", gap: "2rem", fontWeight: "bold", fontSize: "1.1rem" }}>
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              style={{ cursor: "pointer", color: "#555" }}
            >
              {cat}
            </span>
          ))}
        </nav>

        {/* התחברות + עגלה */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>🛒</span>
          <button
            onClick={handleLoginClick}
            style={{
              padding: "0.4rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px"
            }}
          >
            התחבר
          </button>
        </div>
      </header>

      {/* גוף הדף – עם מרווח מההדר הקבוע */}
      <main style={{ paddingTop: "70px", margin: 0, width: "100%", height: "calc(100vh - 70px)", overflow: "hidden" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            margin: 0,
            padding: 0,
          }}
        >
<img
  src="/sea.jpg"
  alt="רקע ספורט"
  style={{
    width: "100vw",      
    height: "100vh",  
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#000",
    zIndex: -1,
  }}
/>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 5px black",
              width: "100%",
              padding: "0 1rem",
              boxSizing: "border-box",
            }}
          >
            <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>
              ברוך הבא לאתר הספורט שלנו!
            </h1>
            <p style={{ fontSize: "2rem" }}>
              בחר קטגוריה למעלה כדי להתחיל לגלוש במוצרים.
            </p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
