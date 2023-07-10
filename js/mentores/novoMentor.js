const novomentor = async (mentores) => {
    await fetch('http://localhost:3000/mentores',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(mentores)
    })
   window.location = "/html/mentores/mentores.html"
}

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', async (event) => {
event.preventDefault()

    const nome = formulario.elements['nome'].value
    const email = formulario.elements['email'].value
    const titulo = ''
    console.log(email)
    const mentores = {
            nome,
            email,
            titulo
    }

    novomentor(mentores)

})

//funções menu/nagar
const mentores = () => {
    window.location = "./mentores.html"
  }
  //vai para pagina mentoias
  const mentorias = () => {
     window.location = "../mentorias/mentorias.html"
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