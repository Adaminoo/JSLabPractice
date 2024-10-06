let n = 5;
let itr = n;

function factOfN() {
    if (n > 1) {
        n--;
        itr = itr * n;
        console.log(itr);
        factOfN();
    } else {
        console.log(itr)
    }
}