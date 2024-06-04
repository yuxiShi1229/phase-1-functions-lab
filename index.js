// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue >= 42){
    return distanceFromHqInBlocks = someValue - 42;
    } else if (someValue < 42){
    return distanceFromHqInBlocks = 42 - someValue;   
    }
}

function distanceFromHqInFeet(someValue) {
    if (someValue >= 42){
        return distanceFromHqInFeet = (someValue -42) * 264;
        } else if (someValue < 42){
        return distanceFromHqInFeet = (42 - someValue) * 264;   
        }
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    if (destination >= start){
        return distanceFromHqInFeet = (destination - start) * 264;
        } else if (destination < start){
        return distanceFromHqInFeet = (start - destination) * 264;   
        }
    //returns the number of feet traveled
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceFromHqInFeet;
    if (destination >= start){
        distanceFromHqInFeet = (destination - start) * 264;
        } else if (destination < start){
        distanceFromHqInFeet = (start - destination) * 264;   
        }
    if (distanceFromHqInFeet<=400){
        return 0;
    } else if(distanceFromHqInFeet > 400 && distanceFromHqInFeet <= 2000){
        return (distanceFromHqInFeet - 400) * 0.02;
    } else if(distanceFromHqInFeet > 2000 & distanceFromHqInFeet <= 2500){
        return 25;
    } else if(distanceFromHqInFeet > 2500){
        return 'cannot travel that far';
    }
}



