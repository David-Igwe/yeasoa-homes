import { IconBed, IconBolt, IconCar, IconDeviceGamepad2, IconDeviceTv, IconDroplet, IconHome, IconMapPin, IconShieldCheck, IconSparkles, IconSwimming, IconToolsKitchen, IconWashMachine, IconWifi } from '@tabler/icons-react';
import {type PropertyFeature} from "./propertyFeatureList"

export type propertyItemType = {
    propertyName: string;
    description: string;
    id: string;
    available: boolean;
    price: number;
    location: string;
    imgUrl: string;
    features: PropertyFeature[];
    rooms: number;
    capacity: number;
    note?: string[];
}

export const propertyList: propertyItemType[] = [
  {
    propertyName: "Creamstone Aparment",
    description: "Brand new cute 2 bedroom apartment with PS5 in Lekki Right",
    id: "0001",
    available: true,
    price: 100000,
    location: "Lekki Right, Lagos",
    imgUrl: "/img/property_1.jpg",
    features: [
      { feature: "24/7 power supply", icon: IconBolt },
      { feature: "Serene environment", icon: IconHome },
      { feature: "High-speed WiFi", icon: IconWifi },
      { feature: "Netflix / YouTube", icon: IconDeviceTv },
      { feature: "PS5 console", icon: IconDeviceGamepad2 },
      { feature: "Proximity to filling station, eatery and supermarket", icon: IconMapPin },
      { feature: "Board games", icon: IconDeviceGamepad2 },
      { feature: "En-suite rooms", icon: IconBed },
      { feature: "Daily Housekeeping", icon: IconSparkles },
      { feature: "Dedicated parking space", icon: IconCar },
      { feature: "Equipped kitchen", icon: IconToolsKitchen },
      { feature: "Washing machine", icon: IconWashMachine },
      { feature: "Balcony space", icon: IconHome },
      { feature: "Tastefully furnished interiors", icon: IconHome },
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
    id: "0002",
    available: true,
    price: 100000,
    location: "Guzape, Abuja",
    imgUrl: "/img/property_2.jpg",
    features: [
      { feature: "Elegant minimalist interiors", icon: IconHome },
      { feature: "Spacious living and dining area", icon: IconHome },
      { feature: "High-speed WiFi", icon: IconWifi },
      { feature: "Netflix / YouTube", icon: IconDeviceTv },
      { feature: "Swimming pool access", icon: IconSwimming },
      { feature: "Gym access", icon: IconHome },
      { feature: "24/7 power supply", icon: IconBolt },
      { feature: "Security & surveillance", icon: IconShieldCheck },
    ],
    rooms: 1,
    capacity: 2,
  },
  {
    propertyName: "Pearl",
    description: "Luxe 1 bedroom with a PS5 console",
    id: "0003",
    available: true,
    price: 50000,
    location: "Lekki Phase 1, Lagos",
    imgUrl: "/img/property_3.jpg",
    features: [
      { feature: "24/7 power supply", icon: IconBolt },
      { feature: "Security & surveillance", icon: IconShieldCheck },
      { feature: "Walk-in closet", icon: IconBed },
      { feature: "High-speed WiFi", icon: IconWifi },
      { feature: "PS5 console", icon: IconDeviceGamepad2 },
      { feature: "Clean water supply", icon: IconDroplet },
      { feature: "Spacious outdoor area", icon: IconHome },
      { feature: "Serene environment", icon: IconHome },
      { feature: "DSTV/Showmax & Netflix", icon: IconDeviceTv },
      { feature: "Kitchen appliances", icon: IconToolsKitchen },
      { feature: "Daily Housekeeping", icon: IconSparkles },
    ],
    rooms: 1,
    capacity: 2,
    note: ["Minimum Stay: 2 nights"],
  },
];
