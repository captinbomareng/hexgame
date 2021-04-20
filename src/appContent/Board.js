import React, {useState} from 'react'
import CreateBoard from '../utils/CreateBoard';
import styled from 'styled-components';
import Cell from './Cell.js';

function Board() {

    const [board,setBoard] = useState(CreateBoard());
    const [turn,setTurn] = useState('blue');

    const chnageTurn =()=>{
        if(turn==='blue'){
            setTurn('red');
            return('red');
        }
        if(turn==='red')
        {
            setTurn('blue');
            return('blue');          
        }
    }

    return (
        <BoardContainer>
            <BoardStyled>           
                {board.map((item)=>{
                    return(
                        <Cell xCell={item.x} yCell={item.y} turn={turn} chnageTurn={chnageTurn} /> 
                    )
                })}
            </BoardStyled>
        </BoardContainer>
    )
}

const BoardContainer =styled.div`
 width:100%;
 height: 600px;
 display:flex;
 justify-content:center;
 margin-top:100px;
`

const BoardStyled =styled.div`
width:53.6vw;
height: 600px;
position:absolute;
`

export default Board;
