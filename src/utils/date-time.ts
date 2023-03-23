import moment from 'moment'

// DD.MM.YYYY
export const mapToRusFormat = (date: Date): string => {
  return moment(date).format('DD.MM.YYYY')
}

export const calculateAge = (date: Date): number => {
  return moment().diff(date, 'years')
}
