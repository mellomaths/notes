-- Parameterized types
custom_length :: ([a] -> Int)
-- this function is declared for receiving array of any type and returning an Int

-- so you can use custom_length "hello", custom_length [1, 2, 3], and so on