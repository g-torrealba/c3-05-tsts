class Cl_mArticulo {
  constructor({ code, precio }) {
    this.code = code;
    this.precio = precio;
  }
}

class Cl_mTienda {
  constructor() {
    this.data = [];
  }
  agregarArticulo(art) {
    this.data.push(new Cl_mArticulo(art));
  }
  menorPrecio() {
    let menor=Infinity
    this.data.forEach((a) => {
      if (a.precio < menor) menor = a.precio;
    });
    return menor
  }
  codesMenorPrecio() {
    let menor = this.menorPrecio(),
      codes = [];
    this.data.forEach((a) => {
      if (a.precio === menor) codes.push(a.code);
    });
    return codes;
  }
  conMenorPrecio() {
    let menor = this.menorPrecio();
    return this.data.filter((a) => a.precio === menor);
  }
}

let t = new Cl_mTienda();

t.agregarArticulo({ code: "A", precio: 4 }),
  t.agregarArticulo({ code: "B", precio: 2 }),
  t.agregarArticulo({ code: "C", precio: 6 }),
  t.agregarArticulo({ code: "D", precio: 8 }),
  t.agregarArticulo({ code: "E", precio: 2 });

let r1 = t.menorPrecio(),
  r2 = t.codesMenorPrecio(),
  r3 = t.conMenorPrecio()
