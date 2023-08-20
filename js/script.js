var depoimentos = [
    { nome: "Diane Rios ", Cargo: "Gerente de Projeto", depoimento: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit saepe enim nesciunt unde impedit? Officia dolorum voluptates perspiciatis ' },
    { nome: "Samuel Costa", Cargo: "Gerente de Operações", depoimento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic illum temporibus dicta debitis delectus, corrupti esse repellendus '},
    { nome: "Bruna Silva", Cargo: "Gerente de Marketing", depoimento: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ducimus id dolorum ipsa, ratione placeat explicabo qui veritatis quasi ' }
];

$(document).ready(function(){
    $('#menu-icon').on('click', function(){
        $('body').toggleClass('active')
    })

    var index = 0;

    function mudarDepoimento() {
        $('#nome').text(depoimentos[index].nome)
        $('#cargo').text(depoimentos[index].Cargo)
        $('#depoimento').text(depoimentos[index].depoimento )
    }

    $('#anterior').on('click', function(){
        if(index === 0) {
            index = depoimentos.length - 1; // Define o índice para o último elemento do array
        } else {
            index = index - 1;
        }
        mudarDepoimento();
    })

    $('#proximo').on('click', function(){
        if(index >= depoimentos.length - 1){
            index = 0
        } else {
            index = index + 1
        }
        mudarDepoimento()
    })

    setInterval(function(){
        if(index >= depoimentos.length - 1){
            index = 0
        } 
        index = index + 1
        mudarDepoimento()
    }, 3000)

    $(window).on('scroll', function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $('.animate').each(function() {
          var elementTop = $(this).offset().top;
          if (elementTop - scrollTop < (windowHeight * 3) / 4) {
            $(this).addClass('ativado');
          } else {
            $(this).removeClass('ativado');
          }
        });
      });
});
