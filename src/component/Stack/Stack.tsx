import {memo, FC, PropsWithChildren} from 'react'

type StackProps = PropsWithChildren &{
  flexDirection?: 'row' | 'column',
  gap?: number,
  alignItems?: "start" | 'end' | "center",
  justifyContent?: "start" | 'end' | "center" | 'space-between' | 'space-around',
  style?: any
}

const Stack:FC<StackProps> = ({flexDirection='row', gap=0,alignItems='start', justifyContent='start',style,children}:StackProps) => {

return (
<div style={{
  ...style,
  display:'flex',
  flexDirection:flexDirection,
  gap: gap,
  alignItems: alignItems,
  justifyContent: justifyContent
}}>
  {children}
</div>
);

}

export default memo(Stack);