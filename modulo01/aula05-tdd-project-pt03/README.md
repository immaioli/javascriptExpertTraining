# Test Driven Development e Behaviour Driven Development
Este projeto é parte do repositório **[immaioli/javascriptExpertTraining](https://github.com/immaioli/javascriptExpertTraining)** e implementa um sistema de **aluguel de carros** utilizando **TDD (Test Driven Development)** e **BDD (Behaviour Driven Development)**.

O objetivo é demonstrar como escrever testes guiados pelas histórias de usuário (Use Cases), aplicando **mocks, spies, stubs e fake timers**, garantindo que o código seja **determinístico, limpo e totalmente coberto por testes automatizados**.

---

## Casos de Uso Implementados
### 1. Escolher um carro disponível
- Dado uma categoria de carro que contém diversos modelos;
- O sistema deve selecionar **aleatoriamente** um carro disponível para o cliente.

### 2. Calcular o preço final do aluguel
- Dado um cliente com base na idade e no número de dias;
- O preço final deve ser calculado com base no **preço da categoria** e no **imposto referente à faixa etária**;
- Exemplo:  
  - Categoria: R$ 37,6/dia  
  - Idade: 50 anos (taxa de 30%)  
  - Dias: 5  
  - Fórmula: `((37.6 * 1.3) * 5) = 244.40`  
  - Formatação final: `R$ 244,40`

### 3. Registrar uma transação
- Ao registrar um aluguel, deve exibir:
  - Dados do cliente
  - Carro escolhido
  - Valor final formatado em **Real (BRL)**
  - **Data de devolução** no formato brasileiro (ex: "10 de Novembro de 2020")

---

## Conceitos Chave
### TDD — Test Driven Development
O código é escrito **após os testes**, garantindo que cada funcionalidade nasceu orientada por um caso de teste.

### BDD — Behaviour Driven Development
Os testes são escritos baseados no **comportamento esperado pelo usuário**, seguindo histórias como as definidas no arquivo `story.md`.

### O que são Mocks e Stubs?
Mocks (ou stubs/spies) são objetos simulados que imitam dependências externas ou intermediárias.  
Eles permitem que os testes sejam focados na **regra de negócio**, sem depender de dados externos (banco de dados, APIs ou funções complexas).

---

## Dependências Utilizadas
Este projeto utiliza as seguintes dependências e ferramentas de teste:

- [**Mocha**](https://mochajs.org/) — `^10.2.0`
- [**Chai**](https://www.chaijs.com/) — `^4.3.7`
- [**Sinon.js**](https://sinonjs.org/) — `^15.2.0`

Dependências nativas do Node.js:  
- `fs/promises`  
- `path`  
- `Intl.NumberFormat`  

---

## Estrutura do Projeto
- `src/service/carService.js` → regras de negócio do aluguel (escolha de carro, cálculo de preço, transação).  
- `src/repository/baseRepository.js` → abstração de acesso a dados (JSON simulado).  
- `src/entities/` → entidades principais (`Customer`, `CarCategory`, `Transaction`, `Tax`).  
- `test/unit/` → testes unitários utilizando **Mocha, Chai e Sinon**.

---

## Como Executar
### Pré-requisitos
- Node.js instalado (**v24+**)  
- NPM configurado  

### Passos

1.  Clone este repositório: `git clone https://github.com/immaioli/javascriptExpertTraining.git`
2.  Navegue até a pasta do projeto: `cd javascriptExpertTraining/modulo01/aula05-tdd-project-pt03`
3.  Instale as dependências: `npm install`
4.  Execute os testes: `npm test`
5.  Verifique a cobertura: `npm test:cov`

---

## Referências de Estudo
- [Behavior Driven Development (BDD) and Functional Testing — Medium - JavaScript Scene](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2)  
- [Unit testing, TDD and BDD explained — CodeUtopia](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/#:~:text=When%20applied%20to%20automated%20testing)  
- [Mocha-Cucumber (npm)](https://www.npmjs.com/package/mocha-cucumber)  
- [BDD in JavaScript with Cucumber and Gherkin — SitePoint](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)  

---

## Autor
- **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli

## Licença
Este projeto está sob a Licença [MIT](https://opensource.org/license/MIT).
