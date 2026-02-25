import Ticker from "@/components/ui/Ticker";

const tickerItems = [
  "ИИ-аналитик документов",
  "Чатботы по отделам",
  "Автоматизация workflow",
  "Интеграции CRM/ERP",
  "Контроль доступа",
];

export default function Footer() {
  return (
    <footer>
      {/* ... твой текущий footer ... */}
      <div style={{ marginTop: 16 }}>
        <Ticker items={tickerItems} />
      </div>
    </footer>
  );
}