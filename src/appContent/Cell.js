import React, { useState } from 'react'
import styled from 'styled-components';

function Cell({xCell,yCell,turn,chnageTurn}) {

    const x= xCell +'px';
    const y =yCell +'px';
    const [click,setClick] =useState(false);
    const [cellColor,setCellColor]= useState('red');

    const changeColor =()=>{
        if(!click){
        setCellColor(chnageTurn());
        console.log(click,turn);
        setClick(true);
        }
    }

    return (
        <CellStyled
            x={x}
            y={y} 
            click={click} onClick={()=>changeColor()} 
            cellColor={cellColor} 
        />
    )
}


const CellStyled =styled.div`
width:60px;
height: 60px;
background:${props=> (props.click ? props.cellColor:'darkgrey')};
position: absolute;
top:${props =>props.y};
left:${props =>props.x};
&:hover{
background:${props=> (props.click ? '':'gainsboro')} ;
opacity:${props=> (props.click ? '0.5':'1')},

}
`



export default Cell
