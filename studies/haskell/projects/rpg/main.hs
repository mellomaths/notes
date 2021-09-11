type Character = (Int, Int, Status)
type Status = (Int, Int, Int)

height :: Character -> Int
height (h, _, _) = h

age :: Character -> Int
age (_, a, _) = a

agility :: Character -> Int
agility (_, _, (a, _, _)) = a

power :: Character -> Int
power (_, _, (_, p, _)) = p

sourcery :: Character -> Int
sourcery (_, _, (_, _, s)) = s

giant = (8322, 156, (14, 99, 0))
warrior = (187, 28, (70, 78, 0))
mage = (156, 54, (44, 24, 78))
priest = (210, 87, (25, 13, 95))
gnome = (80, 92, (92, 40, 30))

main = print (age giant)