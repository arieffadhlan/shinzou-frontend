// Make sure the time has been formatted using dayjs
const getTimeDifference = (startTime, endTime) => {
  const timeDifference = endTime.diff(startTime, "minutes");
  const hourDifference = Math.floor((timeDifference % 1440) / 60);
  const minuteDifference = Math.floor((timeDifference % 1440) % 60);

  return {
    hourDifference,
    minuteDifference
  }
}

export default getTimeDifference;