# Conceitos Fundamentais sobre o Ciclo de Vida do JavaScript - Parte 01

Este repositório contém exemplos práticos e anotações sobre os conceitos fundamentais do ciclo de vida do JavaScript, baseados na Formação JavaScript Expert da EW Academy.

O objetivo é demonstrar os princípios básicos que governam o comportamento do JavaScript, incluindo tipos de dados, coerção, e herança, essenciais para um entendimento profundo da linguagem.

## Conceitos Chave

### Introdução ao capítulo
Uma visão geral dos fundamentos que regem o JavaScript, preparando o terreno para os tópicos avançados.

### Javascript Strict Mode
O modo estrito do JavaScript impõe regras mais rigorosas para escrever código, ajudando a prevenir erros comuns e melhorando a performance.

### Call Stack e Memory Heap
Entendendo como o JavaScript gerencia a memória: o Call Stack para execução de funções e o Memory Heap para alocação de objetos.

### Tipo de Valor vs Tipo de Referência (Immutability vs Mutability)
Diferença entre tipos primitivos (imutáveis, armazenados por valor) e objetos (mutáveis, armazenados por referência).

### Coerção de Tipos & Objects
Como o JavaScript converte automaticamente tipos de dados, incluindo conversões implícitas e explícitas em objetos.

### lifecycle: tostring valueOf e Symbol.toPrimitive
Os métodos especiais que controlam como objetos são convertidos para strings, números ou outros tipos primitivos.

### Prototype Chain - Herança em Javascript
O mecanismo de herança baseado em protótipos, permitindo que objetos herdem propriedades e métodos de outros objetos.

## Exemplo Prático

Neste projeto, há três demos que ilustram os conceitos discutidos:

- **demo01-ref-vs-valor**: Demonstra a diferença entre tipos de valor (primitivos) e tipos de referência (objetos), mostrando como a imutabilidade e mutabilidade afetam a atribuição e modificação de variáveis.

- **demo2-type-coercion**: Mostra exemplos práticos de coerção de tipos, incluindo conversões implícitas e explícitas, e como os métodos `toString`, `valueOf` e `Symbol.toPrimitive` influenciam o comportamento dos objetos durante conversões.

- **demo03-prototype-chaining**: Explica a cadeia de protótipos e herança em JavaScript, usando construtores de função e classes ES6 para demonstrar como propriedades e métodos são herdados através da cadeia de protótipos.

## Como Executar

### Pré-requisitos

- Node.js instalado (desenvolvido e testado com a versão 24.6.0)
- Recomenda-se usar um gerenciador de versões como o NVM

### Passos

1. Clone este repositório.
2. Navegue até a pasta `modulo02`.
3. Execute cada demo individualmente:
   - `node demo01-ref-vs-valor/index.js`
   - `node demo2-type-coercion/index.js`
   - `node demo03-prototype-chaining/index.js`

## Observações

Este projeto foca nos fundamentos do JavaScript sem dependências externas, permitindo uma compreensão clara dos conceitos básicos. É crucial dominar esses tópicos para avançar em desenvolvimento web e aplicações complexas.

## Referências

- [JavaScript Strict Mode - W3Schools](https://www.w3schools.com/js/js_strict.asp)
- [Strict Mode in JavaScript - GeeksforGeeks](https://www.geeksforgeeks.org/strict-mode-javascript/)
- [Understanding Call Stack and Heap Memory in JS](https://levelup.gitconnected.com/understanding-call-stack-and-heap-memory-in-js-e34bf8d3c3a4)
- [JavaScript Fundamentals: Call Stack and Memory Heap](https://medium.com/@allansendagi/javascript-fundamentals-call-stack-and-memory-heap-401eb8713204)
- [V8 Object Size](https://www.mattzeunert.com/2017/03/29/v8-object-size.html)
- [Primitive - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

## Autor

- **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli

## Licença

Este projeto está sob a Licença [MIT](https://opensource.org/license/MIT).
