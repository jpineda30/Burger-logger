drop database if exists burgers_db;
create database burgers_db;

Use burgers_db;

create table burgers(
    
    id int primary key auto_increment,
    burger_name char(120),
    devoured boolean default false
);