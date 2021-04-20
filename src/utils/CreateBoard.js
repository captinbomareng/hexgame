const CreateBoard =() =>{
    let x =0, y=0, index=0;
    const board =[];
    
    const addCellToBoard = (x,y,index)=>{
        let cell={x,y,index};
        board.push(cell);
    } 
    
    for(let i=0;i<11;i++){
        for(let j=0; j<11;j++){
            addCellToBoard(x,y,index);
            x+=65;
        }   
        y+=65;
        x-=65*11-32;
    }

    return board;
}

export default CreateBoard;