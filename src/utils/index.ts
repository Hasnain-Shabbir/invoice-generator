export const tw = (strings: string, ...values: unknown[]) =>
  String.raw({ raw: strings }, ...values);
