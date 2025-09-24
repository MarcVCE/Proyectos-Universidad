import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"

type DogType = {
    image_link : string,
    name : string,
    max_height_male: number,
    max_height_female: number,
    max_weight_male: number,
    max_weight_female: number,
    good_with_strangers : number,
    good_with_children: number,
    good_with_other_dogs: number
}

type DataType = {
    mi_data : DogType[]
}

export const handler : Handlers<DataType> = {

    GET : async(req : Request, ctx : FreshContext<unknown, DataType>) => {
        const url = new URL(req.url)
        const nombre_perro = url.searchParams.get("nombre_perro")
        const X_API_KEY = Deno.env.get("X_API_KEY")
        let midata : DogType[] = [] 
        if (nombre_perro) {
          const {data} = await axios(`https://api.api-ninjas.com/v1/dogs?name=${nombre_perro}`, 
          {headers: {'X-Api-Key': X_API_KEY}})
          midata = data
        }
        return ctx.render({
           mi_data : midata
        })
    }
}


const dog = (props : PageProps<DataType>) => {
    const {mi_data} = props.data
    return(
      <div>
        <div>
            <form method="get">
            <input type="text" name="nombre_perro" value=""></input>
            <button type="submit">Buscar</button>
            </form>
        </div>

          {
          mi_data.map((valor : DogType) => {
            return(
            <div class="DogPageWrapper">
              <div class="DogImageWrapper">
              <img src={valor.image_link}></img>
              </div>
              <div class="DogDataWrapper">
                  <ul>
                    <li>{valor.name}</li>
                    <li>{valor.max_height_male}</li>
                    <li>{valor.max_height_female}</li>
                    <li>{valor.max_weight_male}</li>
                    <li>{valor.max_weight_female}</li>
                    <li>{valor.good_with_strangers}</li>
                    <li>{valor.good_with_children}</li>
                    <li>{valor.good_with_other_dogs}</li>
                </ul>
              </div>
            </div>
            )
          })
          }

      </div>
    ) 
}

export default dog