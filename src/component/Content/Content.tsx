import {memo, FC, PropsWithChildren} from 'react'

type ContentProps = PropsWithChildren &{
  flexDirection?: 'row' | 'column',
  gap?: number
}

const Content:FC<ContentProps> = ({flexDirection='row', gap=0,children}:ContentProps) => {
  

return (
<div className='scale' style={{
  width: '100%',
  minWidth: 300,
  height: '100%',
  position:'relative',
  
}}>
  {children}
</div>
);

}

export default memo(Content);