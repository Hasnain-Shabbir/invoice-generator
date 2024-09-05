export const tw = (strings: string, ...values: unknown[]) =>
  String.raw({ raw: strings }, ...values);

export const getCurrentDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const generateEnum = (value: string): string => {
  return value
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '_')
    .trim();
};
