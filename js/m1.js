let result = prompt("What char is your favorite?", ["a", "b", "c"]);
let result2 = confirm("Are you sure?");
if (result2){
    alert(`I'm JavaScript, and I love ${result}`);
}
else{
    alert(`I'm JavaScript, and I'm not sure if I love ${result}`);
}
