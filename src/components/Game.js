import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import scenes from '../scenes/scenes'; // Asegúrate de que la ruta sea correcta
import { motion, AnimatePresence } from 'framer-motion';

// Estilos globales para incluir fuentes de Google y estilos base
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f0f8ff;
  }
`;

// Contenedor principal del juego con responsividad
const GameContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  font-family: 'Roboto', sans-serif;
  text-align: center;
  position: relative;

  @media (max-width: 600px) {
    padding: 20px;
    margin: 20px;
  }
`;

// Título del juego con fuente personalizada
const Title = styled.h1`
  text-align: center;
  color: #2c3e50;
  font-family: 'Pacifico', cursive;
  margin-bottom: 20px;
`;

// Texto de cada escena
const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #34495e;
  margin-top: 20px;
`;

// Contenedor para los botones de elección
const ChoicesContainer = styled.div`
  margin-top: 20px;
`;

// Botón de elección con animaciones de hover y tap
const ChoiceButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #27ae60;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2ecc71;
  }

  @media (max-width: 600px) {
    padding: 12px;
    font-size: 14px;
  }
`;

// Mensaje de finalización
const EndingMessage = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #e74c3c;
  margin-top: 20px;
`;

// Imagen de la escena con animaciones de transición
const SceneImage = styled(motion.img)`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
`;

// Contenedor para el formulario de feedback
const FeedbackFormContainer = styled.div`
  margin-top: 20px;
`;

// Textarea para el feedback
const FeedbackTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px;
  }
`;

// Botón de envío del feedback
const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #2980b9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3498db;
  }

  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

// Overlay para la introducción animada
const IntroOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 62, 80, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Variantes de animación para las escenas
const sceneVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

// Variantes para la animación del overlay de intro
const introVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
};

// Formulario de feedback para recibir comentarios
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu comentario, Jhos!');
    setFeedback('');
    // Aquí puedes agregar lógica para enviar el feedback a un servidor
  };

  return (
    <FeedbackFormContainer>
      <form onSubmit={handleSubmit}>
        <label>
          📝 ¿Qué te pareció la aventura?
          <FeedbackTextarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            rows="4"
          />
        </label>
        <br />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </form>
    </FeedbackFormContainer>
  );
};

function Game() {
    // Estado para manejar la escena actual
    const [currentScene, setCurrentScene] = useState('bienvenida'); // Comienza con la escena de bienvenida
    const [showIntro, setShowIntro] = useState(true); // Estado para controlar la visibilidad del overlay de intro

    // Obtener la escena actual del objeto scenes
    const scene = scenes[currentScene];

    // useEffect para ocultar el overlay de intro después de 3 segundos
    useEffect(() => {
      const timer = setTimeout(() => setShowIntro(false), 3000); // 3 segundos de intro
      return () => clearTimeout(timer);
    }, []);

    // Si la escena no está definida, mostrar un mensaje de error
    if (!scene) {
      return (
        <>
          <GlobalStyle />
          <GameContainer>
            <EndingMessage>Error: La escena seleccionada no existe.</EndingMessage>
          </GameContainer>
        </>
      );
    }

    return (
      <>
        <GlobalStyle />
        <GameContainer>
          {/* Overlay de bienvenida animada */}
          <AnimatePresence>
            {showIntro && (
              <IntroOverlay
                initial="initial"
                animate="animate"
                exit="exit"
                variants={introVariants}
                transition={{ duration: 1, delay: 2 }}
                onAnimationComplete={() => setShowIntro(false)}
              >
                <motion.h1
                  style={{ color: '#ecf0f1', fontSize: '2.5rem', fontFamily: 'Pacifico, cursive' }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  ¡Bienvenida, Jhos!
                </motion.h1>
              </IntroOverlay>
            )}
          </AnimatePresence>

          <Title>Una Aventura Especial</Title>

          {/* Imagen de la escena con animación */}
          <AnimatePresence mode="wait">
            {scene.image && (
              <SceneImage
                key={currentScene} // Necesario para que AnimatePresence funcione correctamente
                src={scene.image}
                alt="Escena"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sceneVariants}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>

          {/* Texto y opciones de la escena con animaciones */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene} // Necesario para que AnimatePresence funcione correctamente
              initial="initial"
              animate="animate"
              exit="exit"
              variants={sceneVariants}
              transition={{ duration: 0.5 }}
            >
              <Text>{scene.text}</Text>
              <ChoicesContainer>
                {scene.choices && scene.choices.length > 0 ? (
                  scene.choices.map((choice, index) => (
                    <ChoiceButton
                      key={index}
                      onClick={() => setCurrentScene(choice.next)}
                      whileHover={{ scale: 1.05, backgroundColor: '#2ecc71' }}
                      whileTap={{ scale: 0.95, backgroundColor: '#27ae60' }}
                    >
                      {choice.text}
                    </ChoiceButton>
                  ))
                ) : (
                  <>
                    {/* Mostrar el formulario de feedback solo en la escena final */}
                    {currentScene === 'final' && <FeedbackForm />}
                    <EndingMessage>🌟 Fin de la aventura. Gracias por participar, Jhos. 🌟</EndingMessage>
                  </>
                )}
              </ChoicesContainer>
            </motion.div>
          </AnimatePresence>
        </GameContainer>
      </>
    );
}

export default Game;