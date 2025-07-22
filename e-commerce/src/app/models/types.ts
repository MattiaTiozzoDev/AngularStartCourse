export type ProductType = {
    id?: number,
    imgUrl?: string,
    title: string,
    price: number,
    promotion?: boolean
}

export type UserType = {
    username: string,
    password: string
}