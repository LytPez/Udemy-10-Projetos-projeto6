/*
Função ao evento click no botao, essa funcção pega o valor do input, caso o value.length seja igual a 0, irá acionar um alerta solicitando que digite uma tarefa (o value desse input é uma string, o .lenght conta o tamanho da string, ou seja, 0 é igual a '' que seria nada) caso não seja 0 irá criar uma div dentro da div atual, com um span, e no span terá o value atual, criando assim a nova tarefa, dentro desta nova div criada também há um botao com um evento que irá apagar há a div criada caso clicada. 
*/
let text_input= document.getElementById('input_tarefa')
document.getElementById('button_add').onclick=function(){
  let text_input= document.getElementById('input_tarefa').value
  let new_task='<div id="tarefas">  <span>'+text_input+'</span><button id="deletar">Del</button></div>' 

  if(text_input.length==0){
    alert('Digite alguma tarefa')
  } else{
    document.getElementById('novas_tarefas').innerHTML+=new_task
  }
  let numero_de_tarefas= document.querySelectorAll('#deletar')
  
  for(let i=0;i<numero_de_tarefas.length;i++){
    numero_de_tarefas[i].onclick=function(){
      this.parentNode.remove()
    }
  }
}
