---
layout: post
title:  "JSHint and Code Quality"
date:   2015-07-15 09:21:00
categories: javascript jshint code quality
lang: br
---

### Boas práticas na construção de código

Um bom código não tem falhas e é legível. Tão importante quanto sua performance é a sua clareza, pois geralmente, um código escrito por você vai ser lido por outras pessoas, e dar manutenção num código mal escrito é uma das piores coisas na vida de um programador. Além de ser horrível para quem codifica em cima de um código mal escrito, também é um ruim para quem paga o serviço, pois a demora causada acaba aumentando os custos.

Por isso, é imprescindível darmos atenção à qualidade de nosso código e existem diversas ferramentas que podem nos ajudar nessa tarefa. Hoje falaremos sobre uma delas, o JSHint.

### JSLint e Douglas Crockford

O JSHint é um fork de um projeto de Douglas Crockford, um cara bastante famoso na comunidade JavaScript, nada menos do que o autor do formato JSON e do livro "JavaScript: The Good Parts" ("O Melhor do JavaScript", em português).

O JSLint é uma ferramenta que faz parse do seu código e procura falhas e más práticas, dando alertas para que sejam corrigidos e por muito tempo foi o mais usado pela comunidade.

### Nasce o JSHint

O JSHint foi criado pois o JSLint era muito baseado nas opiniões do Douglas Crockford, que muitas vezes eram rígidas demais e não realistas. Ter um JSLint feito e mantido pela comunidade traria mais democracia à ferramenta.

### Instalando o JSHint

O JSHint roda tanto em navegadores, quanto em ambientes como V8 e Rhino. Para instalá-lo num ambiente NodeJS é bastante simples, você só precisa usar o npm.

{% highlight bash %}
npm install -g jshint
{% endhighlight %}

Depois, disso, basta executar `jshint` na linha de comando.

### Plugins de feedback instantâneo

Existem diversos plugins para feedback instantâneo que podem ser instalandos nos editores de texto que a gente usa no dia-a-dia. É uma ótima ferramenta para reforçar o uso de boas práticas em nosso código.

### JSHint Atom

Para instalar o [atom-jshint](https://atom.io/packages/atom-jshint) é bem fácil, já que dispomos do atom package manager. Basta abrir o terminal e digitar:

{% highlight bash %}
apm install atom-jshint
{% endhighlight %}

### JSHint Sublime Text

Caso você já tenha instalado o [Package Control](https://packagecontrol.io/), basta pressionar `command`-`shift`-`p` (OS X) ou `control`-`shift`-`p` (Linux/Windows), digitar `install p` e depois `jshint`.

### Criando issues e dando sugestões

Vale lembrar que, como o projeto é código aberto, você pode enviar sugestões ou críticas via [Github Issues](https://github.com/jshint/jshint/issues) e [Pull Requests](https://github.com/jshint/jshint/pulls) corrigindo bugs ou implementando coisas novas.
