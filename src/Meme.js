import React,{useContext} from 'react'
import {ImageContext} from './Context';


function Meme() {

    const 
    [image,setImage,color,setColor,fontSize,setFontSize,topTop,setTop,leftTop,setLeft,leftBottom,setLeftB,topBottom,
        setTopB,colorBot,setColorBot,fontBot,setFontBot] = useContext(ImageContext)

    const setUpper = (e)=>{ 
        let canvas = document.querySelector('canvas')
        let ctx = canvas.getContext('2d')
        let text =document.querySelector('.text_top')
        text.innerHTML = e.target.value
    }
    const setLower = (e)=>{
        let canvas = document.querySelector('canvas')
        let ctx = canvas.getContext('2d')
        let text =document.querySelector('.text_bottom')
        text.innerHTML = e.target.value
    }

    const saveMeme = ()=>{
        
        let canvas = document.querySelector('canvas')
        let ctx = canvas.getContext('2d')
        let text_bottom =document.querySelector('.text_bottom')
        let text_top =document.querySelector('.text_top')
        let img = new Image()
        canvas.width = canvas.scrollWidth
        canvas.height = canvas.scrollHeight
        img.onload = ()=>{
            ctx.drawImage(img,0,0,canvas.width,canvas.height)
            ctx.fillStyle = color
            ctx.font = fontSize +" Arial"
            ctx.fillText(text_top.innerHTML,parseInt(leftTop),parseInt(topTop)+parseInt(fontSize)*2)
            ctx.fillStyle = colorBot
            ctx.font = fontBot +" Arial"
            ctx.fillText(text_bottom.innerHTML,parseInt(leftBottom),parseInt(topBottom)+parseInt(fontSize)*2)
            text_bottom.innerHTML = ''
            text_top.innerHTML = ''
        }
        img.src = image
    }

    const valueColor = (e)=>{
        setColor(e.target.value)

    }
    const valueFont = (e)=>{
        setFontSize(e.target.value + 'px')
    }
    const valueColorBot = (e)=>{
        setColorBot(e.target.value)

    }
    const valueFontBot = (e)=>{
        setFontBot(e.target.value + 'px')
    }

    const setTopTextTop = (e)=>{
        setTop(e.target.value + 'px')
    }
    const setLeftTextTop = (e)=>{
        setLeft(e.target.value + 'px')
    }
    const setTopTextBottom= (e)=>{
        setTopB(e.target.value + 'px')
    }
    const setLeftTextTopBottom = (e)=>{
        setLeftB(e.target.value + 'px')
    }

    return (
        <div className='meme_container'>
            <label>Set Upper Text</label>
            <input className='upper_text' onChange={setUpper}></input>
            <label>Set Lower Text</label>
            <input className='lower_text' onChange={setLower}></input>
            <button onClick={saveMeme}>Save Meme</button>
            <label>Text Color Bottom: {color}</label>
            <input type="color" className='color_picker' onChange={valueColor}></input>
            <label>Text Color Bottom: {colorBot}</label>
            <input type="color" className='color_picker' onChange={valueColorBot}></input>
            <label>Font Size Top :   {fontSize}</label>
            <input type="range" className='font_picker' onChange={valueFont}></input>
            <label>Font Size Bottom :   {fontBot}</label>
            <input type="range" className='font_picker' onChange={valueFontBot}></input>
            <label>Top Text Position Left:{leftTop} Top: {topTop}</label>
            <input type="range" max={350} onChange={setTopTextTop}></input>
            <input type="range" max={400} onChange={setLeftTextTop}></input>
            <label></label>
            <label>Bottom Text Position Left:{leftBottom} Top: {topBottom}</label>
            <input type="range"  max={400} onChange={setTopTextBottom}></input>
            <input type="range" max={500} onChange={setLeftTextTopBottom}></input>
        </div>
    )
}

export default Meme;
