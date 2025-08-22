# Testando com End-to-End e Code Coverage

Este repositório contém exemplos práticos e anotações sobre como implementar **testes End-to-End (E2E)** e configurar métricas de **Code Coverage** em aplicações Node.js, baseados nos conceitos discutidos na Formação JavaScript Expert da EW Academy.

O objetivo é demonstrar como os testes E2E ajudam a validar o sistema do ponto de vista do usuário, enquanto as métricas de Code Coverage garantem que nenhuma parte crítica do código fique sem validação.

---

## Conceitos Chave

### O que são Testes End-to-End?

Testes End-to-End simulam o comportamento do usuário na aplicação.  
Eles validam não apenas funções isoladas, mas o fluxo completo da aplicação:

- **Exemplo de Login:** Criar um teste que envia `login` e `senha` para a API e valida o retorno do `token`.  
- **Exemplo de Pedidos:** Criar um teste que, usando o `token` do cliente, consulta os detalhes de um pedido.  

Esses testes garantem que as funcionalidades principais continuam funcionando, mesmo após alterações no código.

---

### O que é Code Coverage?

Mesmo que os testes passem, ainda existe a dúvida: **será que todos os trechos críticos foram testados?**  
Para resolver isso, utilizamos ferramentas de **Code Coverage**, como o **Istanbul**, que indicam:

- Quais partes do código foram testadas.  
- Quais trechos ficaram de fora.  
- Se as métricas mínimas definidas pelo time foram atingidas.  

Se a cobertura mínima não for alcançada, o código não é considerado concluído até que novos testes sejam adicionados.

---

### Vantagens de Testes E2E e Code Coverage

- **Confiabilidade em Produção:** Reduz o risco de falhas em funcionalidades críticas.  
- **Métricas Objetivas:** Define critérios claros para encerrar tarefas.  
- **Redução de Erros Humanos:** Minimiza falhas por esquecer validações ou trechos de código.  
- **Menos chamadas de fim de semana 😅:** Evita surpresas por erros simples não testados.  

---

## Exemplo Prático: API sem Framework

Neste projeto, foi criada uma API utilizando apenas o módulo **HTTP nativo do Node.js**.  
Os testes E2E validam desde o fluxo de autenticação até o consumo de rotas de dados, garantindo cobertura completa.  

Toda chamada externa (bancos de dados, APIs de terceiros ou arquivos) deve ser **mockada** utilizando **Stubs com Sinon**, evitando dependências externas nos testes.

---

## Como Executar

### Pré-requisitos

- Node.js instalado (desenvolvido e testado com a versão 24.6.0)  
- Recomenda-se usar um gerenciador de versões como o NVM  

### Passos

1. Clone este repositório.  
2. Navegue até a pasta do projeto.  
3. Instale as dependências: `npm install`  
4. Execute os testes End-to-End: `npm test`  
5. Gere o relatório de Code Coverage:  `npm run test:cov`
