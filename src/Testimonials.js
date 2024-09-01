import React from 'react'
import { useState } from 'react'
import "./Testimonials.css"
const Testimonials = () => {
const [currentindex,setcurrentindex]=useState(0)
const testimonial=[
    {
        quots:"1-This is the best produvt i'have ever used",
        author:"privndra"
    },
    {
        quots:"2-This is the best shoap",
        author:"Raja ram dev"
    },
    {
        quots:"3-i highliy recommede to this product to everone",
        author:"maliaka"
    },
    {
        quots:"4-its my first product-sofy",
        author:"prinyanka"
    }
]
const handleprevclick=()=>{
setcurrentindex(
    (currentindex+testimonial.length-1)%testimonial.length)
}
const handlenextclick=()=>{
    setcurrentindex(
        (currentindex+1)%testimonial.length)
}
  return (
    <div className='testimonials'>
    <div className="testimonials-quots">
        {testimonial[currentindex].quots}
    </div>
    <div className="testimonials-author">
    --{testimonial[currentindex].author}
    </div>
    <testimonial className="nav">
        <button onClick={handleprevclick}>Prev</button>
        <button onClick={handlenextclick}>Next</button>
    </testimonial>
    </div>
  )
}

export default Testimonials
