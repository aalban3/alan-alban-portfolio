const bars = document.querySelectorAll(".progress-bar");

async function loadSkills() {
    let i = 0;
    let skill1 =  setInterval(function(){
        i+=1
        bars[0].style.width = i + "%"
        if (i >= 70){
            clearInterval(skill1);
            i = 0;
            let skill2 =  setInterval(function(){
                i+=1
                bars[1].style.width = i + "%"
                if (i >= 50){
                    clearInterval(skill2);
                    i = 0;
                    let skill3 =  setInterval(function(){
                        i+=1
                        bars[2].style.width = i + "%"
                        if (i >= 65){
                            clearInterval(skill3);
                            i = 0
                            let skill4 =  setInterval(function(){
                                i+=1
                                bars[3].style.width = i + "%"
                                if (i >= 50){
                                    clearInterval(skill4);
                                    i = 0
                                    let skill5 =  setInterval(function(){
                                        i+=1
                                        bars[4].style.width = i + "%"
                                        if (i >= 45){
                                            clearInterval(skill5);
                                            i=0
                                        }
                                    },3);
                                }
                            },3);
                        }
                    },3);
                }
            },3);
        }
    },4);
    
    // let skill2 =  setInterval(function(){
    //     i+=1
    //     bars[1].style.width = i + "%"
    //     if (i >= 50){
    //         clearInterval(skill2);
    //         i = 0;
    //     }
    // },19);
    
    // let skill3 =  setInterval(function(){
    //     i+=1
    //     bars[2].style.width = i + "%"
    //     if (i >= 65){
    //         clearInterval(skill3);
    //     }
    // },18);
    
    // let skill4 =  setInterval(function(){
    //     i+=1
    //     bars[3].style.width = i + "%"
    //     if (i >= 50){
    //         clearInterval(skill4);
    //     }
    // },17);
    
    // let skill5 = setInterval(function(){
    //     i+=1
    //     bars[4].style.width = i + "%"
    //     if (i >= 45){
    //         clearInterval(skill5);
    //     }
    // },16);

}

// Run loaders
loadSkills()