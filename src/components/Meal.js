import React, { useState } from "react";
import Mealitem from "./MealItem";
import './style.css';
import Button from 'react-bootstrap/Button';
import Navbar from "./Navbar";
const Meal = () => {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState(null);
    const [searched, setSearched]= useState(false)

    const searchMeal = () => {
        if (search) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(res => res.json())
                .then(data => {
                    setMeal(data.meals);
                    setSearched(true);
                });
        }
    }

    return (
        
        <>
        
            <div className="main">
                <div className="heading">
                
                  <Navbar/>
                    
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar"   onChange={(e) => setSearch(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                searchMeal();
                            }
                        }}/>
                        
                        <Button variant="primary" className="button" onClick={searchMeal}>
                        Search
                    </Button>
                         
                       
                    
                    
                </div>
                <div className="container">
                   {   
                  
                    searched && Mymeal==null? (<p className="notSearch">No result found</p>) : (
                        Mymeal && Mymeal.map((res)=>{
                             return(
                            <Mealitem data={res}/>
                            )
                        }) 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;