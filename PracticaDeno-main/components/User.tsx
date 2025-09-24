import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/user.tsx"
import IconInbox from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/inbox.tsx"
import IconGenderTransgender from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/gender-transgender.tsx"
import IconMap from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/map.tsx"
import { FunctionComponent } from "preact";

type UserTypeProps = {
    name: string,
    email: string,
    sex: string,
    address: string
}

const User : FunctionComponent<UserTypeProps> = (props) => {
    const {name,email,sex,address} = props
    return(
        <div class="CardWrapper">
            <div class="FirstItem">
                <IconUser class="IconStyle"></IconUser>
                <p>{name}</p>
            </div>

            <div class="Separator"></div>
            
            <div class="SecondItem">
                <div class="SubItem">
                    <IconInbox></IconInbox>
                    <p>{email}</p>
                </div>

                <div class="SubItem">
                    <IconGenderTransgender></IconGenderTransgender>
                    <p>{sex}</p>
                </div>
                
                <div class="SubItem">
                    <IconMap></IconMap>
                    <p>{address}</p>  
                </div>
            </div>

        </div>
    )
}

export default User
