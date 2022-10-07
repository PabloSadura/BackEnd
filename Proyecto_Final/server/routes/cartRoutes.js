import { Router } from "express";
import fs from "fs";
const cartRouter = Router();

let products = [];
let cart = [];
let idCart = 1;

// lista todos los productos del carrito
cartRouter.get("/:id/products", (req, res) => {});

//  Crea un carrito y devuelve un id
cartRouter.post("/", (req, res) => {});

// Vacía un carrito y lo elimina
cartRouter.delete("/:idCart", (req, res) => {});

// Para incorporar productos al carrito por su id de producto
cartRouter.post("/:idCart/:id/products", (req, res) => {});

//  Eliminar un producto del carrito por su id de carrito y de producto
cartRouter.delete("/:idCart/:id_prod/products", (req, res) => {});
export default cartRouter;
