import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { MongoClient } from "mongodb";
import { isTryStatement } from 'typescript';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://Julian:1qscxf5t@mongodbarquitectura.ddc2a.mongodb.net/ExamenParcial?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const getStatus = async (req: Request, res: Response, next: NextFunction) => {
  let hoy = new Date();
  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let anyo = hoy.getFullYear();
  return res.status(200).json(`${dia}-${mes}-${anyo}`);
};

const puestos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const getFreeSeats = async (req: Request, res: Response, next: NextFunction) => {
  let dia = parseInt(req.params.dia);
  let mes = parseInt(req.params.mes);
  let anyo = parseInt(req.params.anyo);
  if ((dia < 0 || dia > 31) || (mes < 1 || mes > 12)) {
    return res.status(500).json("Fecha inválida");
  } else {
    await client.connect();
    const puestosOcupados = await client.db().collection("Documentos").find({ dia:dia,mes:mes,anyo:anyo }).toArray();
    const numerosPuestosOcupados = puestosOcupados.map(puesto => puesto.asiento);
    const numerosPuestosDisponibles = puestos.filter(puesto => !numerosPuestosOcupados.includes(puesto))
    await client.close();
    return res.status(200).json(numerosPuestosDisponibles);
  }
};

const book = async (req: Request, res: Response, next: NextFunction) => {
  let asiento = parseInt(req.params.asiento); 
  let dia = parseInt(req.params.dia);
  let mes = parseInt(req.params.mes);
  let anyo = parseInt(req.params.anyo);
  if((dia < 0 || dia > 31) || (mes < 1 || mes > 12) || (asiento < 0 || asiento > 20) ){
    return res.status(500).json("Fecha inválida o número de asiento no válido");  
  }else{
    await client.connect();
    const puestosOcupados = await client.db().collection("Documentos").find({ dia:dia,mes:mes,anyo:anyo }).toArray();
    const numerosPuestosOcupados = puestosOcupados.map(puesto => puesto.asiento); 
    const numerosPuestosDisponibles = puestos.filter(puesto => !numerosPuestosOcupados.includes(puesto));
    const asientoEstaDisponible = numerosPuestosDisponibles.some(elasiento => elasiento === asiento);
    if(asientoEstaDisponible){
      let token = uuidv4();  
      await client.db().collection("Documentos").insertOne({dia:dia,mes:mes,anyo:anyo,asiento:asiento,
        token:token});
        await client.close();
      return res.status(200).json({token:token});
    }else{
      await client.close();
      return res.status(404).json("Sitio no disponible");
    }
  }
};

const free = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.token;
  let dia = parseInt(req.params.dia);
  let mes = parseInt(req.params.mes);
  let anyo = parseInt(req.params.anyo);
  if((dia < 0 || dia > 31) || (mes < 1 || mes > 12) ){
    return res.status(500).json("Fecha inválida");  
  }else{
    await client.connect();
    const puestosOcupados = await client.db().collection("Documentos").find({ dia:dia,mes:mes,anyo:anyo,token:token }).toArray();
    const tokensPuestosOcupados = puestosOcupados.map(puesto => puesto.token); 
    const asientoEstaReservado = tokensPuestosOcupados.some(eltoken => eltoken === token);
    if(asientoEstaReservado){
      await client.db().collection("Documentos").deleteOne({dia:dia,mes:mes,anyo:anyo,token:token});
      await client.close();
      return res.status(200).json("Sitio Eliminado");
    }else{
      await client.close();
      return res.status(404).json("Ningún sitio reservado");
    }
  }
};


export default { getStatus, getFreeSeats, book, free};