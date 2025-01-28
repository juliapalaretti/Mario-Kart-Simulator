import characters from "./characters.js";

const player1 = {
    name: characters[0].Name,
    speed: characters[0].Speed,
    maneuverability: characters[0].Maneuverability,
    power: characters[0].Power,
    points: 0
};

const player2 = {
    name: characters[1].Name,
    speed: characters[1].Speed,
    maneuverability: characters[1].Maneuverability,
    power: characters[1].Power,
    points: 0
};

async function rollDice() {
    return Math.floor(Math.random()*6) + 1;
};

async function getRandomBlock() {
    let random = Math.random();
    switch (true) {
        case random < 0.33:
            return "Straight";
        case random < 0.66:
            return "Curve";
        default:
            return "Confront";
    }
};

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolled a dice of ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

/* logic for straight and curve tracks
async function normalBlockRace(track) {
    let attribute = "";
    let playerAttributePoints1 = 0;
    let playerAttributePoints2 = 0;

    if (track === "Straight") {
        attribute = "speed";
        playerAttributePoints1 = player1.speed;
        playerAttributePoints2 = player2.speed;
    }
    if (track === "Curve") {
        attribute = "maneuverability";
        playerAttributePoints1 = player1.maneuverability;
        playerAttributePoints2 = player2.maneuverability;
    }

    totalSkillTestPoints1 = diceResult1 = playerAttributePoints1;
    totalSkillTestPoints2 = diceResult2 = playerAttributePoints2;

    await logRollResult (player1.name, attribute, diceResult1, playerAttributePoints1);
    await logRollResult (player2.name, attribute, diceResult2, playerAttributePoints2);
} */

async function confrontBlockRace(diceResult1, diceResult2) {
    let powerSkillTestResult1 = diceResult1 + player1.power;
    let powerSkillTestResult2 = diceResult2 + player2.power;

    console.log(`${player1.name} confronted ${player2.name}! 🥊`);
    await logRollResult(player1.name, "power", diceResult1, player1.power);
    await logRollResult(player2.name, "power", diceResult2, player2.power);

    let penalty = rollDice() >= 3 ? "bomb" : "turtle shell";

    if (powerSkillTestResult2 > powerSkillTestResult1) {
        console.log(`${player2.name} won the confront!`);
        if (penalty === "turtle shell" && player1.points > 0) {
            player1.points--;
            console.log(`${player1.name} lost a point 🐢.`);
        }
        else if (penalty === "bomb" && player1.points > 1) {
            player1.points = player1.points - 2;
            console.log(`${player1.name} lost 2 points 💣.`);
        }
        else {
            console.log(`${player1.name} has no points to lose.`);
            player1.points = 0;
        }
    }
    if (powerSkillTestResult1 > powerSkillTestResult2 && player2.points > 0) {
        console.log(`${player1.name} won the confront!`);
        if (penalty === "turtle shell" && player2.points > 0) {
            player2.points--;
            console.log(`${player2.name} lost a point 🐢.`);
        }
        else if (penalty === "bomb" && player2.points > 1) {
            player2.points = player2.points - 2;
            console.log(`${player2.name} lost 2 points 💣.`);
        }
        else {
            console.log(`${player2.name} has no points to lose.`);
            player2.points = 0;
        }
    }
    console.log(powerSkillTestResult2 === powerSkillTestResult1 ? 'Draw! None of the players lost a point.' : "" );
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 10; round++) {
        console.log(`🏁 Round ${round}`);

        // random road block
        let block = await getRandomBlock();
        console.log(`Block: ${block}`);

        // roll the dices
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // skill points
        let totalSkillTestPoints1 = 0;
        let totalSkillTestPoints2 = 0;

        if (block === 'Straight') {
            totalSkillTestPoints1 = diceResult1 + player1.speed;
            totalSkillTestPoints2 = diceResult2 + player2.speed;
            await logRollResult(character1.name, "speed", diceResult1, character1.speed);
            await logRollResult(character2.name, "speed", diceResult2, character2.speed);
        }
        if (block === 'Curve') {
            totalSkillTestPoints1 = diceResult1 + player1.maneuverability;
            totalSkillTestPoints2 = diceResult2 + player2.maneuverability;
            await logRollResult(character1.name, "maneuverability", diceResult1, character1.maneuverability);
            await logRollResult(character2.name, "maneuverability", diceResult2, character2.maneuverability);
        }
        if (block === 'Confront') {
            await confrontBlockRace(diceResult1, diceResult2);
        }

        // verifying the winner of the round
        if (totalSkillTestPoints1 > totalSkillTestPoints2) {
            console.log(`${character1.name} scored 1 point!`);
            character1.points++;
        } else if (totalSkillTestPoints2 > totalSkillTestPoints1) {
            console.log(`${character2.name} scored 1 point!`);
            character2.points++;
        }
        
        console.log('-------------------------------------------');
    }
}

async function declareWinner (character1, character2) {
    console.log('Final Result:');
    console.log(`${character1.name} : ${character1.points} point(s).`);
    console.log(`${character2.name} : ${character2.points} point(s).`);

    if (character1.points > character2.points) {
        console.log(`${character1.name} won the race! 🏆`);
    } else if (character2.points > character1.points) {
        console.log(`${character2.name} won the race! 🏆`);
    } else {
        console.log(`The race finished in a draw!`);
    }
}

// autoinvoked function - starter function
(async function main() {
    console.log(`🏁🚨 Race between ${player1.name} and ${player2.name} starting now... \n`)

    // waits the function run to run the rest of the code
    await playRaceEngine(player1, player2);

    // declare the winner
    await declareWinner(player1, player2);

    player1.points = 0;
    player2.points = 0;
})();