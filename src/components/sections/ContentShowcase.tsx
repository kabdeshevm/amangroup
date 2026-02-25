import Card from "@/components/ui/Card";
import { contentShowcase } from "@/lib/constants";

export default function ContentShowcase() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <h2 className="sectionTitle">
          {contentShowcase.title}
        </h2>

        <div className="grid2" style={{ alignItems: "stretch", gap: 18 }}>
          {/* Текстовая часть */}
          <div className="card pad-28 glow">
            {contentShowcase.paragraphs.map((p, index) => (
              <p key={index} style={{ marginBottom: 16 }}>
                {p}
              </p>
            ))}
          </div>

          {/* Визуальный акцент / модель */}
          <Card>
            <div style={{ display: "grid", gap: 16 }}>
              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--gold)", fontWeight: 700 }}>
                  Анализ
                </div>
                <div className="small mt-8">
                  Документы, данные, заявки, CRM.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--gold)", fontWeight: 700 }}>
                  Автоматизация
                </div>
                <div className="small mt-8">
                  Workflow, сценарии, интеграции.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--gold)", fontWeight: 700 }}>
                  Цифровые сотрудники
                </div>
                <div className="small mt-8">
                  Постоянные рабочие единицы внутри процессов компании.
                </div>
              </div>
            </div>

            <div className="hr" style={{ margin: "20px 0" }} />

            <div className="small">
              Мы внедряем решения, которые становятся частью операционной системы бизнеса.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}