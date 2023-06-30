"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const SeatForm = ({ totalPassengers, passengers, setPassengers }) => {
  const { selectedDepartureFlight } = useSelector((state) => state.flight);
  const seats = [
    "A1", "B1", "C1", "D1", "E1", "F1",
    "A2", "B2", "C2", "D2", "E2", "F2",
    "A3", "B3", "C3", "D3", "E3", "F3",
    "A4", "B4", "C4", "D4", "E4", "F4",
    "A5", "B5", "C5", "D5", "E5", "F5",
    "A6", "B6", "C6", "D6", "E6", "F6",
    "A7", "B7", "C7", "D7", "E7", "F7",
    "A8", "B8", "C8", "D8", "E8", "F8",
    "A9", "B9", "C9", "D9", "E9", "F9",
    "A10", "B10", "C10", "D10", "E10", "F10",
    "A11", "B11", "C11", "D11", "E11", "F11",
    "A12", "B12", "C12", "D12", "E12", "F12"
  ];
  const [availableseats, setAvailableSeats] = useState([
    "A1", "B1", "C1", "D1", "E1", "F1",
    "A2", "B2", "C2", "D2", "E2", "F2",
    "A3", "B3", "C3", "D3", "E3", "F3",
    "A4", "B4", "C4", "D4", "E4", "F4",
    "A5", "B5", "C5", "D5", "E5", "F5",
    "A6", "B6", "C6", "D6", "E6", "F6",
    "A7", "B7", "C7", "D7", "E7", "F7",
    "A8", "B8", "C8", "D8", "E8", "F8",
    "A9", "B9", "C9", "D9", "E9", "F9",
    "A10", "B10", "C10", "D10", "E10", "F10",
    "A11", "B11", "C11", "D11", "E11", "F11",
    "A12", "B12", "C12", "D12", "E12", "F12"
  ]);
  const [reservedSeats, setReservedSeats] = useState(selectedDepartureFlight.seats.map(seat => seat.seat_number));
  const [selectedSeats, setSelectedSeats] = useState([]);

  const selectedSeatHandler = (seat) => {    
    if (selectedSeats.indexOf(seat) > -1) {
      let newArray = [...passengers];
    
      for (let i = 0; i < totalPassengers; i++) {
        if (newArray[i].seat_number === seat) {
          newArray[i].seat_number = "";
          break;
        }
      }
      
      setPassengers(newArray);
      setAvailableSeats(availableseats.concat(seat))
      setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
    } else {
      if (reservedSeats.indexOf(seat) > -1) {
        setAvailableSeats(availableseats.filter(availableSeat => availableSeat !== seat))
      } else if (selectedSeats.length < 2) {
        let newArray = [...passengers];
    
        for (let i = 0; i < totalPassengers; i++) {
          if (newArray[i].seat_number === "") {
            newArray[i].seat_number = seat;
            break;
          }
        }
        
        setPassengers(newArray);
        setAvailableSeats(availableseats.filter(availableSeat => availableSeat !== seat))
        setSelectedSeats(selectedSeats.concat(seat));
      }
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">
        Pilih Kursi
      </h2>
      <div className="flex flex-col bg-neutral-1 border border-neutral-2 rounded-lg shadow-2xs">
        <div className="flex justify-center items-center px-4 py-2 rounded-t-lg bg-primary-4">
          <span className="font-medium text-base text-neutral-1">
            Economy - {selectedDepartureFlight.capacity} Seats Available
          </span>
        </div>
        <div className="grid grid-rows-[13] justify-center items-center gap-2.5 px-4 pt-4 pb-9">
          {/* Seat Label */}
          <div className="grid grid-cols-2 justify-center items-center gap-9">
            <div className="grid grid-cols-3 items-center gap-2.5">
              <button className="seat-label">A</button>
              <button className="seat-label">B</button>
              <button className="seat-label">C</button>
            </div>
            <div className="grid grid-cols-3 items-center gap-2.5">
              <button className="seat-label">D</button>
              <button className="seat-label">E</button>
              <button className="seat-label">F</button>
            </div>
          </div>
          {/* Seat Number */}
          <div className="grid grid-rows-12 grid-cols-6 justify-center items-center gap-2.5">
            {seats.map((seat, index) => (
              <div key={index} className="grid grid-cols-1 justify-center items-center gap-2">
                <div 
                  onClick={() => selectedSeatHandler(seat)} 
                  className={
                    selectedSeats.indexOf(seat) > -1
                    ? "seat-number selected"
                    : reservedSeats.indexOf(seat) > -1
                    ? "seat-number reserved"
                    : "seat-number available"
                  }
                >
                  {seat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatForm;