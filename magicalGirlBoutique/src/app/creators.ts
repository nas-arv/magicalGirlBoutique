export class Creators {
    id: string
    thumbnail: string
    name: string
    role: string
    description: string
    isExpanded: boolean

    constructor(
        id: string,
        thumbnail: string,
        name: string,
        role: string,
        description: string,
        isExpanded: boolean
    ) {
        this.id = id 
        this.thumbnail = thumbnail
        this.name = name
        this.role = role
        this.description = description
        this.isExpanded = isExpanded
    }
}
