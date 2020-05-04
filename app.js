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

function calculate_cartons() {

    let found = false;
    let input = 10;
    let min_carton = 10;
    let cartons = min_carton;
    let sqft_increment = 20;
    let min_sqft_increment = 200;
    let result = 0;

    let loop = input - min_carton;

    result = min_sqft_increment;

    for(let y=0; y<loop; y++) {

        result = min_sqft_increment + sqft_increment * loop;
        cartons++;
    }
    
    console.log('Sqft: ' + result);
    console.log('Cartoons: ' + cartons);

}

//calculate_static_area();
//calculate_area();
calculate_cartons();

//console.log(`Final result: ${input}`);
