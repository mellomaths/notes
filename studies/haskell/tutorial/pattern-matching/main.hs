-- Implementing the same function of case example
custom_length [] = 0 -- if empty
custom_length (_ : remainder) = 1 + (custom_length remainder) 
-- if not, counting elements by each

-- you can also use pattern matching on cases


main = print (custom_length [1, 2, 3])
-- main = print (custom_length ["h", "e", "l", "l", "o"])
-- main = print (custom_length "hello")