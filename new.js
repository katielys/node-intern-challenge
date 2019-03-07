const router = require('express').Router()
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <form action="/new" method="POST">
      <p>Nome:<input type="text" name="nome"/></p>
      <p>Idade:<input type="number" name="idade" /></p>
      <input type="submit" value="Salvar" />
    </form>
  </body>
</html>