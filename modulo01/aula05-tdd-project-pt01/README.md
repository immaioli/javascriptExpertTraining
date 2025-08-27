# Test Driven Development e Behaviour Driven Development - parte 01
Este projeto é parte do repositório **[immaioli/javascriptExpertTraining](https://github.com/immaioli/javascriptExpertTraining)** e implementa um sistema de **aluguel de carros** utilizando **TDD (Test Driven Development)** e **BDD (Behaviour Driven Development)**.

O objetivo é demonstrar como escrever testes guiados pelas histórias de usuário (Use Cases), aplicando **mocks, spies, stubs e fake timers**, garantindo que o código seja **determinístico, limpo e totalmente coberto por testes automatizados**.

---

## Casos de Uso Implementados
### 1. Criar banco de dados com Faker
- Utilização da biblioteca **Faker** para gerar dados fictícios de clientes, categorias de carros e carros;
- Criação de um banco de dados simulado para testes comportamentais;
- Geração de dados realistas que permitem cenários de teste variados e próximos do mundo real.

### 2. Definir entidades do domínio
- Implementação das entidades principais: `Customer`, `CarCategory`, e `Car`;
- Definição clara da estrutura de dados do sistema de aluguel;
- Preparação da base para implementação dos serviços de negócio.

---

## Conceitos Chave
### TDD — Test Driven Development
O código é escrito **após os testes**, garantindo que cada funcionalidade nasceu orientada por um caso de teste.

### BDD — Behaviour Driven Development
Os testes são escritos baseados no **comportamento esperado pelo usuário**, seguindo histórias como as definidas no arquivo `story.md`.

### Uso do Faker
Para simular cenários de teste, utilizamos o **Faker**, que gera dados falsos (nomes, e-mails, endereços, etc.). Isso nos permite:

- Criar bancos de dados fictícios para testes.
- Garantir maior **realismo** nos cenários.
- Reduzir a dependência de dados estáticos e repetitivos.

⚠️ **Observação Importante sobre o Faker**
Como muita gente sabe, o pacote **faker** foi descontinuado pois o
desenvolvedor original encerrou o projeto.
Para os nossos exemplos, você **não precisa migrar** para a nova versão,
pois a versão **5.1.0** que estamos usando aqui no módulo continua
funcionando normalmente.

Para instalar essa versão, rode:

``` bash
npm install faker@5.1.0
```

Caso queira utilizar a alternativa que surgiu após o encerramento,
existe o pacote **faker-js**, que possui a **mesma API**.
Acesse a página do pacote para verificar:
👉 [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)

---

## Dependências Utilizadas
Este projeto utiliza as seguintes dependências e ferramentas de teste:

- [**Mocha**](https://mochajs.org/) — `^10.2.0`
- [**Chai**](https://www.chaijs.com/) — `^4.3.7`
- [**Faker**](https://www.npmjs.com/package/faker) — `^5.1.0`

Dependências nativas do Node.js:  
- `fs/promises`  
- `path`  

---

## Estrutura do Projeto
- `src/entities/` → entidades principais (`Customer`, `CarCategory`, `Car`).  
- `database/` → arquivos JSON com dados gerados pelo Faker.  
- `seed/` → scripts para popular o banco de dados simulado.  
- `test/` → testes unitários utilizando **Mocha e Chai**.

---

## Como Executar
### Pré-requisitos
- Node.js instalado (**v24+**)  
- NPM configurado  

### Passos

1.  Clone este repositório: `git clone https://github.com/immaioli/javascriptExpertTraining.git`
2.  Navegue até a pasta do projeto: `cd javascriptExpertTraining/modulo01/aula05-tdd-project-pt01`
3.  Instale as dependências: `npm install`
4.  Execute os testes: `npm test`

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
