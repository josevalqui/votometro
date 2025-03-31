import React from "react";

export default function Methodology() {
  /*
    If you want the container to span nearly the entire screen but still be centered, 
    use width: "90%" (or any percentage you like) with margin: "0 auto".
    If you want a fixed max width, add maxWidth: "1200px" or similar. 
    If you want it truly full-width, remove width and margin and use width: "100%".
  */
  return (
    <div
      style={{
        backgroundColor: "#222",   // dark background for the entire page
        minHeight: "100vh",        // fill at least full screen height
        margin: 0,
        padding: "2rem 0",        // top/bottom padding
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "90%",            // occupies 90% of the page width
          margin: "0 auto",        // centers horizontally
          backgroundColor: "darkslategray",
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
            textAlign: "center",
            marginBottom: "40px",
            borderBottom: "2px solid #f0f0f0",
            paddingBottom: "20px",
          }}
        >
          <h1 style={{ marginBottom: "10px" }}>Methodology</h1>
          <p>Esta página describe la metodología del Votómetro.</p>
        </header>

        <section style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "1.5em",
              marginBottom: "10px",
              borderLeft: "4px solid #007BFF",
              paddingLeft: "10px",
              color: "#007BFF",
            }}
          >
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
        </section>
      </div>
    </div>
  );
}

/*
NOTES:
- With width: "90%" and margin: "0 auto", the container will be nearly full-width but remain centered.
- If you want it fully edge-to-edge, remove width: "90%" and margin: "0 auto", and use width: "100%" in the inner div.
- If you want a fixed max width, e.g. 1200px, add maxWidth: "1200px" to the inner div.
*/
