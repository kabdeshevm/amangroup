export const WHATSAPP_NUMBER = "87788340233";

export function waLink(text: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const q = encodeURIComponent(text);
  return `${base}?text=${q}`;
}
