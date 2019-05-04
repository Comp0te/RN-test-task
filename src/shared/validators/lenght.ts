export const maxLengthUserName = (value: string ): string | undefined => {
  return value && value.length > 20 ? `Full name must contain maximum 20 characters` : undefined;
};

export const minLengthUserName = (value: string ): string | undefined => {
  return value && value.trim().length < 2 ? `Full name must contain minimum 2 characters` : undefined;
};
