import { Dispatch, SetStateAction, memo, useCallback } from 'react'
import TableCell from './TableCell';
import { useApiPlay } from '../../hooks/useApiPlay';
import { IPlay } from '../../constant/play.interface';
import { JUGADOR_ENUM } from '../../constant/play.enum';

type TableProps = {
   play: IPlay,
   setPlay: Dispatch<SetStateAction<IPlay>>
}

const Table = ({ play, setPlay}: TableProps) => {
  const { postPlay } = useApiPlay()

  const getTablero = (index: number) => {
    const tablero = play?.estadoTablero?.map((cell, i) => {
      if( i === index) {
        return play?.currentPlayer
      }
      return cell
    })
    return tablero
  }

  const handlePlay = async (index: number) => {    
    const newData: IPlay = {  
      ...play,  
      partidaId: play?.partidaId,
      siguienteMovimiento: { caracter: play?.currentPlayer as JUGADOR_ENUM, posicion: index },
      estadoTablero: getTablero(index) as string[]       
    }
    
    const data = await postPlay(newData)
    setPlay(data)
  }

  

  return (
    <table style={{
      borderSpacing: 6,
      margin: '0 auto',
      position: 'relative',
      paddingTop: 10
    }}>
      <tbody>
        <tr>
          <TableCell onPlay={() => handlePlay(0)} value={play?.estadoTablero[0]} />
          <TableCell onPlay={() => handlePlay(1)} value={play?.estadoTablero[1]} />
          <TableCell onPlay={() => handlePlay(2)} value={play?.estadoTablero[2]} />
        </tr>
        <tr>
          <TableCell onPlay={() => handlePlay(3)} value={play?.estadoTablero[3]} />
          <TableCell onPlay={() => handlePlay(4)} value={play?.estadoTablero[4]} />
          <TableCell onPlay={() => handlePlay(5)} value={play?.estadoTablero[5]} />
        </tr>
        <tr>
          <TableCell onPlay={() => handlePlay(6)} value={play?.estadoTablero[6]} />
          <TableCell onPlay={() => handlePlay(7)} value={play?.estadoTablero[7]} />
          <TableCell onPlay={() => handlePlay(8)} value={play?.estadoTablero[8]} />
        </tr>

      </tbody>
    </table>
  );

}

export default memo(Table);