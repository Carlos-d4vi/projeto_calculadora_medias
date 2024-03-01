const form = document.querySelector('form')



form.addEventListener('submit', function(e) {
    e.preventDefault()

    
    const nomeAtividade = document.getElementById('nomeAtividade')

    const colunaNomeAtividade = document.createElement('td')
    colunaNomeAtividade.textContent = nomeAtividade.value

    const notaAluno = document.getElementById('notaAluno')
    const colunaNotaAluno = document.createElement('td')
    colunaNotaAluno.textContent = notaAluno.value
    colunaNotaAluno.id = 'notas'


    const image = document.createElement('img')
    const resultado = notaAluno.value >= 7 ? 'aprovado' : 'reprovado'
    image.src = resultado === 'aprovado' ? "images/aprovado.png" : "images/reprovado.png"
    const colunaResultado = document.createElement('td')

    const linha = document.createElement('tr')
    
    const tBody = document.querySelector('tbody')
    

    linha.append(colunaNomeAtividade)
    linha.append(colunaNotaAluno)
    linha.append(colunaResultado)
    colunaResultado.append(image)
    
    tBody.append(linha)


    nomeAtividade.value = ''
    notaAluno.value = ''


    const mediaCalculada = document.getElementById('mediaCalculada')

    const notas = document.querySelectorAll('td[id="notas"]');
    let somaNotas = 0;
    notas.forEach(td => {
        somaNotas += +td.textContent.trim();
    });
    const mediaCalculadaResultado = somaNotas / notas.length;
    mediaCalculada.textContent = mediaCalculadaResultado.toFixed(2)
    

    const mediaResultado = document.getElementById('mediaResultado')

    if(mediaCalculadaResultado >= 7){
        mediaResultado.textContent = 'aprovado'
        mediaResultado.style.backgroundColor = '#009432'
    }else{
        mediaResultado.textContent = 'reprovado'
        mediaResultado.style.backgroundColor = 'red'
    }

})