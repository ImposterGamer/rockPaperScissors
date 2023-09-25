function getComputerChoice ()
{
    let val = ["r", "p", "s"]
    return val[Math.floor(Math.random() * val.length)]
}

function getValue (s)
{
    if(s === "r")
        return "rock";
    else if(s === "p")
        return "paper";
    else if(s === "s")
        return "scissors"
}

function result(pSelection, cSelection)
{
    // returning 2 is a tie, 1 is winning and 0 is losing
    if (pSelection === cSelection )
        return 2;
    else if (pSelection === "r" && cSelection === "s")
        return 1;
    else if (pSelection === "p" && cSelection === "r")
        return 1;
    else if (pSelection === "s" && cSelection === "p")
        return 1;
    else return 0;
}

function game()
{
    let player = prompt("Enter Your Choice (r, p or s)").toLowerCase()
    let computer = getComputerChoice()

    let mesg = "Player Choice: " + getValue(player) + "\n" + "Computer Choice: " + getValue(computer)
    console.log(mesg)

    let res = result(player, computer)
    if(res === 1)
        console.log("You Win ! " + getValue(player) + " beats " + getValue(computer))
    else if (res === 2)
        console.log("A DRAW")
    else console.log("You Lose ! " + getValue(computer) + " beats " + getValue(player))
    
    return res;
}
let round
pCount = 0
cCount = 0
for (let i = 0; i < 5; i++)
{
    round = game()
    if (round === 1)
        pCount += 1
    else if (round === 0)
        cCount += 1
    console.log("Current Score: Player " + pCount + " Computer: " + cCount)
}