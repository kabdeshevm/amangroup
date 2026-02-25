import Hero from "@/components/sections/Hero";
import ContentShowcase from "@/components/sections/ContentShowcase";
import Features from "@/components/sections/Features";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Pathways from "@/components/sections/Pathways";
import AudienceTabs from "@/components/sections/AudienceTabs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContentShowcase />
      <Features />
      <BeforeAfter />
      <Pathways />
      <AudienceTabs />
      <Testimonials />
      <FAQ />

      {/* Финальный CTA-блок (можно оставить, можно убрать) */}
      <section className="section">
        <div className="container">
          <div className="card pad-28 glow">
            <h2 style={{ margin: 0, fontSize: 22, color: "var(--text)" }}>
              Готовы обсудить внедрение?
            </h2>
            <p className="mt-12" style={{ marginTop: 12 }}>
              Проведём аудит процессов, предложим сценарии автоматизации и подготовим план внедрения цифровых сотрудников.
            </p>
            <div className="mt-16" style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn btnPrimary" href="/contact">Получить демо</a>
              <a className="btn btnSecondary" href="/contact">Бесплатный аудит процессов</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}