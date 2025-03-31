import React from "react";

export default function Methodology() {
  return (
    // Outer wrapper: fills the viewport and centers its child horizontally
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // or "center" if you want vertical centering
        backgroundColor: "#222",
        minHeight: "100vh",
        minWidth: "100vw",
        padding: "1rem",
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Inner container: restricted max width, centered by parent flexbox */}
      <div
        style={{
          width: "70%",
          minHeight: "100vh",
          borderRadius: "8px",
          color: "#fff",
          padding: "40px 20px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <header
          style={{
            textAlign: "left",
            borderBottom: "2px solid #f0f0f0",
          }}
        >
          <h1>Methodología</h1>
        </header>
        <section style={{ marginBottom: "40px" }}>
          <h2>
            Elecciones parlamentarias
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Para determinar la posición de los partidos en las elecciones parlamentarias, seguí estos pasos:
            <br />
            1. Busqué los documentos que contienen las votaciones para propuestas legislativas (
            <a
              href="https://wb2server.congreso.gob.pe/spley-portal/#/expediente/search"
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
            2. Extraje los nombres de los congresistas presentes en esas votaciones, y le asigné a cada persona su partido político actual.
            <br />
            3. Para cada persona, extraje su voto (a favor, en contra, abstención, ausencia), y los combiné por partido político.
            <br />
            4. La aplicación compara los votos de cada parlamentario y con los votos del usuario, y determina qué tan similares son.
          </p>
          <p>

          </p>
        </section>
        <section>
          <h2>Elecciones presidenciales</h2>
          <p>
            Para determinar la posición de los candidatos parlamentarios, usé una mezcla de los votos parlamentarios de su partido y las opiniones y planes comunicados por esa persona en entrevistas o debates.
          </p>
        </section>
      </div>
    </div>
  );
}
