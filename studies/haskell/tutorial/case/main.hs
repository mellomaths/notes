custom_length :: ([a] -> Int)
-- this function is declared for receiving array of any type and returning an Int
custom_length l = 
    case l of
        [] -> 0
        x : remainder -> 1 + (custom_length remainder)

-- will return the length of the list passed
-- works the same as "if then else" non-function programming languages
-- so custom_length will return 0 if l is empty
-- and if not empty, will sum up the length of the list one by one recursively

main = print (custom_length [1, 2, 3])
-- main = print (custom_length ["h", "e", "l", "l", "o"])
-- main = print (custom_length "hello")