let n=13;
let factor=0;
for (let i=1;i<=n;i++){
    if(n%i===0){
factor++
    }
    if(factor==2){
        console.log("it's a prime");
    }else("not a prime");
}