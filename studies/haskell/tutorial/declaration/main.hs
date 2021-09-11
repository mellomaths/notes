l1 :: [Int] -- array of integers
l1 = [1, 2, 3, 4, 5]

v1 :: [Char] -- string as an array of characters
-- can use also
-- v1 :: String
v1 = foldr (++) "" (map show l1) 

-- example using map
-- map :: (a -> b) -> [a] -> [b]
-- receives a function that transform the type 'a' to type 'b'
-- and a list of elements of the type 'a'
-- returns a list of elements of the type 'b'

main = print v1