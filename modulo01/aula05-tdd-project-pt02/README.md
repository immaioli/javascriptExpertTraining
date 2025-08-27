# Test Driven Development e Behaviour Driven Development - parte 02
Este projeto é parte do repositório **[immaioli/javascriptExpertTraining](https://github.com/immaioli/javascriptExpertTraining)** e implementa um sistema de **aluguel de carros** utilizando **TDD (Test Driven Development)** e **BDD (Behaviour Driven Development)**.

O objetivo é demonstrar como escrever testes guiados pelas histórias de usuário (Use Cases), aplicando **mocks, spies, stubs e fake timers**, garantindo que o código seja **determinístico, limpo e totalmente coberto por testes automatizados**.

---

## Casos de Uso Implementados
### 1. Implementar repositório base
- Criação de um **BaseRepository** genérico para acesso a dados;
- Abstração da camada de persistência usando arquivos JSON;
- Separação clara entre lógica de negócio e acesso a dados.

### 2. Desenvolver serviço de aluguel
- Implementação do **CarService** com lógica de negócio para aluguel de carros;
- Métodos para seleção aleatória de carros disponíveis;
- Cálculo de preços baseado em categorias e faixas etárias.

### 3. Testar camadas do sistema
- Testes unitários para todas as camadas do sistema;
- Uso de stubs e mocks para isolar dependências externas;
- Garantia de cobertura completa de testes.

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

---

## Estrutura do Projeto
- `src/service/carService.js` → regras de negócio do aluguel (escolha de carro, cálculo de preço).  
- `src/repository/baseRepository.js` → abstração de acesso a dados (JSON simulado).  
- `src/entities/` → entidades principais (`Customer`, `CarCategory`, `Car`).  
- `test/unitTests/` → testes unitários utilizando **Mocha, Chai e Sinon**.

---

## Como Executar
### Pré-requisitos
- Node.js instalado (**v24+**)  
- NPM configurado  

### Passos

1.  Clone este repositório: `git clone https://github.com/immaioli/javascriptExpertTraining.git`
2.  Navegue até a pasta do projeto: `cd javascriptExpertTraining/modulo01/aula05-tdd-project-pt02`
3.  Instale as dependências: `npm install`
4.  Execute os testes: `npm test`
5.  Verifique a cobertura: `npm test:cov`

---

## Referências de Estudo
- [Behavior Driven Development (BDD) and Functional Testing — Medium - JavaScript Scene](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2)  
- [Unit testing, TDD and BDD explained — CodeUtopia](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/#:~:text=When%20applied%20to%20automated%20testing)  
- [Mocha-Cucumber (npm)](https://www.npmjs.com/package/mocha-cucumber)  
- [BDD in JavaScript with Cucumber and Gherkin — SitePoint](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)  

---

## Autor
- **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli

## Licença
Este projeto está sob a Licença [MIT](https://opensource.org/license/MIT).
