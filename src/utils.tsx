/**
 * Compute the age, according to the current date
 * @returns The age (only the years)
 */
export const computeAge = () => {
  const birthDate = new Date('04/20/1996')
  const monthDiff = Date.now() - birthDate.getTime()
  return Math.abs(new Date(monthDiff).getUTCFullYear() - 1970)
}
