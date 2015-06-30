---
layout: post
title:  "Testando com Jasmine"
date:   2015-07-16 12:00:10
categories: javascript bdd jasmine
lang: br
---

### O que é Behaviour Driven Development?

Behaviour Driven Development, ou Desenvolviment Orientado a Comportamento, é uma técnica proveniente do TDD (Test Driven Development), que almeja aumentar o nível de abstração e servir melhor como ferramenta de documentação e design. Muitas vezes, os códigos de testes escritos utilizando TDD eram muito presos e específicos à aplicação:

{% highlight java %}
@Test
public final void shouldBeAddedToList() {
    Object foo = new Object();
    ListOwner.addToList(foo);
    Assert.assertTrue(ListOwner.getList().contains(a));
}
{% endhighlight %}

Se a coleção utilizada fosse um outro tipo que não List, o teste seria invalidado, pois está muito acoplado ao código que está testando.

O BDD tenta ser mais orientado a funcionalidade e comportamento, e menos acoplado ao código:

{% highlight javascript %}
describe('ListOwner item addition', function () {
    it('adds a item to the list', function () {
        var list = new ListOwner();
        list.addItem({'quantity': 10});
        expect(list.contains({'quantity': 10})).toBe(true);
    });
});
{% endhighlight %}

Note que o método `describe()` introduz a funcionalidade a ser testada, enquanto o método `it()` introduz o comportamento a ser testado. Dentro de `it()` temos `expect(list.contains({'quantity': 10})).toBe(true)`, que soa de uma forma bem fluente ao inglês natural, de forma que qualquer pessoa que entenda o idioma conseguiria entender o que está sendo testado, menos não tendo noções técnicas. Um detalhe relevante é que utilizamos um objeto criado por nós mesmos, que possui métodos que criam uma interface entre o teste e o objeto sendo inserido a lista, de forma que não importa o tipo de lista que estamos utilizando.

### Instalando Jasmine

Para instalar Jasmine é bem fácil, basta escrever `npm install -g jasmine`.

> O [Meteor Velocity](http://velocity.meteor.com/), framework padrão de testes para Meteor utiliza jasmine, dentre alguns outros frameworks de testes.

### BDD com Jasmine

Após instalar o jasmine via npm, você precisa ir na pasta do projeto e executar `jasmine init`. Dessa forma, ele vai criar a pasta `spec/support`, que contém seu arquivo de configuração `jasmine.json`.

Vamos criar uma função bem simples, apenas para ver como criamos, executamos e verificamos o resultado de um teste.

{% highlight javascript %}
//test.js
function foo() {
  return "Bar!";
}

describe("foo", function() {
  it("prints Bar!", function() {
    expect(foo()).toEqual("Bar!");
  });
});
{% endhighlight %}

O método `foo()` retorna a string `'Bar!'` e o nosso teste irá confirmar isso. Ao executarmos `jasmine test.js`, o resultado será esse:

{% highlight bash %}
Started
.


1 spec, 0 failures
Finished in 0.005 seconds
{% endhighlight %}

### Matchers

Matcher são aqueles métodos executados juntos com `expect()`, que servem para validar o teste em si. Existem vários deles embutidos no Jasmine, e vou falar de alguns:

* toEqual: É o mais simples dos matchers. Ele certifica que o seu argumento seja igual o argumento de expect.
{% highlight javascript %}
expect(true).toEqual(true);
{% endhighlight %}

* toBe: É semelhante ao `toEqual`, entretanto, ele verifica se seu argumento é o mesmo objeto especificado em `expect`.
{% highlight javascript %}
var a = 'exemplo';
expect(a).toBe(a);
{% endhighlight %}

* toBeTruthy e toBeFalsy: `toBeTruthy` verifica se o argumento de `expect` é `true`. `toBeFalsy` verifica se é `false`.
{% highlight javascript %}
expect(true).toBeTruthy();
expect(false).toBeFalsy();
{% endhighlight %}

* not: Serve para inverter um matcher que seja passado depois na chain de métodos.
{% highlight javascript %}
expect(true).not.toBeFalsy();
{% endhighlight %}

* toContain - Através dele verificamos se o parâmetro está contido no `array` ou `string` contido em `expect`.
{% highlight javascript %}
expect([1, 2, 3]).toContain(1);
{% endhighlight %}

* toBeDefined e toBeUndefined - Parecido com `toBeTruthy` e `toBeFalsy`, mas checam se o valor é `undefined`.
{% highlight javascript %}
expect(undefined).toBeUndefined();
{% endhighlight %}

* toBeNull - Checa se o valor é `null`
{% highlight javascript %}
expect(null).toBeNull();
{% endhighlight %}

* toBeNan - Verifica se o valor é NaN (Not a Number). Geralmente esse valor é gerado quando tentamos converter um valor não numérico em Number, ou quando temos o resultado de uma divisão matemática impossível, como uma divisão com denominador 0.
{% highlight javascript %}
expect(0/0).toBeNaN();
{% endhighlight %}

* toBeGreaterThan e toBeLessThan - Verificam se o valor é maior ou menor do que o passado.
{% highlight javascript %}
expect(5).toBeGreaterThan(1);
expect(5).toBeLessThan(10);
{% endhighlight %}

* toBeCloseTo - Checa se o `number` passado se aproxima do argumento de `expect`. Um segundo parâmetro é passado com a precisão em casas decimais.
{% highlight javascript %}
expect(30.15).toBeCloseTo(30.1, 1);
{% endhighlight %}

* toMatch - Verifica se a `string` em `expect` passa na expressão regulada informada como seu parâmetro.
{% highlight javascript %}
expect('teste').toMatch(/teste/);
{% endhighlight %}

* toThrow - Verifica se a função passada com argumento de `expect` lança uma exceção. Caso isso não ocorra, o teste falha.
{% highlight javascript %}
expect(function(){
  throw "Throwing an exception an passing the test!";
  }).toThrow();
{% endhighlight %}

Também existe a possibilidade de criarmos matchers customizados, mas isso é um assunto muito amplo que merece outra postagem.

### Before and After

Caso você precise executar um código para preparar o ambiente, dar rollback no banco ou algo assim, pode utilizar as funções `beforeEach` e `afterEach`.

{% highlight javascript %}
describe("A feature with beforeEach and afterEach", function() {

  beforeEach(function() {
    preparaAmbiente();
  });

  afterEach(function() {
    limpaAmbiente();
  });

  it("expects true to be truthy", function() {
    expect(true).toBeTruthy();
  });

});
{% endhighlight %}
