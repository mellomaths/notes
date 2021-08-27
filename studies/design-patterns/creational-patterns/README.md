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
