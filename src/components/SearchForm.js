import React, { useEffect } from 'react'
import { useGlobalContext } from "../helpers/context"

export default function SearchForm() {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('')
    React.useEffect(() => {
        searchValue.current.focus()
    }, [])
    const searchCocktail = () => {  
        setSearchTerm(searchValue.current.value)
    }   
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form--header rounded container mx-auto box-content bg-gray-50 w-1/2 p-8 mt-44 drop-shadow-lg">
                <p className="capitalize text-lime-900 md:tracking-widest font-bold text-lg">search your favorite cocktail</p>
                <label htmlFor="" className="block">
                    <input className="mt-6 focus:bg-white focus:outline-none border focus:border-lime-700 p-2 bg-gray-100 w-full" type="text"
                    onChange={searchCocktail}
                    ref={searchValue}
                    />
                </label>
            </div>
        </form>
    )
}
