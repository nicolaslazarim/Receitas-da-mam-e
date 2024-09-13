const avanca= document.querySelectorAll('.btn-proximo');
avanca.forEach(button=>{
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-'+this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

function goToHomePage() {
    window.location.href = 'file:///home/chronos/u-0a5847b2d9eda76538c7eabb68554ec81f1d8b73/MyFiles/Downloads/Link%20das%20receitas/index.html'; // Substitua '/' pelo URL da sua página inicial, se necessário
  }
  