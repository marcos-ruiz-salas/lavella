import type { Product } from "@/types/Product";

const PRODUCT_LIST: Product[] = [
    {
        id: "llavero01",
        showSubtypes: true,
        images: [
            "/images/productos/llaveros/llavero-forma-0.webp",
            "/images/productos/llaveros/llavero-forma-1.webp",
            "/images/productos/llaveros/llavero-inicial-1.webp",
            "/images/productos/llaveros/llavero-inicial-0.webp",
            "/images/productos/llaveros/llavero-inicial-2.webp",
        ],
        tags: ["llaveros", "resina"],
        name: "Llavero de Resina",
        description:
`Este llavero de resina epoxi es el complemento perfecto para tus llaves, bolsos o mochilas. Hecho a mano con resina de alta calidad, cada pieza es única, combinando durabilidad con un toque artístico. Su acabado brillante y suave proporciona un aspecto moderno y elegante, mientras que su resistencia lo convierte en un accesorio ideal para el día a día.
Con una amplia variedad de diseños, colores y texturas, puedes elegir entre opciones que reflejan tu estilo personal o, si lo prefieres, personalizarlo con detalles que lo hagan aún más especial. Perfecto para regalar o para agregar un toque distintivo a tus pertenencias.

**Haz de cada día algo especial con este llavero de resina epoxi, una pieza artesanal que combina belleza y practicidad en un solo accesorio.**`,
        subtypes: [
            {
                id: "shape",
                name: "Posibles formas del llavero:",
                values: [
                    { id: "butterfly", name: "Mariposa" },
                    { id: "heart", name: "Corazón" },
                    { id: "inicial", name: "Inicial", cost: 1 },
                ]
            }
        ],
        price: 5.50,
        stock: 999,
    },
    {
        id: "llavero03",
        images: [
            "/images/productos/llaveros/llavero-acrilico-0.webp",
            "/images/productos/llaveros/llavero-acrilico-1.webp",
            "/images/productos/llaveros/llavero-acrilico-2.webp",
            "/images/productos/llaveros/llavero-acrilico-3.webp",
            "/images/productos/llaveros/llavero-acrilico-4.webp",
        ],
        tags: ["llaveros"],
        name: "Llavero Acrílico",
        description:
`Este llavero combina lo mejor de tres materiales para ofrecer un accesorio único: acrílico, vinilo y resina. Su base acrílica es resistente y ligera, mientras que el vinilo de alta calidad le da un toque vibrante y personalizado, permitiendo que lo adaptes con cualquier diseño o mensaje. Para darle un acabado brillante y duradero, está cubierto con resina, creando un efecto 3D que resalta los colores y detalles de tu diseño.`,
        price: 6.50,
        stock: 1,
    },
    {
        id: "llavero04",
        images: [
            "/images/productos/llaveros/llavero-sublimacion-0.webp",
            "/images/productos/llaveros/llavero-sublimacion-1.webp",
            "/images/productos/llaveros/llavero-sublimacion-2.webp",
            "/images/productos/llaveros/llavero-sublimacion-3.webp",
	    
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
            "/images/productos/llaveros/llavero-spotify-0.webp",
            "/images/productos/llaveros/llavero-spotify-1.webp",
        ],
        tags: ["llaveros"],
        name: "Llavero Spotify",
        description: "Se puede personalizar con la onda musical de la canción que desees.",
        price: 6.50,
        stock: 1,
    },
    {
        id: "llavero06",
        showSubtypes: true,
        images: [
            "/images/productos/llaveros/llavero-polipiel-0.webp",
            "/images/productos/llaveros/llavero-corazon-0.webp",
            "/images/productos/llaveros/llavero-redondo-0.webp",
            "/images/productos/llaveros/llavero-abridor-0.webp",
            "/images/productos/llaveros/llavero-abridor-1.webp",
        ],
        tags: ["llaveros", "polipiel"],
        name: "Llavero Polipiel",
        description:
`Este llavero de polipiel sublimable es el accesorio perfecto para añadir un toque personal a tus llaves, bolsos o mochilas. Hecho con un material de polipiel suave y duradero, este llavero es ideal para personalizar con tus diseños, logos o mensajes especiales mediante sublimación, creando una pieza única que refleja tu estilo.

Su elegante acabado de polipiel ofrece una sensación de alta calidad y un aspecto sofisticado, mientras que su ligereza lo convierte en una opción práctica para llevar a diario. Disponible en varias formas y colores.`,
        subtypes: [
            {
                id: "shape",
                name: "Posibles formas del llavero:",
                values: [
                    { id: "basic", name: "Básico" },
                    { id: "heart", name: "Corazón" },
                    { id: "round", name: "Redondo" },
                    { id: "abridor", name: "Abridor" },
                ]
            }
        ],
        price: 6.90,
        stock: 4,
    },
    {
        id: "huesito01",
        images: [
            "/images/productos/huesitos/huesito-resina-0.webp",
            "/images/productos/huesitos/huesito-resina-1.webp",
            "/images/productos/huesitos/huesito-resina-2.webp",
            "/images/productos/huesitos/huesito-resina-3.webp",
        ],
        tags: ["huesitos de perro", "resina"],
        name: "Huesito de Resina",
        description: 
`Este huesito de resina epoxi es el accesorio perfecto para tu **mascota**, combinando durabilidad, estilo y personalización. Hecho a mano con resina epoxi de alta calidad, puedes personalizarlo con el nombre de tu mascota, un diseño especial o un mensaje único, creando un accesorio exclusivo que refleje su personalidad.

Ideal para usar como collar, llavero o incluso como decoración para su espacio, este huesito es resistente y elegante, lo que lo hace cómodo para tu mascota o fácil de llevar como un recordatorio de tu fiel compañero. Además, el acabado brillante de la resina le da un toque elegante y moderno que resalta su diseño personalizado
**· 🐶 Si se desea añadir cualquier otra información de contacto como un teléfono o un nombre, se cobrará un suplemento adicional de 1,00€.**`,
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
        stock: 999,
    },
    {
        id: "huesito02",
        images: [
            "/images/productos/huesitos/huesito-acero-0.webp",
        ],
        tags: ["huesitos de perro", "acero"],
        name: "Huesito de Acero",
        description:
`Este huesito de acero sublimable es el accesorio ideal para tu **mascota**, combinando resistencia, ligereza y la posibilidad de personalización. Fabricado con acero de alta calidad y libre de peso, es perfecto para llevar en el collar de tu mascota o como un detalle decorativo. Su superficie sublimable te permite añadir el nombre de tu mascota, un diseño único o un mensaje especial con colores vibrantes y detalles nítidos.

Gracias a su material resistente y ligero, este huesito es cómodo y duradero, ideal para el uso diario. Además, su acabado metálico aporta un toque de elegancia y modernidad que hará destacar a tu compañero de cuatro patas. Ya sea como regalo personalizado o como un accesorio único, este huesito sublimable es la forma perfecta de mostrar cuánto quieres a tu mascota.
**· 🐶 Si se desea añadir cualquier otra información de contacto como un teléfono o un nombre, se cobrará un suplemento adicional de 1,00€.**`,
        price: 6.50,
        stock: 1,
    },
    {
        id: "marcapaginas01",
        images: [
            "/images/productos/marcapaginas/marcapaginas-resina-1.webp",
            "/images/productos/marcapaginas/marcapaginas-resina-0.webp",
            "/images/productos/marcapaginas/marcapaginas-resina-2.webp",
            "/images/productos/marcapaginas/marcapaginas-resina-3.webp",
        ],
        tags: ["marcapáginas", "resina"],
        name: "Marcapáginas de Resina",
        description:
`Este marcapáginas de resina epoxi es el accesorio perfecto para acompañar tus libros y marcar tus momentos de lectura de una manera única. Hecho a mano con resina epoxi de alta calidad, cada pieza es exclusiva, presentando detalles vibrantes y un acabado brillante que combina arte y funcionalidad.
Disponible en una variedad de diseños, colores y formas, puedes elegir el marcapáginas que mejor refleje tu estilo personal o regalarlo como un detalle especial para un amante de los libros. Su durabilidad y resistencia lo hacen ideal para marcar cada página de manera elegante y práctica.

Convierte tu experiencia de lectura en algo aún más especial con este marcapáginas de resina epoxi, **un pequeño detalle que aporta belleza y creatividad a cada libro**.`,
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
            "/images/productos/marcapaginas/marcapaginas-sublimacion-0.webp",
            "/images/productos/marcapaginas/marcapaginas-sublimacion-1.webp",
            "/images/productos/marcapaginas/marcapaginas-sublimacion-2.webp",
        ],
        tags: ["marcapáginas", "madera"],
        name: "Marcapáginas de Madera",
        description:
`Este marcapáginas de madera sublimable es el accesorio perfecto para los amantes de los libros que buscan añadir un toque personalizado a su experiencia de lectura. Hecho de madera de alta calidad, su superficie es ideal para sublimar, permitiéndote plasmar tus diseños, frases o ilustraciones favoritas con colores vibrantes y detalles precisos.

Con un acabado suave y natural, este marcapáginas no solo es funcional, sino que también aporta un toque de elegancia y distinción a cada página que marcas`,
        price: 7.50,
        stock: 1,
    },
    {
        id: "taza01",
        showSubtypes: true,
        images: [
            "/images/productos/tazas/taza-0.webp",
            "/images/productos/tazas/taza-1.webp",
            "/images/productos/tazas/taza-2.webp",
            "/images/productos/tazas/taza-3.webp",
            "/images/productos/tazas/taza-4.webp",
            "/images/productos/tazas/taza-5.webp",
            "/images/productos/tazas/taza-6.webp",
            "/images/productos/tazas/taza-7.webp",
            "/images/productos/tazas/taza-8.webp",
            "/images/productos/tazas/taza-9.webp",
            "/images/productos/tazas/taza-10.webp",
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
        description: `Nuestras tazas sublimables son la opción perfecta para dar un toque personal a tus momentos de café, té o cualquier bebida favorita. Hechas de cerámica de alta calidad, estas tazas ofrecen una superficie ideal para personalizar con tus diseños, fotos, frases o logotipos, utilizando la técnica de sublimación que garantiza una impresión vibrante y duradera.

Algunas de nuestras tazas también cuentan con detalles en color, ya sea en el interior, el asa o en ambas partes, agregando un toque de estilo extra a tu personalización. Ya sea que quieras un regalo único, un detalle para un evento especial o una forma de expresar tu personalidad, estas tazas ofrecen infinitas posibilidades para hacerlo.`,
        price: 9.50,
        stock: 1,
    },
    {
        id: "botella0",
        images: [
            "/images/productos/botellas/botella-1.webp",
        ],
        tags: ["botellas", "sublimacion"],
        name: "Botella de Acero inoxidable",
        description: "Botella de acero personalizable de 650ml.",
        price: 14.90,
        stock: 4,
    },
    {
        id: "botella1",
        images: [
            "/images/productos/botellas/termo-1.webp",
        ],
        tags: ["botellas", "sublimacion"],
        name: "Termo",
        description: 
`¡Dale un toque único a tus bebidas con nuestro vaso termo! Diseñado a tu gusto para mantener la temperatura ideal de tus líquidos por más tiempo, este termo de alta calidad es perfecto para personalizar con el diseño que más te guste.
        
## Características:
- Doble pared de acero inoxidable que conserva la temperatura caliente o fría por horas.
- Apertura y cierra compatible para pajita, que viene incluida.
- Capacidad perfecta para café, té, infusiones o bebidas frías.
- Diseño ergonómico y ligero, ideal para el día a día.
        
Ya sea para uso personal o como un regalo especial, este vaso termo sublimable es la opción perfecta para llevar tu estilo a todas partes. **¡Personalízalo y hazlo único!** 🎨✨`,
        price: 14.90,
        stock: 4,
    },
    {
        id: "jarra0",
        images: [
            "/images/productos/jarras/jarra-0.webp",
        ],
        tags: ["jarras", "sublimacion"],
        name: "Jarra de Cerveza de Cristal",
        description: 
`Añade un toque único a tu hogar o evento con una elegante jarra de cristal esmerilado **personalizada**. Hecha con vidrio de alta calidad y un acabado esmerilado suave, esta jarra combina estilo y funcionalidad en una sola pieza. Su superficie mate no solo aporta un aspecto sofisticado, sino que también es ideal para grabar tus nombres o fotografias.\n**Características:**

- Material: Cristal esmerilado de alta calidad.
- Capacidad: 500 mililitros.
- Personalización: Graba cualquier diseño, texto o logo que desees.
- Uso: Perfecta para bebidas frías, jugos, cócteles, o incluso como pieza decorativa.`,
        price: 15.20,
        stock: 3,
    },
    {
        id: "p0",
        images: [
            "/images/productos/placas/placa01.webp",
        ],
        tags: ["placas", "marcos", "otros"],
        name: "Placa imágen",
        description: "Descripción:\nAñade una silueta, ilustración o imagen que más te guste.Te llevarás un recuerdo para toda la vida.\n\nMaterial:\nPlaca de acero inoxidable con base de madera.\n\nMedidas:\n18x13cm",
        price: 16.99,
        stock: 10,
    },
    {
        id: "p1",
        images: [
            "/images/productos/placas/placa02.webp",
        ],
        tags: ["placas", "acero"],
        name: "Placa con diseño Netflix",
        description: "Descripción:\nCrea tu mejor serie o película,añade imágenes, frases y momentos únicos.\n\nMaterial:\nPlaca de acero inoxidable con base de madera.\n\nMedidas:\n18x13cm.",
        price: 16.99,
        stock: 10,
    },
    {
        id: "p2",
        images: [
            "/images/productos/placas/placa03.webp",
            "/images/productos/placas/placa04.webp",
            "/images/productos/placas/placa05.webp",
	    ],
        tags: ["placas", "acero"],
        name: "Placa con diseño Spotify",
        description: "Descripción:\nAñade vuestra canción favorita, vuestra imagen y aquel mensaje que quieras transmitir. En cualquier momento podréis escuchar la canción seleccionada escaneando el codigo.\n\nMaterial:\nPlaca de acero inoxidable.\n\nMedidas:\n18x13cm",
        price: 16.99,
        stock: 10,
    },
    {
        id: "m0",
        images: [
            "/images/productos/marcos/marco-0.webp",
	    ],
        tags: ["placas", "madera"],
        name: "Marco de madera con diseño de nombre",
        description: 
`Celebra los lazos familiares con este hermoso marco de madera. Este marco, ideal para capturar esos momentos especiales, lleva los nombres de mamá, papá, abuelo y abuela grabados con elegancia en la parte superior, creando una pieza única y llena de significado. Hecho de madera de alta calidad, este marco permite personalizarlo con una imagen o mensaje que sea importante para ti y tu familia.
**Características:**

- _Material_: Madera de alta calidad, duradera y resistente.
- _Personalización_: Se puede personalizar con un diseño, foto o mensaje adicional mediante sublimación, para que sea aún más especial.
- _Diseño_: Los nombres de mamá, papá, abuelo y abuela están grabados con detalle en la parte superior, haciendo de este marco una pieza única.
- _Tamaño_: 15x20 cm`,
        price: 12.10,
        stock: 6,
    },
    {
        id: "a0",
        images: [
            "/images/productos/alfombrilla/alfombrilla01.webp",
            "/images/productos/alfombrilla/alfombrilla02.webp",
            "/images/productos/alfombrilla/alfombrilla03.webp",
        ],
        tags: ["alfombrillas de ratón"],
        name: "Alfombrilla",
        description:
`Esta alfombrilla de ratón sublimable es la forma perfecta de agregar un toque personal y único a tu escritorio. Hecha con material de alta calidad, su superficie es ideal para sublimar con tus diseños, fotos, logotipos o cualquier imagen que desees, creando un accesorio completamente personalizado para tu espacio de trabajo o gaming.

Con una base antideslizante, esta alfombrilla asegura que tu ratón se desplace con precisión y fluidez, proporcionando una experiencia de uso cómoda y eficiente. Ya sea para tu oficina, tu habitación o como un regalo práctico y exclusivo, esta alfombrilla no solo es funcional, sino también un lienzo perfecto para mostrar tu creatividad.`,
        price: 11.50,
        stock: 1,
    },
    {
        id: "pz0",
        images: [
            "/images/productos/puzzles/puzzle01.webp",
            "/images/productos/puzzles/puzzle02.webp",
            "/images/productos/puzzles/puzzle03.webp",
            "/images/productos/puzzles/puzzle04.webp",
        ],
        tags: ["puzzles"],
        name: "Puzzle Personalizado",
        description:
`Este puzzle de **120 piezas** es mucho más que un simple juego, es una forma creativa de personalizar tu tiempo libre. Hecho de material de alta calidad, este puzzle ofrece una superficie ideal para sublimar, permitiéndote plasmar tus fotos, diseños, ilustraciones o mensajes especiales. Ya sea como regalo personalizado o para disfrutar de un desafío único, este puzzle es perfecto para quienes buscan una experiencia de entretenimiento completamente personalizada.

El diseño de 120 piezas es perfecto para personas de todas las edades, brindando una experiencia de armado divertida y gratificante. Además, su acabado resistente asegura que tu creación personalizada se mantenga intacta con el paso del tiempo.`,
        price: 12.50,
        stock: 7,
    },
    {
        id: "nc0",
        images: [
            "/images/productos/neceseres/neceser1.webp",
            "/images/productos/neceseres/neceser2.webp",
            "/images/productos/neceseres/neceser3.webp",
            "/images/productos/neceseres/neceser4.webp",
        ],
        tags: ["accesorios rafia", "neceseres"],
        name: "Neceser Personalizado",
        description:
`Este neceser de yute es la opción perfecta para quienes buscan un accesorio funcional y ecológico con un toque de personalización. Hecho de yute resistente, este neceser ofrece un estilo natural y elegante, ideal para organizar tus artículos de belleza, maquillaje, higiene o cualquier otra necesidad cotidiana. Gracias a su material duradero, es ideal para llevarlo a donde sea con confianza.

La superficie sublimable te permite personalizarlo con tus diseños, logos o mensajes favoritos, creando un accesorio único que refleje tu personalidad. Su capacidad y versatilidad lo convierten en una excelente opción tanto para uso personal como para regalar en ocasiones especiales o eventos corporativos.
**Medidas**: 17x15 cm`,
        price: 7,
        stock: 10,
    },
    {
        id: "bt0",
        images: [
            "/images/productos/tote/tote0.webp",
        ],
        tags: ["accesorios rafia", "bolsas tote"],
        name: "Bolsa Tote Bag",
        description: 
`Esta bolsa tote de yute es el accesorio perfecto para quienes buscan una opción ecológica y estilosa para sus actividades diarias. Hecha de yute natural y resistente, esta bolsa no solo es duradera, sino también un lienzo ideal para **personalizar con tus diseños**, logos, frases o ilustraciones mediante sublimación, creando una pieza única que refleja tu personalidad.

Con un amplio espacio de almacenamiento y asas cómodas, esta bolsa tote es perfecta para ir de compras, llevar tus libros, ir al gimnasio o simplemente para cualquier salida diaria. Su aspecto rústico y natural se combina con la posibilidad de personalización, ofreciendo una opción práctica y de moda al mismo tiempo.
`,
        price: 9.99,
        stock: 15,
    },
    {
        id: "mc0",
        images: [
            "/images/productos/mochila/mochila1.webp",
            "/images/productos/mochila/mochila2.webp",
            "/images/productos/mochila/mochila3.webp",
        ],
        tags: ["accesorios rafia", "mochilas", "bolsas tote"],
        name: "Mochila de asas",
        description: 
`Esta mochila de asas de yute es la opción ideal para quienes buscan una combinación de practicidad, sostenibilidad y personalización. Hecha de yute resistente y ecológico, esta mochila es perfecta para llevar tus pertenencias con estilo, ya sea para la escuela, el trabajo, el gimnasio o para un paseo relajado.

Gracias a su superficie sublimable, puedes personalizarla con tus diseños, nombres o logos favoritos, creando una pieza única y exclusiva que refleje tu estilo personal. Las asas resistentes aseguran comodidad en el transporte, mientras que su diseño espacioso permite guardar todo lo que necesitas de manera organizada.`,
        price: 9.99,
        stock: 10,
    },
    {
        id: "nm0",
        images: [
            "/images/productos/nube/nube01.webp",
            "/images/productos/nube/nube02.webp",
            "/images/productos/nube/nube03.webp",
            "/images/productos/nube/nube04.webp",
            "/images/productos/nube/nube05.webp",
        ],
        tags: ["nube móvil", "resina"],
        name: "Nube Móvil",
        description:
`Celebra la llegada de un bebé con nuestra Nube Móvil de Resina Epóxi Personalizada. Esta delicada pieza de decoración está hecha a mano con resina epóxi de alta calidad y presenta una nube flotante que lleva grabados los datos de nacimiento del bebé, como el nombre, fecha, hora y peso. Perfecta para colgar en la habitación del bebé, esta nube no solo es un detalle encantador, sino también un recuerdo único y personalizado de ese momento tan especial.
**Características:**

- _Material_: Resina epóxi de alta calidad, duradera y suave al tacto.
- _Personalización_: Incluye los datos de nacimiento del bebé (nombre, fecha, hora y peso), creando una pieza única que captura un momento especial.`,
        price: 29.99,
        stock: 999,
    },
    {
        id: "l0",
        images: [
            "/images/productos/lamparas/inicial01.webp",
            "/images/productos/lamparas/inicial03.webp",
        ],
        tags: ["lámparas de resina", "resina"],
        name: "Lámpara Inicial",
        description: 
`Añade un toque personal y luminoso a cualquier espacio con nuestra Lámpara de Resina Epóxi Personalizada con Inicial. Esta lámpara, hecha a mano con resina epóxi de alta calidad, es una pieza única que puede ser personalizada con la inicial de tu elección. Además de su diseño elegante y moderno, incluye una luz LED en su interior, que ilumina la resina de manera suave y cálida, creando un ambiente acogedor y especial. Puedes personalizarla con los elementos que desees, como colores, detalles o pequeños objetos dentro de la resina, haciéndola perfecta para regalar o para decorar tu hogar.

**Características:**
- _Material_: Resina epóxi de alta calidad, duradera y resistente.
- _Personalización_: Se puede personalizar con colores, elementos decorativos o pequeños detalles que desees incorporar dentro de la resina.
- _Luz_: Luz LED incorporada que ilumina suavemente el diseño, resaltando la belleza de la resina.`,
        price: 45,
        stock: 999,
    },
    {
        id: "l1",
        images: [
            "/images/productos/lamparas/nombre01.webp",
            "/images/productos/lamparas/nombre02.webp",
        ],
        tags: ["lámparas de resina", "resina"],
        name: "Lámpara de Nombre completo",
        description:
`Añade un toque único y moderno a tu espacio con nuestra Lámpara de Resina Personalizada con Nombre. Esta lámpara está hecha con resina epóxi de alta calidad, donde el nombre que elijas se resalta con un diseño elegante y contemporáneo. El nombre se encuentra perfectamente integrado sobre una base de madera natural, lo que le da un toque cálido y sofisticado. Además, su luz LED incorporada ilumina suavemente la resina, creando una atmósfera acogedora y especial en cualquier habitación.

**Características:**
- _Material_: Resina epóxi de alta calidad y base de madera natural.
- _Personalización_: Se puede personalizar con el nombre de tu elección, logrando un diseño único y especial.
- _Base de madera_: Elegante y resistente, complementa perfectamente la resina y la luz.`,
        price: 20,
        stock: 999,
    },
    {
        id: "l2",
        images: [
            "/images/productos/lamparas/pareja01.webp",
            "/images/productos/lamparas/pareja02.webp",
            "/images/productos/lamparas/pareja03.webp",
        ],
        tags: ["lámparas de resina", "resina"],
        name: "Lámpara de Pareja",
        description:
`Haz que tu espacio brille con amor y estilo con nuestra Lámpara de Resina Personalizada. Esta pieza única presenta dos iniciales cuidadosamente moldeadas en resina epóxi, acompañadas de un delicado corazón, todo sobre una base de madera natural. La luz LED integrada ilumina suavemente el diseño, creando una atmósfera acogedora y romántica. Perfecta para regalar en ocasiones especiales como aniversarios, bodas o para añadir un toque personalizado a tu hogar.

**Características:**
- _Material_: Resina epóxi de alta calidad y base de madera natural.
_ _Personalización_: Personalizable con dos iniciales y un corazón, creando una pieza única y llena de significado.
- _Base de madera_: Elegante y robusta, complementa perfectamente el diseño de la lámpara.`,
        price: 35,
        stock: 999,
    },
    {
        id: "j0",
        images: [
        ],
        tags: ["joyero", "polipiel"],
        name: "Joyero polipiel",
        description:
`**Características:**

- _Material_: Polipiel de alta calidad, resistente y suave al tacto.
- _Personalización_: Se puede personalizar mediante sublimación con textos, imágenes o logos de tu elección.
- _Diseño_: Elegante y compacto, con espacio ideal para organizar anillos, pendientes, collares y otros accesorios.
- _Cierre_: Seguro y práctico para proteger tus joyas.
- _Tamaño_: 9.5x9.5 cm

Ideal para: Regalos especiales, bodas, aniversarios, o como un toque personal para tu propia colección de joyas.`,
        price: 16,
        stock: 2,
    },
    {
        id: "i0",
        images: [
        ],
        tags: ["imán", "madera"],
        name: "Imán de Madera",
        description:
`Añade un toque único a tu hogar o oficina con nuestro Imán de Madera Sublimable personalizado. Hecho de madera natural de alta calidad, este imán ofrece una superficie perfecta para rellenar con tus diseños, fotos o mensajes especiales mediante sublimación.
Ideal para crear recuerdos especiales, regalos personalizados o para dar un toque decorativo a cualquier espacio.
**Características:**

- _Material_: Madera natural de alta calidad, suave y resistente.
- _Personalización_: Se puede personalizar con cualquier diseño, foto o texto mediante sublimación, logrando colores vivos y detalles nítidos.
- _Tamaño_: 9x12cm

Con un imán fuerte en la parte posterior, se adhiere fácilmente a cualquier superficie metálica.
`,
        price: 5.5,
        stock: 6,
    },
    {
        id: "pack0",
        showSubtypes: true,
        images: [
            "/images/productos/packs/conjunto-n-t-01.webp",
            "/images/productos/packs/conjunto-t-n-tz-01.webp",
            "/images/productos/packs/conjunto-mp-ll-01.webp",
            "/images/productos/packs/conjunto-mp-ll-02.webp",
        ],
        tags: ["packs", "resina", "llaveros", "neceseres", "botellas"],
        name: "Packs de regalo",
        subtypes: [
            {
                id: "type",
                name: "Posibles combinaciones de los packs:",
                values: [
                    { id: "n-t", name: "Neceser y Bolsa tote", cost: 2.99 },
                    { id: "t-n-tz", name: "Neceser, Bolsa tote y Taza", cost: 12.49 },
                    { id: "mp-ll", name: "Marcapáginas y llavero" },
                ]
            }
        ],
        description: "Haz que cada ocasión especial sea aún más memorable con nuestros Packs de Regalo Personalizados. Diseñados para ofrecer una experiencia única, estos packs incluyen una selección exclusiva de nuestros productos más populares, que puedes elegir según tus preferencias. Ya sea que busques sorprender a alguien con un detalle único o disfrutar de un conjunto de artículos especiales, cada pack puede ser personalizado con un diseño único para hacerlo aún más personal. **¡El regalo perfecto para cualquier celebración!**",
        price: 14,
        stock: 999,
    },
    {
        id: "pack1",
        images: [
            "/images/productos/cajas/caja0.webp",
            "/images/productos/cajas/caja1.webp",
            "/images/productos/cajas/caja2.webp",
            "/images/productos/cajas/caja3.webp",
            "/images/productos/cajas/caja4.webp",
        ],
        tags: ["packs", "resina", "llaveros", "neceseres", "botellas"],
        name: "Cajas de regalo personalizadas",
        description:
`Haz de cada regalo algo único con nuestras Cajas Personalizadas, donde tú eliges los productos que más te gusten de nuestra tienda. Perfectas para cualquier ocasión, estas cajas están diseñadas para adaptarse a tus gustos y necesidades, permitiéndote crear un conjunto exclusivo de artículos seleccionados por ti. Desde accesorios hasta detalles decorativos, ¡tú decides qué llevar dentro! Además, cada caja puede ser personalizada con un diseño especial, nombres o mensajes, convirtiéndola en el regalo ideal para sorprender a tus seres queridos.
**Características:**

- _Personalización_: Elige entre nuestros productos y arma la caja con los artículos que prefieras. Además, personaliza la caja con un diseño, nombre o mensaje especial.
- _Variedad_: Escoge entre una amplia gama de productos de nuestra tienda para crear una caja única y exclusiva.
- _Diseño de la caja_: Ofrecemos varias opciones de diseño y tamaño para que tu caja se adapte a lo que necesitas.`,
        price: 3.99,
        stock: 999,
    }
]

export default PRODUCT_LIST; 
