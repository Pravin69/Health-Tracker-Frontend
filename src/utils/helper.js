export const generatePreviousDates = () => {
  const dates = [];
  const today = new Date();
  dates.push({
    date: today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    }),
    percentage: 0,
  });
  for (let i = 1; i <= 6; i++) {
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - i);
    dates.unshift({
      date: previousDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
      }),
      percentage: 0,
    });
  }
  return dates;
};
