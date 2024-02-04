// import pizzas from "./assets/pizzas.json";
import { useEffect, useState } from "react";
import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort.jsx";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
const Home = () => {
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(true)
   useEffect(() => {
      fetch("https://65bdcbe5b51f9b29e933ae6e.mockapi.io/items").then(res => {
         return res.json();
      }).then(json => {
         setItems(json);
         setIsLoading(false)
      })
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="container">
         <div className="content__top">
            <Categories />
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoading && [...new Array(6)].map((_, i) => <Skeleton key={i} />)}
            {!isLoading && items.map(obj => <PizzaBlock {...obj} key={obj.id} />)}
         </div>
      </div>
   )
}

export default Home;