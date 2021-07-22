let raining = true;
let cold = false;

if(raining)
{
    console.log("Don't forget your umbrella!");
}

if(cold)
{
    console.log("Make sure you pick out a scarf!");
}

console.log("Now you are ready to go outside!" + "\n");

//********************************** */

cold = false;

if(cold)
{
    console.log("Make sure you pick out a scarf!");
}
else
{
    console.log("Short sleeves are fine");
}

console.log("Now you are ready to go outside!" + "\n");


//********************************* */

let temperature = 25; //For short sleeves

console.log("Temprature is " + temperature +  " degree");
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!" + "\n");

//************************************ */

temperature = -1; //For short scarf

console.log("Temprature is " + temperature +  " degree");
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!" + "\n");

//*************************************** */

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote." + "\n");
 }

 
//*************************************** */

temperature = 45;

if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…" + "\n");
  }

  //************************************** */
raining = false;

  if (!raining) {
    console.log("Leave your umbrella at home! ");
  }