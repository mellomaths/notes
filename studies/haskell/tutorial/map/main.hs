-- Função de alta ordem map
-- Map é uma função de alta ordem pois recebe uma outra função como parâmetro
l1 = [10, 20, 30, 40]
l2 = map(*2) l1
-- l2 = [20, 40, 60, 80]
l3 = map(>25) l1
-- l3 = [False, False, True, True]

duplica x = x * 2
-- main = print (duplica 20) ==> 40
-- errado fazer duplica l2
l4 = map duplica l1
-- l4 = [20, 40, 60, 80]

-- como duplica só é utilizada uma vez podemos criar uma função anônima
l5 = map(\x -> x*2) l1
-- l5 = [20, 40, 60, 80]
-- com o \ (lambda) criamos uma função anônima

people = [("Sam", "Newman"), ("Chris", "Richarson"), ("Martin", "Fowler")]
give_fullname person = (fst person) ++ " " ++ (snd person)
people_fullname = map give_fullname people

main = print people_fullname