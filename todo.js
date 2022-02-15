const atividade = document.getElementById('atividade');
const dtAtv = document.querySelector('#dataAtv');
const btnCadastrar = document.querySelector('input[type=submit]');
let indice = 0;

btnCadastrar.addEventListener('click', (e)=>{
    //Evitar o envio dos dados 
    e.preventDefault();

    let lista = document.getElementById('lista');

    let linha = document.createElement('tr');

    let celId = document.createElement('th');
    celId.innerText = ++indice;

    let celAtv = document.createElement('td');
    celAtv.innerText = atividade.value;

    let celData = document.createElement('td');
    let dataFormatada = new Date(dtAtv.value).toLocaleDateString('pt-br',{timeZone:'utc'});
    celData.innerText = dataFormatada;

    let celAcao = document.createElement('td');
    let chkAcao = document.createElement('input');
    chkAcao.type = 'checkbox';
    chkAcao.id = 'atv' + indice;
    celAcao.appendChild(chkAcao);

    linha.appendChild(celId);
    linha.appendChild(celAtv);
    linha.appendChild(celData);
    linha.appendChild(celAcao);

    lista.appendChild(linha);



    chkAcao.addEventListener('change', ()=>{
        let resposta = confirm('Desejo mesmo apagar a linhas?');
        if(resposta){
            linha.style.textDecoration = 'line-through';
            linha.style.backgroundColor = 'green';
            linha.style.transition = '2s';

            setTimeout(() => {
                linha.remove();   
            }, 2000);
            
            l
        }
        
    })

});

