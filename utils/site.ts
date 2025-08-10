export const SITE = {
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917977264846").replace(/[^0-9]/g, ""),
  instagramUsername: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "",
};

export function buildWhatsAppOrderLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function instagramProfileUrl() {
  return SITE.instagramUsername ? `https://instagram.com/${SITE.instagramUsername}` : undefined;
}