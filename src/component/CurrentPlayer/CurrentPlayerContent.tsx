import { memo, useCallback, useMemo } from 'react'
import { Stack } from '../Stack';
import { JUGADOR_ENUM } from '../../constant/play.enum';
import { IPlay } from '../../constant/play.interface';


type CurrentPlayerContentProps = {
  play: IPlay,
  esEmpate: boolean,
  setPlayer: React.Dispatch<React.SetStateAction<JUGADOR_ENUM>>,
  player: JUGADOR_ENUM,
}

const CurrentPlayerContent = ({ play, esEmpate, player, setPlayer }: CurrentPlayerContentProps) => { 
  const esTableroVacio =  play?.estadoTablero?.every(e => e === '-')
  console.log(esTableroVacio)
  const onCheckPlayer = useCallback(
    (player: JUGADOR_ENUM) => {
      if(esTableroVacio){
        setPlayer(player)   
      }
    },
    [setPlayer, esTableroVacio],
  )

  const style = {
    width: '50%',
    height: 30,
    border: '1px solid #8DAB7F',
    borderRadius: 8,
    backgroundColor: '#394032',
    color:'#fff'
  }



  return (
    <Stack flexDirection='row' justifyContent='space-between' gap={20} style={{ width: '100%' }}>

      {
        play?.winner === null ?
          (
            esEmpate ?
              <Stack alignItems='center' justifyContent='center' style={{ ...style, width: '100%', borderBottom: '4px solid #8DAB7F' }}>
                EMPATE (XO)
              </Stack>
              : <SelectPlayer {...{player, onCheckPlayer, style, esTableroVacio}}  />

          ) :
          <Stack alignItems='center' justifyContent='center' style={{ ...style, width: '100%', borderBottom: '4px solid #8DAB7F' }}>
            {play?.winner === play?.currentPlayer ? "GANASTE": 'PERDISTE'}
          </Stack>
      }
    </Stack>
  );

}

export default memo(CurrentPlayerContent);

type SelectPlayerProps={
  onCheckPlayer: (player: JUGADOR_ENUM) => void, 
  player: JUGADOR_ENUM,
  style: object,
  esTableroVacio:boolean
}

const SelectPlayer = ({onCheckPlayer,player, style, esTableroVacio}:SelectPlayerProps) => {
  
  const esX = player === JUGADOR_ENUM.X ? true : false

  const puntero = esTableroVacio ? {cursor:'pointer' }: {}

  return (
    <>
      <Stack
        onPlayer={() => onCheckPlayer(JUGADOR_ENUM.X)}
        alignItems='center'
        justifyContent='center'
        style={{ ...style, backgroundColor: esX ? '#587B7F' : '#8DAB7F', ...puntero }}>
        {JUGADOR_ENUM.X}
      </Stack>
      <Stack
        onPlayer={() => onCheckPlayer(JUGADOR_ENUM.O)}
        alignItems='center'
        justifyContent='center'
        style={{ ...style, backgroundColor: !esX ? '#587B7F' : '#8DAB7F', ...puntero}}>
        {JUGADOR_ENUM.O}
      </Stack>
    </>
  )
}