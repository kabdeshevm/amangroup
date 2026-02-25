import Card from "@/components/ui/Card";
import { pathways } from "@/lib/constants";

export default function Pathways() {
  return (
    <section className="section" id="pathways">
      <div className="container">
        <h2 className="sectionTitle">{pathways.title}</h2>

        <div style={{ display: "grid", gap: 16 }}>
          {pathways.items.map((item) => (
            <Card key={item.key} className="pad-28">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
                <div>
                  <div style={{ color: "var(--gold)", fontWeight: 900, letterSpacing: 0.2, fontSize: 18 }}>
                    {item.title}
                  </div>
                  <p className="mt-12" style={{ marginTop: 12, maxWidth: 860 }}>
                    {item.description}
                  </p>
                </div>

                <div className="pill">
                  <span className="pillDot" /> Solution module
                </div>
              </div>

              {/* Для чатботов: отделы */}
              {"subItems" in item && item.subItems && (
                <div className="mt-16" style={{ marginTop: 16 }}>
                  <div style={{ color: "var(--text)", fontWeight: 700, marginBottom: 10 }}>
                    {item.subTitle}
                  </div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {item.subItems.map((x) => (
                      <span key={x} className="pill">
                        <span className="pillDot" /> {x}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="hr" style={{ margin: "18px 0" }} />

              <div style={{ color: "var(--text)", fontWeight: 700, marginBottom: 10 }}>
                {item.capabilitiesTitle}
              </div>

              <div className="grid2" style={{ gap: 12 }}>
                {item.capabilities.map((cap) => (
                  <div key={cap} className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--gold)", fontWeight: 900 }}>◆</span>
                      <span className="small" style={{ color: "var(--muted)" }}>
                        {cap}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}