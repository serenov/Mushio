export default (dateKey, payload) => {
  const oldRecord = JSON.parse(localStorage.getItem(dateKey)) ?? [];
  oldRecord.push(payload);
  localStorage.setItem(dateKey, JSON.stringify(oldRecord));
  return oldRecord;
};
