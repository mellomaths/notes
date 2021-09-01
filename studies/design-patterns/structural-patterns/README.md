# Structural Patterns

## Strategy

Definir uma família de algoritmos, encapsular cada um em uma classe, e torná-los intercambiáveis. Permite que o algoritmo varie independentemente dos clientes que o utilizam.

## Bridge

Desacoplar uma abstração de sua implementação para que as duas possam variar de forma independente.

## Composite

Compor (recursivamente) objetos em estruturas de árvore para representar hierarquias do tipo parte-todo (composição de classes). Permite aos clientes tratar objetos individuais e composições de objetos de maneira uniforme.

O padrão Composite é resultado da aplicação da composição recursiva, que permite associar a classe composta a uma abstração comum.

Como exemplo, temos um Diretório de Arquivos, que pode conter Arquivos ou Diretórios; se for Diretório que ele contenha, esse Diretório pode conter Arquivos ou Diretórios e assim por diante. Claramente, essa é uma estrutura em árvore gerada pela composição recursiva!

## Proxy

Proxy é um procurador em português, alguém que substitui ou faz o trabalho de outra pessoa, a pedido dessa pessoa. Dessa forma, o objetivo do padrão Proxy é fornecer um objeto substituto ou espaço reservado para outro objeto, que vai agir como se fosse o outro objeto em algumas situações preestabelecidas, de forma a controlar o acesso de objetos clientes.

Usa-se para isso um nível extra de indireção para, entre outras possibilidades, apoiar o seguinte:

- Acesso virtual controlado – Prover espaço reservado para controlar quando um objeto complexo ou que ocupa muitos recursos do sistema operacional, por exemplo, uma imagem muito grande, precisa ser instanciado e inicializado à Proxy Virtual.
- Acesso protegido – Prover diferentes direitos de acesso a um objeto comdados sensíveis, de modo que nem sempre um cliente terá acesso ao mesmo à Proxy Protetor.
- Acesso distribuído – Fornecer meios para acessar e referenciar objetos que executam em outros processos ou em outras máquinas à Proxy Remoto.

O importante é que, no diagrama abaixo, um objeto Client nunca vai enviar mensagens para um objeto RealSubject; um objeto Client só vai acessar o objeto  Proxy associado! Por exemplo, no caso de Proxy Remoto, o objeto Proxy iria encapsular todo código necessário para permitir o acesso remoto do objeto RealSubject; de maneira geral, não seria necessário para o objeto Client saber se o acesso do objeto RealSubject é por meio de sockets, RMI ou CORBA, por exemplo!

Finalmente, um Proxy fornece geralmente a mesma interface do RealSubject, com a mesmas responsabilidades.

## Decorator

Anexar responsabilidades adicionais a um objeto de forma dinâmica (em tempo de execução). Fornecer uma alternativa flexível à subclasse para ampliar a sua funcionalidade, uma vez que com a herança pura isso não é viável, porque a herança é estática e se aplica a uma classe.

Uma responsabilidade adicional pode ser fruto da adição de novo estado à subclasse do Decorator, como se pode ver no diagrama representativo do Padrão Decorator abaixo.

Graças à composição recursiva, pode-se dizer que é um empacotamento recursivo que permite adicionar, de forma incremental, novas responsabilidades ao componente a ser decorado, conforme especificado pelo cliente. Ou seja, é o Cliente que tem a responsabilidade de compor as configurações desejadas, envolvendo o objeto central recursivamente. 

De forma simbólica, imagine que um cliente embrulha um presente, coloca-o em uma caixa e embrulha a caixa. Suponha que eu queira, como as bonequinhas russas colocar essa caixa embrulhada em uma nova caixa e embrulhar essa nova caixa. Tudo isso é possível.

Pense que embrulhar e colocar em caixa sejam peles novas do meu objeto presente. O Padrão Decorator permite que você altere a pele de um objeto.

Isto está em oposição ao Padrão Strategy, que por sua vez permite que você altere as entranhas de um objeto, variando suas responsabilidades, no caso entendidas como algoritmos diferentes, enquanto a pele do objeto não se altera.

Enquanto um objeto Proxy fornece geralmente a mesma interface do RealSubject, com as mesmas responsabilidades, um objeto Decorator fornece uma interface enriquecida, com novas responsabilidades adicionadas em tempo de execução.

## Adapter

Converter a interface de uma classe em outra interface que os clientes esperam. Permitir que as classes funcionem juntas, o que, caso contrário, não poderia ocorrer devido à incompatibilidade das interfaces envolvidas.

Geralmente corresponde ao reúso de um componente legado em um novo sistema, resolvendo o problema das diferentes interfaces, o que significaria empacotar/encapsular essa classe (por meio de uma wrapper class) com uma nova interface compatível com o novo ambiente de aplicação.

## Diferenças entre Adapter, Proxy e Decorator

- O Padrão Adapter fornece uma interface diferente para a classe sendo adaptada.
- O Padrão Proxy fornece a mesma interface da classe que ele substitui.
- O Padrão Decorator fornece uma interface enriquecida para a sua classe alvo.
