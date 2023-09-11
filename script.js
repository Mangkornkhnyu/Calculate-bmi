document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(weightInput.value);
        const heightInCm = parseFloat(heightInput.value);

        if (!isNaN(weight) && !isNaN(heightInCm) && heightInCm > 0) {
            // แปลงส่วนสูงจากเซนติเมตรเป็นเมตร
            const heightInM = heightInCm / 100;
            const bmi = calculateBMI(weight, heightInM);
            const bmiCategory = getBMICategory(bmi);
            resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
        } else {
            resultDiv.innerHTML = "Please enter valid weight and height.";
        }
    });

    function calculateBMI(weight, height) {
        return weight / (height * height);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi < 24.9) {
            return "Normal Weight";
        } else if (bmi < 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    }
});
