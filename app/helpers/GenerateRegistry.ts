export default function generateRegistry(): string {
  const characterRegex: RegExp = /[a-zA-Z0-9]/
  let result: string = ''

  for (let i: number = 0; i < 6; i++) {
    const randomChar: string = String.fromCharCode(
      Math.floor(Math.random() * (characterRegex.test('a') ? 26 : 10)) +
        (characterRegex.test('a') ? 97 : 48)
    )

    result += randomChar
  }

  return result
}
