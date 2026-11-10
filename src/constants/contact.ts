/**
 * Official contact information for Manuel Cabral Domingos
 */

export const MANUEL_CONTACT = {
  name: 'Manuel Cabral Domingos',
  phoneDisplay: '+244 945 920 113',
  phoneClean: '244945920113',
  getWhatsAppUrl: (message: string) =>
    `https://wa.me/244945920113?text=${encodeURIComponent(message)}`,
};
