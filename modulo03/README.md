# Conceitos Fundamentais sobre o Ciclo de Vida do JavaScript - Parte 02

Este repositório contém exemplos práticos e testes automatizados sobre os conceitos fundamentais do ciclo de vida do JavaScript, incluindo internacionalização, ES Modules, entrada e persistência de dados via terminal interativo, além de validação e formatação robusta desses dados. Os exemplos são inspirados na Formação JavaScript Expert da EW Academy.

O objetivo é demonstrar os princípios que governam o comportamento do JavaScript e CLI, com foco especial em aplicações reais como validação automática, formatação multilíngue, testes automatizados e persistência de dados de forma simples e confiável.

## Conceitos Chave

### Introdução ao capítulo
Uma visão geral dos fundamentos que regem o JavaScript e aplicações CLI, preparando o terreno para os tópicos avançados, como internacionalização de interfaces e manipulação de dados automatizada.

### Terminal Interativo
Fluxo de interação usando o módulo `readline` do Node.js, permitindo a inserção de dados de forma dinâmica pelo terminal, uso de comandos especiais para saída e exibição de registros em tabelas coloridas e estilizadas, facilitando a experiência do usuário.

### Internacionalização (Intl API)
Utilização das APIs nativas de internacionalização para formatar listas, datas e números conforme o idioma/localidade selecionado, tornando o sistema multilíngue e aderente às normas globais.

### ES Modules
Estruturação e modularização do código utilizando ES Modules (`import`/`export`), promovendo organização, reutilização e melhor manutenção dos componentes do projeto.

### Validação e Formatação de Dados
Classe `Person` e métodos responsáveis por garantir formato, conteúdo e segurança dos dados inseridos, com conversão automática de texto para instância e formatação parametrizada por idioma. Cobertura de erros frequentes e entrada malformada.

### Testes Automatizados
Testes com Mocha, Chai e Sinon para garantir o funcionamento correto e seguro dos principais módulos e fluxos do projeto, incluindo validação, internacionalização, persistência e atualização de tabelas interativas.

### Persistência Simples
Salvamento dos dados em arquivo `.json`, simulando um banco de dados leve e eficiente, utilizando APIs assíncronas do Node.js para leitura e escrita.

## Exemplo Prático

Neste projeto, você encontrará:

- Entrada de dados via terminal e persistência automática dos registros
- Formatação dinâmica dos dados em tabelas interativas, adaptadas ao idioma
- Validação de entradas, prevenção de erros e formatação correta dos campos
- Testes automatizados cobrindo cenários diversos, incluindo internacionalização
- Uso de ES Modules para práticas modernas de desenvolvimento

## Como Executar

### Pré-requisitos

- Node.js instalado (recomenda-se usar a versão 14.3 ou superior)
- Gerenciador de versões como NVM é recomendado

### Demo 01: This, Apply, Call e Arguments

Este demo demonstra o uso de `this`, `apply`, `call` e `arguments` em JavaScript.

#### Passos para Executar

1. Navegue até a pasta do demo: `cd modulo03/demo01-this-apply-call-arguments`
2. Execute o script: `node index.js`

### Demo 02: ES Modules e Internacionalização

Este demo demonstra o uso de ES Modules, internacionalização com Intl API, validação de dados, persistência em JSON e testes automatizados.

#### Passos para Executar

1. Navegue até a pasta do demo: `cd modulo03/demo02-esmodules-internacionalization`
2. Instale as dependências (se necessário): `npm install`
3. Execute o demo: `npm run dev`
4. Insira os dados conforme solicitado ou digite `:q` para finalizar.

#### Testes

- Para executar os testes: `npm test`
- Para executar os testes com cobertura: `npm run test:cov`

## Observações

Este projeto foca nos fundamentos do JavaScript moderno, internacionalização nativa e fluxo terminal robusto — habilidades essenciais para construir aplicações CLI produtivas e multilíngues. Aprender e dominar estes conceitos é crucial para avançar em projetos web e automação profissional.

## Referências

- [Intl - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [ES Modules - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [chalk-table](https://www.npmjs.com/package/chalk-table)
- [draftlog](https://www.npmjs.com/package/draftlog)

## Autor

- **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli

## Licença

Este projeto está sob a Licença [MIT](https://opensource.org/license/MIT).
