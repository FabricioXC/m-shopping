export const makeApiUrl = (path: string): string => {
  return `${process.env.REACT_APP_API_URL}${path}`;
};
