const scenes = {
    bienvenida: {
        text: '🎉 ¡Bienvenida, Jhos! Estoy emocionado de compartir contigo esta aventura especial. Prepárate para descubrir mensajes y sorpresas que reflejan lo maravillosa que eres. 🌟',
        image: 'https://i.imgur.com/i3QWUCX.jpeg',
        choices: [
          { text: '✨ Comenzar la aventura', next: 'inicio' },
        ],
    },
    inicio: {
      text: '🌞 Es un día perfecto para explorar y descubrir nuevos lugares. Decides salir en bicicleta para disfrutar del aire fresco y la belleza que te rodea. Sientes una emoción especial, como si algo maravilloso estuviera por suceder. ¿Qué ruta eliges, Jhos?',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '🌲 Explorar el bosque sereno', next: 'bosque' },
        { text: '🌊 Recorrer la costa hacia la playa', next: 'playa' },
      ],
    },
    bosque: {
      text: '🌿 Te adentras en el bosque, donde el susurro de las hojas y el canto de los pájaros crean una melodía armoniosa. La luz del sol se filtra entre las ramas, pintando patrones de luz y sombra en el camino. En medio del sendero, encuentras una flor única con una nota atada a su tallo. 🌺',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '📜 Leer la nota', next: 'notaFlor' },
        { text: '🌸 Admirar la flor y seguir adelante', next: 'senderoBosque' },
      ],
    },
    playa: {
      text: '🌅 La brisa marina acaricia tu piel mientras pedaleas junto al mar. Las olas rompen suavemente en la orilla, y el horizonte se extiende infinitamente. De repente, ves una concha brillante en la arena con algo escrito en ella. 🐚',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '📖 Recoger la concha y leer el mensaje', next: 'mensajeConcha' },
        { text: '🚴‍♀️ Continuar disfrutando del paisaje', next: 'paseoPlaya' },
      ],
    },
    notaFlor: {
      text: '💌 Desatas la nota y lees: "Tu sonrisa es como esta flor, única y llena de vida. Desde el primer momento en que te vi, supe que había algo especial en ti". Estas palabras te tocan el corazón y te hacen sonreír. 😊',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '💖 Guardar la nota con cariño', next: 'senderoBosque' },
        { text: '🌼 Dejar la nota para que alguien más la encuentre', next: 'senderoBosque' },
      ],
    },
    senderoBosque: {
      text: '🚴‍♀️ Continúas tu camino, sintiendo una conexión especial con la naturaleza y una alegría que no puedes explicar. El bosque parece más vivo que nunca, y cada paso es una nueva maravilla. 🌳',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '🔍 Seguir explorando el bosque', next: 'claroBosque' },
        { text: '🏠 Decidir regresar lentamente', next: 'regresoBosque' },
      ],
    },
    mensajeConcha: {
      text: '✨ En la concha está grabado: "Aunque nuestro encuentro fue breve, tu presencia dejó una huella en mí. Tu alegría ilumina incluso el día más gris". Sientes una calidez en tu corazón al leerlo. ❤️',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '📝 Guardar la concha como recuerdo', next: 'paseoPlaya' },
        { text: '🐚 Dejar la concha en su lugar', next: 'paseoPlaya' },
      ],
    },
    paseoPlaya: {
      text: '🌅 Sigues pedaleando a lo largo de la playa, dejando que el sonido del mar y el aroma salino te envuelvan. El sol comienza a descender, tiñendo el cielo con tonos cálidos y dorados. 🌞',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '📸 Detenerte a contemplar el atardecer', next: 'atardecerPlaya' },
        { text: '🚴‍♀️ Continuar tu paseo con tranquilidad', next: 'regresoPlaya' },
      ],
    },
    claroBosque: {
      text: '🌼 Llegas a un claro donde la luz del sol ilumina un pequeño estanque rodeado de flores silvestres. Es un lugar de paz y belleza. Sobre una roca cercana, ves una piedra pintada con un mensaje. 🪨',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '📖 Leer el mensaje en la piedra', next: 'mensajePiedra' },
        { text: '🧘‍♀️ Sentarte y disfrutar del entorno', next: 'descansoClaro' },
      ],
    },
    regresoBosque: {
      text: '🏡 Decides que es hora de regresar. Mientras pedaleas, te sientes agradecida por las pequeñas sorpresas que el día te ha ofrecido y por la alegría que sientes en este momento. 😊',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '🚴‍♀️ Regresar a casa con una sonrisa', next: 'final' },
      ],
    },
    mensajePiedra: {
      text: '💬 La piedra dice: "Tu forma de ser es como este bosque: llena de vida y misterio. Espero que siempre encuentres caminos que te hagan feliz". Sonríes al leerlo, sintiendo que estas palabras fueron escritas para ti. 🌟',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '💎 Guardar la piedra como recuerdo', next: 'descansoClaro' },
        { text: '🪨 Dejar la piedra en su lugar', next: 'descansoClaro' },
      ],
    },
    descansoClaro: {
      text: '🌸 Te sientas junto al estanque, dejando que la serenidad del lugar te envuelva. Piensas en las palabras que has encontrado y en cómo pequeñas cosas pueden traer tanta alegría. 🌼',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '👁️ Cerrar los ojos y relajarte', next: 'regresoBosque' },
        { text: '🔮 Reflexionar sobre el día', next: 'reflexionarDia' },
      ],
    },
    reflexionarDia: {
      text: '💭 Reflexionas sobre todas las pequeñas sorpresas y mensajes que has encontrado hoy. Te das cuenta de cómo cada momento ha sido especial y cómo te han hecho sentir una conexión más profunda contigo misma. 🌟',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Sentirte agradecida y continuar', next: 'final' },
        { text: '📖 Anotar tus pensamientos en un diario', next: 'anotarPensamientos' },
      ],
    },
    anotarPensamientos: {
      text: '📔 Decides anotar tus pensamientos y sentimientos en un diario. Escribes sobre las notas que encontraste, la belleza del día y cómo te hicieron sentir. Sientes que estas reflexiones te ayudan a entender mejor tus emociones. ✍️',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Sentirte más tranquila y feliz', next: 'final' },
        { text: '📸 Tomar una foto de tu diario para recordar', next: 'final' },
      ],
    },
    atardecerPlaya: {
      text: '🌅 El espectáculo del atardecer es impresionante. Los colores del cielo reflejan la belleza del momento. Te sientes en paz y feliz por haber decidido salir hoy. 🌇',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '📸 Tomar una foto para recordar este momento', next: 'regresoPlaya' },
        { text: '😊 Simplemente disfrutar del instante', next: 'regresoPlaya' },
      ],
    },
    regresoPlaya: {
      text: '🚴‍♀️ Con el corazón lleno de alegría, decides regresar. El camino de vuelta es tranquilo y sientes una profunda gratitud por las experiencias del día. 🙏',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '🏠 Regresar a casa con una sensación de felicidad', next: 'final' },
        { text: '🍃 Hacer una parada para respirar el aire fresco', next: 'paradaAireFresco' },
      ],
    },
    paradaAireFresco: {
      text: '🍃 Decides hacer una parada para respirar el aire fresco y apreciar el entorno. Te sientas en un banco cercano y observas la belleza natural que te rodea. Sientes una profunda conexión con la naturaleza y contigo misma. 🌳',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '🧘‍♀️ Meditar y reflexionar sobre el día', next: 'meditarDia' },
        { text: '🚴‍♀️ Continuar tu camino hacia casa', next: 'final' },
      ],
    },
    meditarDia: {
      text: '🧘‍♀️ Cierras los ojos y te concentras en tu respiración. Reflexionas sobre las pequeñas sorpresas y mensajes que encontraste hoy. Sientes una paz interior y una alegría que no puedes explicar. 🌟',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Sentirte agradecida y continuar', next: 'final' },
        { text: '📖 Anotar tus pensamientos en un diario', next: 'anotarPensamientos' },
      ],
    },
    caminoFlores: {
      text: '🌸 Sigues el camino de flores y llegas a un lugar donde hay un pequeño regalo con tu nombre. Es un colgante en forma de sonrisa que brilla bajo la luz del sol. ✨',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '💍 Ponerte el colgante', next: 'ponerseColgante' },
        { text: '💼 Guardar el colgante en tu bolsillo', next: 'regresoBosque' },
      ],
    },
    notaLago: {
      text: '📝 La nota dice: "Desde que te vi, no puedo dejar de pensar en tu sonrisa y en cómo iluminas cada lugar al que vas. Me encantaría conocerte más". Te sientes emocionada y un poco intrigada. 💖',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '🤔 Guardar la nota y reflexionar', next: 'descansoLago' },
        { text: '📲 Decidir contactar a Anthony', next: 'contactarAnthony' },
      ],
    },
    descansoLago: {
      text: '🌊 Te sientas junto al lago, dejando que tus pensamientos fluyan. Te preguntas quién podría haber dejado estos mensajes y sientes una alegría que no puedes explicar. 🌼',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '💬 Decidir compartir tus pensamientos con Anthony', next: 'contactarAnthony' },
        { text: '🤫 Mantenerlos para ti y regresar', next: 'regresoBosque' },
      ],
    },
    notaPicnic: {
      text: '🍉 La nota dice: "Aunque no hemos compartido mucho tiempo, desde que te vi supe que eras alguien especial. Espero que disfrutes este pequeño detalle".',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '🍓 Disfrutar del picnic con gratitud', next: 'disfrutarPicnic' },
        { text: '🥪 Compartir el picnic con alguien más', next: 'disfrutarPicnic' },
      ],
    },
    disfrutarPicnic: {
      text: '🍇 Te sientas y disfrutas de las delicias que hay en la cesta. Cada bocado es un recordatorio de que alguien ha puesto mucho esfuerzo en hacerte sonreír. 🥰',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Sentirte agradecida y feliz', next: 'regresoBosque' },
        { text: '✨ Continuar disfrutando del picnic', next: 'regresoBosque' },
      ],
    },
    ponerseColgante: {
      text: '💎 Te colocas el colgante y sientes una conexión especial. Es como si este gesto simbolizara un nuevo comienzo lleno de posibilidades. 🌟',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Continuar tu camino con alegría', next: 'regresoBosque' },
        { text: '🚴‍♀️ Pedaleas más rápido, sintiendo la energía positiva', next: 'regresoBosque' },
      ],
    },
    contactarAnthony: {
      text: '📱 Decides enviar un mensaje a Anthony: "Hoy he tenido una aventura llena de sorpresas que me han alegrado el día. ¿Sabes algo al respecto?"',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '⌛ Esperar su respuesta', next: 'respuestaAnthony' },
        { text: '💌 Escribirle más detalles sobre el día', next: 'respuestaAnthony' },
      ],
    },
    enviarFotoAnthony: {
      text: '📸 Envías la foto a Anthony con un mensaje: "Este lugar es hermoso, me ha hecho pensar en ti". Poco después, recibes una respuesta que acelera tu corazón. 💓',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '📩 Leer la respuesta con entusiasmo', next: 'respuestaAnthony' },
        { text: '😊 Sentir una sonrisa en tu rostro', next: 'respuestaAnthony' },
      ],
    },
    respuestaAnthony: {
      text: '📩 Anthony responde: "Me alegra mucho saber que disfrutaste del día, Jhos. Quería hacer algo especial para ti, porque desde el primer momento en que te vi, supe que eras alguien increíble. 😊❤️"',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Sentir alegría y gratitud en tu corazón', next: 'finalFeliz' },
        { text: '💬 Responder con sinceridad', next: 'finalFeliz' },
        { text: '🔄 Pedir más detalles sobre su sorpresa', next: 'detallesSorpresa' },
      ],
    },
    detallesSorpresa: {
      text: '🗨️ Le respondes a Anthony: "Tus detalles han hecho mi día muy especial. Me encantaría saber más sobre cómo lo planeaste". Él te cuenta más sobre su inspiración y sentimientos hacia ti.',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '💖 Expresar tus propios sentimientos', next: 'expresarSentimientos' },
        { text: '😊 Agradecerle nuevamente por su gesto', next: 'finalFeliz' },
      ],
    },
    expresarSentimientos: {
      text: '💖 Le escribes a Anthony: "Desde el primer momento en que te vi, supe que eras alguien especial. Tu amabilidad y tu sonrisa han iluminado mis días. Me encantaría conocerte más y compartir momentos juntos".',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Sentir una conexión más profunda', next: 'finalFeliz' },
        { text: '❤️ Expresar tu gratitud por su gesto', next: 'finalFeliz' },
      ],
    },
    finalFeliz: {
      text: '💕 Le respondes a Anthony expresando cómo sus detalles han hecho tu día especial y que te encantaría conocerlo más. Ambos sienten que este es el comienzo de algo maravilloso. ✨',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [
        { text: '😊 Sonreír y mirar hacia el futuro', next: 'final' },
        { text: '❤️ Agradecer por su gesto', next: 'final' },
      ],
    },
    final: {
      text: '🌟 Gracias por ser parte de esta aventura, Jhos. Que cada día esté lleno de pequeñas sorpresas y momentos que te hagan sonreír. Alguien piensa en ti y valora la luz que aportas al mundo. 🌺😊',
      image: 'https://i.imgur.com/i3QWUCX.jpeg',
      choices: [],
    },
  };
  
  export default scenes;