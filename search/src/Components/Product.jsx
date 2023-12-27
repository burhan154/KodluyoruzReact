import React, { useState } from 'react'

import { useBook } from '../context/bookContext'

function Product({ book }) {


    return (

        <div className='p-5 '>

            <div className="book">

                <div className=" relative w-full h-full ml-2 max-w-sm sm:py-4 bg-white border border-gray-200 rounded-lg shadow sm:p-2   ">
                    <div>
                        <h5 className="mb-4 text-xl font-medium text-gray-500  text-center ">{book.volumeInfo.title}</h5>
                        <span className="ml-1 text-xl font-normal text-gray-500  line-clamp-6 mb-8 ">{book.volumeInfo.description}</span>
                        <div className='flex flex-col space-y-2  '>
                            <span className="ml-1 text-sm font-normal text-gray-500  underline underline-offset-8"> {book.volumeInfo.authors && `Yazarlar: ${book.volumeInfo.authors.join(', ')}`}</span>
                            <span className="ml-1 text-sm font-normal text-gray-500  underline underline-offset-8">{book.volumeInfo.publisher && `Publisher: ${book.volumeInfo.publisher}`} </span>
                        </div>
                        <div className='absolute bottom-4 right-1 px-3 flex flex-row justify-between items-center  w-full '>
                            <span className='ml-1 text-md font-normal text-gray-500 '>{book.volumeInfo.publishedDate && ` ${book.volumeInfo.publishedDate}`}</span>
                            <a className='border-b px-2 py-1 hover:text-teal-500' href={book.volumeInfo.previewLink}>DETAILS</a>
                        </div>
                    </div>
                </div>
                <div className="cover">

                    {book.volumeInfo.imageLinks ? <img className='w-full h-[100%] ' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> : <img className='w-full h-[100%] ' src='https://islandpress.org/sites/default/files/default_book_cover_2015.jpg' />}

                </div>
            </div>



        </div>
    )
}

export default Product