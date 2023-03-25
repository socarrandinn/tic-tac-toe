# Juego de Tic Tac Toe con Vite.js y React.js

Este es un juego simple de Tic Tac Toe desarrollado utilizando Vite.js con template Reactjs. Además, se conecta a una API implementada en Next.js para guardar el historial de partidas jugadas.

## Instalación

Para instalar este juego, simplemente sigue estos pasos:

1. Clona este repositorio en tu ordenador: `git clone https://github.com/socarrandinn/tic-tac-toe.git`
2. Accede al directorio del repositorio: `cd tic-tac-toe`
3. Instala las dependencias necesarias: `yarn install`

## Uso

- Al iniciar el juego, simplemente haz clic en el botón "Iniciar Partida". En ese momento, se generará aleatoriamente si el bot juega primero o no. Si el bot juega primero, también escogerá aleatoriamente jugar como "X" o como "O".
- Una vez se haya generado este estado inicial, simplemente comienza a jugar haciendo clic en los espacios vacíos del tablero para colocar tus fichas. El objetivo del juego es conseguir tres en raya en cualquiera de las direcciones posibles (horizontal, vertical o diagonal).
- Si no juega primero el Bot, puedes selecionar si jugar como "X" o como "O", y realizar el primer movimiento.
- La aplicación validará que no hagas jugadas erróneas y te permitirá deshacer un movimiento anterior utilizando el botón correspondiente. Además, el bot utiliza un mecanismo para ganar según las posibles victorias y también evita que tú tengas una posible victoria.

### Configuración
Si deseas cambiar la dirección de la API utilizada por el juego, debes modificar la variable de entorno `VITE_URL_API`.
Por defecto, esta variable está definida en el archivo `.env` del proyecto. Sin embargo, puedes sobrescribirla utilizando un archivo `.env.local` o definiéndola directamente en la línea de comandos al ejecutar el servidor de desarrollo:

```
VITE_URL_API=http://localhost:3000/api yarn dev
```

## Licencia

Este juego está publicado bajo la licencia MIT. Puedes ver los detalles completos de la licencia en el archivo `LICENSE.md` del repositorio.
