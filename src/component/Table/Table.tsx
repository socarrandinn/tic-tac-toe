import { Dispatch, SetStateAction, memo } from 'react'
import TableCell from './TableCell';
import { useApiPlay } from '../../hooks/useApiPlay';
import { IPlay } from '../../constant/play.interface';
import { JUGADOR_ENUM } from '../../constant/play.enum';

type TableProps = {
   play: IPlay,
   setPlay: Dispatch<SetStateAction<IPlay>>,
   player: JUGADOR_ENUM
}

const Table = ({ play, setPlay,player}: TableProps) => {
  const { postPlay } = useApiPlay()  
  
  const handlePlay = async (index: number) => {    
    const newData: IPlay = {  
      ...play,  
      partidaId: play?.partidaId,
      siguienteMovimiento: { caracter: player as JUGADOR_ENUM, posicion: index },
      estadoTablero: play?.estadoTablero,
      currentPlayer:player
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
          <TableCell onPlay={() => handlePlay(0)} value={play?.estadoTablero?.[0]} />
          <TableCell onPlay={() => handlePlay(1)} value={play?.estadoTablero?.[1]} />
          <TableCell onPlay={() => handlePlay(2)} value={play?.estadoTablero?.[2]} />
        </tr>
        <tr>
          <TableCell onPlay={() => handlePlay(3)} value={play?.estadoTablero?.[3]} />
          <TableCell onPlay={() => handlePlay(4)} value={play?.estadoTablero?.[4]} />
          <TableCell onPlay={() => handlePlay(5)} value={play?.estadoTablero?.[5]} />
        </tr>
        <tr>
          <TableCell onPlay={() => handlePlay(6)} value={play?.estadoTablero?.[6]} />
          <TableCell onPlay={() => handlePlay(7)} value={play?.estadoTablero?.[7]} />
          <TableCell onPlay={() => handlePlay(8)} value={play?.estadoTablero?.[8]} />
        </tr>

      </tbody>
    </table>
  );

}

export default memo(Table);