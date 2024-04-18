This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
🚀 First, run the development server:

```bash
# install package ที่ยังไม่มี ใน node_modules ถ้า package ใน dependencies ไว้เเล้ว 
```bash
$ npm install
```
```bash
# Tailwind CSS
$ npm install -D tailwindcss
```
```bash
# database devpool.db
$ npm install sqlite3
```
```bash
start server
$ npm run dev
# or
$ yarn dev
# or
$ pnpm dev
# or
bun dev
```






Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


การใช้งาน

```bash
http://localhost:3000
```

หน้าหลัก
    -ชื่ออาหาร
    -วัตถุดิบ
    -ขั้นตอน
    -ระยะเวลา
    -ความยากง่าย
    -รายละเอียด 

```bash
http://localhost:3000/menu/{id} 
```



ต้องlogin เท่านั้น
```bash
http://localhost:3000/createmenu
```

หน้าสร้างเมนู 
    -ชื่ออาหาร กรอก แหนมผัดไข่555
    -วัตถุดิบ กรอก แหนม ไข่ไก่ พริก ต้มหอม น้ำปลา น้ำตาลทราย ซีอิ๊วขาว ซอสปรุงรส รสดี
    -ขั้นตอน กรอก เพื่อง่ายต่อการผัดและการรับประทานตั้งไฟค่อนข้างอ่อนใส่น้ำมันนิดหน่อย ใส่ไข่ไก่ ตามด้วยแหนม แล้วปรุงรสตามใจชอบ คลุกเคล้าให้เข้ากันใส่ต้นหอมกับพริกที่หั่นเป็นท่อนๆคลุกเคล้าให้เข้ากันจากนั้นตักใส่จาน
    แล้วรับประทานได้เลยทันที
    -ระยะเวลา เลือก
    -ความยากง่าย เลือก
    -รูปภาพ กรอก ลิงค์ฝากรูป https://hygraph.b-cdn.net/jK1Wb1iRhKO1k3lLNW5B

ตัวอย่างอาหาร    
```bash
https://blog.propertyhub.in.th/PH149--%E0%B8%A3%E0%B8%A7%E0%B8%A1-44-%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3-%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B8%97%E0%B8%B3%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7
```






```bash
http://localhost:3000/menu/{id} 
```
ดูเนื้อหาเมนู หน้าแก้ไขเมนู-ลบเมนู
    -ชื่ออาหาร
    -วัตถุดิบ
    -ขั้นตอน
    -ระยะเวลา
    -ความยากง่าย


```bash
http://localhost:3000/editmenu/{id}
```
 แก้ไข-อัพเดทข้อมูลเมนู 
    -ชื่ออาหาร
    -วัตถุดิบ
    -ขั้นตอน
    -ระยะเวลา
    -ความยากง่าย


ระบบsignin ด้วยgoogle
```bash
http://localhost:3000/api/auth/signin
```

ระบบsigout ด้วยgoogle

```bash
http://localhost:3000/api/auth/signout
```
วิดีโอใช้งาน
```bash
https://youtu.be/HlAvpHYEkqk
```
