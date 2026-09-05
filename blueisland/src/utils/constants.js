/**
 * Centralised brand constants — update here, applies everywhere.
 */

export const BRAND = {
  name:        'GoFlyHigh',
  phone:       '7984237914',          // display format
  phoneIntl:   '+91 79842 37914',     // display with country code
  phoneTel:    'tel:+917984237914',   // href for click-to-call
  waNumber:    '917984237914',        // wa.me format (no +)
  waBase:      'https://wa.me/917984237914',
  email:       'info@goflyhigh.in',
  emailHref:   'mailto:info@goflyhigh.in',
  address:     'Ahmedabad, Gujarat, India',
}

/** Build a wa.me link with a pre-filled message */
export function waLink(message = '') {
  if (!message) return `https://wa.me/${BRAND.waNumber}`
  return `https://wa.me/${BRAND.waNumber}?text=${encodeURIComponent(message)}`
}

/** Default domestic inquiry text */
export const WA_MSG_DOMESTIC = 'Hi GoFlyHigh, I need help with a domestic flight booking.'

/** Default international inquiry text */
export const WA_MSG_INTERNATIONAL = 'Hi GoFlyHigh, I want to inquire about *international flights*. Please share available options.'

/** Default general inquiry */
export const WA_MSG_GENERAL = 'Hi GoFlyHigh, I have a query regarding my travel.'
