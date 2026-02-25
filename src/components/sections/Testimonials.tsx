import Card from "@/components/ui/Card";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <h2 className="sectionTitle">{testimonials.title}</h2>

        <div className="grid2" style={{ gap: 18, alignItems: "stretch" }}>
          <Card className="pad-28 glow">
            <p style={{ whiteSpace: "pre-line", fontSize: 16 }}>
              {testimonials.text}
            </p>

            <div className="mt-20" style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="pill">
                <span className="pillDot" /> Efficiency
              </span>
              <span className="pill">
                <span className="pillDot" /> Standardization
              </span>
              <span className="pill">
                <span className="pillDot" /> Decision speed
              </span>
            </div>
          </Card>

          <Card className="pad-28">
            <div style={{ color: "var(--gold)", fontWeight: 900, letterSpacing: 0.2 }}>
              Что это означает на практике
            </div>

            <div className="mt-16" style={{ marginTop: 16, display: "grid", gap: 12 }}>
              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Единые стандарты</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Коммуникации и ответы фиксируются в правилах — меньше “человеческого фактора”.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Скорость 24/7</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Клиенты и сотрудники получают ответы и обработку запросов в любое время.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Контроль и прозрачность</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Статусы, логика, результаты — всё измеримо и управляемо.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}