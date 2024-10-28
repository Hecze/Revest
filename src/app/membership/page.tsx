import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"

// Datos para los planes de suscripción
const plans = [
  {
    name: "Amateur",
    price: "99.99",
    features: [
      { feature: "1 outfit completo", active: true },
      { feature: "Un saludo de Hector", active: true },
      { feature: "Acceso limitado a la plataforma", active: false },
      { feature: "Descuento en tienda", active: false },
      { feature: "Soporte básico", active: false },
      { feature: "Newsletter mensual", active: false },
    ],
  },
  {
    name: "Profesional",
    price: "199.99",
    popular: true,
    features: [
      { feature: "1 outfit completo", active: true },
      { feature: "Un saludo de Hector", active: true },
      { feature: "Un album de 'Alvaro porque te fuiste'", active: true },
      { feature: "Descuento en tienda", active: true },
      { feature: "Soporte básico", active: true },
      { feature: "Newsletter mensual", active: false },
    ],
  },
  {
    name: "Business",
    price: "299.99",
    features: [
      { feature: "1 outfit completo", active: true },
      { feature: "Un saludo de Esther", active: true },
      { feature: "Un saludo de Roy", active: true },
      { feature: "Descuento en tienda", active: true },
      { feature: "Soporte premium", active: true },
      { feature: "Newsletter mensual", active: true },
    ],
  },
]

export default function MembershipPage() {
  return (
    <section className="flex flex-col items-center justify-center p-4 sm:p-12 md:pt-16 xl:pt-24 bg-gray-50">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-800">Elige tu plan</h1>
        <p className="text-center text-gray-600 mb-14 text-lg">Descubre el estilo que mejor se adapta a ti</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`w-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden
              ${plan.popular ? 'border-2 border-indigo-500 relative' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Más popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
                  {plan.name}
                </CardTitle>
                <p className="text-center text-2xl text-gray-600 mt-2 font-medium">
                  S/. {plan.price}
                </p>
                <p className="text-center text-gray-600 mt-2 font-medium">
                  /mes cobrado mensualmente
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center 
                      ${feature.active ? 'text-gray-700' : 'text-gray-400 line-through'}`}
                    >
                      {feature.active ? (
                        <Check className="h-5 w-5 text-indigo-500 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-2" />
                      )}
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href={`https://wa.me/51925641589?text=Hola,%20estoy%20interesado%20en%20la%20suscripci%C3%B3n%20${plan.name}`}
                  target="_blank"
                  className={`w-full py-3 flex rounded shadow justify-center text-lg font-semibold transition-colors duration-300 
                  ${plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-800 text-white'
                    : 'bg-slate-600 hover:bg-black text-white'}`}
                >
                  Suscríbete
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
