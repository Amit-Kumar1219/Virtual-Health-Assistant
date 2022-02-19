function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if(input == "hello"){
    // Simple responses
        return("How may i help you...<br>1.Diagnose <br>2.Prescription");
    }
    if(input == "1"){
        let Message = "Let's check what disease you have...<br>"+
        "1.runny nose <br>2.Sore Throat<br>3.sneezing<br>4.cough<br>5.Head and Body Aches<br>6.congestion<br>7.bloating<br>"+
        "choose any three";
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + Message + '</span></p>';
        if(input == "1" && input == "3" && input == "4"){
            return "Cold";
        }
        else if(input == "3" && input == "5" && input == "7"){
            return "Diarrhea";
        }
        else if(input == "2" && input == "5" && input == "6"){
            return "rhino-virus";
        }
        // <form>
        // <input type="radio" name="option" id="diagnose" value="Diagnose"/>
        // <label for="Diagnose">Diagnose</label>
        // <input type="radio" name="option" id="prescription" value="Prescription" />
        // <label for="Prescription">Prescription</label>
        // </form>
        // if(diagnose.checked == true){
        //     return "D";
        // } else {
        //     return "P"; 
        // }
        // ); 
    }

    if(input == "2"){
        document.write("For what disease do you want to take precautions...<br>1.cold <br>2.Diarrhea <br>3.headache <br>4.Stomach Aches");
        if(input == "1"){
            return("Wash your hands often.<br>" 
            +"Washing your hands for at least 20 seconds can help protect you from getting sick.<br>"
            +"Avoid touching your face.<br>Don't smoke.<br>"
            +"Use disposable items if a family member is infected.<br>"
            +"Keep household surfaces clean.");
        }
        if(input == "2"){
            return("Drink only bottled water, even for tooth brushing.<br>"+
            "Avoid eating food from street vendors.<br>"+
            "Avoid ice made with tap water.<br>"+
            "Eat only those fruits or vegetables that are cooked or can be peeled.<br>" +
            "Be sure that all foods you eat are thoroughly cooked and served steaming hot.");
        }
        if(input == "3"){
            return("void headache triggers. Keeping a headache diary can help you determine what triggers your headaches so that you can avoid the triggers. ...<br>"+
            "Avoid medication overuse.<br>"+
            "Get enough sleep.<br>"+
            "Don't skip meals.<br>"+
            "Exercise regularly.<br>"+
            "Reduce stress.");
        }
        if(input == "4"){
            return ("Don't overeat.<br>"+
            "Eat fiber-rich foods, such as fruits and vegetables, so your bowel movements are regular.<br>"+
            "Drink lots of fluids, especially water.<br>"+
            "Wash your hands before eating.<br>"+
            "Don't eat right before bedtime.");
        }
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}



