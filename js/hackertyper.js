$(function(){
  Typer.speed=3;
  Typer.file='code.txt';
  Typer.init();

  var hackerTyper = setTimeout(hackerTyperLoop, 30);
  function hackerTyperLoop() {
    Typer.addText();
    hackerTyper = setTimeout(hackerTyperLoop, 30); // repeat myself
  };

  var changeDiv = setTimeout(changeDivLoop, 5000);
  function changeDivLoop() {
    Typer.changeDiv();
    changeDiv = setTimeout(changeDivLoop, 5000); // repeat myself
  };

});

var Typer={
  text: "",
  divId: 1,
  accessCountimer:null,
  index:0, // current cursor position
  speed:2, // speed of the Typer
  file:"", //file, must be setted
  accessCount:0, //times alt is pressed for Access Granted
  deniedCount:0, //times caps is pressed for Access Denied
  init: function(){// inizialize Hacker Typer
    accessCountimer=setInterval(function(){Typer.updLstChr();},500); // inizialize timer for blinking cursor
    $.get(Typer.file,function(data){// get the text file
      for (var i = 0; i < 10; i++){
        Typer.text = Typer.text.concat(data);// save the textfile in Typer.text
      }
    });
  },
  
  content:function(){
    return $("#console" + Typer.divId).html();// get console content
  },
  
  write:function(str){// append to console content
    $("#console" + Typer.divId).append(str);
    return false;
  },
  
  hidepop:function(){// remove all existing popups
    $("#deni").remove();
    $("#gran").remove();
  },

  changeDiv: function(){
    Typer.divId += 1; 
    Typer.text = Typer.text.slice(Typer.index);
    Typer.index = 0;
    $('#consoleWrapper').append('<div id="console' + Typer.divId + '" class="outer"></div>');
    $('#console' + Typer.divId).css('padding-top', function(){
      return Math.floor((Math.random() * 800) + 1) 
    });

    $('#console' + Typer.divId).css('padding-left', function(){
      return Math.floor((Math.random() * 100) + 1) + "%";
    });
  },
  
  addText:function(){//Main function to add the code
    if(Typer.text){ // otherway if text is loaded
      var cont=Typer.content(); // get the console content
      if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
      $("#console" + Typer.divId).html($("#console" + Typer.divId).html().substring(0,cont.length-1)); // remove it before adding the text
      Typer.index+=Typer.speed; // add to the index the speed
      var nextText = Typer.text.substring(0,Typer.index);
      var text=$("<div/>").text(nextText).html();// parse the text for stripping html enities
      var rtn= new RegExp("\n", "g"); // newline regex
      var rts= new RegExp("\\s", "g"); // whitespace regex
      var rtt= new RegExp("\\t", "g"); // tab regex
      $("#console" + Typer.divId).html(text.replace(rtn,"<br/>").replace(rtt,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(rts,"&nbsp;"));// replace newline chars with br, tabs with 4 space and blanks with an html blank
    }
  },
  
  updLstChr:function(){ // blinking cursor
    var cont=this.content(); // get console 
    if(cont.substring(cont.length-1,cont.length)=="|") // if last char is the cursor
      $("#console" + Typer.divId).html($("#console" + Typer.divId).html().substring(0,cont.length-1)); // remove it
    else
      this.write("|"); // else write it
  }
}
