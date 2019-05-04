const regExpPassword = new RegExp([
  '^(?=.*[0-9])',
  '^(?=.*[a-z])',
  '^(?=.*[A-Z])',
  `(?=.{8,})`,
].join(''));

export const passwordLogin = (value: string): string | undefined => (
  value && !regExpPassword.test(value)
    ? 'Please enter a correct password'
    : undefined
);
