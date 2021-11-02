function formatTime(value: Date): string {
  const hours = value.getHours();
  const minutes = value.getMinutes();
  const seconds = value.getSeconds();

  return `${hours < 10 ? '0' + hours : hours}${
    minutes < 10 ? '0' + minutes : minutes
  }${seconds < 10 ? '0' + seconds : seconds}`;
}

export default formatTime;
