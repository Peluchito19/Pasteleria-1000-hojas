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
  // TORTAS (solo las imágenes y orden indicados)
  {
    id: 't-1',
    name: 'Torta 1',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/te-variadades.jpg',
  },
  {
    id: 't-2',
    name: 'Torta 2',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img23.jpg',
  },
  {
    id: 't-3',
    name: 'Torta 3',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img22.jpg',
  },
  {
    id: 't-4',
    name: 'Torta 4',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img21.jpg',
  },
  {
    id: 't-5',
    name: 'Torta 5',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img20.jpg',
  },
  {
    id: 't-6',
    name: 'Torta 6',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img19.jpg',
  },
  {
    id: 't-7',
    name: 'Torta 7',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img15.jpg',
  },
  {
    id: 't-8',
    name: 'Torta 8',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img14.jpg',
  },
  {
    id: 't-9',
    name: 'Torta 9',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img13.jpg',
  },
  {
    id: 't-10',
    name: 'Torta 10',
    price: 15000,
    description: '',
    category: 'tortas',
    image: '/images/img12.jpg',
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
