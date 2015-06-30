---
layout: post
title:  "Scopes e closures em Javascript"
date:   2015-06-05 10:31:02
categories: javascript scope closure
lang: br
---

Embora JavaScript seja uma linguagem onipresente e muito poderosa, ela possui erros muitos erros de design, como por exemplo a coexistência de nil e undefined.
Nessa postagem nós vamos abordar outro erro que por muito tempo foi responsável por argumentos como "JavaScript não serve para grandes projetos", que é como ela lida com scopes.

![Javascript and its good parts](/images/javascript-good-bad-parts.jpg)

### O que é Scope (ou escopo)?

Para esclarecer o conceito aqueles que não estão familiarizados, escopo é o bloco de código a qual um identificador de uma variável pertence, dessa forma, e. Em Ruby, por exemplo, se você define uma váriavel dentro de um if, aquela variável é invisível para qualquer código externo.

{% highlight ruby %}
if true
  foo = 'bar'
end

puts foo # prints nil
{% endhighlight %}

### Como JavaScript lida com scopes?

Em JavaScript o resultado seria diferente, pois só existem dois tipos de escopo: Global e de função.

{% highlight javascript %}
if (true){
  foo = 'bar';
}

console.log(foo); // prints bar
{% endhighlight %}

Como não existe escopo de bloco, a variável declarada dentro de um if pode ser acessada por um código externo. Caso você queira isolar uma variável, deve declará-la dentro de uma função.

Este aspecto, geralmente, é responsável pela geração de diversas falhas em códigos JavaScript, já que a forma de lidar com scopes é bem menos clara e intuitiva do que seria em outas linguagens, como Java ou Ruby. Sendo assim, uma boa prática é o uso do Yahoo JavaScript Module Pattern, que usa closures para criar namespaces.

### O que são closures?

Quando uma função é declarada dentro de outra função ela possui acesso a todas as variáveis declaradas dentro do escopo da função externa. Essa técnica, que se chama closure, é utilizada para se criar namespaces e facilitar o uso do escopo em linguagens que possuem funções de primeira classe, como JavaScript.

{% highlight javascript %}
function vezes (x) {
  return function (y) {
    return x * y;
  };
}

var vezes3 = vezes(3);
var numero15 = vezes3(5);
alert(numero15); // Retorna 15
{% endhighlight %}

Quando você chama vezes(3), ela retorna a função anônima declarada dentro dela inferindo o valor passado à variável x. A função retornada e referenciada pela variável vezes3 é assim:

{% highlight javascript %}
function (y) {
  return 3 * y;
};
{% endhighlight %}

Depois, esta variável é passada recebendo o valor de y e executa a multiplicação, retornando o resultado. Entretando, isso só foi possível por conta do closure criado, onde a função interna tinha acesso à variável x da função externa.

### Yahoo JavaScript Module Pattern

O Yahoo JavaScript Module Pattern usa closures para poder simular algo parecido com um escopo de objeto.

{% highlight javascript %}
var usuario = function () {
  // Escopo privado
  var email = "iurimadeira@gmail.com";
  return {
    getEmail : function () {
      return email;
    },
    setEmail : function (newEmail) {
      email = newEmail;
    }
  };
}();

alert(usuario.email); // Undefined
alert(usuario.getEmail()); // "iurimadeira@gmail.com"
usuario.setEmail("outro@exemplo.com");
alert(usuario.getEmail()); // "outro@exemplo.com"
{% endhighlight %}

Um detalhe bastante importante é que após declarar a função usuario, usamos o () para auto-invocar a função e passá-la para o objeto usuario. Dessa forma o valor da variável email se torna privado e é retornado pelas funções declaradas no objeto retornado.

### Scopes não são tão simples em JavaScript

Como pudemos perceber, lidar com scopes em JavaScript não é tão fácil como em outras linguagens e este é um aspecto que precisa ser trabalhado se você quer escrever códigos de qualidade. Usar closures e sempre tentar evitar o escopo global são duas práticas que ajudam bastante nesse processo.

Nessa postagem tentei esclarecer de forma superficial, espero ter ajudado!
