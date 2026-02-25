import Card from "@/components/ui/Card";
import { features } from "@/lib/constants";

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <h2 className="sectionTitle">{features.title}</h2>

        <div className="grid3" style={{ gap: 16 }}>
          {features.cards.map((c) => (
            <Card key={c.title} className="pad-24">
              <div style={{ color: "var(--gold)", fontWeight: 800, letterSpacing: 0.2 }}>
                {c.title}
              </div>
              <p className="mt-12" style={{ marginTop: 12 }}>
                {c.text}
              </p>

              <div className="mt-16" style={{ marginTop: 16 }}>
                <span className="pill">
                  <span className="pillDot" /> AI employee
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}