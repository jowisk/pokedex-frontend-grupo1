import React from 'react'

const Create = () => {
  return (
    <div className="h-screen border-l-[2px] border-r-[2px] px-[20px] border-black bg-cover bg-[url('https://media4.giphy.com/media/lnPhJo0JTp57O/giphy.gif')] flex flex-col">
      
      <div className="flex justify-center">
        <h1>Adding new pokemon</h1>
      </div>

      <div className="flex">
        <p className="mr-[10px]">Name:</p>
        <input className="border-[1px] border-black h-[1.5rem]" type="text"/>
        <p>#ID ARRAY.LENGTH+1</p>
      </div>

      <div className="flex">
        <p className="mr-[10px]">Move 1:</p>
        <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
          <option value="Move1">Move1</option>
        </select>
        <p>#ID ARRAY.LENGTH+1</p>
      </div>

      <div className="flex">
        <p className="mr-[10px]">Move 2:</p>
        <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
          <option value="Move1">Move1</option>
        </select>
        <p>#ID ARRAY.LENGTH+1</p>
      </div>

      <div className="flex">
        <p className="mr-[10px]">Type 1:</p>
        <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
          <option value="Move1">Move1</option>
        </select>
        <p>#ID ARRAY.LENGTH+1</p>
      </div>

      <div className="flex">
        <p className="mr-[10px]">Type 2 (optional):</p>
        <select className="border-[1px] border-black h-[1.5rem]" name="" id="">
          <option value="Move1">Move1</option>
        </select>
        <p>#ID ARRAY.LENGTH+1</p>
      </div>

      <div className="flex">
        <p className="mr-[10px]">Type 2 (optional):</p>
        <form action="/action_page.php">
          <input type="file" id="myFile" name="filename"/>
        <input type="submit"/>
        </form>
        <p>#ID ARRAY.LENGTH+1</p>
      </div>
      
      

    </div>
  )
}

export default Create