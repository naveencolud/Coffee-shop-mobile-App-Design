const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano']

function CategoryList({ category, setCategory }) {
  return (
    <div className="category-strip" role="tablist" aria-label="Coffee categories">
      {categories.map((item) => (
        <button
          className={`category-pill ${category === item ? 'active' : ''}`}
          key={item}
          onClick={() => setCategory(item)}
          role="tab"
          aria-selected={category === item}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default CategoryList
