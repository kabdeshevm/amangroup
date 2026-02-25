import { beforeAfter } from "@/lib/constants";

export default function BeforeAfter() {
  return (
    <section className="section" id="value">
      <div className="container">
        <h2 className="sectionTitle">{beforeAfter.title}</h2>

        <div className="grid2" style={{ gap: 18 }}>
          {/* До */}
          <div className="card pad-28">
            <div
              style={{
                color: "var(--muted)",
                fontWeight: 700,
                letterSpacing: 0.5,
                marginBottom: 16,
              }}
            >
              До
            </div>

            <ul style={{ display: "grid", gap: 12, paddingLeft: 18 }}>
              {beforeAfter.before.map((item) => (
                <li key={item} style={{ color: "var(--muted)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* После */}
          <div className="card pad-28 glow">
            <div
              style={{
                color: "var(--gold)",
                fontWeight: 800,
                letterSpacing: 0.5,
                marginBottom: 16,
              }}
            >
              После
            </div>

            <ul style={{ display: "grid", gap: 12, paddingLeft: 18 }}>
              {beforeAfter.after.map((item) => (
                <li key={item} style={{ color: "var(--text)" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20" style={{ marginTop: 20 }}>
          <div className="cardSoft pad-20" style={{ borderRadius: 14 }}>
            <div className="small">
              Цифровые сотрудники становятся продолжением команды — они не заменяют стратегию, 
              а усиливают операционную эффективность.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}