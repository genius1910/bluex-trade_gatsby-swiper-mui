
export const DateFormator = (input) => {
  const date = new Date(input);
  const month = date.toLocaleString('en-US', { month: 'long' }).substring(0, 3);
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day < 10 ? `0${day}` : day}, ${year}`;
}

export const DateMMYYFormator = (input) => {
  const date = new Date(input);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getUTCFullYear();

  return `${month} ${year}`;
}