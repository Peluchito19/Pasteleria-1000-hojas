export const categories = [
  { id: 'tortas', name: 'Tortas' },
  { id: 'porciones', name: 'Porciones' },
  { id: 'tartas', name: 'Tartas' },
  { id: 'dulces', name: 'Dulces' },
  { id: 'sandwiches', name: 'Sándwiches' },
  { id: 'bebidas', name: 'Bebidas' },
  { id: 'promos', name: 'Promociones' }
];

export const products = [
  // TORTAS (orden y fotos exactos del usuario)
  {
    id: 't-milhojas',
    name: 'Torta Mil Hojas',
    price: 15000,
    description: 'Mil hojas, relleno de manjar, finalizado con capa de chocolate.',
    category: 'tortas',
    image: '/images/img12.jpg',
  },
  {
    id: 't-manjarnuez',
    name: 'Torta Manjar Nuez',
    price: 15000,
    description: 'Bizcocho de vainilla, relleno de manjar, nueces y crema.',
    category: 'tortas',
    image: '/images/img13.jpg',
  },
  {
    id: 't-cuatroleches',
    name: 'Torta Cuatro Leches',
    price: 18000,
    description: 'Bizcocho de vainilla, remojada en tres leches y relleno de manjar.',
    category: 'tortas',
    image: '/images/img14.jpg',
  },
  {
    id: 't-hojarasca',
    name: 'Torta Hojarasca',
    price: 15000,
    description: 'Discos de hojarascas con relleno de manjar y opcional crema pastelera.',
    category: 'tortas',
    image: '/images/img15.jpg',
  },
  {
    id: 't-pina',
    name: 'Torta de Piña',
    price: 15000,
    description: 'Bizcocho de vainilla relleno de crema chantilly y piña.',
    category: 'tortas',
    image: '/images/img19.jpg',
  },
  {
    id: 't-naranja',
    name: 'Panqueque Naranja',
    price: 20000,
    description: 'Discos de panqueque vainilla relleno de crema de naranja.',
    category: 'tortas',
    image: '/images/img20.jpg',
  },
  {
    id: 't-chocolate',
    name: 'Panqueque Chocolate',
    price: 20000,
    description: 'Discos de panqueque vainilla relleno de ganache de chocolate.',
    category: 'tortas',
    image: '/images/img21.jpg',
  },
  {
    id: 't-selvanegra',
    name: 'Torta Selva Negra',
    price: 18000,
    description: 'Bizcocho de chocolate relleno de mermelada de frambuesa y crema chantilly.',
    category: 'tortas',
    image: '/images/img22.jpg',
  },
  // ¡Crea tu torta!
  {
    id: 't-crea',
    name: '¡Crea Tu Torta!',
    price: 18000,
    description: 'Libre elección de bizcocho, relleno y toppings.',
    category: 'tortas',
    image: '/images/img23.jpg',
  },

  // PORCIONES
  { id: 'p-milhojas', name: 'Porción Mil Hojas', price: 2000, category: 'porciones', image: '/images/porcion-1000-hojas.jpg' },
  { id: 'p-manjarnuez', name: 'Porción Manjar Nuez', price: 2000, category: 'porciones', image: '/images/porcion-majar-nuez.jpg' },
  { id: 'p-tresleches', name: 'Porción Tres Leches', price: 2500, category: 'porciones', image: '/images/Torta-3-leches-porcion-jpg.jpg' },
  { id: 'p-hojarasca', name: 'Porción Hojarasca', price: 2000, category: 'porciones', image: '/images/pocion-hojarasca.jpg' },
  { id: 'p-naranja', name: 'Porción Panqueque Naranja', price: 2500, category: 'porciones', image: '/images/porcion-panqueque-naranja.jpg' },

  // TARTAS
  { id: 'ta-limon', name: 'Pie de Limón', price: 1500, category: 'tartas', image: '/images/pie-de-limon.jpg' },
  { id: 'ta-nuez', name: 'Kuchen de Nuez', price: 1800, category: 'tartas', image: '/images/Kutchen-de-nuez.jpg' },
  { id: 'ta-manzana', name: 'Kuchen de Manzana', price: 1500, category: 'tartas', image: '/images/kutchen-de-manzana.jpg' },
  { id: 'ta-sur', name: 'Kuchen del Sur', price: 2000, category: 'tartas', image: '/images/kutchen-del-sur.jpg' },

  // DULCES
  { id: 'd-milhojas', name: 'Dulce Mil Hojas', price: 1200, category: 'dulces', image: '/images/dulce-de-100-hojas-thousand.jpg' },
  { id: 'd-cachitos', name: 'Cachitos', price: 500, category: 'dulces', image: '/images/cachitos.jpg' },
  { id: 'd-chilenitos', name: 'Chilenitos', price: 1200, category: 'dulces', image: '/images/chilenitos-3.jpg' },
  { id: 'd-alfajores', name: 'Alfajores de Maicena', price: 1000, category: 'dulces', image: '/images/alfajores-de-maicena.jpg' },
  { id: 'd-minialfajores', name: 'Mini Alfajores de Maicena', price: 500, category: 'dulces', image: '/images/mini-alfajores-de-maicena.jpg' },
  { id: 'd-galletas', name: 'Galletas Mantequilla', price: 350, category: 'dulces', image: '/images/galletas-de-mantequilla.jpg' },
  { id: 'd-queque', name: 'Queque', price: 800, category: 'dulces', image: '/images/queque 4.jpg' },

  // SANDWICHES
  { id: 's-aliado', name: 'Aliado', price: 1500, description: 'Preparados con pan hallulla o marraqueta', category: 'sandwiches', image: '/images/aliado.jpg' },
  { id: 's-avepalta', name: 'Ave Palta', price: 2500, description: 'Preparados con pan hallulla o marraqueta', category: 'sandwiches', image: '/images/ave-palta.jpg' },
  { id: 's-avepimenton', name: 'Ave Pimentón', price: 2000, description: 'Preparados con pan hallulla o marraqueta', category: 'sandwiches', image: '/images/sandwich-pollo-pimenton.jpg' },
  { id: 's-quesosalame', name: 'Queso Salame', price: 1500, description: 'Preparados con pan hallulla o marraqueta', category: 'sandwiches', image: '/images/natura-recorte_web-sandwich_de_salame_y_queso_en_pan_casero1.jpg' },

  // BEBIDAS
  { id: 'b-cafe', name: 'Café', price: 1000, category: 'bebidas', image: '/images/cafe.jpg' },
  { id: 'b-capuccino', name: 'Capuccino Sabores', price: 2000, category: 'bebidas', image: '/images/capuchino-sabores.jpg' },
  { id: 'b-chocolate', name: 'Chocolate Caliente', price: 2000, category: 'bebidas', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800' },
  { id: 'b-te', name: 'Té (variedades)', price: 1000, category: 'bebidas', image: '/images/te-variadades.jpg' },
  { id: 'b-jugo', name: "Jugo Watt's", price: 1500, category: 'bebidas', image: '/images/watts.jpg' },
  { id: 'b-bebidas', name: 'Bebidas', price: 1000, category: 'bebidas', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800' },
  { id: 'b-energetica', name: 'Energética', price: 2000, category: 'bebidas', image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=800' },

  // PROMOS
  { id: 'pr-1', name: 'Torta del día + Café/Té', price: 3000, category: 'promos', image: '/images/img23.jpg' },
  { id: 'pr-2', name: 'Sándwich aliado + Jugo', price: 2500, category: 'promos', image: '/images/img23.jpg' },
  { id: 'pr-3', name: 'Queque + Café/Té', price: 2000, category: 'promos', image: '/images/img23.jpg' },
];
