import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useBook } from '../context/bookContext';
function Hero() {

    const {  setSearch } = useBook()

    return (
        <section className="bg-center   bg-[url('https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-gray-500 bg-blend-multiply">
            <div className="px-4 mx-auto text-center py-12  lg:py-16">
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Google Book Search App</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 sticky top-0 z-40 ">
                    <form  className="w-full max-w-md mx-auto ">

                        <div className="relative ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <SearchIcon className='w-5 h-5 text-gray-500 ' />
                            </div>
                            <input
                                id="search"
                                name="search"
                                type="text"
                               onChange={(e)=>setSearch(e.target.value) }
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-rose-500 focus:border-rose-500 " placeholder="Enter Name Book" required />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Hero