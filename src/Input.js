import React,{useContext} from 'react'
import {ImageContext} from './Context';

function Input() {
    const [image,setImage] = useContext(ImageContext)
    const uploadImage = (e)=>{
        let canvas = document.querySelector('canvas')
        let target = e.target
        let ctx = canvas.getContext('2d')
        canvas.width = canvas.scrollWidth
        canvas.height = canvas.scrollHeight
        let i = URL.createObjectURL(target.files[0])
        setImage(i)
        let img = new Image()
        img.src = i
        img.onload = ()=>{
            ctx.drawImage(img,0,0,canvas.width,canvas.height)
        }
        
    }
    const download = (e)=>{
        e.preventDefault()
        let canvas = document.querySelector('canvas')
        let container = document.querySelector('.container')
        let link = canvas.toDataURL()
        let a = document.createElement('a')
        a.download = 'image.png'
        a.href = link
        container.appendChild(a)
        a.click()
        container.removeChild(a)

    }
    return (
        <form>
            <input className='image_selected' type="file" onChange={uploadImage}></input>
            <button onClick={download} className='fa fa-download'></button>
            <button className='fa fa-history' onClick={()=>window.location.reload()}></button>
        </form>
    )
}

export default Input;
