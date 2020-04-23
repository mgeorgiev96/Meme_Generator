import React,{useContext} from 'react'
import {ImageContext} from './Context';

function Canvas() {
    const 
    [image,setImage,color,setColor,fontSize,setFontSize,topTop,setTop,leftTop,setLeft,leftBottom,setLeftB,topBottom,
        setTopB,colorBot,setColorBot,fontBot,setFontBot] = useContext(ImageContext)

    const canvasStyle = {
        backgroundColor: "gray",
        width: '500px',
        height: '400px'
    }
    const textBottom = {
        color: colorBot,
        fontSize: fontBot,
        top: topBottom,
        left: leftBottom
    }
    const textUpper = {
        top: topTop,
        left: leftTop,
        color: color,
        fontSize: fontSize
    }

    return (
        <div className='canvas_container'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p className='text_top' style={textUpper}>Upper Text</p>
            <p className='text_bottom' style={textBottom}>Lower Text</p>
        <canvas style={canvasStyle}>

        </canvas>
        </div>
    )
}
export default Canvas;
