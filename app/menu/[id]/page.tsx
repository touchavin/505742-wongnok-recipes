import React from 'react'
import Link from 'next/link'
import { Menu } from '@/app/interface/menu'


async function getData(id:string) {
    // console.log(id)
    const res = await fetch(`http://localhost:3000/api/menus?id=${id}`)

    return res.json()
    }


export default async function menupage({ params }: { params: { id: string } }) {
    const id = params.id 
    const data:Menu[] = await getData(id)
  return (
    <>
     
<br></br>
    <Link className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/"> กลับหน้าหลัก</Link>



    <div className="card w-96 bg-base-100 shadow-xl">
      
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
      
        <h2 className="card-title">{data.map((val)=>(<li key={val.id}>{val.name}</li>))}</h2>
        <p>{data.map((val)=>(<li key={val.id}>{val.description}</li>))}</p>
        <p>{data.map((val)=>(<li key={val.id}>{val.ingredients}</li>))}</p>
        <p>{data.map((val)=>(<li key={val.id}>{val.period}</li>))}</p>
        <p>{data.map((val)=>(<li key={val.id}>{val.level}</li>))}</p>
        
        
        <br></br>
        
        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        แก้ไขเมนู
        </button>

        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        ลบเมนู
        </button>
        
    </div>
    </div>
    </>
    

  )
}




