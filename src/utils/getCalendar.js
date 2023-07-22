export default (month, year) => {
  const daysWithDayNames = [];

  const lastDayOfMonth = new Date(year, month, 0).getDate();

  for (let day = 1; day <= lastDayOfMonth; day++) {
    const date = new Date(year, month - 1, day);

    const dayNumber = date.getDay();

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const name = dayNames[dayNumber];

    daysWithDayNames.push({ name, day });
  }

  return daysWithDayNames;
};
