//boolean, number bigint string symbol null undefine

interface Mountain{
    name:string,
    height:number
    hasBeenClimbed?:Boolean //the ? names this element optional where it's not necessarily needed (works on parameters in functions, too)
}

let mountains:Mountain[] = [{name: "Kilimanjaro", height: 19341}, 
                            {name: "Everest", height: 29029}, 
                            {name: "Denali", height: 20310}];



//function signature - what does it take in and what does it return
function findNameOfTallestMountain(mountains:Mountain[]) : string{
    let currentTallest = 0;
    let currentName = "";
    
    for(let mountain of mountains){
        if(mountain.height > currentTallest){
            currentTallest = mountain.height;
            currentName = mountain.name
        }
    }
    return currentName;

//alternate route 1
    // let result:string = '';
    // let newHeight:number = 0
    // for(let item of mountains){
    //     if(item.height > newHeight){
    //         newHeight = item.height;
    //         result = item.name;
    //     }
    // }
    // return result;
    
//alternate route 2
    // let tallestMountain = mountains.reduce((prev, current) => (prev.height > current.height) ? prev : current);
    // return tallestMountain.name;

}

console.log(findNameOfTallestMountain(mountains));

export {findNameOfTallestMountain, Mountain};

