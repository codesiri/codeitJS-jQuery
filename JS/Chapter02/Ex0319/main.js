let current = 1;
let previous = 0;

for (let i = 1; i <= 10; i++) {
    console.log(current);
    let tmp = previous
    previous = current;
    current = current + tmp;
}