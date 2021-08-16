# Design Patterns

## Referência

> Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John. Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994.

## Definição

Padrão de Projeto é uma solução para um problema comum em um contexto [GoF]. Padrões de Projeto são usados para capturar as características mais evidentes de uma solução a um dado problema que ocorra repetidamente em muitos diferentes contextos.

> “Padrões de Projeto são maneiras de descrever melhores práticas e bons projetos e de capturar experiência de uma forma que seja possível para outros reusar essa experiência."

Um padrão não descreve soluções novas, mas soluções padrões, consolidadas, implementadas e testadas com sucesso de forma recorrente em diferentes contextos.

O livro do GoF e a maioria dos livros sobre padrões de projeto separam os padrões em 3 tipos:

- Padrões de criação
- Padrões estruturais
- Padrões comportamentais.

## Padrões de Criação

O objetivo com os padrões de criação é abstrair o processo de criação ou instanciação de objetos em situações em que a forma básica de criação de objetos, por meio do `new`, pode resultar em problemas de projeto ou adicionar complexidade indesejada ao código. Os padrões de criação resolvem esses problemas controlando a criação de objetos de diferentes maneiras.

1. Factory Pattern
2. Singleton Pattern
3. Builder Pattern
4. Abstract Factory
5. Prototype Pattern

Existe também o Static Factory Method, que não foi apresentado pelo GoF.

## Padrões Estruturais

Padrões estruturais fornecem maneiras diferentes de criar uma estrutura de classe, aliviando o desenvolvedor dessa preocupação. Por exemplo, mecanismos de herança, composição e composição recursiva ajudam a criar um objeto grande a partir de pequenos objetos.

1. Bridge Pattern
2. Composite Pattern
3. Proxy Pattern
4. Decorator Pattern
5. Adapter Pattern
6. Flyweight Pattern
7. Facade Pattern

## Padrões Comportamentais

Padrões comportamentais fornecem solução para a melhor interação entre objetos, com baixo acoplamento e flexibilidade para estender o código sempre que necessário.

1. Strategy Pattern
2. Template Method Pattern
3. State Pattern
4. Observer Pattern
5. Chain of Responsibility Pattern
6. Command Pattern
7. Iterator Pattern
8. Mediator Pattern
9. Visitor Pattern
10. Interpreter Pattern
11. Memento Pattern

Existe o padrão Null Object, que não foi apresentado pelo GoF.

## Padrão de Modularização

A modularidade é cada vez mais um requisito não funcional importante nas aplicações. Porém, modularidade não é apenas dividir o software em módulos que formam um único bloco, mas permitir que novos módulos possam ser criados e incorporados no software sem a necessidade de sua modificação. 

Uma forma de evitar que a própria classe consumidora seja responsável por criar suas dependências ou serviços, é criá-las de forma externa e inseri-las no objeto no momento ou logo depois de sua criação. 

O padrão Dependency Injection é um padrão que desacopla a classe consumidora de suas dependências ou serviços, tornando-a uma classe reutilizável em diferentes contextos. A classe ou módulo consumidor é reutilizável com o Dependency Injection porque ele não precisará ser mudado se, num dado contexto, uma dependência (ou serviço) precisa ser trocada por outra diferente.
