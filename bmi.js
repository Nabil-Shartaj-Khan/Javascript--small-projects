document.getElementById("submit").onclick = calculateBmi;

function calculateBmi(){
    event.preventDefault();
    const weightInput=document.getElementById("weight");
    const heightInput=document.getElementById("height");
    const showResult=document.getElementById("result");
    const showStatus=document.getElementById("status");
    const showAdvice=document.getElementById("advice");

    let weight = Number(weightInput.value);
    let height = Number(heightInput.value);

    if (height > 3) { 
        height /= 100;
    }

    const bmi = weight / (height * height);
    

    showResult.innerHTML=`Your BMI is: ${bmi.toFixed(2)}`;
  
    let bmiCategory=" ";
    let adviceShow=" ";
    
   
    
    if (bmi < 18.5) {
        bmiCategory = 'You are underweight';
        adviceShow = 'We recommend consulting a nutritionist for dietary advice. <a href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/healthy-ways-to-gain-weight/" target="_blank">Find out here.</a>';

    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Healthy weight';
        adviceShow = ' You have the perfect weight and health. <a href="https://www.cdc.gov/healthyweight/index.html#:~:text=Achieving%20and%20maintaining%20a%20healthy,a%20variety%20of%20healthy%20foods." target="_blank">Find out how to maintain it</a>';
    }

else if (bmi >= 24.9 && bmi < 29.9) {
        bmiCategory="you are overweight"
        adviceShow = '';
    } else {
        bmiCategory="You are an obese"
        adviceShow = '';
    }

    // Display BMI category
    showStatus.innerHTML = `Your BMI category is: ${bmiCategory}`;
    showStatus.innerHTML=bmiCategory;
    showAdvice.innerHTML=adviceShow;
}    

