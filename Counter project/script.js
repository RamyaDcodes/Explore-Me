var decrease = document.getElementById("dec");
var resetnew = document.getElementById("reset");
var increase = document.getElementById("inc");
var access = document.getElementById("acessnum");
var count = 0;

function change(action) {
    if (action === 'decrease') {
        count--;
        access.textContent = count;
    } else if (action === 'increase') {
        count++;
        access.textContent = count;
    } else if (action === 'resetnew') {
        count = 0;
        access.textContent = count;
    }
}
