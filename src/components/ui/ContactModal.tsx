"use client";

import { useEffect, useMemo, useState } from "react";
import { waLink } from "@/lib/whatsapp";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const text = useMemo(() => {
    const parts = [
      "Заявка с сайта AMAN GROUP",
      name ? `Имя: ${name}` : "",
      company ? `Компания: ${company}` : "",
      phone ? `Телефон: ${phone}` : "",
      msg ? `Запрос: ${msg}` : "",
    ].filter(Boolean);
    return parts.join("\n");
  }, [name, company, phone, msg]);

  if (!open) return null;

  return (
    <div className="modalOverlay" onMouseDown={onClose}>
      <div className="modalCard" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div className="modalTitle">Войти / оставить заявку</div>
          <button className="iconBtn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modalBody">
          <label className="field">
            <span>Имя</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Например, Мансур" />
          </label>

          <label className="field">
            <span>Компания</span>
            <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Например, PetroServ Caspian" />
          </label>

          <label className="field">
            <span>Телефон</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7..." />
          </label>

          <label className="field">
            <span>Что нужно?</span>
            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Коротко опишите задачу" rows={4} />
          </label>
        </div>

        <div className="modalFooter">
          <a className="btnPrimary" href={waLink(text)} target="_blank" rel="noreferrer">
            Отправить в WhatsApp
          </a>
          <button className="btnGhost" onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
