import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getAllProducts } from "./productSlice";

export default function ProductsByCategory() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.listProducts);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const categories = ["צלילה", "שחייה", "גלישה וחוף", "שעוני ספורט"];

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const goToCategory = (category) => {
    navigate(`/category/${category}`);
  };

  const filteredProducts = categoryName
    ? products.filter((product) => product.category === categoryName)
    : products;

  return (
    <div style={{ direction: "rtl", margin: 0, padding: 0, fontFamily: "Arial" }}>
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
          zIndex: 1000,
        }}
      >
        {/* קטגוריות עם חץ חזרה */}
        <nav
          style={{
            display: "flex",
            gap: "2rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <span
            onClick={() => navigate("/")}
            style={{ fontSize: "1.5rem", userSelect: "none" }}
            title="חזרה לעמוד הבית"
          >
          ➡️
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              onClick={() => goToCategory(cat)}
              style={{
                paddingBottom: "5px",
                borderBottom: categoryName === cat ? "2px solid #333" : "none",
                color: categoryName === cat ? "#000" : "#555",
              }}
            >
              {cat}
            </span>
          ))}
        </nav>

        {/* התחברות + עגלה */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>🛒</span>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "0.4rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            התחבר
          </button>
        </div>
      </header>

      {/* גוף הדף – עם מרווח מההדר הקבוע */}
      <main style={{ paddingTop: "90px", padding: "2rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          מוצרים בקטגוריה: {categoryName}
        </h2>

        {/* גריד מוצרים */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1rem",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <img
                  src={product.image || "https://via.placeholder.com/200x150"}
                  alt={product.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
                />
                <h3 style={{ margin: "0.5rem 0" }}>{product.name}</h3>
                <p style={{ fontWeight: "bold", color: "#007bff" }}>{product.price} ₪</p>
                <button
                  style={{
                    marginTop: "0.5rem",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.4rem 0.8rem",
                    cursor: "pointer",
                  }}
                >
                  הוסף לסל
                </button>
              </div>
            ))
          ) : (
            <p>אין מוצרים בקטגוריה זו.</p>
          )}
        </div>
      </main>
    </div>
  );
}
