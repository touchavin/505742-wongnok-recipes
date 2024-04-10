'use client'
import Image from "next/image";
import Link from 'next/link';
import { Menu } from "./interface/menu";
import { useEffect, useState } from "react";


async function getData() {
  const res = await fetch('http://localhost:3000/api/menus')
  // console.log(res.data)
  return res.json()
  }


function Home() {
    const [data, setData] = useState<Menu[]>([]); // Initialize state for items
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };
    fetchData();
  }, []);
  console.log(data)

  return (
    <>
   
    <br></br>
    <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/createmenu">สร้างเมนู</Link>
    <br></br>

    {/* <ul>
      <br></br>
      {data.map((val)=>(<li key={val.id}>{val.name} {val.description} <Link href={`/menu/${val.id}`}>ดูรายละเอียด</Link></li>))}
    </ul>
     */}



<br></br>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th className="border px-4 py-2">รูป</th>
      <th className="border px-4 py-2">ชื่ออาหาร</th>
      <th className="border px-4 py-2">วัตถุดิบ</th>
      <th className="border px-4 py-2">ขั้นตอน</th>
      <th className="border px-4 py-2">ระยะเวลา</th>
      <th className="border px-4 py-2">ความยากง่าย</th>
      <th className="border px-4 py-2">รายละเอียด</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">{data.map((val)=>(<img src={val.img} key={val.id}></img>))}</th>
      <th className="border px-4 py-2">{data.map((val)=>(<li key={val.id}>{val.name}</li>))}</th>
      <th className="border px-4 py-2">{data.map((val)=>(<li key={val.id}>{val.ingredients}</li>))}</th>
      <th className="border px-4 py-2">{data.map((val)=>(<li key={val.id}>{val.description}</li>))}</th>
      <th className="border px-4 py-2">{data.map((val)=>(<li key={val.id}>{val.period}</li>))}</th>
      <th className="border px-4 py-2">{data.map((val)=>(<li key={val.id}>{val.level}</li>))}</th>
      <td className="border px-4 py-2">{data.map((val)=>(<li key={val.id}>{}<Link href={`/menu/${val.id}`}> ดูรายละเอียด</Link></li>))}</td>
    </tr>
    
  </tbody>
</table>
</div>
    
    
    </>
    
    
  
  )
}


export default Home

