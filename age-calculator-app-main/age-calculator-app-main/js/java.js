// OUTPUT
const yearOutput = document.querySelector(".output-year");
const monthOutput = document.querySelector(".output-month");
const dayOutput = document.querySelector(".output-day");
const calculateButton = document.querySelector(".sumbit-btn");

// INPUT
const yearInput = document.getElementById("year");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");

// ERROR
const dayError = document.querySelector(".error-day");
const monthError = document.querySelector(".error-month");
const yearError = document.querySelector(".error-year");

// Event listeners
calculateButton.addEventListener("click", computeAge);
[dayInput, monthInput, yearInput].forEach(input => {
    input.addEventListener("input", checkInput);
});

function checkInput() {
    validateDayInput();
    validateMonthInput();
    validateYearInput();
}

function validateDayInput() {
    const dayVal = +dayInput.value;
    dayError.textContent = (dayVal < 1 || dayVal > 31) ? "Please Enter A Valid Day" : "";
}

function validateMonthInput() {
    const monthVal = +monthInput.value;
    monthError.textContent = (monthVal < 1 || monthVal > 12) ? "Please Enter A Valid Month" : "";
}

function validateYearInput() {
    const yearVal = +yearInput.value;
    yearError.textContent = (yearVal < 1 || yearVal > new Date().getFullYear()) ? "Please Enter A Valid Year" : "";
}

function areInputsValid() {
    return !dayError.textContent && !monthError.textContent && !yearError.textContent;
}

function computeAge() {
    checkInput();

    if (areInputsValid()) {
        const birthDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
        const currentDate = new Date();
        let yearsOld = currentDate.getFullYear() - birthDate.getFullYear();
        let monthsOld = currentDate.getMonth() - birthDate.getMonth();
        let daysOld = currentDate.getDate() - birthDate.getDate();

        if (daysOld < 0) {
            monthsOld--;
            const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            daysOld += daysInLastMonth;
        }

        if (monthsOld < 0) {
            yearsOld--;
            monthsOld += 12;
        }

        dayOutput.textContent = daysOld;
        monthOutput.textContent = monthsOld;
        yearOutput.textContent = yearsOld;
    } else {
        alert("ERROR: Please Enter a Valid Date");
    }
}
