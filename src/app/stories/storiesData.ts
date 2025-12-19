export interface StoryData {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  readTime: string;
  content: {
    paragraphs: string[];
  };
}

export const storiesData: Record<string, StoryData> = {
  dinosaurios: {
    id: 'dinosaurios',
    title: 'El Dinosaurio Aventurero',
    icon: '🦕',
    description: 'Conoce a Dino, un pequeño dinosaurio que quiere explorar el mundo',
    color: '#6BCF7F',
    readTime: '5 min',
    content: {
      paragraphs: [
        'Había una vez un pequeño dinosaurio llamado Dino. 🦕 Dino vivía en un valle verde y hermoso con su familia.',
        'Un día, Dino miró más allá de las montañas y pensó: "¿Qué habrá del otro lado?" Su mamá le dijo que el mundo era muy grande y lleno de maravillas.',
        '"¡Quiero ver el mundo!" dijo Dino emocionado. Su papá sonrió y le dio un mapa. "Está bien, pero debes tener cuidado y regresar antes de que se ponga el sol."',
        'Dino comenzó su aventura. Primero, encontró un río cristalino donde conoció a una tortuga amigable llamada Tina. 🐢',
        '"¡Hola!" dijo Tina. "¿A dónde vas?" Dino le contó sobre su aventura. "¡Qué emocionante! Ten cuidado con el bosque oscuro," advirtió Tina.',
        'Dino siguió caminando hasta que llegó al bosque oscuro. Estaba un poco asustado, pero recordó ser valiente. De repente, escuchó un ruido. ¡Era un conejito que estaba atrapado! 🐰',
        '"¡Ayuda!" gritó el conejito. Dino usó su larga cola para mover la rama que lo atrapaba. "¡Gracias, Dino! Eres muy valiente," dijo el conejito.',
        'Después de ayudar al conejito, Dino llegó a la cima de una montaña. Desde allí, pudo ver todo el valle, el río, el bosque y hasta su casa. 🏔️',
        '"¡Wow! ¡El mundo es hermoso!" exclamó Dino. Se dio cuenta de que las aventuras no solo eran ver lugares nuevos, sino también ayudar a otros.',
        'Dino regresó a casa justo cuando el sol se ponía. Le contó a su familia todas sus aventuras. Esa noche, Dino durmió feliz, soñando con su próxima aventura. 🌅',
        '¡Y colorín colorado, la aventura de Dino ha terminado! ✨'
      ]
    }
  },
  astronautas: {
    id: 'astronautas',
    title: 'Viaje a las Estrellas',
    icon: '🚀',
    description: 'Luna y Sol viajan por el espacio en busca de nuevos planetas',
    color: '#4A90E2',
    readTime: '7 min',
    content: {
      paragraphs: [
        'Luna y Sol eran dos mejores amigos que soñaban con viajar al espacio. 👧👦 Pasaban horas mirando las estrellas desde el observatorio de su escuela.',
        'Un día, su maestra la Doctora Estrella anunció: "¡Hay un concurso! Los ganadores irán en un viaje espacial de verdad." Luna y Sol se miraron emocionados.',
        'Trabajaron muy duro en su proyecto: un cohete hecho de materiales reciclados y un mapa de constelaciones. Pintaron su cohete de plata y azul. 🚀',
        'El día del concurso llegó. Presentaron su proyecto con confianza. "Queremos explorar para aprender sobre el universo y cuidar nuestro planeta Tierra," dijeron.',
        '¡Ganaron! Una semana después, Luna y Sol estaban en un verdadero cohete espacial. "Cuenta regresiva: 5... 4... 3... 2... 1... ¡Despegue!" 🎆',
        'El cohete subió y subió. Pronto estaban flotando en el espacio. "¡Mira, Luna! ¡Estamos volando!" gritó Sol. Todo era increíble.',
        'Primero visitaron la Luna. Saltaron alto, muy alto, porque no había mucha gravedad. Dejaron una bandera que decía "Luna y Sol estuvieron aquí." 🌙',
        'Luego, se acercaron a Marte, el planeta rojo. "Es como un desierto gigante," observó Luna. Tomaron fotos y muestras para estudiar.',
        'De repente, vieron algo brillante. "¡Miren! ¡Una lluvia de estrellas!" Los meteoritos pasaban como fuegos artificiales en el espacio. ⭐✨',
        'Después de muchas horas, era tiempo de regresar. "Esta ha sido la mejor aventura," dijo Sol. "Sí, pero me da gusto volver a casa," respondió Luna.',
        'Cuando aterrizaron, todos los aplaudieron. Luna y Sol compartieron sus fotos y todo lo que aprendieron. Ahora sabían que los sueños se hacen realidad con trabajo y amistad. 🌍',
        '¡Y así terminó el gran viaje espacial de Luna y Sol! 🌟'
      ]
    }
  },
  princesas: {
    id: 'princesas',
    title: 'La Princesa Valiente',
    icon: '👸',
    description: 'Una princesa que prefiere aventuras a quedarse en el castillo',
    color: '#FF6B9D',
    readTime: '6 min',
    content: {
      paragraphs: [
        'En un reino lejano vivía la Princesa Valentina. 👸 Pero Valentina no era como las otras princesas. ¡No le gustaba quedarse en el castillo!',
        'Mientras otras princesas practicaban baile, Valentina practicaba esgrima. Mientras otras leían sobre príncipes, ella leía sobre dragones y aventuras. ⚔️',
        'Un día, un mensaje llegó al reino: "¡Un dragón ha secuestrado al príncipe Pedro! Está en la Torre del Norte." Todos estaban asustados.',
        'El rey dijo: "Enviaré a mis mejores caballeros." Pero Valentina se puso de pie y dijo: "¡Yo iré! Soy valiente y sé cómo hablar con dragones."',
        'Su padre dudó, pero su madre la Reina dijo: "Valentina ha entrenado mucho. Déjala intentarlo." Así que Valentina partió en su caballo blanco. 🐴',
        'El viaje fue largo. Cruzó bosques oscuros y ríos caudalosos. Finalmente, llegó a la Torre del Norte. Arriba, vio al dragón. 🐉',
        'En lugar de atacar, Valentina gritó: "¡Hola, señor dragón! ¿Por qué tienes al príncipe?" El dragón bajó, sorprendido. Nadie le había preguntado antes.',
        '"Estoy solo," rugió el dragón con tristeza. "Todos me tienen miedo. Solo quería un amigo." Valentina entendió.',
        '"No necesitas secuestrar a nadie," dijo Valentina amablemente. "Si prometes ser bueno, puedes venir al reino. Haremos una fiesta y conocerás a mucha gente."',
        'El dragón lloró de felicidad. "¿De verdad?" Valentina asintió. El dragón liberó al príncipe Pedro inmediatamente. 🎉',
        'Regresaron juntos al reino. Al principio la gente tenía miedo, pero Valentina explicó todo. El dragón demostró ser amable y ayudó a proteger el reino.',
        'Desde ese día, Valentina fue conocida como la Princesa Valiente, no por pelear, sino por ser inteligente y bondadosa. Y el dragón encontró muchos amigos. 💖',
        '¡Y todos vivieron felices y aventureros para siempre! ✨'
      ]
    }
  },
  superheroes: {
    id: 'superheroes',
    title: 'El Súper Héroe del Barrio',
    icon: '🦸',
    description: 'Max descubre que tiene poderes especiales para ayudar a otros',
    color: '#FF8C42',
    readTime: '8 min',
    content: {
      paragraphs: [
        'Max era un niño común que vivía en la Calle Arcoíris. 👦 Iba a la escuela, jugaba con sus amigos y hacía su tarea. Pero un día, algo extraordinario sucedió.',
        'Estaba ayudando a su abuela a cruzar la calle cuando vio un autobús que venía muy rápido. Sin pensar, levantó su mano y gritó: "¡Alto!" El autobús se detuvo al instante. 🚌',
        '"¿Qué acaba de pasar?" pensó Max. Su abuela no había notado nada. Esa noche, Max practicó en su cuarto. Podía mover cosas con su mente. ¡Tenía telequinesis! 🧠✨',
        'Pero Max no le dijo a nadie. "¿Qué hago con este poder?" se preguntaba. Entonces recordó lo que su papá siempre decía: "El verdadero poder está en ayudar a otros."',
        'Al día siguiente, vio que la pelota de una niña había rodado a la calle. Con un movimiento de su mano, la pelota flotó de vuelta a ella. La niña rió pensando que era el viento. 🏀',
        'Max decidió ser un superhéroe secreto. Se hizo un disfraz simple: una camiseta azul, una máscara hecha con tela y una capa de su sábana vieja. ¡Se llamaría "Capitán Ayuda"! 🦸',
        'Su primera misión fue rescatar al gatito del señor López que estaba en un árbol. Con su poder, bajó suavemente al gatito. "¡Gracias, viento mágico!" dijo el señor López. 🐱',
        'Luego ayudó a la señora Martínez a llevar sus bolsas del mercado cuando se rompió la bolsa. Los tomates flotaron hasta su casa. Ella quedó asombrada pero feliz. 🍅',
        'Un día hubo una gran tormenta. ⛈️ El techo de la escuela comenzó a despegarse. Max, vestido de Capitán Ayuda, usó su poder para mantenerlo en su lugar hasta que llegó ayuda.',
        'Todos en el barrio comenzaron a hablar del misterioso superhéroe. "¡El Capitán Ayuda salvó nuestra escuela!" decían los niños.',
        'Max se sentía feliz. No necesitaba que todos supieran quién era. Lo importante era ayudar. Su amiga María lo notó sonriendo y le dijo: "Pareces muy feliz hoy."',
        '"Es porque todos en el barrio se ayudan unos a otros," respondió Max. Y tenía razón. Inspirado por el Capitán Ayuda, todos comenzaron a ayudarse más. 💪',
        'Max aprendió que no necesitas superpoderes para ser un héroe. La verdadera fuerza está en la bondad. Aunque... ¡tener telequinesis también ayuda! 😄',
        '¡Y así, el barrio Arcoíris se convirtió en el lugar más feliz de la ciudad! 🌈'
      ]
    }
  },
  animales: {
    id: 'animales',
    title: 'La Selva Mágica',
    icon: '🐯',
    description: 'Los animales de la selva organizan una gran fiesta de amistad',
    color: '#FFD93D',
    readTime: '5 min',
    content: {
      paragraphs: [
        'En lo profundo de la selva amazónica vivían muchos animales: tigres, monos, tucanes, serpientes y muchos más. 🌴',
        'Un día, el tigre Tomás tuvo una idea. "¡Deberíamos hacer una fiesta de amistad!" dijo. "Así todos nos conoceríamos mejor." 🐯',
        'Los monos saltaron de emoción. "¡Sí! ¡Nosotros podemos colgar decoraciones en los árboles!" Los tucanes dijeron: "¡Nosotros traeremos frutas de colores!" 🐒🦜',
        'La serpiente Silvia se ofreció para hacer las invitaciones enrollándolas con su cuerpo. La tortuga Teresa dijo que haría los juegos, aunque fueran lentos. 🐍🐢',
        'Todos trabajaron juntos. Los loros hicieron música, los jaguares organizaron carreras, y las ranas prepararon un concurso de saltos. 🎵',
        'El día de la fiesta llegó. ¡Todos estaban emocionados! Había comida deliciosa: plátanos, mangos, nueces y hojas frescas para cada quien. 🍌🥭',
        'Pero hubo un problema. El pequeño colibrí Coco llegó llorando. "¡Mi nido se cayó del árbol con mis huevitos!" 🐣',
        'Inmediatamente, todos dejaron de festejar. "¡Debemos ayudar a Coco!" dijeron. El águila voló alto para encontrar el mejor árbol. 🦅',
        'Los monos reunieron ramitas suaves. Los pájaros tejieron un nido nuevo y perfecto. La tortuga cuidó los huevitos mientras tanto. 🌿',
        'En solo una hora, Coco tenía un nido nuevo, ¡incluso mejor que el anterior! "Gracias, amigos. Son los mejores," dijo Coco feliz.',
        'Regresaron a la fiesta con el corazón lleno de alegría. Bailaron, jugaron y rieron hasta que la luna salió. 🌙',
        'El tigre Tomás dijo: "Esta fiesta nos enseñó algo importante: somos diferentes, pero cuando trabajamos juntos, podemos hacer cosas maravillosas." 💚',
        'Desde ese día, los animales de la selva se reunían cada mes para celebrar su amistad. Y Coco siempre traía a sus bebés, que nacieron sanos y fuertes. 🎉',
        '¡Y colorín colorado, la fiesta en la selva nunca ha terminado! ✨'
      ]
    }
  },
  piratas: {
    id: 'piratas',
    title: 'El Tesoro Perdido',
    icon: '🏴‍☠️',
    description: 'El capitán Barba Roja busca el tesoro más valioso del océano',
    color: '#9B7EDE',
    readTime: '7 min',
    content: {
      paragraphs: [
        'El capitán Barba Roja era el pirata más famoso de los siete mares. 🏴‍☠️ Su barco, "La Aventura Marina", surcaba las olas en busca de tesoros.',
        'Un día, en una isla desierta, encontró un mapa antiguo dentro de una botella. "¡Tripulación!" gritó. "¡Este mapa muestra el tesoro más valioso del océano!" 🗺️',
        'Su tripulación estaba emocionada: la loro Lola, el mono Marino, el niño grumete Tito, y la navegante Nina. "¡Zarparemos al amanecer!" ordenó el capitán. ⚓',
        'Navegaron durante días siguiendo el mapa. Primero llegaron a la Isla de los Acertijos. Un sabio búho les bloqueaba el paso. 🦉',
        '"Para continuar," dijo el búho, "deben resolver esto: Tengo ciudades pero no casas, tengo montañas pero no árboles, tengo agua pero no peces. ¿Qué soy?"',
        'Tito pensó mucho. "¡Ya sé! ¡Es un mapa!" El búho sonrió. "Correcto. Pueden pasar." Les dio una pieza del rompecabezas del tesoro. 🧩',
        'Luego llegaron a la Cueva del Eco. Todo lo que decían se repetía mil veces. Tenían que encontrar una llave sin hacer ruido. 🤫',
        'Nina tuvo una idea. Usaron señas con las manos para comunicarse. Trabajando en silencio, encontraron la llave dorada. ¡Otra pieza del rompecabezas! 🔑',
        'Finalmente llegaron a la Bahía del Tesoro. Había una X gigante en la arena. "¡Caven aquí!" ordenó Barba Roja. Todos cavaron con emoción. ⛏️',
        'Encontraron un cofre enorme. Lo abrieron y dentro no había oro ni diamantes. Había... ¡libros! Libros sobre aventuras, ciencia, arte y amistad. 📚',
        'La tripulación se sintió confundida. "¿Libros?" preguntó Marino. Pero Tito tomó uno y comenzó a leer. Sus ojos brillaron de emoción. ✨',
        'Barba Roja entendió. "Este ES el tesoro más valioso del océano. El conocimiento, las historias, las aventuras que podemos vivir leyendo."',
        'Regresaron al barco con el cofre lleno de libros. Cada noche, la tripulación se reunía y Tito les leía una historia diferente. 🌟',
        'Barba Roja se dio cuenta de que había estado buscando el tesoro equivocado toda su vida. El verdadero tesoro era aprender, imaginar y compartir con amigos. 💎',
        '¡Y desde entonces, el barco "La Aventura Marina" se convirtió en la biblioteca flotante más feliz del océano! 📖⛵',
        '¡Fin de esta aventura pirata! 🏴‍☠️✨'
      ]
    }
  },
  dragones: {
    id: 'dragones',
    title: 'El Dragón Amistoso',
    icon: '🐉',
    description: 'Un dragón que quiere ser amigo de todos en el reino',
    color: '#E74C3C',
    readTime: '6 min',
    content: {
      paragraphs: [
        'En las montañas del norte vivía un dragón llamado Dante. 🐉 Dante no era como los dragones de los cuentos. ¡Él no quería asustar a nadie!',
        'Dante era de color verde esmeralda con alas doradas. Podía lanzar fuego, pero solo lo usaba para cocinar malvaviscos. 🔥',
        'El problema era que todos en el reino le tenían miedo. Cuando volaba sobre la ciudad, la gente corría a esconderse. "¡Ayuda! ¡Un dragón!" gritaban. 😢',
        'Dante se sentía muy solo. "Solo quiero amigos," suspiraba desde su cueva. Miraba desde lejos a los niños jugar y deseaba unirse a ellos.',
        'Un día, decidió intentarlo de nuevo. Voló al pueblo y aterrizó suavemente en la plaza. "Hola, mi nombre es Dante. ¿Quieren jugar?" 😊',
        'Pero todos corrieron excepto una niña valiente llamada Emma. Ella se quedó quieta mirando a Dante. "¿De verdad quieres ser nuestro amigo?" preguntó. 👧',
        '"¡Sí!" dijo Dante emocionado. "Puedo hacer muchas cosas divertidas. Mira." Lanzó fuego al aire haciendo formas de corazones y estrellas. 💫',
        'Emma aplaudió. "¡Eso es increíble! Pero tienes que demostrarle a todos que eres bueno." Dante estuvo de acuerdo. "¿Cómo puedo hacerlo?"',
        '"Ayudando," respondió Emma. Justo entonces, escucharon gritos. ¡El molino del pueblo estaba en llamas! "¡Fuego! ¡Necesitamos agua!" 🔥',
        'Dante voló rápido al lago, llenó sus mejillas con agua y la roció sobre el molino. ¡Lo apagó en segundos! Luego usó sus alas para ventilar el humo. 💨',
        'Todos quedaron asombrados. "¡El dragón salvó el molino!" gritó el alcalde. La gente comenzó a aplaudir. "¡Gracias, Dante!" 👏',
        'Desde ese día, Dante se convirtió en el héroe del pueblo. Ayudaba a encender las luces del parque, daba paseos voladores a los niños, y horneaba pan con su fuego. 🍞',
        'Emma se convirtió en su mejor amiga. Jugaban todos los días. Los otros niños también se unieron. Dante finalmente tenía los amigos que siempre quiso. 🎈',
        'El reino aprendió una lección importante: no juzgues a nadie por su apariencia. A veces, las criaturas más grandes tienen los corazones más amables. 💚',
        '¡Y Dante vivió feliz para siempre rodeado de amigos! 🐉✨'
      ]
    }
  },
  deportes: {
    id: 'deportes',
    title: 'El Gran Partido',
    icon: '⚽',
    description: 'Un equipo de amigos se prepara para el partido más importante',
    color: '#27AE60',
    readTime: '5 min',
    content: {
      paragraphs: [
        'Los "Relámpagos" era un equipo de fútbol de niños del barrio. ⚽ Su capitana era Sofia, una niña muy hábil con el balón.',
        'Habían llegado a la final del torneo inter-barrios. Jugarían contra los "Tigres", el equipo más fuerte de la ciudad. 🏆',
        'El entrenador Carlos reunió al equipo. "Han trabajado duro toda la temporada. Mañana es el gran día. Recuerden: lo importante es dar lo mejor de ustedes." 💪',
        'Esa noche, Sofia no podía dormir. Estaba nerviosa. "¿Y si perdemos? ¿Y si me equivoco?" pensaba. Su hermano mayor le dijo: "Solo diviértete. Por eso jugamos." 😊',
        'El día del partido llegó. El estadio estaba lleno. Los "Relámpagos" se pusieron sus uniformes azules y dorados. "¡Equipo unido, jamás vencido!" gritaron juntos. ⚡',
        'El partido comenzó. Los "Tigres" eran muy buenos. En los primeros 10 minutos ya habían metido un gol. El marcador estaba 1-0. 😰',
        'Sofia reunió al equipo. "No se rindan. Recordemos lo que hemos practicado: pases cortos, trabajo en equipo, y diversión."',
        'Lucas, el defensa, recuperó el balón. Se lo pasó a María, quien corrió por la banda. María cruzó el balón a Sofia. ¡GOOOL! Empate 1-1. 🎉',
        'El partido estaba emocionante. Ambos equipos jugaban con todo. Quedaban solo 5 minutos. El marcador seguía empatado.',
        'Los "Tigres" atacaron fuerte. Su delantero disparó al arco. Todos pensaron que era gol, pero Miguel, el portero de los "Relámpagos", hizo una atajada increíble. ¡Espectacular! 🧤',
        'Con 30 segundos restantes, Sofia recibió el balón. Corrió, esquivó a dos defensas, y... ¡DISPARÓ! El balón entró justo en el último segundo. ⚽✨',
        '¡Los "Relámpagos" ganaron 2-1! Todos celebraron. Saltaban, reían y se abrazaban. Habían ganado el campeonato. 🏆🎊',
        'Después del partido, Sofia le dio la mano al capitán de los "Tigres". "Jugaron muy bien," dijo. "Ustedes también," respondió él sonriendo.',
        'El entrenador Carlos estaba orgulloso. "Ganaron porque jugaron juntos, se apoyaron y nunca se rindieron. Eso es más importante que cualquier trofeo."',
        'Los "Relámpagos" celebraron con pizza y refrescos. Sofia aprendió que cuando tienes un buen equipo, ¡puedes lograr cualquier cosa! 🍕',
        '¡Y así los "Relámpagos" se convirtieron en campeones! ⚡🏆'
      ]
    }
  }
};

export function getStoryById(id: string): StoryData | undefined {
  return storiesData[id];
}

export function getAllStoryIds(): string[] {
  return Object.keys(storiesData);
}
