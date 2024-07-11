

function HeaderDrop() {
  return (
    <div className="flex items-center gap-4 mr-16 bg-custom-green">
      <select className="bg-transparent text-white  px-2 py-1 rounded focus:outline-none">
        <option value="English">Language</option>
      </select>
      <select className="bg-transparent text-white  px-2 py-1 rounded focus:outline-none">
        <option className="bg-gray-800" value="Nigeria">Country</option>
      </select>
    </div>
  )
}

export default HeaderDrop