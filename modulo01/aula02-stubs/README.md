# Testando com Stubs: Garantindo a Confiança dos Testes

Este repositório demonstra como utilizar **stubs** em testes automatizados para tornar sua suíte de testes mais rápida, confiável e independente de serviços externos.

## O que são Stubs?

Stubs são objetos que simulam o comportamento de funções ou serviços reais, retornando respostas pré-definidas. Eles permitem testar cenários específicos sem depender de APIs externas ou internet.

## Por que usar Stubs?

- **Economia de Recursos:** Evita custos com APIs pagas ou uso excessivo de banco de dados.  
- **Independência:** Testes continuam funcionando mesmo se serviços externos estiverem indisponíveis.  
- **Velocidade:** Testes ficam mais rápidos ao eliminar dependências externas.  
- **Foco na Lógica:** Permite testar apenas a lógica do seu código.  

## Exemplo Prático

Se seu sistema depende de uma API de CEP, utilize um stub para simular a resposta da API nos testes. Assim, você valida as regras de negócio sem depender da internet.

## API Utilizada

Este projeto utiliza como referência a [SWAPI](https://swapi.info/), uma API pública baseada no universo de **Star Wars**.  
Os stubs simulam as respostas dessa API para garantir que os testes sejam previsíveis e independentes.

## Como Executar

1. Clone este repositório.  
2. Navegue até a pasta do projeto.  
3. Instale as dependências: `npm install`  
4. Execute os testes: `npm test`  

**Pré-requisitos:**  
Tenha o Node.js instalado (versão recomendada: 24.6.0). Use um gerenciador de versões para garantir compatibilidade.

## Observações

O foco dos testes é garantir que sua lógica lide corretamente com diferentes entradas e saídas simuladas por stubs, e não testar a estabilidade de serviços externos.

## Autor

- [immaioli](https://github.com/immaioli) — Irineu Marcelo Maioli  

## Licença

Este projeto está sob a Licença [MIT](https://opensource.org/licenses/MIT).  
