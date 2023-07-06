import { useSelector } from "react-redux";
import Image from "next/image";
import getConvertFlightTime from "@/helpers/getConvertFlightTime";

const FlightDetails = () => {
  const { 
    searchFlightData, 
    selectedDepartureFlight: departureFlight, 
    selectedReturnFlight: returnFlight 
  } = useSelector((state) => state.flight);
  const { selectedTransaction: transaction } = useSelector((state) => state.transaction);
  const { adult, child, baby } = searchFlightData.passengers;
  const tax = returnFlight.hasOwnProperty("id") 
    ? ((departureFlight.price * (10/100)) + (returnFlight.price * (10/100)))
    : departureFlight.price * (10/100)

  // Departure Flight
  const { airline, originAirport, destinationAirport } = departureFlight;
	const flightDateTime = getConvertFlightTime(
		`${departureFlight.departure_date} ${departureFlight.departure_time}`,
		`${departureFlight.arrival_date} ${departureFlight.arrival_time}`,
		false
	);
	const { departureTime, arrivalTime } = flightDateTime;

  // Return Flight
	const { 
		airline: returnAirline, 
		originAirport: returnOriginAirport, 
		destinationAirport: returnDestinationAirport 
	} = returnFlight || {};

	let returnFlightDateTime;
	if (returnFlight) {
		returnFlightDateTime = getConvertFlightTime(
			`${returnFlight?.departure_date} ${returnFlight?.departure_time}`,
			`${returnFlight?.arrival_date} ${returnFlight?.arrival_time}`,
			false
		);
	}

	const { 
		departureTime: returnDepartureTime, 
		arrivalTime: returnArrivalTime, 
	} = returnFlightDateTime || {};
  
  return (
    <div className="flex flex-[40%] flex-col gap-3 p-4 rounded-lg bg-white shadow-2xs 2md:p-0 2md:rounded-none 2md:bg-transparent 2md:shadow-none">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-sm text-neutral-5 2md:text-lg">
          Detail Penerbangan
        </span>
        {/* Booking code */}
        {transaction.hasOwnProperty("id") && (
          <span className="text-sm text-neutral-5 2md:text-base">
            Kode Booking:&nbsp;
            <span className="font-bold text-primary-5">
              {transaction.booking_code}
            </span>
          </span>
        )}
      </div>
      
      {/* Departure Flight */}
      {/* Departure */}
      <div className="flex flex-col pb-3 border-b border-neutral-2">
        {returnFlight.hasOwnProperty("id") && (
          <span className="mb-1.5 font-semibold text-sm text-primary-4">
            Penerbangan Pergi:
          </span>
        )}
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-neutral-5">
            {departureTime.format("HH:mm")}
          </span>
          <span className="font-bold text-xs text-primary-3">Keberangkatan</span>
        </div>
        <span className="text-sm text-neutral-5">
          {departureTime.format("D MMMM YYYY")}
        </span>
        <span className="font-medium text-sm text-neutral-5">
          {originAirport.airport_name}
        </span>
      </div>
      {/* Airline and passangers information */}
      <div className="flex flex-col gap-4 pb-3 border-b border-neutral-2">
        <div className="flex flex-col gap-1">
          <Image src={airline.airline_image} alt="Airline" width={24} height={24} />
          <span className="font-bold text-sm text-neutral-5">
            {airline.airline_name} - {departureFlight.class} <br /> 
            {departureFlight.flight_number}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Informasi:</span>
          <span className="font-normal text-sm">
            {departureFlight.description}
          </span>
        </div>
      </div>
      {/* Arrival */}
      <div className="flex flex-col pb-3 border-b border-neutral-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-neutral-5">
            {arrivalTime.format("HH:mm")}
          </span>
          <span className="font-bold text-xs text-primary-3">Kedatangan</span>
        </div>
        <span className="text-sm text-neutral-5">
          {arrivalTime.format("D MMMM YYYY")}
        </span>
        <span className="font-medium text-sm text-neutral-5">
          {destinationAirport.airport_name}
        </span>
      </div>

      {/* Return Flight */}
      {returnFlight.hasOwnProperty("id") && (
        <>
          {/* Departure */}
          <div className="flex flex-col pb-3 border-b border-neutral-2">
            <span className="mb-1.5 font-semibold text-sm text-primary-4">
              Penerbangan Pulang:
            </span>
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-neutral-5">
                {returnDepartureTime.format("HH:mm")}
              </span>
              <span className="font-bold text-xs text-primary-3">Keberangkatan</span>
            </div>
            <span className="text-sm text-neutral-5">
              {returnDepartureTime.format("D MMMM YYYY")}
            </span>
            <span className="font-medium text-sm text-neutral-5">
              {returnOriginAirport.airport_name}
            </span>
          </div>
          {/* Airline and passangers information */}
          <div className="flex flex-col gap-4 pb-3 border-b border-neutral-2">
            <div className="flex flex-col gap-1">
              <Image src={returnAirline.airline_image} alt="Airline" width={24} height={24} />
              <span className="font-bold text-sm text-neutral-5">
                {returnAirline.airline_name} - {returnFlight.class} <br /> 
                {returnFlight.flight_number}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Informasi:</span>
              <span className="font-normal text-sm">
                {returnFlight.description}
              </span>
            </div>
          </div>
          {/* Arrival */}
          <div className="flex flex-col pb-3 border-b border-neutral-2">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm text-neutral-5">
                {returnArrivalTime.format("HH:mm")}
              </span>
              <span className="font-bold text-xs text-primary-3">Kedatangan</span>
            </div>
            <span className="text-sm text-neutral-5">
              {returnArrivalTime.format("D MMMM YYYY")}
            </span>
            <span className="font-medium text-sm text-neutral-5">
              {returnDestinationAirport.airport_name}
            </span>
          </div>
        </>
      )}
      
      {/* Payment */}
      <div className="flex flex-col gap-1 pb-3 border-b border-neutral-2">
        <span className="font-bold text-sm text-neutral-5">Rincian Harga</span>
        {returnFlight.hasOwnProperty("id") ? (
          <>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm text-primary-4">
                Penerbangan Pergi:
              </span>
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm text-neutral-5">
                  {adult + child + baby} Penumpang
                </span>
                <span className="font-medium text-sm text-neutral-5">
                  IDR {departureFlight.price.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm text-primary-4">
                Penerbangan Pulang:
              </span>
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm text-neutral-5">
                  {adult + child + baby} Penumpang
                </span>
                <span className="font-medium text-sm text-neutral-5">
                  IDR {returnFlight.price.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center">
            <span className="font-medium text-sm text-neutral-5">
              {adult + child + baby} Penumpang
            </span>
            <span className="font-medium text-sm text-neutral-5">
              IDR {departureFlight.price.toLocaleString("id-ID")}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-neutral-5">Pajak</span>
          <span className="font-medium text-sm text-neutral-5">
            IDR {tax.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm text-neutral-5 2md:text-base">Total</span>
        {returnFlight.hasOwnProperty("id")  ? (
          <span className="font-bold text-sm text-primary-4 2md:text-base">
            IDR {(departureFlight.price + returnFlight.price + tax).toLocaleString("id-ID")}
          </span>
        ) : (
          <span className="font-bold text-sm text-primary-4 2md:text-base">
            IDR {(departureFlight.price + tax).toLocaleString("id-ID")}
          </span>
        )}
      </div>
    </div>
  )
}

export default FlightDetails;