import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/user.tsx"
import IconWorldLatitude from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/world-latitude.tsx"
import IconMan from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/man.tsx"
import IconUsersGroup from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/users-group.tsx"
import { FunctionComponent } from "preact"

type CityTypeProps = {
    name: string,
    latitude: number,
    country: string,
    population: number
}

const City : FunctionComponent<CityTypeProps> = (props) => {
    const {name,latitude,country,population} = props
    return(
        <div class="CardWrapper">
            <div class="FirstItem">
                <IconUser class="IconStyle"></IconUser>
                <p>{name}</p>
            </div>

            <div class="Separator"></div>

            <div class="SecondItem">
                <div class="SubItem">
                    <IconWorldLatitude></IconWorldLatitude>
                    <p>{latitude}</p>
                </div>

                <div class="SubItem">
                    <IconUsersGroup></IconUsersGroup>
                    <p>{country}</p>
                </div>
                
                <div class="SubItem">
                    <IconMan></IconMan>
                    <p>{population}</p>  
                </div>
            </div>

        </div>
    )
}

export default City
