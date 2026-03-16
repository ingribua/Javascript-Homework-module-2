function pairwiseSums(numbers)
{
    const results = new Array();
    for (let i = 0; i < numbers.length - 1; i++) 
        {
        const a = numbers[i]; 
        const b = numbers[i + 1];
        const sum = a + b;
        results.push({ a: a, b: b, sum: sum });
        }
    return results;
}
function calculate() 
{
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map(Number);
    const pairs = pairwiseSums(numbers);
    const list = document.getElementById("results");
    list.innerHTML = "";

    for (let i = 0; i < pairs.length; i++) 
        {
        const item = document.createElement("li");
        item.textContent = pairs[i].a + " + " + pairs[i].b + " = " + pairs[i].sum;
        list.appendChild(item);
        }
}
