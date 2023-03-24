import { PropsWithChildren, memo } from 'react'

type ButtonPlayProps = PropsWithChildren & {
  //onPlay: () => void
}

const ButtonPlay = ({ children }: ButtonPlayProps) => {

  return (
    <button type="submit" className='button scale'>
      {children}
    </button>
  );

}

export default memo(ButtonPlay);