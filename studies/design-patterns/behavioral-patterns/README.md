# Behavioral Patterns

## Template Method

Definir o esqueleto de um algoritmo em uma operação, adiando algumas etapas para subclasses. Permite que as subclasses redefinam certos passos de um algoritmo sem alterar a estrutura do algoritmo.

## State

Permitir que um objeto altere seu comportamento quando seu estado interno é alterado. O objeto parecerá mudar sua classe.

No padrão State, criamos objetos que representam vários estados e um objeto de contexto cujo comportamento varia conforme seu objeto de estado muda.

## Observer

Definir uma dependência de um para muitos entre os objetos de modo que, quando um objeto mudar de estado, todos os seus dependentes serão notificados e atualizados automaticamente.

## Null Object

> O padrão de projeto Null Object pode ser enquadrado como sendo um padrão do tipo Padrão Comportamental, mas que não se encontra relatado no GoF.

A intenção de um objeto nulo é encapsular a ausência de um objeto, fornecendo uma alternativa substituível que oferece comportamento padrão adequado “não fazer nada”.

Nesse padrão, um objeto nulo substitui a verificação de instância de objeto null num cliente. Em vez de verificar um valor nulo, o objeto nulo reflete uma relação de não fazer nada. Esse objeto nulo também pode ser usado para fornecer o comportamento padrão no caso de dados não disponíveis.

Na prática, criamos uma classe abstrata especificando várias operações a serem feitas, classes concretas que estendem esta classe e uma classe de objeto nulo fornecendo implementação “não fazer nada” desta classe e será usada sem problemas onde precisamos verificar o valor nulo.

## Chain of Responsibility

Evita acoplar o remetente de uma solicitação ao seu receptor ao permitir que mais de um objeto tenha a chance de tratar a solicitação também.

Os objetos receptores tornam-se partes de uma cadeia ou “pipeline”de objetos receptores e a solicitação é enviada de um objeto receptor a outro ao longo da cadeia, até que um (ou mais, talvez todos) dos objetos receptores manipule a solicitação.
