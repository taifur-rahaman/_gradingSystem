//Grade calculator



function num_to_grade() {

    let num_user = window.prompt("Enter your Score : ");
    num_user = parseFloat(num_user);

    switch (true) {
        case (num_user <= 100 && num_user >= 93):
            document.getElementById("grade").innerHTML = "Your Grade is A";
            break;
        case (num_user <= 92 && num_user >= 90):
            document.getElementById("grade").innerHTML = "Your Grade is A-";
            break;
        case (num_user <= 89 && num_user >= 87):
            document.getElementById("grade").innerHTML = "Your Grade is B+";
            break;
        case (num_user <= 86 && num_user >= 83):
            document.getElementById("grade").innerHTML = "Your Grade is B";
            break;
        case (num_user <= 82 && num_user >= 80):
            document.getElementById("grade").innerHTML = "Your Grade is B-";
            break;
        case (num_user <= 79 && num_user >= 77):
            document.getElementById("grade").innerHTML = "Your Grade is C+";
            break;
        case (num_user <= 76 && num_user >= 73):
            document.getElementById("grade").innerHTML = "Your Grade is C";
            break;
        case (num_user <= 72 && num_user >= 70):
            document.getElementById("grade").innerHTML = "Your Grade is C-";
            break;
        case (num_user <= 69 && num_user >= 67):
            document.getElementById("grade").innerHTML = "Your Grade is D+";
            break;
        case (num_user <= 66 && num_user >= 60):
            document.getElementById("grade").innerHTML = "Your Grade is D";
            break;
        case (num_user <= 59 && num_user >= 0):
            document.getElementById("grade").innerHTML = "Your Grade is F";
            break;
        default:
            document.getElementById("grade").innerHTML = "You didn't provide vaild data";
            break;
    }
}