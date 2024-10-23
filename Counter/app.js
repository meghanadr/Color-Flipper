let count =0;// we set intial valve to count=0
const value = document.querySelector("#value");//we are fetching span value by queryselector
const btns =  document.querySelectorAll(".btn");// button value in container by queryselectorAll


btns.forEach(function(btn){  // we are writing btn function whenever user click on btn for we are selecting which button by foreach
    btn.addEventListener("click",function(e){// calling eventlistenser
        const styles=e.currentTarget.classList;// figureing out which class is calling in classlist 
        console.log("stylessss",styles);
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("Increase")){
            count++;
        }else{
            count=0;
        }
        if(count>0){
            value.style.color="green";
        }if(count<0){
            value.style.color="red";
        } if(count===0){
            value.style.color="#222";
         }
        value.textContent=count;
    });
});
