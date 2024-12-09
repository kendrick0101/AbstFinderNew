document.addEventListener("DOMContentLoaded", () => {
    const cidadeSelect = document.getElementById("cidade");
    const mainContent = document.querySelector("main");
    const mensagem = document.getElementById("mensagem");
    const tipoPostoSelect = document.getElementById("tipo-posto");
    const mensagemAviso = document.getElementById("mensagem-aviso");
    const postosCombustivel = document.querySelectorAll('.box'); // Seleciona todos os postos (de combustível)
    
    // Função para verificar o valor do <select> para a cidade
    const verificarCidade = () => {
        const cidadeSelecionada = cidadeSelect.value;

        if (cidadeSelecionada === "zero") {
            mensagem.style.display = "block"; // Exibe a mensagem
            mainContent.style.display = "none"; // Esconde o conteúdo principal
        } else {
            mensagem.style.display = "none"; // Esconde a mensagem
            mainContent.style.display = "block"; // Exibe o conteúdo principal
        }

        // Armazena a escolha no localStorage para quando o usuário voltar
        localStorage.setItem("cidadeSelecionada", cidadeSelecionada);
    };

    // Função para verificar a mensagem de aviso com base no tipo de posto e cidade
    const verificarAviso = () => {
        const cidadeSelecionada = cidadeSelect.value;
        const tipoPostoSelecionado = tipoPostoSelect.value;

        // Se o tipo de posto for "Posto de Carga Elétrica" e a cidade não for "Nenhuma", exibe a mensagem
        if (tipoPostoSelecionado === "eletrica" && cidadeSelecionada !== "zero") {
            mensagemAviso.style.display = "block"; // Exibe a mensagem de aviso
            // Esconde os postos de combustível
            postosCombustivel.forEach(posto => posto.style.display = "none");
        } else {
            mensagemAviso.style.display = "none"; // Oculta a mensagem
            // Exibe os postos de combustível novamente
            postosCombustivel.forEach(posto => posto.style.display = "block");
        }
    };

    // Inicializa o valor do <select> com o valor armazenado ou "zero"
    const cidadeSalva = localStorage.getItem("cidadeSelecionada");
    if (cidadeSalva) {
        cidadeSelect.value = cidadeSalva;
    }

    // Chama a função para verificar o estado atual
    verificarCidade();
    verificarAviso(); // Inicializa a verificação da mensagem de aviso

    // Adiciona o evento de mudança no seletor de cidade e tipo de posto
    cidadeSelect.addEventListener("change", () => {
        verificarCidade();
        verificarAviso(); // Verifica o aviso toda vez que a cidade mudar
    });

    tipoPostoSelect.addEventListener("change", verificarAviso); // Verifica o aviso toda vez que o tipo de posto mudar
});

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("conf");
    const navbar = document.getElementById("navbar");

    // Alternar a exibição do menu ao clicar no ícone
    menuIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede o clique no ícone de fechar o menu
        navbar.classList.toggle("active");
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sairLink = document.querySelector('a[href="#sobre"]');
    const modal = document.getElementById("modal-sair");
    const confirmarSair = document.getElementById("confirmar-sair");
    const cancelarSair = document.getElementById("cancelar-sair");

    // Mostrar o modal ao clicar no link "Sair"
    sairLink.addEventListener("click", (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link
        modal.style.display = "flex"; // Exibe o modal
    });

    // Confirmar saída
    confirmarSair.addEventListener("click", () => {
        window.location.href = "inicial.html"; // Redireciona para inicial.html
    });

    // Cancelar saída
    cancelarSair.addEventListener("click", () => {
        modal.style.display = "none"; // Esconde o modal
    });

    // Fechar o modal ao clicar fora dele
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});






























// let h2 = document.querySelector('h2');

// function posicaoObitidaComSucesso(sucesso) {
//     const latitude = sucesso.coords.latitude;
//     const longitude = sucesso.coords.longitude;

//     // Usando a API Nominatim para obter o endereço
//     fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`)
//         .then(response => response.json())
//         .then(data => {
//             let resultado = '';

//             // Verifica se a rua e o bairro estão disponíveis
//             const rua = data?.address?.road;
//             const bairro = data?.address?.neighbourhood;

//             if (rua && bairro) {
//                 resultado = `${rua}, ${bairro}`; // Exibe a rua e o bairro
//             } else if (rua) {
//                 resultado = rua; // Exibe apenas a rua
//             } else if (bairro) {
//                 resultado = bairro; // Exibe apenas o bairro
//             } else {
//                 resultado = "Rua e bairro não encontrados.";
//             }

//             h2.textContent = resultado; // Atualiza o conteúdo da tag h2
//         })
//         .catch(error => {
//             console.error('Erro ao obter o endereço:', error);
//             h2.textContent = "Erro ao obter o endereço.";
//         });
// }

// function posicaoNaoObitida(erro) {
//     console.log(erro);
//     h2.textContent = "Não foi possível obter a localização.";
// }

// // Obtém a posição atual
// navigator.geolocation.getCurrentPosition(posicaoObitidaComSucesso, posicaoNaoObitida);