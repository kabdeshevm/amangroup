import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { pagesCopy } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="sectionTitle">{pagesCopy.contact.title}</h1>

        <div className="grid2" style={{ gap: 18, alignItems: "start" }}>
          <Card className="pad-28 glow">
            <p style={{ fontSize: 16 }}>{pagesCopy.contact.text}</p>

            <div className="hr" style={{ margin: "18px 0" }} />

            {/* MVP-форма: пока без отправки (позже подключим email/CRM) */}
            <form style={{ display: "grid", gap: 10 }}>
              <input className="input" placeholder="Компания" />
              <input className="input" placeholder="Контактное лицо" />
              <input className="input" placeholder="Email / WhatsApp" />
              <textarea
                className="textarea"
                rows={6}
                placeholder="Опишите задачу: отдел(ы), процессы, системы (CRM/ERP/1C), сроки"
              />
              <button type="button" className="btn btnPrimary">
                Отправить заявку (MVP)
              </button>
              <div className="small">
                На MVP форма без отправки. Подключим обработку на следующем шаге (email/CRM/Telegram).
              </div>
            </form>
          </Card>

          <Card className="pad-28">
            <div style={{ color: "var(--gold)", fontWeight: 900, letterSpacing: 0.2 }}>
              Что нужно для точного плана внедрения
            </div>

            <div className="mt-16" style={{ marginTop: 16, display: "grid", gap: 12 }}>
              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>1) Процессы</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Какие задачи хотим автоматизировать и какие KPI важны.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>2) Системы</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  CRM/ERP/1C, почта, мессенджеры, базы знаний, Excel/PDF.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>3) Доступы и безопасность</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Роли, разграничение данных, требования к хранению и логированию.
                </div>
              </div>
            </div>

            <div className="mt-20" style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Button href="/" variant="secondary">На главную</Button>
              <Button href="/login" variant="ghost">Вход</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}