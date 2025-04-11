export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const capitalizeEachFirstLetter = (str: string): string => {
  return str
    .split(' ')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ')
}
