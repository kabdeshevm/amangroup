"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "@/components/ui/ContactModal";
import { waLink } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);

  const demoText = "Здравствуйте! Хочу получить демо AMAN GROUP. Подскажите, как начать?";
  const auditText = "Здравствуйте! Хочу бесплатный аудит процессов. Коротко: опишите, что нужно от меня.";

  return (
    <>
      <header className="siteHeader">
        <div className="headerInner">
          <Link href="/" className="brand">
            <div className="brandMark">A</div>
            <div className="brandText">
              <div className="brandName">AMAN GROUP</div>
              <div className="brandSub">AI workforce solutions для повышения эффективности</div>
            </div>
          </Link>

          <nav className="headerNav">
            <a className="headerNavLink" href="#solutions">Решения</a>
            <a className="headerNavLink" href="#benefits">Преимущества</a>
            <a className="headerNavLink" href="#value">Ценность</a>
            <a className="headerNavLink" href="#services">Услуги</a>
            <a className="headerNavLink" href="#faq">FAQ</a>
          </nav>

          <div className="headerActions">
            <button className="btnLink" onClick={() => setOpen(true)}>Войти</button>

            <a className="btnPrimary" href={waLink(demoText)} target="_blank" rel="noreferrer">
              Получить демо
            </a>
          </div>
        </div>
      </header>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
