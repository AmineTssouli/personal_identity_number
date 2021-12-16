
    function CheckIt(){

        userInput = String(document.getElementById('personID').value.replace(/[ \.\,\/\_]/g, ""));
        userData = formatData(userInput);
        dob = formatDate(userData);
        wrongStart = "<span style='color:red'>"
        wrongEnd = "</span>"
        display =""
        if(!isValidLength(userInput,11))  display += wrongStart+ "False - Wrong input length"+wrongEnd;
        else if(!isValidDate(dob)) display += wrongStart+"False - Invalid Date"+wrongEnd;
        else if(isValidId(userData)){
                display += "True <br>";
                display += "Sex: " + getSex(userData);
                display += "<br>Age: "+ calculateAge(dob);
        }
        else display += wrongStart+"False - ID is not correct!"+wrongEnd;
        toDisplay(userInput,display);

         }


    function toDisplay(userInput,display){

        display = "Input: " + userInput + "<br>is valid: " + display;

        document.getElementById("result").innerHTML = display;
    }

    function isValidLength(userInput, len){

        return userInput.length == len;      
    }


    function formatData(userInput){

         userInput = String(userInput);
         dd = userInput.substring(0,2);
         mm = userInput.substring(2,4);
         yy = userInput.substring(4,6);
         century = userInput.substring(6,7);
         individualNumber = userInput.substring(7,10);
         checkMark = userInput.substring(10,11);
         userData = [dd,mm,yy,century,individualNumber,checkMark];
    
        return userData;

    }


    function formatDate(data){
         century = ["+","-","A","B","C"];
         year = 1800;
        for(i = 0; i<century.length; i++){
            if(data[3] == century[i]){
                year += i*100 + Number(data[2]);
                break; 
            }
        }
        return String(data[1] +"/" +data[0] +"/" +year);

    }


    function isValidDate(dob){
        return (new Date(dob) != "Invalid Date" && !isNaN(new Date(dob)));
    }


    function calculateAge(dob){
        dob = new Date(dob);
        month_diff = Date.now() - dob.getTime();
        age_dt = new Date(month_diff);  
        year = age_dt.getUTCFullYear();
        age = Math.abs(year - 1970);
        return age

    }


    function getSex(userData){
         sex = "Female";
        if(userData[4]%2!=0) sex = "Male"
        return sex;
    }


    function isValidId(userData){
         marks = "0123456789ABCDEFHJKLMNPRSTUVWXY";
         combinedDigits = userData[0] + userData[1] + userData[2] + userData[4];
         nbr = Math.floor(combinedDigits%31)
         if(marks[nbr] != userData[5].toUpperCase()) return false;
         return true;
    }

    function createControlCharacter(userData) {
       
        userInput = String(document.getElementById('personID').value.replace(/[ \.\,\/]/g, ""));
        userData = formatData(userInput);
        dob = formatDate(userData);
        marks = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        wrongStart = "<span style='color:red'>"
        wrongEnd = "</span>"
        display =""
        if (!isValidLength(userInput,10))
        {

            display += wrongStart+ "False - Wrong input length<br>"+wrongEnd;
            
        }
        else if(!isValidDate(dob)) {

            display += wrongStart+"False - Invalid Date"+wrongEnd;
        }
        else  {

            combinedDigits = userData[0] + userData[1] + userData[2] + userData[4];
            nbr = Math.floor(combinedDigits%31)
            display =  marks[nbr]
        }
           
            
    
        document.getElementById("result").innerHTML = display
        
     
    }

