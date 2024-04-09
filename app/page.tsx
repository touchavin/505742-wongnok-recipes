import Image from "next/image";
import Link from 'next/link';
import { Menu } from "./interface/menu";


async function getData() {
  const res = await fetch('http://localhost:3000/api/menus')
  // console.log(res.data)
  return res.json()
  }


async function Home() {
  const data:Menu[] = await getData()
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
      <td>รูป</td>
      <td>{data.map((val)=>(<li key={val.id}>{val.name}</li>))}</td>
      <th>{data.map((val)=>(<li key={val.id}>{val.description}</li>))}</th>
      <th>{data.map((val)=>(<li key={val.id}>{val.ingredients}</li>))}</th>
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

