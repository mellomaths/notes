-- Função de alta ordem filter
-- Filter é uma função de alta ordem pois recebe uma outra função como parâmetro

l1 = [10, 20, 30, 40]
l2 = filter(>25) l1
-- l2 = [30, 40]

maior_25 x = x > 25
l3 = filter maior_25 l1
-- l3 = [30, 40]

l4 = filter(\x -> x > 25) l1
-- l4 = [30, 40]

l5 = filter(\x -> mod x 4 == 0) l1
-- l5 = [20, 40]
-- pegando números divisiveis por 4

people = [("Matheus", 23), ("Cristiano", 13)]
is_adult person = (snd person) > 18
adult_people = filter is_adult people
-- [("Matheus", 23)]

main = print adult_people

