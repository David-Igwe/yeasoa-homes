import { IconWifi, IconBolt, IconDeviceTv, IconToolsKitchen, IconDeviceComputerCamera, IconToiletPaper, IconBuildingAirport, IconSwimming } from '@tabler/icons-react';
import {type ElementType} from "react"

export interface PropertyFeature{
    feature: string,
    icon: ElementType
}

export const propertyFeatureList: PropertyFeature[] = [
    {
        feature: "High-speed WiFi",
        icon: IconWifi
    },
    {
        feature: "24/7 power backup (generator/inverter)",
        icon: IconBolt
    },
    {
        feature: "Smart TVs & entertainment systems",
        icon: IconDeviceTv
    },
    {
        feature: "Fully equipped kitchens",
        icon: IconToolsKitchen
    },
    {
        feature: "Security & CCTV",
        icon: IconDeviceComputerCamera
    },
    {
        feature: "Cleaning services",
        icon: IconToiletPaper
    },
    {
        feature: "Airport transfers (on request)",
        icon: IconBuildingAirport
    },
    {
        feature: "Swimming pool access (select properties)",
        icon: IconSwimming
    }
];