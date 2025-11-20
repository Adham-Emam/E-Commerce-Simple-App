import { FaSearch } from 'react-icons/fa'

const Search = ({ handleChange, handleSubmit, searchQuery }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center border border-green-900 px-4 rounded-full my-5"
    >
      <input
        type="text"
        placeholder="Search product by name, tags, or keyword..."
        className="w-full flex-1"
        value={searchQuery}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        <FaSearch />
      </button>
    </form>
  )
}

export default Search
