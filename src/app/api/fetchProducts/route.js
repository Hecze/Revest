// app/api/fetchProducts/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const nao = (page - 1) * 24;

  try {
    const response = await fetch(
      `https://serpapi.com/search.json?engine=home_depot&q=furniture&nao=${nao}&ps=24&delivery_zip=04401&store_id=2414&api_key=d758e123c56eb8b2ba811d6e62f53b95818dae380c050ffc14d83b8a915dbf4d`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error en la solicitud a SerpApi:", response.status, errorText);
      return NextResponse.json({ error: "Error al obtener datos de SerpApi", details: errorText }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error en el servidor:", error.message);
    return NextResponse.json({ error: "Error en el servidor al obtener los productos" }, { status: 500 });
  }
}
