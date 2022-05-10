# วิธีติดตั้งเพื่อใช้งาน Backend
### 1. ขั้นตอนแรก Dowload Dependencies
```
npm install 
```
### 2. รันคำสั่ง เพื่อเปิดการทำงาน RESTAPI
```

npm run start
```

# การทดสอบแต่เทส api ด้วย postman
### API ที่มีทั้งหมด
```
http://localhost:3000/data
```
ไม่ต้องส่งข้อมูล
จะรีเทรนออกมากเป็น Array
```
http://localhost:3000/register
```
ต้องส่งข้อมูลเป็น Json 
```
{
  "email":"Sakon4", 
  "password":"flukgoza@gmail.com"
}
```
```
http://localhost:3000/login
```
