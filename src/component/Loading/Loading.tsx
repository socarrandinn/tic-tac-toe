import {memo} from 'react'

const Loading = () => {

return (
<div style={{
  width:'100%',
  height:'100%',
 // backgroundColor:'#1E201908',
  position:'absolute',
  top:0, left:0,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  zIndex:4
}}>
  <span className='loading'/>
</div>
);

}

export default memo(Loading);