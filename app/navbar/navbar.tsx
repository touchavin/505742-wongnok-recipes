'use client'
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Navbar(){
  const {data:session} = useSession();
  const [searchQuery, setSearchQuery] = useState<string>("");
  // console.log(session)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-1">
          {/* <input
            type="text"
            placeholder="ชื่ออาหาร"
            className="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          /> */}
          {/* <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" style={{ paddingTop: 5 }}>
            <Link href={`/search/${searchQuery}`}>ค้นหา</Link>
          </div> */}
        </div>

        <div>
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            หน้าแรก
          </Link>

          { !session && <Link href="/api/auth/signin" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            เข้าสู่ระบบ
          </Link>}
          { session && <Link href="/api/auth/signout" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            ออกจากระบบ
          </Link>}
          
          
        </div>
      </div>
    </nav>
    
    
  );
};