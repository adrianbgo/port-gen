import "./date.extension";

export const convertDate = (date: string, format: string) =>
  new Date(date).format(format);
