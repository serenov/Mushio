export default (dateKey) => {
  return JSON.parse(localStorage.getItem(dateKey)) ?? null;
};
