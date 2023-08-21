export const getFirst50Words = (inputString: string) => {
  const words = inputString.split(' ')
  const first20Words = words.slice(0, 50).join(' ')

  return first20Words
}
