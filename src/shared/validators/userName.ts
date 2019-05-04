export const userNameLetters = (value: string): string | undefined => (
  value && /[^a-zA-Z ]/i.test(value)
    ? 'A username can only contain letter characters(letters A-Z)'
    : undefined
);
