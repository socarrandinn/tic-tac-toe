import { JUGADOR_ENUM } from "./play.enum"

export interface IPlay{
  partidaId: string,
  estadoTablero: string[],
  siguienteMovimiento?: IMovimiento | {deshacer: boolean}
  historial?:IMovimiento[],
  isBot: boolean,
  currentPlayer: JUGADOR_ENUM,
  winner: null
}

export interface IMovimiento{
  caracter: JUGADOR_ENUM,
  posicion: number
}