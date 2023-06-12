// Make sure the time has been formatted using moment
export const getTimeDifference = (startTime, endTime, unitOfTime) => {
  const timeDifference = endTime.diff(startTime, "minutes");

  if (unitOfTime === "hours") {
    return Math.floor((timeDifference % 1440) / 60);
  }

  return Math.floor((timeDifference % 1440) % 60);
}