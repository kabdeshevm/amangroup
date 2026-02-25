import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { hero } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid2" style={{ alignItems: "center", gap: 18 }}>
          {/* Left: main copy */}
          <div>
            <div className="pill">
              <span className="pillDot" />
              AI workforce • Industrial B2B
            </div>

            <h1
              style={{
                marginTop: 14,
                fontSize: 44,
                lineHeight: 1.1,
                color: "var(--text)",
                letterSpacing: "0.2px",
              }}
            >
              {hero.title}
            </h1>

            <p
              className="mt-16"
              style={{
                marginTop: 16,
                whiteSpace: "pre-line",
                fontSize: 16,
              }}
            >
              {hero.subtitle}
            </p>

            <div
              className="mt-20"
              style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}
            >
              <Button href={hero.ctaPrimary.href} variant="primary">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>

            <div className="mt-20" style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="pill">
                <span className="pillDot" /> 5–14 дней внедрение
              </span>
              <span className="pill">
                <span className="pillDot" /> Интеграции CRM/ERP
              </span>
              <span className="pill">
                <span className="pillDot" /> Контроль доступа
              </span>
            </div>
          </div>

          {/* Right: visual / demo card */}
          <Card className="glow" >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
              <div style={{ color: "var(--gold)", fontWeight: 800, letterSpacing: 0.4 }}>
                DEMO PREVIEW
              </div>
              <div className="small">MVP</div>
            </div>

            <div className="hr" style={{ margin: "16px 0" }} />

            <div style={{ display: "grid", gap: 14 }}>
              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>ИИ-аналитик документов</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Извлекает ключевые данные из договоров/отчётов и формирует резюме.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Чатбот по отделам</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Стандартизированные ответы, заявки, CRM-запись и внутренние консультации.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Автоматизация workflow</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Постинг, отчёты, уведомления и сценарии без ручной рутины.
                </div>
              </div>
            </div>

            <div className="hr" style={{ margin: "16px 0" }} />

            <div className="small">
              Внедряем готовые рабочие единицы, интегрированные в бизнес-процессы.
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}