//  tsrfc
'use client'
import React, { useState } from 'react' 
import Link from 'next/link'

 type Props = {}
 
 export default function createmenu({}: Props) {
  const [fromdata, setfromdata] = useState ( 
    {
    id: 0,
    name: "",
    description: "",
    img: "",
    ingredients: "",
    period: "5 - 10 mins",
    level:"Easy",
    }
  )

  function handlechange(event:any){
  const {name,value} = event.target
  setfromdata({...fromdata,[name]:value})
  
  // console.log(name, value)


  }


   return (
    <>

  <div className="flex flex-wrap -mx6 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <br></br>
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        ชื่ออาหาร
    </label>
    <input  name='name' onChange={handlechange} value={fromdata.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="ชื่ออาหาร"></input>

    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        วัตถุดิบ
    </label>
    <input name='ingredients' onChange={handlechange} value={fromdata.ingredients} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="วัตถุดิบ"></input>
    
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        ขั้นตอน
    </label>
    <input name='description' onChange={handlechange} value={fromdata.description} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="ขั้นตอน"></input>
    
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        ระยะเวลา
    </label>
    <select name='period' onChange={handlechange} value={fromdata.period} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="">
          <option value="5 - 10 mins">5 - 10 mins</option>
          <option value="11 - 30 mins">11 - 30 mins</option>
          <option value="31 - 60 mins">31 - 60 mins</option>
          <option value="60+ mins">60+ mins</option>

    </select>
    
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        ความยากง่าย
    </label>

    <select name='level' onChange={handlechange} value={fromdata.level} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
    </select>
    <br></br>
    <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs block appearance-none bg-gray-200 border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-gray-700 text-xs font-bold mb-2" />
     <br></br>
     
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">สร้าง</button>
    <br></br>
    <br></br>
    <Link className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/"> กลับหน้าหลัก</Link><br>
    </br>
    </div>
    </div>
    
    
   
    </>

     
   )
 }