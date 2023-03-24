import { JUGADOR_ENUM } from "./play.enum";
import { IPlay } from "./play.interface";

export const initValue: IPlay = {
  partidaId: "",
  estadoTablero: Array(9).fill('-'),
  currentPlayer: JUGADOR_ENUM.X,
  isBot: false,
  siguienteMovimiento: {caracter:JUGADOR_ENUM.X, posicion:0},
  historial:[],
  winner:null
};
