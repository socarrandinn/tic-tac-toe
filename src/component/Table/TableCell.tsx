import { memo } from 'react'
import { JUGADOR_ENUM } from '../../constant/play.enum';
import SVG_O from '../Svg/SVG_O';
import SVG_X from '../Svg/SVG_X';

type TableCellProps = {
  onPlay: () => void,
  value: string | undefined
}

const TableCell = ({ onPlay, value }: TableCellProps) => {

  if (value === '-')
    return (
      <td className='td' onClick={onPlay}> </td>
    );

  return (
    <td className='td'>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        {value === JUGADOR_ENUM.X ? <SVG_X /> : (value === JUGADOR_ENUM.O ? <SVG_O /> : undefined)}
      </div>
    </td>
  );

}

export default memo(TableCell);