---
layout: post
title:  "Velocity: O framework de testes padrão do Meteor"
date:   2015-07-29 11:21:19
categories: meteor velocity bdd tdd test
lang: br
---

Velocity é o nome do framework de testes oficial da plataforma Meteor e é sobre ele que vamos falar nessa postagem. O projeto foi criado para sanar vários problemas que a comunidade encontrava ao tentar aplicar BDD em seu código Meteor e ele pode ser adicionado ao seu projeto de forma bastante simples:

{% highlight bash %}
meteor add velocity
{% endhighlight %}

### Por que Velocity?

Um dos principais problemas encontrados pela comunidade era o fato das aplicações Meteor não possuírem um ambiente de testes. Dessa forma, ao usar um framework como Jasmine, por exemplo, o código dos testes escritos acabava poluindo o código da produção ou não funcionando direito. Para resolver isso, Velocity cria um espelho da aplicação, onde roda os testes de forma reativa, mostrando os resultados em tempo real.

A reatividade do Velocity é um ponto bastante positivo, já que é necessário apenas que o código da aplicação ou dos testes seja alterado para que os resultados apareçam em seus reporters.

### Reporters

Atualmente existem dois tipos de reporters: HTML e CLI.

O reporter HTML é o mais utilizado e vem por padrão quando você adiciona o pacote. Ao instalá-lo, você nota um ponto no canto superior direito da tela do seu navegador. Quando este ponto está verde, significa que todos os seus testes passaram, já quando está vermelho, algum erro ou falha ocorreu.

![Ponto que mostra os resultados dos testes](/images/passing_tests.png)

É aqui que a reatividade do velocity reina! Automaticamente, ao atualizar seu código essa bolinha muda de cor e oferece um feedback imediato para que você possa aplicar BDD da forma mais fácil possível.

![Ponto vermelho](/images/failing_tests.png)

Caso você queira saber detalhes sobre os testes que falharam, basta clicar no ponto e a tela aparecerá com os respectivos stack traces.

> Em breve, o time planeja adicionar uma funcionalidade de estatística de cobertura de código ao velocity.

### Outro ponto positivo

Por serem instalados via NPM, utilizar os frameworks de teste antes do velocity era uma tarefa complicada e sujeita à erros. Hoje em dia foram criados smart packages para todos (Jasmine, Mocha, Cucumber e Robot Framework), e basta utilizar `meteor add` para instalá-los, graças ao [AtmosphereJS](http://atmospherejs.com).
