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
## API ที่มีทั้งหมด

## 1. เรียกดูข้อมูลทั้งหมด
```
http://localhost:3000/data
```
### ไม่ต้องส่งข้อมูล จะรีเทรนออกมากเป็น Array
## 2. สมัคร
```
http://localhost:3000/register
```
### ต้องส่งข้อมูลเป็น Json { "email":"Sakon4", "password":"flukgoza@gmail.com"} 
### ถ้าถูกต้องไม่ซ้ำกับใครจะได้ Output เป็น Register is correct ถ้าไม้ Register is incorrect

## 3. ล็อคอิน
```
http://localhost:3000/login
```
### ต้องส่งข้อมูลเป็น Json { "email":"Sakon4", "password":"flukgoza@gmail.com"} 
### ถ้าถูกต้องไม่ซ้ำกับใครจะได้ Output เป็น Login is correct ถ้าไม้ Login is incorrect



# วิธีติดตั้งเพื่อใช้งาน Frontend
### 1. ขั้นตอนแรก Dowload Dependencies
```
npm install 
```
### 2. เริ่มต้นการแสดงเว็บไซต์
```
npm run start
```
