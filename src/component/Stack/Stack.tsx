import { memo, FC, PropsWithChildren } from 'react'


type StackProps = PropsWithChildren & {
  flexDirection?: 'row' | 'column',
  gap?: number,
  alignItems?: "start" | 'end' | "center",
  justifyContent?: "start" | 'end' | "center" | 'space-between' | 'space-around',
  style?: any,
  onPlayer?: () => void
}

const Stack: FC<StackProps> = ({ flexDirection = 'row', gap = 0, alignItems = 'start', justifyContent = 'start', style, onPlayer, children }: StackProps) => {

  return (
    <div onClick={onPlayer} style={{
      ...style,
      display: 'flex',
      flexDirection: flexDirection,
      gap: gap,
      alignItems: alignItems,
      justifyContent: justifyContent
    }}>
      {children}
    </div>
  );

}

export default memo(Stack);