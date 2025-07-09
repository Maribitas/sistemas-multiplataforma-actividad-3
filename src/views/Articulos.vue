<template>
  <Articulo :imagen="imagen" :texto="texto" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Articulo from '../components/Articulo.vue'

const route = useRoute()

// Mapear datos por ID
const articulos = {
  '1': {
    imagen: new URL('../assets/diamond_painting_herramientas.jpg', import.meta.url).href,
    texto: `En el mundo del diamond painting, las herramientas cumplen un rol fundamental para garantizar comodidad, precisión y disfrute durante cada sesión creativa. Entre las principales se encuentran el lápiz aplicador, que permite recoger y colocar cada diamante con exactitud, y la bandeja clasificadora, donde se organizan las piezas de distintos colores evitando que se mezclen o se pierdan durante el trabajo. La cera adhesiva es otro componente indispensable, ya que se aplica en la punta del lápiz para adherir temporalmente los diamantes antes de colocarlos en el lienzo, permitiendo manipularlos de forma rápida y precisa. Otro elemento valioso son las pinzas, utilizadas para ajustar la posición de cada piedra y asegurarse de que queden correctamente alineadas en el diseño, logrando una terminación prolija y ordenada en cada proyecto. Los organizadores y bolsas con cierre también cumplen una función importante, permitiendo mantener los diamantes de distintos colores separados y ordenados, facilitando la identificación de cada tono mientras se avanza en el trabajo. Los rodillos de presión son opcionales pero recomendados, ya que permiten asegurar que todos los diamantes queden firmemente adheridos al lienzo, garantizando que no se despeguen con el tiempo y proporcionando un acabado nivelado y uniforme en toda la superficie. El uso correcto de estas herramientas no solo mejora la eficiencia, sino que convierte la experiencia del diamond painting en una actividad más placentera, reduciendo el cansancio en manos y ojos mientras se trabaja durante períodos prolongados. Además, contar con un área de trabajo ordenada, donde cada herramienta esté al alcance, permite disfrutar plenamente de esta técnica relajante que combina creatividad, concentración y la satisfacción de ver una obra brillante y colorida cobrar vida pieza por pieza.`
  },
  '2': {
    imagen: new URL('../assets/diamond_painting_lienzos.jpg', import.meta.url).href,
    texto: `Los lienzos son una de las piezas más importantes en el diamond painting, ya que sobre ellos se construye toda la obra brillante que se desea crear. Generalmente, estos lienzos están fabricados con materiales resistentes y flexibles, recubiertos con una capa adhesiva de alta calidad que permite fijar firmemente cada diamante en el lugar correspondiente, evitando que se muevan o se desprendan con el paso del tiempo. Los diseños se presentan impresos en el lienzo con símbolos y códigos de colores que indican dónde colocar cada piedra, facilitando la organización y el flujo de trabajo. Existen lienzos de distintos tamaños, desde pequeños proyectos ideales para principiantes o para sesiones rápidas, hasta lienzos de gran tamaño que permiten crear cuadros detallados, convirtiéndose en piezas decorativas impresionantes para cualquier espacio del hogar. Algunos lienzos incluyen guías de alineación que ayudan a mantener las filas rectas y los espacios bien definidos, mientras que otros están diseñados para ofrecer libertad creativa, permitiendo que el artista coloque los diamantes de manera más intuitiva o improvisada. Trabajar con un lienzo de calidad es clave para asegurar que los diamantes se adhieran correctamente y para mantener la integridad del proyecto a largo plazo. Es recomendable mantener la película protectora sobre el área adhesiva mientras se avanza en la colocación de los diamantes, evitando que el pegamento pierda adherencia o que se adhieran partículas de polvo. Además, enrollar correctamente el lienzo o mantenerlo plano en una superficie limpia ayuda a conservar su calidad, permitiendo que cada sesión de diamond painting sea cómoda y que el resultado final refleje el esfuerzo y dedicación invertidos en la creación de la obra.`
  },
  '3': {
    imagen: new URL('../assets/diamond_painting_figuras.jpg', import.meta.url).href,
    texto: `El diamond painting ha evolucionado más allá de los tradicionales cuadros, expandiéndose a la creación de figuras y objetos decorativos que permiten llevar esta técnica a nuevos niveles de creatividad y funcionalidad. Entre las figuras más populares se encuentran los llaveros, que se elaboran con bases rígidas donde se colocan diamantes en patrones específicos, resultando en accesorios únicos y brillantes que pueden utilizarse o regalarse como detalles personalizados. Además, los posavasos de diamond painting permiten crear piezas prácticas para el hogar mientras se disfruta del proceso relajante de colocar cada piedra en su lugar. También es posible encontrar figuras decorativas para paredes, adornos para árboles de navidad, marcapáginas y otros objetos que incorporan la técnica de diamond painting, ampliando las posibilidades para utilizar materiales sobrantes de otros proyectos o para explorar nuevas formas de aplicar esta técnica artística. Estas figuras se elaboran con materiales resistentes y adhesivos de calidad, garantizando que las piezas se mantengan en su lugar y soporten el uso diario o la manipulación constante. Trabajar en figuras de diamond painting ofrece una experiencia distinta a la de los lienzos tradicionales, ya que suelen ser proyectos más rápidos de completar, permitiendo experimentar con distintas combinaciones de colores y patrones en menor tiempo. Además, estas figuras aportan un toque personalizado y creativo a espacios cotidianos, demostrando que el diamond painting no solo es una actividad decorativa, sino también una forma de expresión artística que puede integrarse de múltiples maneras en la vida diaria, fomentando la creatividad, la concentración y la satisfacción de crear con las manos piezas únicas y brillantes.`
  }
}

// Computed reactivo para obtener imagen y texto según la ruta
const articulo = computed(() => articulos[route.params.id] || articulos['1'])

const imagen = computed(() => articulo.value.imagen)
const texto = computed(() => articulo.value.texto)
</script>
