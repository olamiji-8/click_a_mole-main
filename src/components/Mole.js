import { useEffect } from 'react'
import mole from '../img/mole.png'

export default function Mole(props){
    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img src={mole} alt="mole" onClick={props.moleClicked} className="image"/>
        </div>
    )
}