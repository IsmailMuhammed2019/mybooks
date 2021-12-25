import React from 'react'
import reactDom from 'react-dom'

//import books object
import { books } from './books'

// import book component
import Book from './Book'

// importing css
import './index.css'

//creating book list component
const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

reactDom.render(<Booklist />, document.getElementById('root'))
