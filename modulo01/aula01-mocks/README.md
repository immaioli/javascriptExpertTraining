# Testando com Mocks: Evitando Repetição e Desacoplando o Código

Este repositório contém exemplos práticos e anotações sobre como utilizar Mocks em testes automatizados, baseados nos conceitos discutidos na Formação JavaScript Expert da EW Academy.

O objetivo é demonstrar como os Mocks nos ajudam a criar testes mais eficientes, focados em comportamentos específicos e que evitam a dependência de funcionalidades externas.

## Conceitos Chave

### O que são Mocks?
Mocks são objetos simulados que imitam o comportamento de objetos reais de forma controlada, permitindo isolar e testar uma unidade de código específica sem se preocupar com suas dependências.

### Analogia do "Checkpoint"
Assim como em um jogo, onde o checkpoint permite continuar de um ponto salvo, os mocks permitem "fixar" o resultado de uma função intermediária. Isso possibilita testar o próximo passo de forma isolada, sem refazer todo o caminho anterior.

### Vantagens de usar Mocks
- **Evita a repetição de código:** Reduz a necessidade de replicar lógicas complexas para cada caso de teste.
- **Testes mais rápidos e eficientes:** Ao simular dependências, os testes se tornam mais rápidos, pois não precisam interagir com sistemas reais (como bancos de dados ou APIs).
- **Desacoplamento de testes:** Promove um design de código mais modular e fácil de testar individualmente.

## Exemplo Prático: Validação de Arquivo CSV

Neste projeto, há um exemplo de função de validação de arquivos CSV. Para cada cenário de validação (arquivo vazio, formato incorreto, etc.), utilizamos um mock diferente para simular a entrada e testar o comportamento da função de forma isolada e precisa.

## Como Executar

### Pré-requisitos
- Node.js instalado (desenvolvido e testado com a versão 24.6.0)
- Recomenda-se usar um gerenciador de versões como o NVM

### Passos
1. Clone este repositório.
2. Navegue até a pasta do projeto.
3. Instale as dependências: `npm install`
4. Execute os testes: `npm test`

## Observações

Este projeto demonstra a base de testes usando apenas Node.js. Embora frameworks de teste tragam agilidade, é fundamental entender o conceito por trás do uso de mocks para construir uma base sólida em desenvolvimento de software.

## Autor

- **[immaioli](https://github.com/immaioli)** - Irineu Marcelo Maioli

## Licença

Este projeto está sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.