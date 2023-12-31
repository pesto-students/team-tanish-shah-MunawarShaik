-- 1. Find the item that has the minimum weight.
SELECT min(weight) FROM items;

-- 2. Find the different warehouses in "Pune".
select * from warehouse.warehouses where location="Pune";

-- 3. Find the details of items ordered by a customer named "Mr. Patil".
SELECT c.CNAME AS CustomerName, i.DESCRIPTION AS ItemDescription, o.ODATE AS OrderDate
FROM CUSTOMER c
JOIN ORDERS o ON c.CNO = o.CNO
JOIN ITEMORDERS io ON o.ONO = io.ONO
JOIN ITEMS i ON io.ITEMNO = i.ITEMNO
WHERE c.CNAME LIKE '%Patil%';

-- 4. Find a Warehouse that has the maximum number of stores.
SELECT w.wid, w.wName, w.location, COUNT(s.sid) AS SCount FROM 
warehouses w 
LEFT JOIN stores s ON w.wid = s.wid
GROUP BY w.wid, w.wName, w.location
ORDER BY SCount > 1 DESC
LIMIT 1;

-- 5. Find an item that is ordered for a minimum number of times.
select * from items where itemno = (select itemno from itemorders where ordered_quantity = (select min(ordered_quantity) from itemorders ) ) ;

-- 6.Find the detailed orders given by each customer.
SELECT C.CNO, C.CNAME, O.ONO, O.ODATE
FROM CUSTOMER C
LEFT JOIN ORDERS O ON C.CNO = O.CNO
ORDER BY C.CNO, O.ONO;