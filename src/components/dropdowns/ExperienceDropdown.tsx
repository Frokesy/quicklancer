const ExperienceDropdown = () => {
  return (
    <div className="w-[100%]">
        <select name="categories" className="w-[100%] outline-none bg-inherit" id="categories">
            <option value="0">Experience Level</option>
            <option value="1">Beginner</option>
            <option value="2">Intermediate</option>
            <option value="3">Senior</option>
        </select>
    </div>
  )
}

export default ExperienceDropdown
