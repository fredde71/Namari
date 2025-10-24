export default function NamariSite() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "system-ui, sans-serif",
      lineHeight: 1.4
    }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#065f46" }}>
          Namari
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#334155", marginTop: "0.5rem" }}>
          Natur & Kod — hållbart hantverk.
        </p>
      </header>

      <section style={{
        background: "white",
        border: "1px solid #d1fae5",
        borderRadius: "1rem",
        padding: "1.5rem",
        boxShadow: "0 10px 20px rgb(0 0 0 / 0.03)"
      }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
          Vad jag hjälper till med
        </h2>
        <p style={{ color: "#334155", marginBottom: "1rem" }}>
          Jag heter <strong>Fredrik Wästerberg</strong> och driver <strong>Namari</strong>.
        </p>
        <ul style={{ color: "#334155", fontSize: "0.95rem", paddingLeft: "1rem" }}>
          <li>• Manuell huggning och röjning i skogen</li>
          <li>• Selektiv trädfällning, sly, riskträd</li>
          <li>• Bygger stilrena, snabba hemsidor åt mindre företag</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
          Kontakt
        </h2>
        <p style={{ color: "#334155", fontSize: "0.95rem" }}>
          Telefon: <a href="tel:+46761390199" style={{ color: "#065f46", fontWeight: 600 }}>0761-390199</a><br/>
          E-post: <a href="mailto:fredrik@namari.se" style={{ color: "#065f46", fontWeight: 600 }}>fredrik@namari.se</a><br/>
          Område: Västmanland med omnejd
        </p>
      </section>

      <footer style={{ marginTop: "3rem", fontSize: "0.8rem", color: "#64748b" }}>
        © {new Date().getFullYear()} Namari – Fredrik Wästerberg
      </footer>
    </div>
  );
}
