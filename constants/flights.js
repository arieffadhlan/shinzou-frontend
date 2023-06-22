export const flights = [
  {
    id: 1,
    airplane_name: "Jet Air",
    airplane_image: "jet-air.png",
    class: {
      id: 1,
      class_name: "Economy",
      price: "4.950.000"
    },
    description: [
      {id: 1, information: "Baggage 20 kg"},
      {id: 2, information: "Cabin baggage 7 kg"},
      {id: 3, information: "In Flight Entertainment"}
    ],
    location_from: "Soekarno Hatta",
    location_to: "Melbourne International Airport",
    departure_time: new Date("2023/03/03 07:00:00"),
    arrival_time: new Date("2023/03/03 11:00:00"),
  },
  {
    id: 2,
    airplane_name: "Jet Air",
    airplane_image: "jet-air.png",
    class: {
      id: 1,
      class_name: "Economy",
      price: "5.950.000"
    },
    description: [
      {id: 1, information: "Baggage 20 kg"},
      {id: 2, information: "Cabin baggage 7 kg"},
      {id: 3, information: "In Flight Entertainment"}
    ],
    location_from: "Soekarno Hatta",
    location_to: "Melbourne International Airport",
    departure_time: new Date("2023/03/03 08:00:00"),
    arrival_time: new Date("2023/03/03 12:00:00"),
  },
  {
    id: 3,
    airplane_name: "Jet Air",
    airplane_image: "jet-air.png",
    class: {
      id: 1,
      class_name: "Economy",
      price: "7.225.000"
    },
    description: [
      {id: 1, information: "Baggage 20 kg"},
      {id: 2, information: "Cabin baggage 7 kg"},
      {id: 3, information: "In Flight Entertainment"}
    ],
    location_from: "Soekarno Hatta",
    location_to: "Melbourne International Airport",
    departure_time: new Date("2023/03/03 13:15:00"),
    arrival_time: new Date("2023/03/03 17:15:00"),
  },
  {
    id: 4,
    airplane_name: "Jet Air",
    airplane_image: "jet-air.png",
    class: {
      id: 1,
      class_name: "Economy",
      price: "8.010.000"
    },
    description: [
      {id: 1, information: "Baggage 20 kg"},
      {id: 2, information: "Cabin baggage 7 kg"},
      {id: 3, information: "In Flight Entertainment"}
    ],
    location_from: "Soekarno Hatta",
    location_to: "Melbourne International Airport",
    departure_time: new Date("2023/03/03 20:15:00"),
    arrival_time: new Date("2023/03/03 23:30:00"),
  }
];

export default flights;