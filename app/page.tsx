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
    <table className="table-auto">
  <thead>
    <tr>
      <th>รูป</th>
      <th>ชื่ออาหาร</th>
      <th>วัตถุดิบ</th>
      <th>ขั้นตอน</th>
      <th>ระยะเวลา</th>
      <th>ความยากง่าย</th>
      <th>รายละเอียด</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th><figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure></th>
      <th>{data.map((val)=>(<li key={val.id}>{val.name}</li>))}</th>
      <th>{data.map((val)=>(<li key={val.id}>{val.ingredients}</li>))}</th>
      <th>{data.map((val)=>(<li key={val.id}>{val.description}</li>))}</th>
      <th>{data.map((val)=>(<li key={val.id}>{val.period}</li>))}</th>
      <th>{data.map((val)=>(<li key={val.id}>{val.level}</li>))}</th>
      <td>{data.map((val)=>(<li key={val.id}>{}<Link href={`/menu/${val.id}`}> ดูรายละเอียด</Link></li>))}</td>
    </tr>
    
  </tbody>
</table>


    
    
    
    </>
    
    
  
  )
}


export default Home

