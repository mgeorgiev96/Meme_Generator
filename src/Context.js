import React,{createContext,useState} from 'react'



export const ImageContext = createContext()


export const ContextProvider = (props)=>{
    const [image,setImage] = useState('')
    const [color,setColor] = useState('#000000')
    const [fontSize,setFontSize] = useState('35px')
    const [topTop,setTop] = useState('35px')
    const [leftTop,setLeft] = useState('35px')
    const [leftBottom,setLeftB] = useState('35px')
    const [topBottom,setTopB] = useState('100px')
    const [colorBot,setColorBot] = useState('#000000')
    const [fontBot,setFontBot] = useState('35px')
    

    return(
        <ImageContext.Provider value=
        {[image,setImage,color,setColor,fontSize,setFontSize,topTop,setTop,leftTop,setLeft,leftBottom,setLeftB,topBottom,
        setTopB,colorBot,setColorBot,fontBot,setFontBot]}>
            {props.children}
        </ImageContext.Provider>
    )
}