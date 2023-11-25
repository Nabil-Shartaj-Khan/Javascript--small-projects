function calculate(){
    
    let firstDigit = Number(document.getElementById("firstnum").value);
    let secondDigit = Number(document.getElementById("secondnum").value);
    let selectedOperation = document.getElementById("select").value;
    let resultElement = document.getElementById("result");


    let resultValue="";

    if (selectedOperation === "add") {
        resultValue = firstDigit + secondDigit;
      } else if (selectedOperation === "subtraction") {
        resultValue = Math.round(firstDigit - secondDigit);
      }
      else if (selectedOperation==="multiply"){
        resultValue=Math.round(firstDigit*secondDigit)
      }
      else if (selectedOperation==="division"){
        resultValue=(firstDigit/secondDigit).toFixed(2);
      }
      else if (selectedOperation==="root"){
        resultValue=Math.pow(firstDigit, 1 / secondDigit).toFixed(2)
      }
      else if (selectedOperation==="exponent"){
        resultValue=Math.pow(firstDigit,secondDigit).toFixed(2);
      }
      else if (selectedOperation==="percentage"){
        resultValue=((firstDigit/secondDigit)*100).toFixed(2)
      }
      else if (selectedOperation==="area"){
        resultValue=((1/2)*(firstDigit*secondDigit)).toFixed(2)
      }
      

      resultElement.textContent=resultValue;

}

