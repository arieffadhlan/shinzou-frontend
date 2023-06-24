'use client'
import { useDispatch } from "react-redux";
import {
  fetchData,
  filterByDriver,
  filterByDateAndTime,
  filterByCapacity,
} from "@/app/features/dataSlices";
import { useState } from "react";

export default function Search() {
  const dispatch = useDispatch();

  const [driver, setDriver] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchData()).then(() => {
      if (driver == "true") dispatch(filterByDriver(true));

      if (driver == "false") dispatch(filterByDriver(false));

      if (date && time)
        dispatch(filterByDateAndTime(`${date}T${time}:00.000Z`));

      if (capacity) dispatch(filterByCapacity(capacity));
    });
  };

  return (
    <section id="search" className="search-box">
      <form className="search-content" onSubmit={handleSearch}>
        <div className="input-group d-flex flex-column">
          <p>Tipe Driver</p>
          <select
            className="form-select"
            id="driver"
            onChange={(e) => setDriver(e.target.value)}
          >
            <option className="item" value="" hidden>
              Pilih Tipe Driver
            </option>
            <option className="item" value={true}>
              Dengan Sopir
            </option>
            <option className="item" value={false}>
              Tanpa Sopir (Lepas Kunci)
            </option>
          </select>
        </div>
        <div className="input-group d-flex flex-column">
          <p>Tanggal</p>
          <input
            type="date"
            className="form-control"
            id="date"
            placeholder="2022-03-23"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input-group d-flex flex-column">
          <p>Waktu Jemput/Ambil</p>
          <input
            type="time"
            id="time"
            className="form-control"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="input-group d-flex flex-column">
          <p>Jumlah Penumpang (Opsional)</p>
          <div className="d-flex flex-row">
            <input
              type="number"
              className="form-control item"
              id="passanger"
              style={{ backgroundColor: "#fff" }}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="searchBtn"
          id="load-btn"
        >
          Cari Mobil
        </button>
      </form>
    </section>
  );
}
