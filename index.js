// Função para calcular o total de partidas
function partidasRankeadas(vitorias, derrotas) {
        return vitorias + derrotas;
    }
    
    // Função para calcular o nível
    function calcularNivel(vitorias, derrotas) {
        const totalDePartidas = partidasRankeadas(vitorias, derrotas);
        const saldoDeVitorias = vitorias - derrotas;
        let nivel;
    
        if (vitorias < 10) {
            nivel = "Ferro";
        } else if (vitorias >= 11 && vitorias <= 20) {
            nivel = "Bronze";
        } else if (vitorias >= 21 && vitorias <= 50) {
            nivel = "Prata";
        } else if (vitorias >= 51 && vitorias <= 80) {
            nivel = "Ouro";
        } else if (vitorias >= 81 && vitorias <= 90) {
            nivel = "Diamante";
        } else if (vitorias >= 91 && vitorias <= 100) {
            nivel = "Lendário";
        } else {
            nivel = "Imortal";
        }
    
        return `O Herói tem um saldo de ${saldoDeVitorias} vitórias e está no nível de ${nivel}. Total de partidas: ${totalDePartidas}`;
    }
    
    // Exemplo de uso
    console.log(calcularNivel(100, 38));
    