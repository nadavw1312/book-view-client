export const generateArrayFromOneToN = (number: number) => {
  return Array.from({ length: number }, (_, index) => index + 1);
};
