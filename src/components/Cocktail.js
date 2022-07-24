import React from 'react'
import { Link } from 'react-router-dom'

export default function Cocktail({ image,id,name,info,glass }) {
    return (
        <article className="cocktail bg-gray-50 drop-shadow-md hover:drop-shadow-xl rounded-md">
            <div className="img-container">
                <img src={image} className="rounded-t-md" alt="cocktail image" />
            </div>
            <div className="cocktail-center p-7">
                <h3 className="font-bold tracking-widest text-3xl text-lime-900">{name}</h3>
                <h4 className="tracking-widest mt-3 text-lime-900 text-xl">{glass}</h4>
                <p className="mt-2 mb-3 text-md text-slate-300">{info}</p>
                <Link to={`/cocktail/${id}`} className="bg-lime-800 hover:bg-lime-300 hover:text-black p-1 px-2 uppercase tracking-widest mt-7 rounded text-white">
                    Details
                </Link>
            </div>
        </article>
    )
}
