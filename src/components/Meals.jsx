import axios from "axios";
import { useState, useEffect } from "react";
import "../style.css"
const Meals = () => {
    const [items, setItems] = useState([])

    //Fetching our Data:
    // axios.get() method allow use to fetch/get data from API 
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then(res=>{
            console.log(res.data.meals)
            setItems(res.data.meals)// sending our data to our state
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    // itemList function allow us to render items to our DOM
    const itemsList= items.map(({strMeal, strMealThumb, idMeal})=>{
        return (
            <section className="card">
                <img src={strMealThumb} alt={strMeal}/>
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })
  return (
    <div className="items-container">
        {itemsList} 
    </div>
  )
}

export default Meals