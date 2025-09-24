import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import User from "../components/User.tsx";

type UserType = {
    name: string,
    email: string,
    sex: string,
    address: string
}

export const handler : Handlers<UserType> = {

    GET : async(_req : Request, ctx : FreshContext<unknown, UserType>) => {
        const X_API_KEY = Deno.env.get("X_API_KEY")
        const {data} = await axios.get("https://api.api-ninjas.com/v1/randomuser", 
        {headers: {'X-Api-Key': X_API_KEY}})
        return ctx.render({
           name : data.name,
           email: data.email,
           sex: data.sex,
           address: data.address
        })
    }
}


const user = (props : PageProps<UserType>) => {
    // const {data} = props
    const data = props.data

    if(data.sex === "F") {
        data.sex = "Female"
    }else{
        data.sex = "Male"
    }

    return(
      <div>
        <div>
            <form method="get">
                <button type="submit">Buscar</button>
            </form>
        </div>

        <div class="GeneralWrapper">
            <User name={data.name} email={data.email} 
                  sex={data.sex} address={data.address}>
            </User>
        </div>
      </div>
    ) 
}

export default user
