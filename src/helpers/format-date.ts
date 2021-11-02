function formatDate(value: Date): string {
  const year = value.getFullYear();
  const month = value.getMonth() + 1;
  const day = value.getDate();

  return `${year}${month < 10 ? '0' + month : month}${
    day < 10 ? '0' + day : day
  }`;
}

export default formatDate;
