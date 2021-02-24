# Next Level Week #04 - Trilha NodeJS

## Objetivo

- Chegar ao próximo nível, construindo arquiteturas escaláveis e simples para a web utilizando NodeJS.

## Sobre o Projeto

- API para Cálculo de Pesquisa de Satisfação (NPS - Net Promoter Score) 
- API fake para envio de e-mail

#### Será possível: 

- Criação de usuário;
- Criação de pergunta para ser enviada ao usuário cadastrado.

## Tecnologias utilizadas:

- NodeJS
- Typescript
- SQLite

## Iniciando a aplicação

- Primeiramente clone este repositório e instale suas dependências executando ``` yarn ``` ou ``` npm install ```.
- Baixe o [Beekeeper Studio](https://www.beekeeperstudio.io/) para visualização das tabelas do Banco de Dados.
- Para conectar-se ao Banco de Dados, abra o Beekeeper, selecione a Connection Type como SQLite e encontre o arquivo _**database.sqlite**_ dentro de _src/database_.

![beekeeper](https://user-images.githubusercontent.com/57918707/108929407-bf934f00-7622-11eb-832c-680997f8b74b.png)

- Teste a conexão e por fim se conecte.

- Para que as tabelas sejam criadas dentro do Banco de Dados, é necessário executar as migrations com o comando:
``` 
$ yarn typeorm migration:run 
```
- Feito isso, basta executar ``` yarn dev ``` para que o servidor seja iniciado.
