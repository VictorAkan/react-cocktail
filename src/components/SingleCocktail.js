import React from 'react'
import { useParams,Link } from 'react-router-dom'
import Loading from './Loading'

export default function SingleCocktail() {
    const { id } = useParams()
    const [cocktail, setCocktail] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        const getCocktail = async () => {
            try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const data = await response.json()
            if (data.drinks) {
                    const {
                        strDrink: text,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newCocktail = {
                        text,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients
                    }
                    setCocktail(newCocktail)
                    setLoading(false)
                }  else {
                    setCocktail(null)
                }
                } catch(error) {
                    console.log(error)
                }
                setLoading(false)
        }
        getCocktail()
    }, [id])
    if (loading) {
        return <Loading />
    }
    if (!cocktail) {
        return <div>
            <h1>no cocktail to display</h1>
        </div>
    } else {
        const {
            text,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail
    return (
        <div className="mt-40">
            <div className="text-center">
                <Link to="/" className="bg-lime-800 hover:bg-lime-300 hover:text-black p-2 px-2 uppercase tracking-widest rounded text-white">
                    Back Home
                </Link>
                <h1 className="mt-10 tracking-widest font-bold text-3xl">{text}</h1>
                <div className="flex md:flex-row flex-col p-20 md:text-left">
                    <img src={image} className="rounded-md md:w-2/5" alt="image" />
                    <div className="block p-10 ml-2 mt-10 font-bold space-y-6">
                        <p>
                            <span className="bg-lime-400 px-3 mr-3 py-1 text-lime-800 rounded-md">Name :</span> {text}
                        </p>
                        <p>
                            <span className="bg-lime-400 px-3 mr-3 py-1 text-lime-800 rounded-md">Category:</span> {category}
                        </p>
                        <p>
                            <span className="bg-lime-400 px-3 mr-3 py-1 text-lime-800 rounded-md">Info:</span> {info}
                        </p>
                        <p>
                            <span className="bg-lime-400 px-3 mr-3 py-1 text-lime-800 rounded-md">Glass:</span> {glass}
                        </p>
                        <p>
                            <span className="bg-lime-400 px-3 mr-3 py-1 text-lime-800 rounded-md">Instructions:</span> {instructions}
                        </p>        
                        <p className="md:flex-row">
                            <span className="bg-lime-400 px-3 mr-3 py-1 text-lime-800 rounded-md">Ingredients:</span>
                            <div>
                                {ingredients.map((item, i) => {
                                    return item ? <span key={i} className="md:ml-3 ml-2">{item}</span> : null
                                })}
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
