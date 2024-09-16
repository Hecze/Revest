'use client'
import { useState } from 'react'
import Image from 'next/image'
// import { notFound } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
    params: {
        cloth_name: string;
        cloth_id: string;
    }
}

export default function ClothingPage({ params }: Props) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    // In a real application, you would fetch the product data based on the cloth_id
    // For this example, we'll use hardcoded data
    const productData = {
        id: params.cloth_id,
        name: 'Chaqueta PK NECK S25',
        price: '149.90',
        currency: 'PEN',
        sizes: ['S', 'M', 'L', 'XL'],
        specifications: [
            { label: 'Tipo', value: 'Chaquetas' },
            { label: 'Condición del producto', value: 'Nuevo' },
            { label: 'Modelo', value: 'PK NECK S25' },
            { label: 'Material de vestuario', value: 'Textil' },
            { label: 'País de origen', value: 'China' },
            { label: 'Composición', value: '100% Poliéster' },
            { label: 'Diseño', value: 'Liso' },
            { label: 'Largo de mangas', value: 'Manga larga' },
            { label: 'Tipo de cierre', value: 'Cremallera' },
            { label: 'Estilo de vestuario', value: 'Casual' },
            { label: 'Temporada', value: 'Primavera-Verano' },
            { label: 'Medidas de la modelo', value: 'Este/a modelo mide 169 cm y lleva una talla S. Su pecho mide 86 cm, su cintura, 65 cm y su cadera, 90 cm.' },
        ],
        additionalInfo: '¿Buscas una prenda perfecta para completar tu look deportivo? ¡Las casacas y chalecos sport para hombre son la respuesta! En Saga Falabella te ofrecemos una gran variedad de modelos para que encuentres el que mejor se adapte a tu estilo y necesidades.\n\nAdemás, nuestras casacas y chalecos son fabricados con los mejores materiales para asegurar una excelente calidad. El tejido es ligero y cómodo para que te sientas fresco en todo momento. Y gracias a los diseños modernos y atractivos, te verás más que increíble. Así que no esperes más y descubre la colección de casacas y chalecos sport para hombre en Saga Falabella.'
    }

    // if (!params.cloth_id) {
    //     notFound()
    // }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                    <Image
                        src="/IA-2.png?height=600&width=600"
                        alt={productData.name}
                        width={600}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{productData.name}</h1>
                        <p className="text-2xl font-semibold mb-4">
                            {productData.currency} {productData.price}
                        </p>
                        <div className="mb-4">
                            <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">
                                Talla
                            </label>
                            <div className="flex space-x-2">
                                {productData.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        disabled={size === 'XL'}
                                        className={`w-10 h-10 flex items-center justify-center border rounded-md ${selectedSize === size
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-background text-foreground'
                                            } ${size === 'XL'
                                                ? 'opacity-50 cursor-not-allowed'
                                                : 'hover:bg-muted'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                                Cantidad
                            </label>
                            <Input
                                type="number"
                                id="quantity"
                                defaultValue="1"
                                min="1"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <Button className="w-full">Alquilar ahora</Button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Especificaciones</h2>
                    <dl className="grid grid-cols-1 gap-y-2">
                        {productData.specifications.map((spec, index) => (
                            <div key={index} className="flex">
                                <dt className="font-medium w-1/3">{spec.label}</dt>
                                <dd className="w-2/3">{spec.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Información adicional</h2>
                    <p className="whitespace-pre-line">{productData.additionalInfo}</p>
                </div>
            </div>
        </div>
    )
}