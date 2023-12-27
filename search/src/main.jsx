import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
import { BookProvider } from './context/bookContext'
ReactDOM.createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={queryClient}>
      <BookProvider>
        <App />
      </BookProvider>
    </QueryClientProvider>
  
)
