export const slugify = (name: string) => {
  const sluggedName = name.trim().toLowerCase().replace(/\s+/g, '-')
  return sluggedName
}
