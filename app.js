function calculate() {
    const supply = document.getElementById("supply").value.split(',').map(Number);
    const demand = document.getElementById("demand").value.split(',').map(Number);
    let i = 0, j = 0;
    const result = [];
    
    while (i < supply.length && j < demand.length) {
        const amount = Math.min(supply[i], demand[j]);
        
        result.push(`Отправить ${amount} единиц от склада ${i + 1} к пункту ${j + 1}`);
        
        supply[i] -= amount;
        demand[j] -= amount;
        
        if (supply[i] === 0) i++;
        if (demand[j] === 0) j++;
    }
    
    document.getElementById("result").innerHTML = result.join('<br>');
}
