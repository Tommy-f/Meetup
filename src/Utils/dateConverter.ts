function dateConverter(startDate: Date): string {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' } as const
  const eventStartDate = startDate.toLocaleDateString('sv-se', options)

  return eventStartDate
}

export default dateConverter