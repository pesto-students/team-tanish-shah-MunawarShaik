create database warehouse;
use warehouse;

create table CITIES (
CId INTEGER Not null primary key auto_increment, 
CITY CHAR(20),
STATE CHAR(20)
);

create table WAREHOUSES (
WID INTEGER not null primary key auto_increment,
WNAME CHAR(30), 
LOCATION CHAR(20), 
EXTRA json,
CId Integer not null, 
foreign key(CId) references Cities(CId)
);

create table STORES (
SID INTEGER not null primary key auto_increment, 
STORE_NAME CHAR(20), 
LOCATION_CITY CHAR(20), 
WID INTEGER not null, 
foreign key(WID) references warehouses(WID)
);

create table CUSTOMER (
CNO INTEGER auto_increment not null primary key,
CNAME CHAR(50), 
ADDR VARCHAR(50), 
CU_CITY CHAR(20)
);

create table ORDERS (
ONO INT auto_increment not null primary key,
ODATE DATE,
CNO integer not null,
foreign key(CNO) references CUSTOMER(CNO)
);
create table ITEMS (
ITEMNO INTEGER not null primary key auto_increment, 
DESCRIPTION TEXT, 
WEIGHT DECIMAL(6,2), 
COST DECIMAL(6,2)
);

create table ItemOrders(
IOId Integer not null primary key auto_increment,
itemno Integer not null,
ono integer not null,
ordered_quantity integer not null,
foreign key(itemno) references items(ITEMNO),
foreign key(ono) references orders(ONO)
);

create table StoreItem(
SIID integer not null primary key auto_increment,
SID integer not null,
Itemno integer not null,
foreign key(SID) references stores(SID),
foreign key(Itemno) references ITEMS(Itemno)
);


insert into cities (city, state) values ("Pune", "Maharashtra");
insert into cities (city, state) values ( "Mumbai", "Maharashtra");
insert into cities (city, state) values ("Delhi", "Delhi");
insert into cities (city, state) values ( "Bangalore", "Karnataka");
insert into cities (city, state) values ( "Chennai", "Tamil Nadu");

insert into warehouses (wname, location, extra, cid) values ( "Warehouse A", "Pune", '{"capacity": 1000}', 1);
insert into warehouses (wname, location, extra, cid) values ( "Warehouse B", "Mumbai", '{"capacity": 800}', (select cid from cities where city ='Mumbai') );
insert into warehouses (wname, location, extra, cid) values ( "Warehouse C", "Delhi", '{"capacity": 1200}', (select cid from cities where city ='Delhi') );
insert into warehouses (wname, location, extra, cid) values ( "Warehouse D", "Bangalore", '{"capacity": 900}', (select cid from cities where city ='Bangalore') );

insert into stores (store_name, location_city, wid) values ( "Store 1", "Pune", (select wid from warehouses where location='Pune') );
insert into stores (store_name, location_city, wid) values ( "Store 2", "Mumbai", (select wid from warehouses where location='Mumbai') );
insert into stores (store_name, location_city, wid) values ( "Store 3", "Pune", (select wid from warehouses where location='Pune') );
insert into stores (store_name, location_city, wid) values ( "Store 4", "Delhi", (select wid from warehouses where location='Delhi') );

Alter table customer AUTO_INCREMENT=101;
Alter table items AUTO_INCREMENT=101;

insert into customer (cname, addr, cu_city) values ("Mr. Patil", "123 Main st.", "Pune");
insert into customer (cname, addr, cu_city) values ("Mr. Sharma", "456 Central Ave", "Mumbai");
insert into customer (cname, addr, cu_city) values ("Mr. Singh", "789 1st Street", "Delhi");
insert into customer (cname, addr, cu_city) values ("Ms. Gupta", "101 Second Road", "Bangalore");
insert into customer (cname, addr, cu_city) values ("Mr. Kumar", "456 Third Avenue", "Chennai");

insert into orders (odate, cno) values (date '2023-06-15', 101);
insert into orders (odate, cno) values (date '2023-06-16', 102);
insert into orders (odate, cno) values (date '2023-06-17', 103);
insert into orders (odate, cno) values (date '2023-06-18', 104);
insert into orders (odate, cno) values (date '2023-06-19', 105);

insert into items (description, weight, cost) values ("Laptop", 2.5, 1200.5);
insert into items (description, weight, cost) values ("Smartphone", 0.5, 800.00);
insert into items (description, weight, cost) values ("TV", 15, 1000.00);
insert into items (description, weight, cost) values ("Microwave Oven", 10, 500.00);
insert into items (description, weight, cost) values ("Refrigerator", 25, 1500.00);

insert into itemorders (itemno, ono, ordered_quantity) values (101, 1, 4);
insert into itemorders (itemno, ono, ordered_quantity) values (102, 2, 3);
insert into itemorders (itemno, ono, ordered_quantity) values (103, 3, 2);
insert into itemorders (itemno, ono, ordered_quantity) values (104, 4, 5);
insert into itemorders (itemno, ono, ordered_quantity) values (105, 5, 1);