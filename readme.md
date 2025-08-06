# Node.js API Champions League

Este projeto é uma API RESTful desenvolvida em Node.js e TypeScript para gerenciar dados de jogadores de uma liga de futebol, simulando uma "Champions League". Ele foi criado como parte do projeto final da formação **Node.js Developer da DIO**.

## Tecnologias Utilizadas

*   **Node.js**: Ambiente de execução JavaScript.
*   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
*   **Express.js**: Framework web para Node.js, utilizado para construir a API.
*   **CORS**: Configurado para permitir requisições de diferentes origens.

## Funcionalidades

A API oferece as seguintes funcionalidades para a gestão de jogadores:

*   Listar todos os jogadores.
*   Encontrar um jogador específico por ID.
*   Criar um novo jogador.
*   Atualizar informações de um jogador existente.
*   Deletar um jogador.

## Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

```
src/
├── controllers/    # Lógica de negócio para cada rota
├── models/         # Definição dos modelos de dados
├── repositories/   # Camada de acesso a dados
├── services/       # Regras de negócio e orquestração
├── utils/          # Funções utilitárias
├── app.ts          # Configuração principal da aplicação Express
├── routes.ts       # Definição das rotas da API
└── server.ts       # Inicialização do servidor
```

## Como Rodar o Projeto

Para configurar e executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/liornes/node-api-champions-league.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd node-api-champions-league
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

    A API estará disponível em `http://localhost:3000` (ou na porta configurada).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

