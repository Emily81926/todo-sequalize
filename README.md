# todolist-sequalize 1.0
<br>

此專案可以讓使用者新增、瀏覽、修改和刪除待辦事項。

* 測試帳號：root@example.com 
* 測試密碼：12345678

<br>

## 專案功能 

1.  使用者可以註冊、登入及登出
2.  使用者可以使用facebook第三方登入
3.  使用者必須登入後才能使用專案相關功能
4.  使用者可以新增、修改、刪除及瀏覽待辦事項
5.  使用者可以勾選已完成的待辦事項

<br>

## 安裝流程 Install

<br>

1. 藉由 git clone 將專案下載至本地
```
git clone https://github.com/Emily81926/todo-sequelize.git
```
2. 進入專案資料夾
```
cd todo-sequelize
```
3. 安裝套件
```
npm install
```
4. 引入環境變數

<br>

* 將 .env.example 改為 .env

<br>

5. 建立資料庫

<br>

打開 MySQL workbench 並連線至本地資料庫，輸入下列指令建立資料庫 

```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```

<br>

6. 建立資料庫欄位
```
npx sequelize db:migrate
```

7. 建立種子資料
```
npx sequelize db:seed:all
```

8. 啟動網頁伺服器
```
npm run dev
```
9. 出現下列訊息，表示啟動成功，可點選連結開啟網頁

Server is running on http://localhost:3000


## 建置環境 Environment

<br>

* bcryptjs: ^2.4.3
* body-parser: ^1.19.0
* connect-flash: ^0.1.1
* express: ^4.17.1
* express-handlebars: ^5.3.3
* express-session: ^1.17.2
* method-override: ^3.0.0
* mysql2: ^2.3.0
* express-session: ^1.17.2 
* express-session: ^1.17.2
* sequelize: ^6.6.5
* sequelize-cli: ^6.2.0
* passport: ^0.4.1
* passport-local: ^1.0.0
* passport-facebook: ^3.0.0
