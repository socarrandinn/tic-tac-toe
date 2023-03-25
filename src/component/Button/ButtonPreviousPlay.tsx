import { Dispatch, PropsWithChildren, SetStateAction, memo, useMemo } from 'react'
import { useApiPlay } from '../../hooks/useApiPlay'
import { IPlay } from '../../constant/play.interface'
import { JUGADOR_ENUM } from '../../constant/play.enum'

type ButtonPreviousPlayProps = PropsWithChildren & {
  play: IPlay,
  setPlay: Dispatch<SetStateAction<IPlay>>
}

const ButtonPreviousPlay = ({ play, setPlay, children }: ButtonPreviousPlayProps) => {
  const { postPlay } = useApiPlay()

  const isEmpty = useMemo(() => play?.estadoTablero?.every(e => e === '-'), [play])
  const isWinner = (play.winner === JUGADOR_ENUM.O || play.winner === JUGADOR_ENUM.X)
  const isBot = play?.historial?.length

  const onPreviousPlay = async () => {
    const tableroAnterior = { ...play, siguienteMovimiento: { deshacer: true } }
    const data = await postPlay(tableroAnterior)
    setPlay(data)
  }
  return (
    <button disabled={isEmpty || isWinner || isBot === 1} type='button' onClick={onPreviousPlay} className='button scale'>
      {children}
    </button>
  );

}

export default memo(ButtonPreviousPlay);