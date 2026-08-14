export interface OrderItem {
    propertyName: string,
    propertyId: string,
    bookingPeriod: Date,
    nights: number,
    guests: number,
    pricePerNight: number,
    totalPrice: number
}

export type Order = OrderItem[]
