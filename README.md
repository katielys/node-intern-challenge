# Desafio NodeJS

## Dependências

- node v8 (recomendo instalar [via](https://github.com/creationix/nvm))
  - [yarn](https://yarnpkg.com)

## Instalar dependências e iniciar servidor

```bash
yarn # instalar dependências
yarn start # iniciar servidor
```

## Instruções

Faça um fork do repositório e abra um pull request com seu desafio.

## Objetivos do desafio

Você é livre pra instalar quaiquer libs que quiser.

1. Modifique o arquivo routes/fat.js pra que o comando abaixo retorne o fatorial de um número qualquer `n`
```bash
curl -X POST http://localhost:7777/calcs/fat -H 'Content-Type: application/json' -d '{"n": 1}'

```
2. Implemente a rota que responde com o valor fibonacci de um número. Como a chamada abaixo
```bash
curl -X POST http://localhost:7777/calcs/fib -H 'Content-Type: application/json' -d '{"n": 1}'

```
3. Faça log da URL de todas as requisições que chegam ao servidor automaticamente
4. Implemente rotas de CRUD de uma entidade livro, com os atributos `{id, nome}`. A persistência pode ser em memória, mas usar MongoDB, é um bônus.
5. Atualize a seção [resultados](#resultados) com instruções de como testar o passo 4
6. Bônus: use docker

## Resultados

###Para inserir um novo livro :
	http://localhost:7777/new/id/:bookID/nome/:NOMEDOlivro

	no campo onde ha :bookID insira o id do livro e no local NOMEDOlivro coloque o titulo do livro desejado.
###Para excluir um livro: 
```
http://localhost:7777/delete/id/:bookID
```

Para excluir um livro, digite o id dele no local onde ha bookID
###Para editar um livro:
```
http://localhost:7777/edit/id/:bookID
```

Para editar um livro, digite o id dele no local onde ha bookID,outra pagina sera carregada e voce deve digitar o novo nome.

###Para Buscar um livro:	
```
http://localhost:7777/find/id/:bookID
```

Para buscar um livro, digite o id dele no local onde ha bookID