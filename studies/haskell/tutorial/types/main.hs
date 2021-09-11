type Person = (String, Int, String)

name :: Person -> String
name (x, _, _) = x

age :: Person -> Int
age (_, y, _) = y

sex :: Person -> String
sex (_, _, z) = z

main = print (name ("Jonas", 25, "M"))