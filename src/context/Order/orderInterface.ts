export interface OrderItem {
    propertyName: string,
    propertyId: string,
    bookingPeriod: {
        start: Date,
        end?: Date
    },
    nights: number,
    guests: number,
    pricePerNight: number,
    totalPrice: number
}

export type Order = OrderItem[]
