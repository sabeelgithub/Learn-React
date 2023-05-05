import React, { useEffect, useState } from 'react'
import './usage.css'

function Usage() {
  const [value,setValue] = useState(0)
  const [color,setColor] = useState('white')
  const [Boom,setBoom] = useState(false)
  useEffect(()=>{
    setBoom(false)
    const id = setTimeout(()=>{
        setBoom(true)
    },value*1000)

    return () =>{
        clearTimeout(id)
    }
  },[value])

  return (
    <div>
    <div className='usage'>
    <div className='usage-item' style={{background:color}}>
    <button onClick={()=>{
        setValue((state)=>{
            return state+1
        })
    }}>Increment</button>
    <label htmlFor="">{value}</label>
    <button onClick={()=>{
        setValue((state)=>{
            return state-1
        })
    }}>Decrement</button>
    </div>
    <button onClick={()=>{
        setColor('green')
    }}>Green</button>
    <button onClick={()=>{
        setColor('blue')
    }}>Blue</button>
    </div>
       {
        Boom && value ? (
            <div className='boom'>
            <span>
            BOOM
            </span>
            </div>
        ) : null
       }
       
    </div>
  )
}

export default Usage