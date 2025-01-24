N = 5

for(let i = 1; i<=N; i++){
    bag = ""
    for(let j=1; j<=N; j++){
        if(i==1 || j==1 || i==N){
            bag += "*" + " "
        }
        else{
            bag += " " + " "
        }
    }
    console.log(bag)
}