let userChoic = document.querySelectorAll('.games');
let imageCpu = document.querySelectorAll('.gamehiden');
let cpuChoic = Math.floor((Math.random() * 10)/4);

console.log(cpuChoic)
for(let x = 0; x <= userChoic.length - 1;x++){
    userChoic[x].addEventListener('click',()=>{
        if(x == 0){
            document.getElementById('khaghaz').classList.add('gamehiden')
            document.getElementById('gheichi').classList.add('gamehiden')

        }else if(x == 1){
            document.getElementById('sang').classList.add('gamehiden')
            document.getElementById('gheichi').classList.add('gamehiden')
            

        }else{
            document.getElementById('khaghaz').classList.add('gamehiden')
            document.getElementById('sang').classList.add('gamehiden')
            
        }
        showCpu();
        
    })
    
}




function showCpu(){
    if(cpuChoic == 0){
        document.getElementById('sangc').classList.remove('gamehiden')
    }
    else if(cpuChoic == 1){
        document.getElementById('khaghazc').classList.remove('gamehiden')
        
    }
    else{
        document.getElementById('gheichic').classList.remove('gamehiden')

    }

}

for(let y = 0; y <= userChoic.length - 1;y++){
    userChoic[y].addEventListener('click',()=>{
        if(y == 0){
            if(cpuChoic == 0){
                document.getElementById('p1').innerHTML = "equal"
            }else if(cpuChoic == 1){
                document.getElementById('p1').innerHTML = "cpu win"
            }else{
                document.getElementById('p1').innerHTML = "user win"
            }
        }
        if(y == 1){
            if(cpuChoic == 0){
                document.getElementById('p1').innerHTML = "user win"
            }else if(cpuChoic == 1){
                document.getElementById('p1').innerHTML = "equal"
            }else{
                document.getElementById('p1').innerHTML = "cpu win"
            }
        }
        if(y == 2){
            if(cpuChoic == 0){
                document.getElementById('p1').innerHTML = "cpu win"
            }else if(cpuChoic == 1){
                document.getElementById('p1').innerHTML = "user win"
            }else{
                document.getElementById('p1').innerHTML = "equal"
            }
        }
    })
}

