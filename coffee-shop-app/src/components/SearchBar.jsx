import { Search, SlidersHorizontal } from 'lucide-react'

function SearchBar({ query, setQuery }) {
  return (
    <div className="search-row flex items-center">
      <label className="search-box">
        <Search size={20} />
        <input
          aria-label="Search coffee"
          placeholder="Search coffee"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <button className="filter-button" aria-label="Filter coffees">
        <SlidersHorizontal size={21} />
      </button>
    </div>
  )
}

export default SearchBar
