import Card from "@/components/ui/Card";

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="sectionTitle">Terms of Service</h1>
        <Card className="pad-28">
          <p>
            Стандартная юридическая страница. Текст условий использования будет добавлен отдельно
            (для B2B, пилотов, SLA, ответственности, режима данных).
          </p>
        </Card>
      </div>
    </div>
  );
}