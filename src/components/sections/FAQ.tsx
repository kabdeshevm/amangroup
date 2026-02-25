"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { faq } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="sectionTitle">{faq.title}</h2>

        <div style={{ display: "grid", gap: 12 }}>
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Card key={item.q} className="pad-0" >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="btn btnGhost"
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    padding: "16px 18px",
                    borderRadius: "inherit",
                    border: "0",
                  }}
                >
                  <span style={{ color: "var(--text)", fontWeight: 800, textAlign: "left" }}>
                    {item.q}
                  </span>
                  <span style={{ color: "var(--gold)", fontWeight: 900, fontSize: 18 }}>
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 18px 16px 18px" }}>
                    <p style={{ margin: 0 }}>{item.a}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}