import { FunctionComponent } from "preact";
import City from "../components/City.tsx";

type CityTypeProps = {
    name: string,
    latitude: number,
    country: string,
    population: number
}

type DataTypeProps = {
    mi_data : CityTypeProps[]
}

const ListCities : FunctionComponent<DataTypeProps> = (props) => {
    const {mi_data} = props
    return(
    <div>
    {
        mi_data.map((valor : CityTypeProps) => {
        return(
            <div class="GeneralWrapper">
                <City name={valor.name} latitude={valor.latitude} 
                        country={valor.country} population={valor.population}>     
                </City>
            </div>
        )
        })
    }    
    </div>
    )
}

export default ListCities
