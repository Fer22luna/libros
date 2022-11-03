const products = [
  {
    nombre: "Bubble gum",
    autor: "Adam Levin",
    precio: 3750,
    imagen:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/e7/f4/e7f4e70fa9f86bc60ad4bec1cd7258d1.jpg",
    id: 0,
    categoria: "Ingles",
  },
  {
    nombre: "The man in the high castle",
    autor: "Philip k. Dick",
    precio: 4200,
    imagen:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/3d/7b/3d7b93683e309488d7dd43658e6d0d05.jpg",
    id: 1,
    categoria: "Ingles",
  },
  {
    nombre: "Los desposeidos ",
    autor: "Ursula K. LeGuin",
    precio: 8000,
    imagen: "https://images.cdn3.buscalibre.com/fit-in/360x360/68/77/68773dee0ee27c53d1d891d8dab2305e.jpg",
    id: 2,
    categoria: "Ciencia ficcion",
  },
  {
    nombre: "La mano izquierda de la oscuridad ",
    autor: "Ursula K. LeGuin",
    precio: 8000,
    imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/18/13/1813ece909644e808c9853bb249cc75f.jpg",
    id: 3,
    categoria: "Ciencia ficcion",
  },
  {
    nombre: "Los 7 habitos de la gente alt...",
    autor: "Stephen Covey",
    precio: 3400,
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/9b/7a/9b7ad75c0e5fcc05d47700055d30eccf.jpg",
    id: 4,
    categoria: "Autoayuda",
  },
  {
    nombre: "Este Dolor no es mio",
    autor: " Mark Wolynn",
    precio: 2500,
    imagen:"https://images.cdn3.buscalibre.com/fit-in/360x360/7b/3e/7b3e3bf022ba8d1e2c071b7f85e92d0b.jpg",
    id: 5,
    categoria: "Autoayuda",
  },

  {
    nombre: "El zoo de papel Y otros relatos",
    autor: "Ken Liu",
    precio: 8000,
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/a7/27/a7279249ca75dac6dc4cd09eca2c6d6c.jpg",
    id: 6,
    categoria: "Ciencia ficcion",
  },
  {
    nombre: "La esfera luminosa",
    autor: "Cixiu Liu",
    precio: 9999,
    imagen:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/3c/36/3c36a1ee45999b1f61c02d3c7de310b0.jpg",
    id: 7,
    categoria: "Ciencia ficcion",
  },
];

export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
    setTimeout(() => {
      res(response);
    }, 1000);
  });

export const getProduct = (productId) =>
  new Promise((res, rej) => {
    const response = products.find((product) => product.id == productId);
    setTimeout(() => {
      res(response);
    }, 1000);
  });
