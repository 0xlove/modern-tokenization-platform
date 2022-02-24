const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const dateDiffInDay = (firsDate: Date, secondDate: Date) => {
  const utc1 = Date.UTC(
    firsDate.getFullYear(), firsDate.getMonth(), firsDate.getDate());
  const utc2 = Date.UTC(
    secondDate.getFullYear(), secondDate.getMonth(), secondDate.getDate());

  return Math.floor((utc1 - utc2) / _MS_PER_DAY);
};

export default dateDiffInDay;
