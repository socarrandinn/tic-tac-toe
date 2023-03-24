import { memo } from 'react'
import { Stack } from '../Stack';
import { JUGADOR_ENUM } from '../../constant/play.enum';


type CurrentPlayerContentProps = {
  currency: string,
  winner: string | null
}

const CurrentPlayerContent = ({ currency, winner }: CurrentPlayerContentProps) => {

  const isX = currency === JUGADOR_ENUM.X ? true : false

  const style = {
    width: '50%',
    height: 30,
    border: '1px solid #8DAB7F',
    borderRadius: 8,
  }

  return (
    <Stack flexDirection='row' justifyContent='space-between' gap={20} style={{ width: '100%' }}>
      {
        winner === null ?
          <>
            <Stack alignItems='center' justifyContent='center' style={{ ...style, borderBottom: isX ? '4px solid #8DAB7F' :  '1px solid #8DAB7F' }}>
              {JUGADOR_ENUM.X}
            </Stack>
            <Stack alignItems='center' justifyContent='center' style={{ ...style, borderBottom: !isX ? '4px solid #8DAB7F' :  '1px solid #8DAB7F' }}>
              {JUGADOR_ENUM.O}
            </Stack>
          </> :
          <Stack alignItems='center' justifyContent='center' style={{ ...style, width:'100%', borderBottom: '4px solid #8DAB7F'  }}>
            VICTORIA PARA {winner}
          </Stack>
      }
    </Stack>
  );

}

export default memo(CurrentPlayerContent);