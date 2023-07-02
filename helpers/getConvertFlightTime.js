import dayjs from "dayjs"
import getTimeDifference from "./getTimeDifference";

const getConvertFlightTime = (departure, arrival, difference = false) => {
  const newDepartureTime = dayjs(new Date(departure));
  const newArrivalTime = dayjs(new Date(arrival));
  const timeDifference = getTimeDifference(newDepartureTime, newArrivalTime);

  if (difference) {
    return { 
      departureTime: newDepartureTime, 
      arrivalTime: newArrivalTime,
      timeDifference: {
        hourDifference: timeDifference.hourDifference,
        minuteDifference: timeDifference.minuteDifference
      }
    };
  }
  
  return { 
    departureTime: newDepartureTime, 
    arrivalTime: newArrivalTime
  };
}

export default getConvertFlightTime;