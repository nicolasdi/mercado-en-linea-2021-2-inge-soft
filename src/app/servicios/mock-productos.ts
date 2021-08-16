import { Producto } from '../interfaces/producto';

export const PRODUCTOS: Producto[] = [
  {
    id: 11,
    titulo: 'Brocoli',
    descripcion:
      'Esta planta posee abundantes cabezas florales ("flores") carnosas comestibles de color verde, puestas en forma de árbol, sobre ramas que nacen de un grueso tallo; la gran masa de cabezuelas está rodeada de hojas. Es muy parecido a su pariente cercano, la coliflor, pero es de color verde. Es un cultivo de climas frescos, por lo que prospera pobremente durante los veranos calurosos. Habitualmente se prepara hervido o al vapor, pero se puede consumir crudo y se ha convertido en una verdura cruda muy popular como aperitivo. Un plato consiste en cocer brócoli con patatas cortadas en trozos y luego condimentarlo con pimentón, ajo en polvo y aceite de oliva. Tiene un alto contenido de vitamina C (100 g contienen 89,2 mg de vitamina C; 107 % CDR), vitamina E y fibra alimentaria soluble.',
    foto: "https://i.ibb.co/mSCrG6n/brocoli.jpg",
    precio: 17.45,
    fk_user: 12
  },
  {
    id: 12,
    titulo: 'Cebolla',
    descripcion:
      'En cuanto a su morfología, la cebolla presenta un sistema radicular formado por numerosas raicillas fasciculadas, de color blanquecino, poco profundas, que salen a partir de un tallo a modo de disco, o disco caulinar. Este disco caulinar presenta numerosos nudos y entrenudos (muy cortos), y a partir de este salen las hojas. Las hojas tienen dos partes claramente diferenciadas: una basal, formada por las vainas foliares engrosadas como consecuencia de la acumulación de sustancias de reserva, y otra terminal, formada por el «filodio», que es la parte verde y fotosintéticamente activa de la planta. Las vainas foliares engrosadas forman las "túnicas" del bulbo, siendo las más exteriores de naturaleza apergaminada y con una función protectora, dando al bulbo el color característico de la variedad. Los filodios presentan los márgenes foliares soldados, dando una apariencia de hoja hueca. Las hojas se disponen de manera alterna.',
    foto: 'https://i.ibb.co/5R5mjQX/cebolla.jpg',
    precio: 21.9,
    fk_user: 12
  },
  {
    id: 13,
    titulo: 'Pepino',
    descripcion:
      'El pepino es una planta anual, monoica, o sea, que hay flores femeninas y masculinas en el mismo individuo. El tallo es postrado/rastrero, ramificado, anguloso, hirsuto y con zarcillos. Las hojas son delgadas, con pecíolo de 8 cm, con limbo de 12-18 por 11-12 cm, viloso-hispídulo en los nervios y piloso en ambas caras; su contorno es cordado-ovado, tri/penta palmatilobado, con lóbulos triangulares, dentados, acuminados o agudos en el ápice, el mediano de mayor longitud y muy agudo. Las flores masculinas, de 3 estambres, son fasciculadas, con pedicelos de 0,5-2 cm, delgados, híspidos y el receptáculo, con tubo de 8-10 mm, son campanulado o subcilíndrico, densamente viloso, y lóbulos de longitud subigual a la del tubo, lineares, patentes, híspidos; la corola tiene 2-3 cm de diámetro con 5 lóbulos oblongo-lanceolados, agudos.',
    foto: 'https://i.ibb.co/FndfHNC/pepino.jpg',
    precio: 19.9,
    fk_user: 12
  },
  {
    id: 14,
    titulo: 'Manzana',
    descripcion:
      'La manzana procede de un árbol caducifolio, generalmente de 2 a 4,5 m de altura en cultivo y hasta 9 m en la naturaleza. Cuando se cultiva, el tamaño, la forma y la densidad de la rama se determinan mediante el método de selección y recorte de portainjertos. Las hojas, de color verde oscuro, son óvalos simples con márgenes serrados y se inclinan ligeramente hacia abajo; se disponen a lo largo de la rama de forma alterna.​ La floración se producen en primavera, simultáneamente con la aparición de las hojas. Las inflorescencias son en forma de cima con 4-6 flores. Cada flor mide de 3 a 4 cm de diámetro, con cinco pétalos de color blanco teñidos de rosa que se difumina gradualmente. La flor central se suele llamar "flor del rey" porque se abre la primera y puede desarrollar una fruta más grande',
    foto: 'https://i.ibb.co/KwTg09t/manzana.jpg',
    precio: 39.9,
    fk_user: 12
  }
];
