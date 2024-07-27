function Vehicles(fabricante, modelo, cor) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.cor = cor;
}

function Carro(fabricante, modelo, cor) {
    Vehicles.call(this, fabricante, modelo, cor);
}

function Moto(fabricante, modelo, cor) {
    Vehicles.call(this, fabricante, modelo, cor);
}

const carro = new Carro('Honda', 'Fit', 'preto');
const moto = new Moto('Honda', 'CB 600', 'azul');

console.log(carro);
console.log(moto)