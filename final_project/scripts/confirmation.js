// Parse the URL parameters
const url = new URL(window.location);
let params  = url.searchParams;

let firstName = params.get("first-name");
let email = params.get("email");
let phoneNumber = params.get("phone-number");
let fruit1 = params.get("fruit1");
let fruit2 = params.get("fruit2");
let fruit3 = params.get("fruit3");
let instructions = params.get("special-instructions");

// Update the HTML content
document.querySelector('.confirmName').textContent = "Hi " + firstName + ", your order was placed!";
document.querySelector('#confirmationFruits').textContent = "Fruits: " + fruit1 + ", " + fruit2 + ", "+ fruit3;
document.querySelector('.name-On-order').textContent = firstName;
document.querySelector('#confirmationEmail').textContent = "Email: " + email;
document.querySelector('#confirmationPhone').textContent = "Phone Number: " + phoneNumber;
document.querySelector('#confirmationInstructions').textContent = "Instructions: " + instructions;

function loadFruitData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            //get diffrent fruit objects based on customer input
            const fruitObject1 = data.find(fruit => fruit.name === fruit1);
            const fruitObject2 = data.find(fruit => fruit.name === fruit2);
            const fruitObject3 = data.find(fruit => fruit.name === fruit3);

            //Get Totals:

            //carbs
            let fruitCarbs1 = fruitObject1.nutritions.carbohydrates;
            let fruitCarbs2 = fruitObject2.nutritions.carbohydrates;
            let fruitCarbs3 = fruitObject3.nutritions.carbohydrates;

            let totalCarbs = fruitCarbs1 + fruitCarbs2 + fruitCarbs3;

            //protein
            let fruitProtein1 = fruitObject1.nutritions.protein;
            let fruitProtein2 = fruitObject2.nutritions.protein;
            let fruitProtein3 = fruitObject3.nutritions.protein;

            let totalProtein = fruitProtein1 + fruitProtein2 + fruitProtein3;
            
            //fat
            let fruitFat1 = fruitObject1.nutritions.fat;
            let fruitFat2 = fruitObject2.nutritions.fat;
            let fruitFat3 = fruitObject3.nutritions.fat;

            let totalFat = fruitFat1 + fruitFat2 + fruitFat3;

            //sugar
            let fruitSugar1 = fruitObject1.nutritions.sugar;
            let fruitSugar2 = fruitObject2.nutritions.sugar;
            let fruitSugar3 = fruitObject3.nutritions.sugar;

            let totalSugar = fruitSugar1 + fruitSugar2 + fruitSugar3;

            //calories
            let fruitCalories1 = fruitObject1.nutritions.calories;
            let fruitCalories2 = fruitObject2.nutritions.calories;
            let fruitCalories3 = fruitObject3.nutritions.calories;

            let totalCalories = fruitCalories1 + fruitCalories2 + fruitCalories3;

            //add the data to the page
            document.querySelector('#totalCarbs').textContent = "Total Carbs: " + totalCarbs.toFixed(1)  + "(g)";
            document.querySelector('#totalProtein').textContent = "Total Protein: " + totalProtein.toFixed(1) + "(g)";
            document.querySelector('#totalFat').textContent = "Total Fat: " + totalFat.toFixed(1) + "(g)";
            document.querySelector('#totalSugar').textContent = "Total Sugar: " + totalSugar.toFixed(1)  + "(g)";
            document.querySelector('#totalCalories').textContent = "Total Calories: " + totalCalories.toFixed(1);

        }
    };

    xhr.open('GET', './data/fruits.json', true);
    xhr.send();
}
loadFruitData()





