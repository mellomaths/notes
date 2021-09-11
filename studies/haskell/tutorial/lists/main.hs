-- Can store an unlimited amount of data
-- Are the main type of data structure on functional languages
-- Are immutable

l1 = [10, 20, 30, 40]

l2 = 0 : l1
-- l2 = [0, 10, 20, 30, 40]

l3 = 1 : 2 : 3 : []
-- l3 = [1, 2, 3]

-- head l1
-- 10

-- tail l1
-- [20, 30, 40]

-- With only using the operators ":", "head" and "tail", you can work with recursion and use lists

main = print l3