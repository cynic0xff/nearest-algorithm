let input = 127;
let step = 2;
let start = 100;
let result = 0;

function calculate_static_area() {
    for(let x=0; x<10; x++) {

        //get the min start value, add the step value and multiply it
        result = (start + step * x);

        //if the result is greater than or equal to the input the set the input value to equal the nearest step number
        if(result >= input) {
            console.log('>>>> FOUND <<<<<');
            input = result;
            break;
        }
    }
}

function calculate_area() {

    let found = false;
    let x =0;

    while(!found) {

        //get the min start value, add the step value and multiply it
        result = (start + step * x);

        //if the result is greater than or equal to the input the set the input value to equal the nearest step number
        if(result >= input) {
            console.log('>>>> FOUND <<<<<');
            input = result;
            found = true;
        }

        x++;
    }
}

//calculate_static_area();
calculate_area();

console.log(`Final result: ${input}`);
