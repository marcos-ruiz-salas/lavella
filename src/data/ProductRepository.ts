import type { Product } from "@/types/Product";

const PRODUCT_LIST: Product[] = [
    {
        id: "llavero01",
        images: [
            "/images/productos/llavero-inicial-1.webp",
            "/images/productos/llavero-inicial-0.webp",
            "/images/productos/llavero-inicial-2.webp",
        ],
        tags: ["llaveros", "resina"],
        name: "Llavero Inicial Personalizado",
        description: "Llavero de resina epoxi con inicial personalizada.\nSe puede cambiar tanto el color como el motivo, además de la inicial deseada.",
        price: 6.50,
        stock: 1,
    },
    {
        id: "llavero02",
        images: [
            "/images/productos/llavero-forma-0.webp",
            "/images/productos/llavero-forma-1.webp",
        ],
        tags: ["llaveros", "resina"],
        name: "Llavero Forma",
        description: "Llavero de resina epoxi con diseño a elegir entre las formas previamente establecidas.",
        subtypes: [
            {
                id: "shape",
                name: "Posibles formas del llavero:",
                values: [
                    { id: "heart", name: "Corazón" },
                    { id: "butterfly", name: "Mariposa" },
                ]
            }
        ],
        price: 5.50,
        stock: 1,
    },
    {
        id: "llavero03",
        images: [
            "/images/productos/llavero-acrilico-0.webp",
            "/images/productos/llavero-acrilico-1.webp",
            "/images/productos/llavero-acrilico-2.webp",
            "/images/productos/llavero-acrilico-3.webp",
            "/images/productos/llavero-acrilico-4.webp",
        ],
        tags: ["llaveros"],
        name: "Llavero Acrílico",
        description: "Llavero de acrílico con vinilo personalizado.",
        price: 6.50,
        stock: 1,
    },
    {
        id: "llavero04",
        images: [
            "/images/productos/llavero-sublimacion-0.webp",
            "/images/productos/llavero-sublimacion-1.webp",
            "/images/productos/llavero-sublimacion-2.webp",
            "/images/productos/llavero-sublimacion-3.webp",
	    
        ],
        tags: ["llaveros", "resina"],
        name: "Llavero con Fotografía",
        description: "Llavero con base de madera con fotografía sublimada y resina epoxi. Tambien válido para la aportación de ideas del cliente y la creación de un diseño en base a ellas.\n\n· Ejemplos de ello, son los llaveros de equipos de fútbol, en los que aparece el logotipo del club, junto con el nombre de la persona.",
        price: 6.70,
        stock: 1,
    },
    {
        id: "llavero05",
        images: [
            "/images/productos/llavero-spotify-0.webp",
            "/images/productos/llavero-spotify-1.webp",
        ],
        tags: ["llaveros"],
        name: "Llavero Spotify",
        description: "Se puede personalizar con la onda musical de la canción que desees.",
        price: 6.50,
        stock: 1,
    },
    {
        id: "llavero06",
        images: [
            "/images/productos/llavero-polipiel-0.webp",
        ],
        tags: ["llaveros"],
        name: "Llavero Polipiel",
        description: "Diseño de llavero personalizado con una imagen a elegir, impreso por sublimación.",
        price: 6.90,
        stock: 0,
    },
    {
        id: "llavero07",
        images: [
            "/images/productos/llaveros/Corazon-1.webp",
        ],
        tags: ["llaveros"],
        name: "Llavero Polipiel Corazón",
        description: "Diseño de llavero personalizado con una imagen a elegir, impreso por sublimación.",
        price: 6.90,
        stock: 5,
    },
    {
        id: "huesito01",
        images: [
            "/images/productos/huesito-resina-0.webp",
            "/images/productos/huesito-resina-1.webp",
            "/images/productos/huesito-resina-2.webp",
            "/images/productos/huesito-resina-3.webp",
        ],
        tags: ["huesitos de perro", "resina"],
        name: "Huesito de Resina",
        description: "Huesito de resina epoxi con nombre personalizado, adorna a tu mascota con este detalle único.\n\n· 🐶 Si se desea añadir cualquier otra información de contacto como un teléfono o un nombre, se cobrará un suplemento adicional de 1,00€.",
        subtypes: [
            {
                id: "size",
                name: "Tamaño del producto:",
                values: [
                    { id: "s", name: "S" },
                    { id: "m", name: "M", cost: 1 }
                ]
            }
        ],
        price: 6.50,
        stock: 1,
    },
    {
        id: "huesito02",
        images: [
            "/images/productos/huesito-acero-0.webp",
        ],
        tags: ["huesitos de perro", "acero"],
        name: "Huesito de Acero",
        description: "Huesito de acero inoxidable con cualquier motivo personalizable, lo mejor para tu mascota.\n\n· 🐶 Si se desea añadir cualquier otra información de contacto como un teléfono o un nombre, se cobrará un suplemento adicional de 1,00€.",
        price: 6.50,
        stock: 1,
    },
    {
        id: "marcapaginas01",
        images: [
            "/images/productos/marcapaginas-resina-1.webp",
            "/images/productos/marcapaginas-resina-0.webp",
            "/images/productos/marcapaginas-resina-2.webp",
            "/images/productos/marcapaginas-resina-3.webp",
        ],
        tags: ["marcapáginas", "resina"],
        name: "Marcapáginas de Resina",
        description: "Marcapáginas de resina epoxi. Se puede personalizar tanto el color como el motivo.",
        subtypes: [
            {
                id: "size",
                name: "Tamaño del producto:",
                values: [
                    { id: "s", name: "S" },
                    { id: "m", name: "M", cost: 1 }
                ]
            }
        ],
        price: 6.50,
        stock: 1,
    },
    {
        id: "marcapaginas02",
        images: [
            "/images/productos/marcapaginas-sublimacion-0.webp",
            "/images/productos/marcapaginas-sublimacion-1.webp",
            "/images/productos/marcapaginas-sublimacion-2.webp",
        ],
        tags: ["marcapáginas"],
        name: "Marcapáginas de Madera",
        description: "Hecho de madera, sublimado por ambas caras con el diseño personalizado.",
        price: 7.50,
        stock: 1,
    },
    {
        id: "taza01",
        showSubtypes: true,
        images: [
            "/images/productos/taza-0.webp",
            "/images/productos/taza-1.webp",
            "/images/productos/taza-2.webp",
            "/images/productos/taza-3.webp",
            "/images/productos/taza-4.webp",
            "/images/productos/taza-5.webp",
            "/images/productos/taza-6.webp",
            "/images/productos/taza-7.webp",
            "/images/productos/taza-8.webp",
            "/images/productos/taza-9.webp",
            "/images/productos/taza-10.webp",
        ],
        tags: ["tazas"],
        name: "Taza",
        subtypes: [
            {
                id: "shape",
                name: "Posible estampado de la taza:",
                values: [
                    { id: "floral", name: "Floral" },
                    { id: "butterfly", name: "Mariposa" },
                    { id: "unicorn", name: "Unicornio" },
                    { id: "dino", name: "Dinosaurio" },
                    { id: "papas", name: "Papás primerizos" },

                    { id: "name", name: "Inicial + Nombre" },
                    { id: "photo", name: "Fotografía" },
                    { id: "custom", name: "Personalizada", cost: 1 }
                ]
            },
            {
                id: "colors",
                name: "Colores disponibles",
                values: [
                    { id: "white", name: "Blanco", hex: "#ffffff" },
                    { id: "blue", name: "Azul", hex: "#5271ff", cost: 1 },
                    { id: "cyan", name: "Cián", hex: "#0097b2", cost: 1 },
                    { id: "pink", name: "Rosa", hex: "#e475ba", cost: 1 },
                    { id: "orange", name: "Naranja", hex: "#ff914d", cost: 1 },
                    { id: "lime", name: "Verde", hex: "#c1ff72", cost: 1 },
                    { id: "red", name: "Rojo", hex: "#ff3131", cost: 1 },
                    { id: "black", name: "Negro", hex: "#000000", cost: 1 },
                    { id: "yellow", name: "Amarillo", hex: "#ffde59", cost: 1 }
                ]

            }
        ],
        description: "Taza de cerámica estampada con un diseño a elegir, o bien, crea una personalizada tu mismo siendo asesorado en todo momento.\n· Sin embargo, si unicamente quieres que aparezca una foto que envíes, selecciona la opción correspondiente.",
        price: 9.50,
        stock: 1,
    },
    {
        id: "m0",
        images: [
            "/images/product/marco/0.jpeg",
            "/images/product/marco/1.jpeg",
            "/images/product/marco/2.jpg"
        ],
        tags: ["placas", "marcos", "otros"],
        name: "Marcos Metracrilato",
        description: "Añade una silueta de la fotografía que más te guste con esa persona especial. Te llevarás un recuerdo para toda la vida.",
        price: 10.50,
        stock: 10,
    },
    {
        id: "p0",
        images: [
            "/images/product/placa/0.jpeg",
            "/images/product/placa/1.jpeg"
        ],
        tags: ["placas", "acero"],
        name: "Placa con diseño Netflix",
        description: "Placas de acero con el mejor acabado, listas para ser grabadas con momentos inolvidables.\n\n· Toda la información de la tarjeta es personalizable.",
        price: 16.99,
        stock: 10,
    },
    {
        id: "p1",
        images: ["/images/product/placa/2.jpg"],
        tags: ["placas", "acero"],
        name: "Placa con diseño Spotify",
        description: "Placas de acero con el mejor acabado, añade tu pista de audio favorita y te generamos su onda de sonido.\n\n· Toda la información de la tarjeta es personalizable.",
        price: 16.99,
        stock: 10,
    },
    {
        id: "p2",
        images: ["/images/product/placa/3.jpg"],
        tags: ["placas", "acero"],
        name: "Placa con diseño para Mascotas",
        description: "Placas de acero con el mejor acabado.\n· Toda la información de la tarjeta es personalizable.",
        price: 16.99,
        stock: 10,
    },
    {
        id: "a0",
        images: [
            "/images/product/alfombrilla/0.jpg",
            "/images/product/alfombrilla/2.jpg"
        ],
        tags: ["alfombrillas de ratón", "otros"],
        name: "Alfombrilla con Logotipo",
        description: "Alfombra para el ratón del ordenador, personalizada con el logotipo de tu compañía.",
        price: 11.50,
        stock: 10,
    },
    {
        id: "a1",
        images: ["/images/product/alfombrilla/1.jpg"],
        tags: ["alfombrillas de ratón", "otros"],
        name: "Alfombrilla Personalizada",
        description: "Alfombra para el ratón del ordenador, añade la imagen o el diseño que más te inspire.",
        price: 11.90,
        stock: 10,
    },
    {
        id: "pz0",
        images: [
            "/images/product/puzzle/2.jpg",
            "/images/product/puzzle/0.jpeg",
            "/images/product/puzzle/1.jpeg"
        ],
        tags: ["otros", "puzzles"],
        name: "Puzzle Personalizado",
        description: "Pasanos una fotografía y generaremos un rompecabezas único con el que pasar el rato.",
        price: 10.50,
        stock: 10,
    },
    {
        id: "bt0",
        images: [
            "/images/product/bolsa/0.jpg",
            "/images/product/bolsa/4.jpg"
        ],
        tags: ["bolsas tote"],
        name: "Bolsa tote Inicial",
        description: "Bolsa de tela personalizada con el nombre e inicial de tu elección.",
        price: 10.90,
        stock: 10,
    },
    {
        id: "bt1",
        images: [
            "/images/product/bolsa/1.jpg",
            "/images/product/bolsa/3.jpg"
        ],
        tags: ["bolsas tote"],
        name: "Bolsa tote Floral",
        description: "Bolsa de tela personalizada con el nombre, y decorada con la respectiva inicial de motivo floral.",
        price: 10.90,
        stock: 10,
    },
    {
        id: "bt2",
        images: ["/images/product/bolsa/2.jpg"],
        tags: ["bolsas tote"],
        name: "Bolsa tote Personal",
        description: "Bolsa de tela personalizada con un diseño creado por tí, asesorado en todo momento.",
        price: 11.90,
        stock: 10,
    },
    {
        id: "nc0",
        images: [
            "/images/productos/neceseres/neceser1.webp",
            "/images/productos/neceseres/neceser2.webp",
	    "/images/productos/neceseres/neceser3.webp",
	    "/images/productos/neceseres/neceser4.webp",
        ],
        tags: ["neceseres", "otros"],
        name: "Neceser Inicial",
        description: "Neceser personalizado con el nombre e inicial de tu elección.",
        price: 7,
        stock: 10,
    },
    {
        id: "nm0",
        images: [
            "/images/product/nube/0.jpeg",
            "/images/product/nube/1.jpeg",
            "/images/product/nube/3.jpg",
            "/images/product/nube/2.jpeg",
        ],
        tags: ["otros", "resina"],
        name: "Nube Móvil",
        description: "Nube hecha de distintas piezas con resina epoxi, personalizada con información del bebé y el color que más te guste.",
        price: 29.50,
        stock: 10,
    },
    /*{
        id: "chm0",
        images: [
            "/images/product/bola/0.jpg",
            "/images/product/bola/1.jpg"
        ],
        tags: ["otros", "navidad"],
        name: "Bola navideña",
        description: "Marco de madera con diseño de bola navideña para colgar en el árbol. Personalizable con una imagen que envíes.",
        price: 12.50,
        stock: 10,
    },
    {
        id: "chm1",
        images: [
            "/images/product/bola/3.jpeg",
            "/images/product/bola/2.jpeg",
        ],
        tags: ["otros", "navidad"],
        name: "Bola navideña de Resina",
        description: "Bola navideña para colgar en el árbol hecha con resina epoxi.",
        price: 12.50,
        stock: 10,
    },*/
    {
        id: "bb0",
        images: [
            "/images/product/baby/0.jpeg",
            "/images/product/baby/1.jpeg"
        ],
        tags: ["otros"],
        name: "Chupetero para niño pequeño",
        description: "Personalizado con su nombre.",
        price: 9.50,
        stock: 10,
    },
    {
        id: "l0",
        images: [
            "/images/product/lampara/4.jpeg",
            "/images/product/lampara/0.jpeg",
            "/images/product/lampara/1.jpeg",
        ],
        tags: ["lampara", "resina"],
        name: "Lámpara Inicial",
        description: "Lámpara de resina epoxi con inicial personalizada. Se puede personalizar tanto el color como el motivo, además de añadir cualquier elemento externo proporcionado por usted.",
        price: 45,
        stock: 10,
    },
    {
        id: "l1",
        images: [
            "/images/product/lampara/4.jpg",
            "/images/product/lampara/5.jpg",
            "/images/product/lampara/2.jpeg",
            "/images/product/lampara/3.jpeg",
        ],
        tags: ["lampara", "resina"],
        name: "Lámpara de Nombre completo",
        description: "Lámpara de resina epoxi con el nombre completo. Se puede personalizar tanto el color como el motivo, además de añadir cualquier elemento externo proporcionado por usted.",
        price: 45,
        stock: 10,
    },
    {
        id: "pack0",
        images: [
            "/images/product/pack/3.jpg",
            "/images/product/pack/0.jpeg"
        ],
        tags: ["packs", "resina", "otros"],
        name: "Marcapáginas + Llavero",
        description: "Ambos personalizables y hechos con resina epoxi.",
        price: 15,
        stock: 10,
    },
    {
        id: "pack1",
        images: [
            "/images/product/pack/4.jpg",
            "/images/product/pack/1.jpeg"
        ],
        tags: ["packs", "otros"],
        name: "Bolsa tote + Neceser a juego",
        description: "Ambos personalizables con la inicial y el nombre que eligas.",
        price: 16,
        stock: 10,
    },
    {
        id: "pack2",
        images: ["/images/product/pack/2.jpg"],
        tags: ["packs", "otros"],
        name: "Bolsa tote + Neceser a juego + Taza",
        description: "Personalizables con la inicial y el nombre que eligas.",
        price: 26.50,
        stock: 10,
    }
]

export default PRODUCT_LIST; 
