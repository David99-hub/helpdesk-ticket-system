import { watch } from 'vue'

export const useTickets = () => {
  const tickets = useState('tickets', () => [])

  if (import.meta.client) {
    // Load tickets from Local Storage only once
    if (tickets.value.length === 0) {
      const saved = localStorage.getItem('tickets')

      if (saved) {
        tickets.value = JSON.parse(saved)
      }
    }

    // Save whenever tickets change
    watch(
      tickets,
      (newTickets) => {
        localStorage.setItem('tickets', JSON.stringify(newTickets))
      },
      { deep: true }
    )
  }

  return tickets
}