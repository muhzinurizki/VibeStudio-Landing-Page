export const getWhatsAppLink = (message: string) => {
  const phone = '6285156173559'
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
