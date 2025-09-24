import { TableContainer } from '@/styles/app.styled';
import { useState } from 'react'


function Home() {
  const [titleColumn, settitleColumn] = useState<string>("");
  const [typeColumn, settypeColumn] = useState<string>("");
  const [titleColumns, settitleColumns] = useState<string[]>(["Nombre","Edad","Fecha de Nacimiento"]);
  const [typeColumns, settypeColumns] = useState<string[]>(["string","number","date"]);
  const [inputTableValues, setinputTableValues] = useState<any[]>(["","",""]);
  const [tableValue, settableValue] = useState<any[]>([]);

  return (
    <>
      <TableContainer numeroColumnas={titleColumns.length + 1}>
        {
          titleColumns.map((title) => <span>{title}</span>)
        }
      </TableContainer>
      <TableContainer numeroColumnas={titleColumns.length + 1}>
        {
        tableValue.map((row,jindex) => { 
          return(
            <>
            {
              row.map((elem_row:any) => <span>{elem_row}</span>)
            }
            <button onClick={() => 
              settableValue(() => tableValue.filter((row,index) => index != jindex))}>➖ Fila</button>
            </>
          )
        }
        )
        }
      </TableContainer>
      <TableContainer numeroColumnas={typeColumns.length + 1}>
        {
          typeColumns.map((my_type,index) => <input type={my_type} value={inputTableValues[index]} 
          onChange={(event:any) => {
            const cloneValues = [...inputTableValues];
            cloneValues[index] = event.target.value;
            setinputTableValues(cloneValues)}}></input>)
        }
       <button onClick={() => settableValue([...tableValue,inputTableValues])}>➕ Fila</button>
      </TableContainer>
      <input value={titleColumn} onChange={(event:any) => settitleColumn(event.target.value)}
                             placeholder='Título columna'></input>
      <select required defaultValue={'string'}  value={typeColumn} 
              onChange={(event:any) => settypeColumn(event.target.value)}>
        <option value='string'>string</option>
        <option value='number'>number</option>
        <option value='checkbox'>checkbox</option>
        <option value='date'>date</option>
      </select>
      <button onClick={() => 
       {
        if(titleColumn === ""){
          return "";
        }else{ 
          settitleColumns([...titleColumns,titleColumn]);
          settypeColumns([...typeColumns,typeColumn]);
          settableValue(() => tableValue.map((row) => [...row,""]));
        }
      }}>➕ Columna</button>
    </>
  )
}

export default Home;
