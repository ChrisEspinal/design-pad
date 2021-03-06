import React from 'react';

export default function PadItem(props){

     const handleOnDragStart = event => {
         event.dataTransfer.setData("color", props.color);
    };

    return(
        <div draggable={props.edit} onDragStart={handleOnDragStart}>{props.color}</div>
    );
}