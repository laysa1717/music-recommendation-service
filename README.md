# Serviço de recomendação de músicas.
Este serviço tem como objetivo principal recomendar músicas de acordo com a temperatura ambiente de cada cidade/região.


## Tecnologias Utilizadas
- NestJS: Framework usado para construção da API.
- Spotify API: Utilizada para buscar playlists baseadas em gênero.
- OpenWeatherMap API: Utilizada para obter a temperatura atual da cidade do usuário.

## Arquitetura
O projeto segue a Clean Architecture, que promove a separação de responsabilidades e facilita a manutenção e escalabilidade do código.

# Configuração do Projeto

## Pré-requisitos
- Node.js
- npm ou yarn

## Instalação
Clone o repositório: https://github.com/laysa1717/music-recommendation-service.git

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

