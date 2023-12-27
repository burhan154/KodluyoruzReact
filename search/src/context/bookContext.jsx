import React from 'react'
import { createContext, useContext, useState } from 'react'

import axios from 'axios';
import { useQuery } from 'react-query'

// BookContext adında bir context oluşturuluyor.
const BookContext = createContext()

// BookProvider adında bir component oluşturuluyor.
export const BookProvider = ({ children }) => {

    // API_KEY değişkeni oluşturuluyor ve Google Books API anahtarı atanıyor.
    const API_KEY = "AIzaSyDtcqTiwTJsT7tRh9Ka4-pcByFACRjX8_k"

    // search ve setSearch isimli state'ler oluşturuluyor.
    const [search, setSearch] = useState('')

    // useQuery hook'u kullanarak API'den veri çekiliyor.
    const { isLoading, error, data } = useQuery(['books', search], () =>
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
    );

    // BookContext.Provider component'ı içinde kullanılmak üzere, değerler bir objede toplanıyor.
    const values = {
        search,
        setSearch,
        isLoading,
        error,
        data
    }

    // BookContext.Provider component'ı ile BookProvider component'ı arasında BookContext değerleri paylaşılıyor.
    return (
        <BookContext.Provider value={values}>{children}</BookContext.Provider>
    );
}

// useBook hook'u, BookContext değerlerine erişmek için kullanılıyor.
export const useBook = () => useContext(BookContext)
