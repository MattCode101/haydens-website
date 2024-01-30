var count = 3;
var output = document.getElementById('output');
function countClicks()
{
    count = count / 2;
    output.innerHTML = count;
}