---
layout: post
title:  "Prototype Linkage em Javascript"
date:   2015-07-14 11:32:00
categories: javascript prototype linkage
lang: br
---

JavaScript é uma linguagem bastante peculiar. Embora ela seja orientada a objetos, diferentemente de Java ou Ruby, ela não possui classes, entretanto, ela também possui um sistema de herança e é sobre ele que vamos falar nessa postagem.

> Caso você não esteja familiarizado com os aspectos da Orientação a Objetos, procure ler um pouco sobre o assunto antes de continuar lendo esta postagem, pois é possível que você sinta bastante dificuldade em entender os pontos abordados.

### Como funciona a herança clássica?
O sistema de herança é um dos principais pontos da orientação a objetos. Ele é o responsável por passar características dos objetos-pai aos objetos-filho. Por exemplo:

{% highlight java %}
public class Bola {
  String cor;

  public void rolar(){
    System.out.println("rolando...");
  }
}

public class BolaDeBasquete extends Bola {
  public void quicar(){
    System.out.println("quicando...");
  }
}

new BolaDeBasquete().rolar(); // "rolando..."
new BolaDeBasquete().quicar(); // "quicando..."
{% endhighlight %}

Ao declarar `BolaDeBasquete extends Bola`, estamos dizendo que a classe BolaDeBasquete herda da classe Bola, sendo assim, todos os seus atributos e métodos são passados à classe-filha. Ao chamarmos o método `rolar()` na nova instância de BolaDeBasquete, o método é executado sem problemas.

### O que é Prototype Linkage?

A grande diferença em como JavaScript lida com herança é que, ao invés de usar Classes, clonamos outros objetos para usá-los como protótipos de novos objetos. Um objeto "veículo" pode ser clonado para gerarmos um objeto "carro", que herda as qualidades de "veículo", mas tem suas próprias qualidades mais específicas. Qualquer objeto "carro" pode ser clonado para geramos um outro objeto "carro". Também podemos clonar um objeto "carro" para gerar um objeto "sedan". Mas fazemos tudo isso sem precisar de classes!

Todo objeto possui um prototype, e como prototypes são objetos, eles também possuem prototypes. A única exceção é o prototype de Object, que está no topo da cadeia e não herda de ninguém. Vale lembrar que objeto é tudo aquilo que não é undefined, null, boolean, number, nem String, pois estes são primitivos.

### Propriedade prototype

Se você escrever ({}).prototype, vai ter undefined como retorno. Isso acontece pois somente funções possuem o atributo prototype, e o verdadeiro prototype object pode ser retornado de 3 formas:

* Chamando `Object.prototypeOf(objeto)`, que não funciona no Opera, nem no IE 8 ou menor;
* Acessando a propriedade `__proto__`, que não está presente no IE;
* Acessando a propriedade prototype no construtor do objeto, via `objeto.constructor.prototype`. Se o prototype do objeto tiver sido substituido você também não vai conseguir pegá-lo.

A propriedade prototype não tem nada a ver com o prototype da própria função e sim o prototype que será utilizado caso a função seja chamada pela keyword `new`, como um construtor.

{% highlight javascript %}
var Carro = function(nome) {
    this.nome = nome;
}

var fusca = new Carro('fusca');
fusca.nome; //'fusca'
{% endhighlight %}

> Se você tentar acessar false.\__proto__, vai visualizar seu prototype. Mas como isso é possível, se primitivos não são objetos? Ao tentar acessar qualquer propriedade de false, o runtime transforma ele em um objeto Boolean.
