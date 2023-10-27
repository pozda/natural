export const getInitials = (name: string) => {
  if (name.indexOf('@') > -1) {
    return name.substring(0, name.indexOf('@')).match(/\b\w/g)?.join('')?.toUpperCase()
  }
  return name?.match(/\b\w/g)?.join('')?.toUpperCase() || ''
}
