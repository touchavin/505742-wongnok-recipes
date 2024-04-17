'use client'
import React from 'react'
import Link from 'next/link'
import { Menu } from '@/app/interface/menu'
import { useRouter } from 'next/navigation'

//  getData เมนู 
    async function getData(id:string) {
    // console.log(id)
    const res = await fetch(`http://localhost:3000/api/menus?id=${id}`)

    return res.json()
    }






export default async function menupage({ params }: { params: { id: string } }) {
    const id = params.id 
    const  router = useRouter();
    const data:Menu[] = await getData(id)
    console.log(data)





//  ปุ่มลบเมนู 
    async function handledelete() {
// ทำการลบโพสต์ที่มี id เป็น params.id ที่ต้องการลบ
  try {
      const response = await fetch(`http://localhost:3000/api/menus?id=${id}`, {
          method: "DELETE"
      });

      if (!response.ok) {
          throw new Error("Failed to delete item");
      }

      alert("Item deleted successfully!");
      // อัปเดตข้อมูลหลังจากลบสำเร็จ
      router.push("/"); // พากลับไปที่หน้าแรก
  } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item. Please try again.");
  }
};

  return (
    <>
     
<br></br>
    <Link className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/"> กลับหน้าหลัก</Link>



    <div className="card w-96 bg-base-100 shadow-xl">
      <br></br>
      <figure>{data.map((val)=>(<img src={val.img} key={val.id}></img>))}</figure>
     
      
      <div className="card-body">
        <h6>ชื่ออาหาร</h6>
        <h2 className="card-title">{data.map((val)=>(<li key={val.id}>{val.name}</li>))}</h2>

    <br></br>   
    <div className="flex items-center">
        <svg className="w-4 h-4 text-yellow-300 me-" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
        <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded-full">
        Rating ให้คะแนน
        </button>
        {/* <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a> */}
    </div>
    <br></br>
     


      <h6>ขั้นตอนการทำ</h6>
      <p>{data.map((val)=>(<li key={val.id}>{val.description}</li>))}</p>
      <br></br>
      <h6>เครื่องปรุง</h6>
      <p>{data.map((val)=>(<li key={val.id}>{val.ingredients}</li>))}</p>
      <br></br>
      <h6>ระยะเวลา</h6>
      <p>{data.map((val)=>(<li key={val.id}>{val.period}</li>))}</p>
      <br></br>
      <h6>ความยากง่าย</h6>
      <p>{data.map((val)=>(<li key={val.id}>{val.level}</li>))}</p>



        <br></br>
        
        <button onClick={() => router.push(`/editmenu/${data[0].id}`)} className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        แก้ไขเมนู
        </button>
        
        <button onClick={handledelete} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        ลบเมนู
        </button>
        
    </div>
    </div>

  


    </>
    

  )
}




