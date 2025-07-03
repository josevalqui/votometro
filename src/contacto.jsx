import React from "react";

export default function Contacto() {
  return (
    // Outer wrapper: fills the viewport with no width restrictions
    <div
      style={{
        justifyContent: "center",
        minHeight: "100vh",
        width: "100vw",         // Force full page width
        margin: 0,
        padding: "0",          // Remove extra padding if needed
        boxSizing: "border-box",
      }}
    >
      {/* Inner container: now takes up 100% width */}
      <div
        style={{
          width: "70%",        // Full width (remove any maxWidth or percentage limitations)
          margin: "0 auto", // Centers the inner container horizontally
          color: "#fff",
          padding: "40px 20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <header
          style={{
            textAlign: "left",
            marginBottom: "40px",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "20px",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Información de contacto</h2>
        </header>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5em", marginBottom: "10px" }}>
            Sobre mí
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Soy Jose, y estudié sociología en Heidelberg. Decidí crear esta página porque para votar en la elección de Heidelberg, usé una aplicación parecida (Wahl-O-Mat).
            <br/>La idea es contribuir a que la gente vote por partidos que están alineados con sus propios intereses y opiniones, sin necesidad de invertir muchas horas en investigar las posiciones de todos los partidos y candidatos inscritos en una elección.
            <br/>La meta de la aplicación no es convencer a nadie de votar por un partido específico, sino ayudar a que las personas tengan una primera idea de cuáles partidos están alineados con sus opiniones, para que luego puedan informarse más antes de votar.
          </p>

          <h2 style={{ fontSize: "1.5em", marginBottom: "10px" }}>
            Contacto
          </h2>
          <p>
            Si tienes ideas, sugerencia o comentarios sobre la aplicación, me alegraría leerlos: <br/>
            <a href="mailto:decid.es@outlook.com" style={{ color: "#00CED1" }}>
              decid.es@outlook.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}