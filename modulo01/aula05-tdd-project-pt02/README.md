# Resumo do Projeto: aula05-tdd-project-pt02

O projeto **`aula05-tdd-project-pt02`** é uma aplicação que simula um sistema de aluguel de carros.  
Ele foi desenvolvido utilizando a metodologia de **Test-Driven Development (TDD)** e estruturado em múltiplas camadas (Layers Pattern), aplicando conceitos de **repositório genérico**, testes automatizados e boas práticas de design.

---

## Parte 02 - Banco de Dados com Faker

Nesta parte, o banco de dados foi criado com auxílio da biblioteca **Faker**, permitindo a geração de dados fictícios para simulação de cenários reais em testes.  
A camada de **BaseRepository** lê e manipula os dados a partir de arquivos JSON, mantendo a separação clara entre persistência e lógica de negócio.

---

## Estrutura do Projeto

- **Entidades**
  - **Car**: Representa um carro com atributos como ID, nome, ano de lançamento, disponibilidade e combustível.
  - **CarCategory**: Representa uma categoria de carros, contendo lista de IDs e preço associado.
  - **Customer**: Representa um cliente com atributos como ID, nome e idade.

- **Serviços**
  - **CarService**: Contém a lógica de negócios do aluguel, como seleção de carros disponíveis e cálculo do preço final.

- **Repositórios**
  - **BaseRepository**: Fornece métodos genéricos para leitura e busca em arquivos JSON.

- **Testes**
  - Desenvolvidos com **Mocha**, **Chai** e **Sinon**, garantindo que cada camada funcione conforme o esperado.
  - Aplicação de TDD e BDD para estruturar os testes de forma orientada a comportamento e evitar os erros mais comuns ao iniciar com TDD.

---

## Casos de Uso

1. **Aluguel de Carro**:  
   Usuário verifica a disponibilidade em uma categoria, e o sistema escolhe um carro aleatoriamente.

2. **Cálculo de Preço**:  
   O sistema calcula o preço final do aluguel considerando a idade do cliente e a quantidade de dias.

3. **Registro de Transação**:  
   Registro da operação de aluguel, incluindo dados do cliente, carro e valor final.

---

## Recursos Estudados

Durante o desenvolvimento foram utilizados conceitos e referências como:

- [Behavior-Driven Development (BDD) and Functional Testing](https://medium.com/javascript-scene/behavior-driven-development-bdd-and-functional-testing-62084ad7f1f2)  
- [Unit Testing, TDD and BDD](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/#:~:text=When%20applied%20to%20automated%20testing,implementation%20detail%20in%20unit%20tests.&text=You%20should%20not%20test%20implementation%2C%20but%20instead%20behavior)  
- [Mocha-Cucumber](https://www.npmjs.com/package/mocha-cucumber)  
- [BDD com JavaScript, Cucumber e Gherkin](https://www.sitepoint.com/bdd-javascript-cucumber-gherkin/)

---

## Ferramentas Utilizadas

- **Node.js**
- **Mocha** (test runner)
- **Chai** (assertions)
- **Sinon** (stubs, spies, mocks)
- **Faker** (geração de dados falsos)

---

## Autor

- **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli

---

## Licença

Este projeto está sob a Licença [MIT](https://opensource.org/license/MIT).
