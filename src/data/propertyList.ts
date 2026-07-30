export type propertyItemType = {
    propertyName: string;
    description: string;
    available: boolean;
    price: number;
    location: string;
    imgUrl: string;
    features: string[];
    rooms: number;
    capacity: number;
    note?: string[];
}

export const propertyList: propertyItemType[] = [
  {
    propertyName: "Creamstone Aparment",
    description: "Brand new cute 2 bedroom apartment with PS5 in Lekki Right",
    available: true,
    price: 100000,
    location: "Lekki Right, Lagos",
    imgUrl: "/img/property_1.jpg",
    features: [
      "24/7 Power Supply",
      "Serene environment",
      "Super fast internet",
      "PS5 Console",
      "Proximity to Filling station, Mega chicken and QMB Supermarket",
      "Netflix / YouTube",
      "Ludo",
      "En-suite room",
      "Daily housekeeping",
      "Dedicated car park space",
      "Equipped kitchen",
      "Washing machine",
      "Balcony space",
      "Tastefully furnished",
    ],
    rooms: 2,
    capacity: 4,
    note: [
      "Inverter support",
      "Smoking is allowed at the rooms balconies",
      "Strictly No loud music",
    ],
  },
  {
    propertyName: "Pristine",
    description: "Newly launched 1 bed with pool, gym, outdoor snooker",
    available: true,
    price: 100000,
    location: "Guzape, Abuja",
    imgUrl: "/img/property_2.jpg",
    features: [
      "Elegant minimalist interior décor",
      "Spacious living and dining area",
      "High-speed internet with premium streaming services (Netflix, YouTube, etc.)",
      "Access to swimming pool and gym",
      "24/7 security and power supply",
    ],
    rooms: 1,
    capacity: 2,
  },
  {
    propertyName: "Pearl",
    description: "Luxe 1 bedroom with a PS5 console",
    available: true,
    price: 50000,
    location: "Lekki Phase 1, Lagos",
    imgUrl: "/img/property_3.jpg",
    features: [
      "24/7 power supply",
      "Gated & secure estate",
      "Walk-in closet",
      "Fibre optics internet",
      "PS5 console",
      "Clean water",
      "Spacious compound",
      "Serene environment",
      "DSTV/Showmax & Netflix",
      "Smart TVs",
      "Microwave/Oven",
      "Housekeeping",
    ],
    rooms: 1,
    capacity: 2,
    note: ["Minimum Stay: 2 nights"],
  },
];
