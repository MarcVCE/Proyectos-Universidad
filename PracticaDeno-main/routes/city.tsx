import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import ListCities from "../components/ListCities.tsx";

type CityType = {
    name: string,
    latitude: number,
    country: string,
    population: number
}

type DataType = {
    mi_data : CityType[]
}

export const handler : Handlers<DataType> = {

    GET : async(req : Request, ctx : FreshContext<unknown, DataType>) => {
        const url = new URL(req.url)
        const nombre_ciudad = url.searchParams.get("nombre_ciudad")
        const X_API_KEY = Deno.env.get("X_API_KEY")
        let midata : CityType[] = [] 
        if (nombre_ciudad) {
          const {data} = await axios(`https://api.api-ninjas.com/v1/city?name=${nombre_ciudad}`, 
          {headers: {'X-Api-Key': X_API_KEY}})
          midata = data
        }
        return ctx.render({
           mi_data : midata
        })
    }
}


const city = (props : PageProps<DataType>) => {
    const {mi_data} = props.data
    return(
      <div>
        <div>
            <form method="get">
              <input type="text" name="nombre_ciudad" value=""></input>
              <button type="submit">Buscar</button>
            </form>
        </div>

        <ListCities mi_data={mi_data}></ListCities>

      </div>
    ) 
}

export default city