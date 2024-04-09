//  tsrfc
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu } from '@/app/interface/menu'



  const createmenu =() => {
  const  router = useRouter();
  const [fromdata, setfromdata] = useState<Menu>(
    {
      id: 0,
      name: "",
      description: "",
      img: "",
      ingredients: "",
      period: "5 - 10 mins",
      level: "Easy",
    }
  )

  function handlechange(event: any) {
    const { name, value } = event.target
    setfromdata({ ...fromdata, [name]: value })

    // console.log(name, value)


  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ทำสิ่งที่คุณต้องการกับข้อมูลใน formData
    try {
      const response = await fetch("http://localhost:3000/api/menus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(fromdata)
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      // console.log("Submitted:", formData);

      // ล้างข้อมูลฟอร์มหลังจากส่งข้อมูลสำเร็จ// เคลียร์ฟอร์มหลังจาก submit
      // setFormData({ id: 0, name: "", difficulty: "", period: "", description: "", step: "", img: "" })
      alert("Item added successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx6 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <br></br>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              ชื่ออาหาร
            </label>
            <input name='name' onChange={handlechange} value={fromdata.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="ชื่ออาหาร" required></input>

            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              วัตถุดิบ
            </label>
            <input name='ingredients' onChange={handlechange} value={fromdata.ingredients} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="วัตถุดิบ" required></input>

            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              ขั้นตอน
            </label>
            <input name='description' onChange={handlechange} value={fromdata.description} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="ขั้นตอน" required></input>

            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              ระยะเวลา
            </label>
            <select name='period' onChange={handlechange} value={fromdata.period} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" >
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
            <input name='img' onChange={handlechange} value={fromdata.img} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="รูปภาพ" required></input>
            <br></br>

            <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">สร้าง</button>

            <br></br>
            <br></br>
            
            <Link className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/"> กลับหน้าหลัก</Link><br></br>
          </div>
        </div>
      </form>


    </>


  )
}

export default createmenu