export default (month, year) => {
  const numDays = new Date(year, month, 0).getDate();

  const days = [];

  for (let day = 1; day <= numDays; day++) {
    const date = new Date(year, month, day);
    const name = date.toLocaleDateString("en-US", { weekday: "short" });
    days.push({ name, day });
  }

  return days;
};
