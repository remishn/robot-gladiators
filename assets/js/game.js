
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;


console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'to choose.");
    //if player coses to fight, then fight

    if (promptFight === "fight" || promptFight === "FIGHT") {

    

    enemyHealth = enemyHealth - playerAttack;

    console.log
        (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

     // check enemy's health

     if (enemyHealth <= 0) {
         
        window.alert(enemyName + " has died!");
    }

    else {

        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

// check player health
    playerHealth = playerHealth - enemyAttack;

    console.log
        (enemyName + " attacked "  + playerName + ". " + playerName +  " now has " + playerHealth +  " health remaining.")

    if (playerHealth <= 0) {

        window.alert(playerName + " has died!");

    }

    else {
        window.alert(playerName +" still has " + playerHealth + " health left.");
    }
   
    //if player choses to skip

} else if (promptFight === "skip" || promptFight === "SKIP") {
   
    //confirm player wants to skip

    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight

    if (confirmSkip) {
        
        window.alert(playerName + " has decided to skip this fight. Goodbye!");

    // subtract money from playerMoney for skipping

    playerMoney = playerMoney - 2;

    }

    // if no (false), ask question again by running fight() again

    else {
        
        fight();
    }
}
    
 else {

    window.alert("You need to choose a valid option. Try again!");
}
}
fight();
