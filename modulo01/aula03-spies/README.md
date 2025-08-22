# Testando com Spies: Observando o Comportamento das Funções

Este repositório contém exemplos práticos e anotações sobre como utilizar **Spies** em testes automatizados, baseados nos conceitos discutidos na Formação JavaScript Expert da EW Academy.

O objetivo é demonstrar como os Spies ajudam a validar não apenas os **resultados retornados**, mas também o **comportamento interno** das funções durante a execução.

---

## Conceitos Chave

### O que são Spies?

Spies são utilitários que permitem **observar** funções em tempo de execução.  
Com eles, é possível verificar:

- Quantas vezes uma função foi chamada.  
- Com quais parâmetros foi executada.  
- Quais valores retornou em cada chamada.  

Isso garante maior segurança na validação de comportamentos complexos.

---

### O Problema do "Retorno Esperado"

Em alguns cenários, mesmo que a função retorne o valor esperado, isso não significa que ela se comportou como deveria.  
Imagine publicar uma nova versão do sistema, e de repente ele entra em **loop infinito** batendo na API de integração de um cliente.  

👉 Os testes de unidade podem ter passado, mas sem observar o comportamento interno da função, um erro lógico como esse pode ser facilmente ignorado.

---

### Vantagens de usar Spies

- **Detectar loops ou chamadas desnecessárias:**  
  Ideal para funções recursivas ou com termos de parada complexos.

- **Validação de parâmetros:**  
  Garante que as funções sejam chamadas exatamente como planejado.  

- **Maior confiança nos testes:**  
  Testar somente o retorno pode ser enganoso. Observar o comportamento reduz riscos de falhas em produção.  

---

## Exemplo Prático: Observando Chamadas de Funções

Neste projeto, você encontrará exemplos de funções monitoradas com Spies para demonstrar:  

- Funções chamadas múltiplas vezes.  
- Funções executadas com parâmetros diferentes.  
- Estratégias para interromper loops ou validar termos de parada.  

Um dos testes implementados utiliza o **método Fibonacci**, que é particularmente interessante por envolver recursão e exigir uma lógica de parada bem definida.  
Os Spies permitem verificar quantas vezes a função foi chamada durante a execução da sequência, validando se a recursão está sob controle e evitando loops infinitos.

---

## Como Executar

### Pré-requisitos

- Node.js instalado (desenvolvido e testado com a versão 24.6.0)  
- Recomenda-se usar um gerenciador de versões como o NVM  

### Passos

1. Clone este repositório.  
2. Navegue até a pasta do projeto.  
3. Instale as dependências: `npm install`  
4. Execute os testes: `npm test`  

---

## Observações

Este projeto demonstra conceitos fundamentais para a criação de testes robustos em **JavaScript**.  
Spies são ferramentas essenciais para validar **comportamentos internos**, especialmente quando lidamos com funções complexas ou integrações externas.  
O uso do **Fibonacci** como exemplo reforça a importância de validar chamadas recursivas e o fluxo de execução em tempo real.  

---

## Autor

- **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli  

---

## Licença

Este projeto está sob a Licença [MIT](https://opensource.org/license/MIT).
