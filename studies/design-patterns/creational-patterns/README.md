# Creative Patterns

## Factory Method

Definir uma interface para criar um objeto, mas deixando que as subclasses decidam qual classe deve ser instanciada. Permite que uma classe adie instanciação para subclasses.

## Static Factory Method

> O padrão de projeto Static Factory Method é um padrão do tipo Padrão de Criação, mas não faz parte do GoF.

Documentar ou simplificar a criação de um objeto substituindo o uso do construtor por um método estático explícito quando existe algum problema no uso do construtor por meio de new.

### Problemas com o construtor

1. Não expressam intenção da criação de objeto da classe; quando usamos um construtor diretamente no código, perdemos a semântica do significado dos parâmetros e perdemos controle sobre a inicialização do objeto.
2. Impossível ter dois construtores com mesma assinatura.
3. new X( ) à Volta sempre um objeto novo da classe X: custo computacional da criação, quando nem sempre isso seria necessário!
4. Não consigo voltar o mesmo objeto outra vez, como com o Singleton.
5. Não consigo voltar um objeto da subclasse.
6. Pode implicar em acoplamento concreto.

## Singleton

Certificar-se de que uma classe tenha uma e apenas uma instância e fornecer um ponto de acesso global a essa instância.

Às vezes, é importante ter apenas uma instância para uma classe. Por exemplo, em um sistema, deve haver apenas um gerenciador de janelas ou apenas um sistema de arquivos ou apenas um spooler de impressão. Normalmente, o Padrão Singleton é usado para gerenciar recursos internos ou externos de forma centralizada e fornecem um ponto de acesso global para sua instância única.

O Padrão Singleton é um dos padrões de design mais simples:

- Envolve apenas uma classe, que é responsável por instanciar-se, para garantir que ela não crie mais do que uma instância
- Ao mesmo tempo, fornece um ponto de acesso global a essa instância.
- Neste caso, a mesma instância pode ser usada em todos os lugares, sendo impossível invocar diretamente o construtor do dado objeto Singleton.

Pode-se garantir uma única instância com a maioria das aplicações corriqueiras de Singleton. Contudo, a literatura recomenda usar algoritmos mais complicados e sofisticados nas seguintes 3 situações, para se garantir instância única do objeto Singleton:

1. Em aplicativos multi-threaded
2. Em casos em que a classe Singleton implementa a interface java.io.Serializable
3. Em casos em que as classes carregadas por diferentes carregadores de classe (ClassLoaders) acessarem um objeto Singleton.

Contudo, uma implementação simples de Singleton usando enum do Java é suficiente para garantir sempre instância única, mesmo nas 3 situações acima!
