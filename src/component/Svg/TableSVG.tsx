import { memo } from 'react'
type TableProps = {

}

const TableSVG = () => {

  return (
    <svg     
      style={{
        width: 216,
        height: '100%',
        position:'absolute',
        left:0,
        top:0,
        margin:'auto',
        right:0,
        zIndex:0
      }}
    >
      <path
        style={{
          stroke: '#8DAB7F',
          strokeWidth: 6,
          transitionDuration: '0.375s'
        }}
        d="M108 83H6M108 153H6M108 83h102M108 153h102M73 118V16M143 118V16M73 118v102M143 118v102"
      />
    </svg>
  );

}

export default memo(TableSVG);