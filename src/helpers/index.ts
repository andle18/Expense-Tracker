export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount)
}


import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr)
  return format(dateObj, 'EEEE, MMMM d, yyyy', { locale: enUS })
}
