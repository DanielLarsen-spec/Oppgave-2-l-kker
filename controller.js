
function change(x){
getIn = x.value;

}

function input(){
//count reset
aCount = 0;
eCount = 0;
iCount = 0;
oCount = 0;
uCount = 0;
yCount = 0;
aeCount = 0;
oeCount = 0;
aaCount = 0;

for(let i = 0; i < getIn.length; i++){
    const input = getIn.charAt(i);
    
 if(input == "a"){
    aCount++;
} else if(input == "e"){
 eCount++;
} else if(input == "i"){
    iCount++
} else if (input == "o"){
    oCount++
} else if(input == "u"){
    uCount++
} else if(input == "y"){
    yCount++
} else if(input == "æ"){
    aeCount++
} else if(input == "ø"){
    oeCount++
} else if(input == "å")
    aaCount++


}

updateView()
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    