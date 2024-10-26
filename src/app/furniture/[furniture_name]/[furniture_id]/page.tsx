// furniture/[furniture_name]/[furniture_id]/page.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import Link from "next/link"

type Props = {
    params: {
        furniture_id: string;
    }
}

type ProductData = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        name: string;
    };
    images: string[];
};

export default function FurniturePage({ params }: Props) {
    const [productData, setProductData] = useState<ProductData | null>(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/${params.furniture_id}`);
                if (!response.ok) throw new Error("Failed to fetch product data");
                const data = await response.json();
                setProductData(data);
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        }

        fetchProduct();
    }, [params.furniture_id]);

    if (!productData) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 lg:px-8 mt-4 md:my-8 py-6 rounded-lg bg-white">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                    <Image
                        src={productData.images[0]}
                        alt={productData.title}
                        width={600}
                        height={600}
                        unoptimized
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between lg:justify-start lg:gap-4 pt-2">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{productData.title}</h1>
                        <p className="text-2xl font-semibold mb-4">
                            PEN {productData.price.toFixed(2)}
                        </p>
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
                    <Link className="w-full p-4 rounded bg-black text-white flex justify-center" href={"https://wa.me/51925641589?text=Hola,%20quiero%20alquilar%20un%20mueble"}>Alquilar ahora</Link>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-5">Especificaciones</h2>
                    <dl className="grid grid-cols-1 gap-y-2">
                        <div className="flex shadow px-4 py-3 gap-24">
                            <dt className="font-medium w-1/3">Categoría:</dt>
                            <dd className="w-1/3">{productData.category.name}</dd>
                        </div>
                    </dl>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
                    <p className="whitespace-pre-line">{productData.description}</p>
                </div>
            </div>
        </div>
    )
} 
