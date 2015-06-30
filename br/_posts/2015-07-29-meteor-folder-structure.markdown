---
layout: post
title:  "Estruturando um projeto Meteor"
date:   2015-07-29 14:35:21
categories: meteor folder structure
lang: br
---

### Convention over Configuration

O Meteor, assim como Rails segue o padrão Convention over Configuration, fazendo certas escolhas por você em favor do aumento de produtividade. Quando não seguimos esse padrão, temos liberdade para escolher, entretanto acabamos perdendo muito tempo configurando coisas triviais. Vale ressaltar que, mesmo seguindo este padrão, você consegue alterar diversos aspectos importantes da aplicação.

Entretanto, Meteor carece de algumas facilidades que rails possui, como o scaffold generator. Existem diversos generators feitos pela comunidade, entretanto, nenhum é considerado oficial.

### Estrutura de Pastas no Meteor

Embora existam diversas pastas com objetivos pré definidos no meteor, não temos uma estrutura de pastas tão clara quanto no rails, pois diversos aspectos ficam de fora, mas não é nada que não se resolva com boas práticas.

#### client
Pasta padrão do Meteor, abriga todo código que será rodado apenas no ambiente do cliente.

#### server
Mesmo que a pasta client, só que abriga código do servidor.

#### lib
Tudo que está dentro desta pasta é carregado primeiro.

#### routes
Pasta criada para abrigar arquivos de rotas do [iron-router](https://github.com/iron-meteor/iron-router) quando estivermos o usando. Embora o iron-router seja o roteador padrão, esta pasta não representa nada para o Meteor, ela é apenas utilizada pela comunidade para fins organizacionais.

#### public
Tudo que é inserido nesta pasta fica visível externamente. Geralmente utilizado para abrigar imagens e outros recursos.

#### private
O oposto da pasta public. Tudo que é inserido aqui não fica disponível externamente, somente pode ser acessada pelo servidor através da Assets API.

#### tests
Nenhum arquivo contido nesta pasta é carregado para dentro da aplicação pelo Meteor. Use para abrigar seus testes.

#### client/lib
Assim como a pasta na raíz, tudo que está nessa pasta é carregado antes de qualquer outra coisa no cliente.

#### cient/templates
Aqui você coloca todos os arquivos html e js dos templates da aplicação. O ideal é que você crie uma pasta para cada template.

#### client/compatibility
Aqui você pode colocar todos os arquivos de javascript de bibliotecas. Ex.: Bootstrap, SemanticUi e etc.

#### client/stylesheets
Nessa parte você coloca os arquivos de estilo das bibliotecas.

#### server/lib
Tudo que está nessa pasta é carregado antes de qualquer outra coisa no servidor.

#### server/methods
Declare os arquivos com métodos. Tente criar um arquivo para cada assunto, ex.: users.js, products.js.

#### server/publications
Declare todas as publicações também separando assuntos por arquivos.

#### lib/collections
Coloque os arquivos que definem suas coleções e schemas, caso use o pacote [aldeed:meteor-collection2](https://github.com/aldeed/meteor-collection2).

### Scaffold generators

Embora meteor não possua nenhum scaffold generator por padrão, a comunidade desenvolveu alguns:

* [Iron](https://github.com/iron-meteor/iron-cli) - Bastante utilizada e na minha opinião, a melhor, esta ferramenta de scaffolding gera uma estrutura padrão de pastas. Você também consegue gerar várias outras coisas, como scaffolds, templates, controllers, routes, collections e pubsubs.

* [Meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate) - Além de criar uma estrutura padrão de pastas, instala automaticamente uma série de pacotes para facilitar o desenvolvimento.

* [Void](https://github.com/SachaG/Void) - Uma ferramente mais simples, gera um esqueleto de projeto para que você possa alterá-lo, mantendo o padrão.
