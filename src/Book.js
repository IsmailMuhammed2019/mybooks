import React from 'react'

//creating book component

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
