import { memo, useMemo, useState } from 'react'
import { IPlay } from '../../constant/play.interface';
import { useApiPlay } from '../../hooks/useApiPlay';
import { Stack } from '../Stack';
import { Content } from '../Content';
import TableSVG from '../Svg/TableSVG';
import Table from '../Table/Table';
import { ButtonPlay } from '../Button';
import { Loading } from '../Loading';
import { initValue } from '../../constant/play.initvalue';
import { CurrentPlayerContent } from '../CurrentPlayer';
import ButtonPreviousPlay from '../Button/ButtonPreviousPlay';
import { JUGADOR_ENUM } from '../../constant/play.enum';

type PlayContainerProps = {
  setPlay: React.Dispatch<React.SetStateAction<IPlay>>,
  play: IPlay
}
const PlayContainer = ({ play, setPlay }: PlayContainerProps) => {
  const { postPlay, isLoading } = useApiPlay()
  const [player, setPlayer] = useState<JUGADOR_ENUM>(play?.currentPlayer)
  const esEmpate = play?.estadoTablero?.every(t => t !== '-')

  //iniciar partida
  const handleResetPlay = async (event: any) => {
    event.preventDefault();
    const data: IPlay = await postPlay(initValue)
    setPlay(data)
    setPlayer(data?.currentPlayer)
  }


  return (
    <form onSubmit={handleResetPlay}>
      <Stack flexDirection='column' gap={10} alignItems='center'>
        <h1 style={{ color: '#394032', lineHeight: 1, margin: 0, textAlign:'center' }}>TIC TAC TOE</h1>
        {
          !!play?.partidaId ?
          <CurrentPlayerContent {...{ play, esEmpate, player, setPlayer }} /> : undefined
        }
        <Content>
          {(isLoading || play?.winner !== null) ? <Loading /> : undefined}
          <TableSVG />
          <Table {...{ play, setPlay, player,setPlayer}} />
        </Content>

        <Stack style={{ width: '100%', marginTop: 20 }} gap={8} justifyContent='center'>
          <ButtonPlay>Iniciar Partida</ButtonPlay>
          <ButtonPreviousPlay {...{ play, setPlay }}>Deshacer Movimiento</ButtonPreviousPlay>
        </Stack>
      </Stack>
    </form>
  );

}

export default memo(PlayContainer);