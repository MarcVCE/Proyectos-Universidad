import { useState } from "preact/hooks";
import axios from "npm:axios";
import { FunctionComponent } from "preact";
import { DefinitionType, DefinitionsType, MeaningType } from "../types.ts";



const Cliente = () => {
  
  const [nombre, setNombre] = useState<string>("")
  const [valores, setValores] = useState<MeaningType[]>([])

  async function buscarPorPalabra(e : Event){
    e.preventDefault()
    if(nombre){
      const {data} = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${nombre}`)
      setValores(data)
      console.log(valores, "jeje")
    }else{
      throw new Error("Palabra No introducida")
    }
  }


  return (
    <>     
      <div>
        <form onSubmit={(e) => buscarPorPalabra(e)}>
          <input type="text" name="nombre" value={nombre} 
                onChange={(e) => setNombre(e.currentTarget.value)}>     
          </input>
          <button type="submit">Search</button>
        </form>
      </div>
      
        <div>
            {
              valores.map((valor : MeaningType) => {
                    valor.meanings.map((meaning : DefinitionsType) => {      
                          console.log(meaning)      
                          meaning.definitions.map((definition : DefinitionType) => { 
                                <div key={definition.definition + definition.example}>
                                  <div>Hola {definition.definition}</div>
                                  <div>Hola {definition.example}</div>
                                </div>
                          })
                    })
              })
            }
        </div>
    </>
  );
}

export default Cliente
