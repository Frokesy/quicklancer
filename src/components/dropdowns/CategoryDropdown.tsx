const CategoryDropdown = () => {
  return (
    <div className="w-[100%]">
        <select name="categories" className="w-[100%] outline-none bg-inherit" id="categories">
            <option value="1">Categories</option>
            <option value="2">Web Development and Engineering</option>
            <option value="3">Design and Creative</option>
            <option value="4">Sales and Marketing</option>
            <option value="5">Content Writing</option>
            <option value="6">Photography and architecture</option>
            <option value="7">Data Analytics</option>
            <option value="8">Business and Accounting</option>
        </select>
    </div>
  )
}

export default CategoryDropdown
