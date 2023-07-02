import Image from "next/image";
import { useSelector } from "react-redux";
import getConvertFlightTime from "@/helpers/getConvertFlightTime";
import Button from "../../atoms/Button";

const OrderHistoryDetails = () => {
  const { selectedTransaction: transaction } = useSelector((state) => state.transaction);
	const { departureFlight, returnFlight, tickets } = transaction;

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

  const passengers = tickets.filter((ticket) => ticket.seat.flight_id === departureFlight.id).length;
  
  return (
    <div className="hidden flex-[40%] flex-col gap-3 pt-4 border-t border-neutral-2 2md:flex 2md:pt-0 2md:border-0">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-sm text-neutral-5 2md:text-lg">Detail Pesanan</span>
        {/* Booking code */}
        <span className="text-sm text-neutral-5 2md:text-base">
          Booking Code:&nbsp;
          <span className="font-bold text-primary-5">
            {transaction.booking_code}
          </span>
        </span>
      </div>

      {/* Departure Flight */}
      {/* Departure */}
      <div className="flex flex-col pb-3 border-b border-neutral-2">
        {returnFlight && (
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
        <div className="flex flex-col">
          <Image src={airline.airline_image} alt="Airline" width={24} height={24} />
          <span className="font-medium text-xs text-neutral-5">
            {airline.airline_name} - {departureFlight.class}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Informasi:</span>
          {tickets.map((ticket, index) => ticket.seat.flight_id === departureFlight.id && (
            <div key={index} className="flex flex-col">
              <span className="font-medium text-sm text-primary-5">
                Penumpang {index + 1}: {`${ticket.passenger.title}. ${ticket.passenger.name}`}
              </span>
              <span className="text-sm">
                Nomor Telepon : {ticket.passenger.phone_number}
              </span>
            </div>
          ))}
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
      {returnFlight && (
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
            <div className="flex flex-col">
              <Image src={returnAirline.airline_image} alt="Airline" width={24} height={24} />
              <span className="font-medium text-xs text-neutral-5">
                {returnAirline.airline_name} - {returnFlight.class}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Informasi:</span>
              {tickets.map((ticket, index) => ticket.seat.flight_id === returnFlight.id && (
                <div key={index} className="flex flex-col">
                  <span className="font-medium text-sm text-primary-5">
                    Penumpang {index}: {`${ticket.passenger.title}. ${ticket.passenger.name}`}
                  </span>
                  <span className="text-sm">
                    Nomor Telepon : {ticket.passenger.phone_number}
                  </span>
                </div>
              ))}
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
        {returnFlight ? (
          <>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-sm text-primary-4">
                Penerbangan Pergi:
              </span>
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm text-neutral-5">
                  {passengers} Penumpang
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
                  {passengers} Penumpang
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
              {passengers} Penumpang
            </span>
            <span className="font-medium text-sm text-neutral-5">
              IDR {departureFlight.price.toLocaleString("id-ID")}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm text-neutral-5">Pajak</span>
          <span className="font-medium text-sm text-neutral-5">
            IDR 100.000
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-sm text-neutral-5 2md:text-base">Total</span>
        <span className="font-bold text-sm text-primary-4 2md:text-base">
          IDR {transaction.ammount.toLocaleString("id-ID")}
        </span>
      </div>
      <Button 
        type="submit" 
        size="xl" 
        variant="primary" 
        className="w-full mt-6 py-3.5 text-sm 2md:py-4 2md:text-xl"
      >
        Cetak Tiket
      </Button>
    </div>
  );
}

export default OrderHistoryDetails;