import React, { useState } from 'react';

type Product = {
    id:string;
    nombre:string;
    detalle:string;
}

const productosIniciales : Product[] = [
    {id:"1",nombre:"Ford",detalle:"Color blanco"},
    {id:"2",nombre:"Mercedes",detalle:"Color negro"}
];

function ShoppingCart(){
    const [productos,setProductos] = useState<Product[]>(productosIniciales);
    function deleteProduct(mi_id: string){
      const productosActualizados = productos.filter((product) => mi_id !== product.id);
      setProductos(productosActualizados);
    }
    function addProduct(producto: Product){
      setProductos([...productos,producto]);
    }
    function updateProduct(mi_producto: Product){
      const productosEditados = productos.map((producto) => 
        producto.id === mi_producto.id ? mi_producto : producto
      )
      setProductos(productosEditados);
    }
  return (
    <>
    {
      productos.map((producto) =>
       <>
        <h1>{producto.id} Producto</h1>
          <div>{producto.nombre}</div>
          <div>{producto.detalle}</div>
        <br/>
        <button onClick={() => deleteProduct(producto.id)}>Eliminar</button><br/>
        <button onClick={() => updateProduct({id:"2",nombre:"Fiat",detalle:"Color negro"})}>Editar</button>
       </> 
      )
    }
    <br/>
    <button onClick={() => addProduct({id:"3",nombre:"Renault",detalle:"Color gris"})}>Añadir</button>
    </>
  )
}

export default ShoppingCart;