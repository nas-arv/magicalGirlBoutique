export class Product {
    id: string
    description: string
    thumbnail: string
    price: number
    title: string
    constructor(id: string, title: string, description: string, thumbnail: string, price: number){
        this.id = id
        this.title = title
        this.description = description
        this.thumbnail = thumbnail
        this.price = price
    }
}
