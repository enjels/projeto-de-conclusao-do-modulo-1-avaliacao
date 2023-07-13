
//função para exibir conteudo na tela formatado
const rendermentor = (titulomentorias) =>{
    const info_content_1 = document.getElementById('info-content1')
    const info_content_2 = document.getElementById('info-content2')
    const info_content_3 = document.getElementById('info-content3')
    
    let contador = 1
    titulomentorias.forEach(titulomentorias => {
        contador++;
        let corlist = '';
        if (contador % 2 === 0) {
          corlist = 'cinza50';
        }else{
            corlist = 'cinza100'
        }
    
        info_content_1.innerHTML += `
          <p class="info-white ${corlist}">${titulomentorias.tipo}</p>
        `;
        info_content_2.innerHTML += `
          <p class="info-white ${corlist}">${titulomentorias.nome}</p>
        `;
        info_content_3.innerHTML += `
          <div class="info-white dflex ${corlist}">
            <img onclick="editarMentoria(${titulomentorias.id})" src="../../svg/editar.svg" alt="">
            <img onclick="deletarMentoria(${titulomentorias.id})" src="../../svg/delete.svg" alt="">
          </div>
        `;
      });
    }

    const btnPurpleMenu = () => {
      const purpleBTN =document.getElementById('mentorias')
        purpleBTN.classList.toggle("btnstatic-purple")
    }


     //recebe os dados da api
    const getmentores = async () => {

      const retorno = await fetch ('http://localhost:3000/titulomentorias')
      const titulomentorias = await retorno.json()

        rendermentor(titulomentorias)
        btnPurpleMenu()
    }


    //retorna a pag novoMentor
    const novoMentoria = () => {
        window.location = "novaMentoria.html"
    }
    //vai a pag editarMentor
    const editarMentoria = (id)=> {
        window.location = `/html/mentorias/editarMentoria.html?id=${id}`
    }

    const deletarMentoria = async (id) => {
       await  fetch(`http://localhost:3000/titulomentorias/${id}`, {
            method: 'DELETE'
        })
    }

    getmentores()


    const btnPurple = () => {
      const purpleBTN =document.getElementById('mentores')
      purpleBTN.classList.toggle("btnstatic-purple")
    }


//funções do menu
//vai para pagina mentoias
const mentores = () => {
    window.location = "/html/mentores/mentores.html"
}
//vai para pagina turmas
const turmas = () => {
    window.location = "/html/turmas/turmas.html"
}
//vai para pagina alunos
const alunos = () => {
    window.location = "/html/alunos/alunos.html"
}
//vai apra pagina nova mentoria
const novaMentoria = () => {
    window.location = "/html/mentorias/novaMentoria.html"
}