const rawWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@cjtrading.co.id';
export const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || '+62 21 0000 0000';
export const whatsappNumber = rawWhatsAppNumber.replace(/\D/g, '');
export const isWhatsAppConfigured = whatsappNumber.length >= 8;
export const whatsappHref = isWhatsAppConfigured
  ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo PT CJ Trading, saya ingin berkonsultasi mengenai kebutuhan spa dan luxury living.')}`
  : '/contact';

