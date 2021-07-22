const whichSchool = function(age)
{
  let schoolInfo = "";
  if (age < 13)
  {
    schoolInfo = "Elementary School";
  }
  else if(age >= 13 && age <= 18 )
  {
    schoolInfo = "Secondary School";
  }
  else
  {
    schoolInfo = "Lighthouse Labs";
  }
  return schoolInfo;
}

let age = 18;
console.log('I am ' + age + '. Which school should I go to?');
console.log(whichSchool(age));