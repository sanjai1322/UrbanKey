import { prisma } from "@/lib/prisma"
import { SearchClient } from "./search-client"

export default async function SearchPage() {
    const propertiesData = await prisma.property.findMany({
        orderBy: { createdAt: 'desc' }
    })

    const properties = propertiesData.map((p: any) => ({
        ...p,
        images: JSON.parse(p.images as string),
        amenities: JSON.parse(p.amenities as string)
    }))

    return <SearchClient properties={properties} />
}
