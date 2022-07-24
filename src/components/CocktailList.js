import React from 'react'
import Loading from "./Loading"
import { useGlobalContext } from '../helpers/context'
import Cocktail from './Cocktail'

export default function CocktailList() {
    const { cocktails,loading } = useGlobalContext()
    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
        return <div>
            <h2 className="section--title">
                no search matched your criteria
            </h2>
        </div>
    }
    return (
        <div>
            <h2 className="text-center capitalize mt-20 text-lime-900 font-bold text-4xl tracking-widest">cocktails</h2>
            <div className="cocktail--list grid md:grid-cols-3 sm:grid-cols-2 p-20 gap-5">
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}
