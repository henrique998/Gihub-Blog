import moment from 'moment'

export function formattDate(date: string) {
  return moment(date).fromNow()
}
