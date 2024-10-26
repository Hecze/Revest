"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, Filter } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

// Actualizar categorías, marcas, y otros filtros para el nuevo contexto
const categories = ["Muebles", "Electrodomésticos", "Electrónica", "Iluminación", "Decoración"]
const brands = ["Samsung", "LG", "Sony", "Philips", "Whirlpool", "IKEA", "Panasonic"]
const materials = ["Madera", "Metal", "Plástico", "Vidrio", "Acero inoxidable"]
const sizes = ["Pequeño", "Mediano", "Grande"]
const colors = ["Negro", "Blanco", "Plata", "Azul", "Rojo"]
const energyRatings = ["A++", "A+", "A", "B", "C"]
const types = ["Hogar", "Oficina", "Exteriores", "Cocina", "Sala de estar"]

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  tags: string[];
}

// Generar productos de ejemplo para el nuevo contexto
const generateProducts = (): Product[] => Array(100).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Producto ${i + 1}`,
  price: Math.floor(Math.random() * 5000) + 500,
  image: `/placeholder.svg?height=200&width=200`,
  tags: [
    categories[Math.floor(Math.random() * categories.length)],
    brands[Math.floor(Math.random() * brands.length)],
    materials[Math.floor(Math.random() * materials.length)],
    sizes[Math.floor(Math.random() * sizes.length)],
    colors[Math.floor(Math.random() * colors.length)],
    energyRatings[Math.floor(Math.random() * energyRatings.length)],
    types[Math.floor(Math.random() * types.length)],
  ]
}))

export default function ProductCatalog() {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("recommended")
  const [priceRange, setPriceRange] = useState([500, 5000])
  const [products, setProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({
    categories: [],
    brands: [],
    materials: [],
    sizes: [],
    colors: [],
    energyRatings: [],
    types: []
  })

  useEffect(() => {
    setProducts(generateProducts())
  }, [])

  const filteredProducts = products.filter(product =>
    (filters.categories.length === 0 || filters.categories.some(cat => product.tags.includes(cat))) &&
    (filters.brands.length === 0 || filters.brands.some(brand => product.tags.includes(brand))) &&
    (filters.materials.length === 0 || filters.materials.some(material => product.tags.includes(material))) &&
    (filters.sizes.length === 0 || filters.sizes.some(size => product.tags.includes(size))) &&
    (filters.colors.length === 0 || filters.colors.some(color => product.tags.includes(color))) &&
    (filters.energyRatings.length === 0 || filters.energyRatings.some(rating => product.tags.includes(rating))) &&
    (filters.types.length === 0 || filters.types.some(type => product.tags.includes(type))) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price
    if (sortBy === "price_desc") return b.price - a.price
    return 0 // Para "recommended", se usa el orden original
  })

  const productsPerPage = 20
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const handleFilterChange = (category: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }))
    setCurrentPage(1) // Reiniciar a la primera página cuando cambian los filtros
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto my-4 sm:my-12 flex flex-col md:flex-row">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mx-4 bg-white mb-4 md:hidden">
              <Filter className="mr-2 h-4 w-4" /> Filtros
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-[300px] sm:w-[400px] shadow">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <Filters
                filters={filters}
                handleFilterChange={handleFilterChange}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </SheetContent>
        </Sheet>

        <aside className="w-[30rem] py-6 px-12 hidden md:block bg-white shadow rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Filtros</h2>
          <Filters
            filters={filters}
            handleFilterChange={handleFilterChange}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </aside>

        <div className="flex-grow px-4">
          <div className="mb-4 flex flex-col sm:flex-row justify-between items-center bg-white shadow rounded-xl py-6 gap-6 px-12">
            <div className="flex flex-wrap items-center space-x-4">
              <span className="hidden md:inline ml-4">Ordenar por:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seleccionar orden" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recomendados</SelectItem>
                  <SelectItem value="price_asc">Precio: menor a mayor</SelectItem>
                  <SelectItem value="price_desc">Precio: mayor a menor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <span className="flex md:mt-0 gap-2 md:gap-6 flex-col flex-wrap items-center opacity-90 mr-4">
              <span className="mb-2 sm:mb-0 mx-auto">{sortedProducts.length} Productos Encontrados</span>
              <div className="flex space-x-2 items-center w-full justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span>Página {currentPage} de {totalPages}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginatedProducts.map((product) => (
              <>
              <Link key={product.id} className="rounded-xl overflow-hidden bg-white shadow pb-6 cursor-pointer hover:brightness-95 transition" href={"/producto/electrodomestico"}>
                <>
                  <Image src={"/IA-2.png"} alt={product.name} height={100} width={100} className="w-full h-56 object-cover shadow" />
                </>
                <div className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-200 rounded px-2 py-1 shadow">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
              </>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span>Página {currentPage} de {totalPages}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

type FiltersProps = {
  filters: { [key: string]: string[] };
  handleFilterChange: (category: string, value: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
};

function Filters({ filters, handleFilterChange, priceRange, setPriceRange, sortBy, setSortBy }: FiltersProps) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="sort">
        <AccordionTrigger>Ordenar por</AccordionTrigger>
        <AccordionContent>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccionar orden" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recomendados</SelectItem>
              <SelectItem value="price_asc">Precio: menor a mayor</SelectItem>
              <SelectItem value="price_desc">Precio: mayor a menor</SelectItem>
            </SelectContent>
          </Select>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="categories">
        <AccordionTrigger>Categorías</AccordionTrigger>
        <AccordionContent>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-2">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => handleFilterChange('categories', category)}
              />
              <Label htmlFor={`category-${category}`} className="ml-2">{category}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="brands">
        <AccordionTrigger>Marca</AccordionTrigger>
        <AccordionContent>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center mb-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={() => handleFilterChange('brands', brand)}
              />
              <Label htmlFor={`brand-${brand}`} className="ml-2">{brand}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="price">
        <AccordionTrigger>Precio</AccordionTrigger>
        <AccordionContent>
          <Slider
            min={500}
            max={5000}
            step={100}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-2"
          />
          <div className="flex justify-between">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="materials">
        <AccordionTrigger>Material</AccordionTrigger>
        <AccordionContent>
          {materials.map((material) => (
            <div key={material} className="flex items-center mb-2">
              <Checkbox
                id={`material-${material}`}
                checked={filters.materials.includes(material)}
                onCheckedChange={() => handleFilterChange('materials', material)}
              />
              <Label htmlFor={`material-${material}`} className="ml-2">{material}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="sizes">
        <AccordionTrigger>Tamaño</AccordionTrigger>
        <AccordionContent>
          {sizes.map((size) => (
            <div key={size} className="flex items-center mb-2">
              <Checkbox
                id={`size-${size}`}
                checked={filters.sizes.includes(size)}
                onCheckedChange={() => handleFilterChange('sizes', size)}
              />
              <Label htmlFor={`size-${size}`} className="ml-2">{size}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="colors">
        <AccordionTrigger>Color</AccordionTrigger>
        <AccordionContent>
          {colors.map((color) => (
            <div key={color} className="flex items-center mb-2">
              <Checkbox
                id={`color-${color}`}
                checked={filters.colors.includes(color)}
                onCheckedChange={() => handleFilterChange('colors', color)}
              />
              <Label htmlFor={`color-${color}`} className="ml-2">{color}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="energyRatings">
        <AccordionTrigger>Clasificación Energética</AccordionTrigger>
        <AccordionContent>
          {energyRatings.map((rating) => (
            <div key={rating} className="flex items-center mb-2">
              <Checkbox
                id={`energyRating-${rating}`}
                checked={filters.energyRatings.includes(rating)}
                onCheckedChange={() => handleFilterChange('energyRatings', rating)}
              />
              <Label htmlFor={`energyRating-${rating}`} className="ml-2">{rating}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="types">
        <AccordionTrigger>Tipo</AccordionTrigger>
        <AccordionContent>
          {types.map((type) => (
            <div key={type} className="flex items-center mb-2">
              <Checkbox
                id={`type-${type}`}
                checked={filters.types.includes(type)}
                onCheckedChange={() => handleFilterChange('types', type)}
              />
              <Label htmlFor={`type-${type}`} className="ml-2">{type}</Label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
