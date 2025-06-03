import React from "react";

export default function Methodology() {
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
          <h1 style={{ marginBottom: "10px" }}>Metodología</h1>
        </header>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{fontSize: "1.5em",marginBottom: "10px"}}>
            Elecciones parlamentarias
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Para determinar la posición de los partidos en las elecciones parlamentarias, seguí estos pasos:
            <br />
            1. Busqué los documentos que contienen las votaciones para propuestas legislativas polarizantes (
            <a
              href="https://leyes.congreso.gob.pe/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00CED1" }}
            >
              Perú
            </a>
            ;{" "}
            <a
              href="https://www.camara.cl/legislacion/sala_sesiones/votaciones.aspx"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00CED1" }}
            >
              Chile
            </a>
            )
            <br />
            2. Extraje los nombres de los parlamentarios presentes en esas votaciones, y le asigné a cada persona el partido político actual.
            <br />
            3. Extraje el voto de cada parlamentario (a favor, en contra, abstención, ausencia), y los combiné por partido político.
            <br />
            4. La aplicación compara los votos de cada parlamentario y con los votos del usuario, y determina qué tan similares son.
          </p>

          <h2 style={{fontSize: "1.5em",marginBottom: "10px"}}>
            Elecciones presidenciales
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Para las elecciones presidenciales, hice lo siguiente:
            <br />
            1. Busqué entrevistas, reportajes y programas del gobierno de los candidatos presidenciales.
            <br />
            2. Determiné los temas más presentes en el discurso de los candidatos en los cuales no están de acuerdo.
            <br />
            3. Le asigné a cada candidato una posición (A favor, En contra, Abstención) en cada tema.
            <br/>
            4. La aplicación compara las respuestas del usuario con las de los candidatos, y determina qué tan alineadas están.
          </p>

        </section>
      </div>
    </div>
  );
}