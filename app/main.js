const input = document.querySelector("input");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const bar = document.querySelector(".progress-bar .bar");


// create  progress bar 

let count;

button.onclick = () => {
   const value = input.value;

   h1.innerHTML = value;
   count = value;

   let int = setInterval(() => {
       count--;
       h1.innerHTML = count;

       bar.style.width = `${(100*count) / value}%`;

       if(count <= 0){
         clearInterval(int);
       }
   }, 1000);

};




