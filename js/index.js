
let id
let pessoa = [
  
  {
    nome:"fulano",
    sobrenome:"silva",
    email:"fulano@gmail.com",
  }
]

 

  carregarTabela = function()
  {

      let pessoaString = this.localStorage.getItem("pessoa")
      let dados = JSON.parse(pessoaString) 
      let bodyTable = document.getElementById("bodyTable")
      bodyTable.innerHTML=""
        pessoa = dados
        for(i = 0; i < pessoa.length; i++)
          {
            bodyTable.innerHTML+= `
              <tr>
             <td>${i}</td>
              <td>${pessoa[i].nome}</td>
              <td>${pessoa[i].sobrenome}</td>
              <td>${pessoa[i].email}</td>
              <td><button type="button" data-toggle="modal" data-target="#meuModal" onclick="modal();getIndice(${i});backModal()" class="btn btn-primary">editar</button></td>
              <td><button type="button" onclick="excluir(${i})" class="btn btn-danger">Excluir</button></td>
              </tr>`
         }
    }




function cadastrar()
{
  
 let firstName = document.getElementById("firstName").value
 let lastName = document.getElementById("lastName").value
 let email = document.getElementById("email").value
  pessoa.push({nome:firstName,sobrenome:lastName,email:email})

  let pessoaString = JSON.stringify(pessoa)
  localStorage.setItem("pessoa",pessoaString)
  carregarTabela()
}


function getIndice(i){
 id = i
}



function editar(){
   let nome = document.getElementById("modalNome").value
   let sobrenome = document.getElementById("modalSobrenome").value
   let email = document.getElementById("modalEmail").value
 
  console.log(nome)
   console.log(sobrenome)
   console.log(email)
   
   pessoa[id].nome = nome
   pessoa[id].sobrenome = sobrenome
   pessoa[id].email = email
   localStorage.setItem("pessoa",JSON.stringify(pessoa))

   fechar()
   carregarTabela()
 }


function excluir(i){
  
  let indice =  i
  console.log(indice)
  pessoa.splice(indice,1)
  localStorage.setItem("pessoa",JSON.stringify(pessoa))
  carregarTabela()
}

function modal(){
  let modal = document.getElementById("meuModal")
  modal.style.display='block'
}
function fechar(){
  let modal = document.getElementById("meuModal")
  modal.style.display='none'
}

function backModal(){
  let modal = document.getElementById("meuModal")
  modal.classList.add("custom-modal-backdrop")
}



window.onload= carregarTabela