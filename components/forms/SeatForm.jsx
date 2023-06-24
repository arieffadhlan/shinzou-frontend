const SeatForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-xl">
        Pilih Kursi
      </h2>
      <div className="flex flex-col bg-neutral-1 border border-neutral-2 rounded-lg shadow-2xs">
        <div className="flex justify-center items-center px-4 py-2 rounded-t-lg bg-primary-4">
          <span className="font-medium text-base text-neutral-1">
            Economy - 64 Seats Available
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
          <div className="grid grid-rows-[12] justify-center items-center gap-2.5">
            {/* Row 1 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">1</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">2</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 3 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">3</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 4 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">4</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 5 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">5</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 6 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">6</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 7 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">7</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 8 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">8</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 9 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">9</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 10 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">10</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 11 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">11</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
            {/* Row 12 */}
            <div className="grid grid-cols-7 justify-center items-center gap-2">
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-separator">12</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
              <button className="seat-number">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatForm;