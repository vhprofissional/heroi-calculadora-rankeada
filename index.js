//Exemplo de chamada
heroLevelCalculator(5, 2);


function heroLevelCalculator(heroVictories, heroDefeats) {
    
	let heroVictoryBalance = heroBalanceCalculator(heroVictories,heroDefeats);
    let heroLevel = "";
	
    if(heroVictoryBalance < 10) {
        heroLevel = "Ferro";
    } else if(heroVictoryBalance >= 11 && heroVictoryBalance <= 20) {
        heroLevel = "Bronze";
    } else if(heroVictoryBalance >= 21 && heroVictoryBalance <= 50) {
        heroLevel = "Prata";
    } else if(heroVictoryBalance >= 51 && heroVictoryBalance <= 80) {
        heroLevel = "Ouro";
    } else if(heroVictoryBalance >= 81 && heroVictoryBalance <= 90) {
        heroLevel = "Diamante";
    } else if(heroVictoryBalance >= 91 && heroVictoryBalance <= 100) {
        heroLevel = "Lendário";
    } else if(heroVictoryBalance >= 101) {
        heroLevel = "Imortal";
    }else{
		heroLevel = "Indefinido";
	}

    console.log(`O Herói tem de saldo de ${heroVictoryBalance} está no nível de ${heroLevel}`);    

}

function heroBalanceCalculator(heroVictories, heroDefeats) {  
    return heroVictories - heroDefeats;
}