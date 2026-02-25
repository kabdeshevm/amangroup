import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { pagesCopy } from "@/lib/constants";

export default function LoginPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="sectionTitle">{pagesCopy.login.title}</h1>

        <div className="grid2" style={{ gap: 18, alignItems: "start" }}>
          <Card className="pad-28 glow">
            <p style={{ fontSize: 16 }}>{pagesCopy.login.text}</p>

            <div className="hr" style={{ margin: "18px 0" }} />

            {/* MVP-заглушка входа */}
            <div style={{ display: "grid", gap: 10 }}>
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Пароль" type="password" />
              <button className="btn btnPrimary" type="button">
                Войти (MVP)
              </button>
              <div className="small">
                На MVP авторизация отключена. Подключим (Email/SSO) на следующем этапе.
              </div>
            </div>
          </Card>

          <Card className="pad-28">
            <div style={{ color: "var(--gold)", fontWeight: 900, letterSpacing: 0.2 }}>
              Что будет в панели управления
            </div>

            <div className="mt-16" style={{ marginTop: 16, display: "grid", gap: 12 }}>
              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Цифровые сотрудники</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Настройка сценариев, ролей и каналов (сайт/мессенджеры).
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Аналитика</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  Метрики эффективности, отчёты до/после, KPI.
                </div>
              </div>

              <div className="cardSoft pad-16" style={{ borderRadius: 14 }}>
                <div style={{ color: "var(--text)", fontWeight: 700 }}>Интеграции</div>
                <div className="small mt-8" style={{ marginTop: 8 }}>
                  CRM/ERP, базы знаний, почта, уведомления, workflow.
                </div>
              </div>
            </div>

            <div className="mt-20" style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Button href="/" variant="secondary">На главную</Button>
              <Button href="/contact" variant="primary">Получить демо</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}