import { memo, useCallback, useEffect } from 'react'
import { IPlay } from '../../constant/play.interface';
import { usePlayContext } from '../context/PlayContext';
import { useApiPlay } from '../../hooks/useApiPlay';
import { Stack } from '../Stack';
import { Content } from '../Content';
import TableSVG from '../Svg/TableSVG';
import Table from '../Table/Table';
import { ButtonPlay } from '../Button';
import { Loading } from '../Loading';
import { initValue } from '../../constant/play.initvalue';
import { CurrentPlayerContent } from '../CurrentPlayer';

type PlayFormProps = {
  setPlay: React.Dispatch<React.SetStateAction<IPlay>>,
  play: IPlay
}
const PlayForm = ({ play, setPlay }: PlayFormProps) => {
  const { postPlay, isLoading } = useApiPlay()

  const handleResetPlay = async (event: any) => {
    event.preventDefault();
    const data: IPlay = await postPlay(initValue)
    setPlay(data)
  }
  

  return (
    <form onSubmit={handleResetPlay}>
      <Stack flexDirection='column' gap={10} >
        <h1 style={{ color: '#394032', lineHeight: 1, margin: 0 }}>TIC TAC TOE</h1>
        <CurrentPlayerContent winner={play?.winner} currency={play?.currentPlayer} />
        <Content>
          {isLoading ? <Loading /> : undefined}
          <TableSVG />
          <Table {...{ play, setPlay }} />
        </Content>

        <Stack style={{width:'100%', marginTop: 20}} gap={8} justifyContent='center'>
          <ButtonPlay>Iniciar Partida</ButtonPlay>
        </Stack>
      </Stack>
    </form>
  );

}

export default memo(PlayForm);