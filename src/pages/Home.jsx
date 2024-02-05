// eslint-disable-next-line
// import pizzas from "./assets/pizzas.json";
import { useEffect, useState } from "react";
import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort.jsx";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
import Pagination from "../components/Pagination/index.jsx";
const Home = ({ searchValue }) => {
   const [items, setItems] = useState([]);
   const pizzas = items;
   const [isLoading, setIsLoading] = useState(true)
   const [categoryId, setCategoryId] = useState(0);
   const [sortId, setSortId] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);
   const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
   const sortTypes = [
      { title: "популярности (asc)", sort: "rating", type: "asc" },
      { title: "популярности (desc)", sort: "rating", type: "desc" },
      { title: "цене (asc)", sort: "price", type: "asc" },
      { title: "цене (desc)", sort: "price", type: "desc" },
      { title: "алфавиту (asc)", sort: "title", type: "asc" },
      { title: "алфавиту (desc)", sort: "title", type: "desc" }
   ];
   useEffect(() => {
      setIsLoading(true)
      fetch(`https://65bdcbe5b51f9b29e933ae6e.mockapi.io/items?page=${currentPage}&limit=3&sortBy=${sortTypes[sortId].sort}&order=${sortTypes[sortId].type}${categoryId > 0 ? '&category=' + categoryId : ''}${searchValue ? '&search=' + searchValue : ''}`)
         .then(res => {
            return res.json();
         }).then(json => {
            typeof json === "object" ? setItems(json) : setItems([])
            setIsLoading(false)
         })
      window.scrollTo(0, 0)
   }, [categoryId, sortId, searchValue, currentPage])

   return (
      <div className="container">
         <div className="content__top">
            <Categories categories={categories} activeCategory={categoryId} onClickCategory={(i) => setCategoryId(i)} />
            <Sort sortTypes={sortTypes} sortId={sortId} setSortId={(i) => setSortId(i)} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {isLoading && [...new Array(6)].map((_, i) => <Skeleton key={i} />)}
            {!isLoading && pizzas.map(obj => <PizzaBlock {...obj} key={obj.id} />)}
         </div>
         <Pagination setCurrentPage={(page) => setCurrentPage(page)} />
      </div>
   )
}

export default Home;