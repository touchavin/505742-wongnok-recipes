-- SQLite
-- สร้างตารางใหม่sql create table menus by interface menu  in sql
CREATE TABLE menus (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    img VARCHAR(255),
    ingredients VARCHAR(255),
    period VARCHAR(50),
    level VARCHAR(50)
);


-- =============================================
-- ลบตาราง
-- DROP TABLE menus;
-- DROP TABLE menu;