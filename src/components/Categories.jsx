function Categories({ categories, activeCategory, onClickCategory }) {

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li key={index} onClick={() => onClickCategory(index)} className={activeCategory === index ? "active" : ""}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
