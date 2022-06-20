//1
function meeting(x,need){
    if(!need) return "Game On"; //одно из условий
    const a = [];//результирующий массив
    let chair = need;//сколько стульев осталось забрать 
    for(let i = 0; i < x.legth; i++){
     if(chair > 0){
        let c = x[i][1] - x[i][0].length //кол-во людей - кол-во стульев
        a.push(c > 0 ? c : 0 )//добавление элементов в конец массива
        if(c > 0) chair -= c;//изменяем необходимое кол-во
     }else{
         return a;
     }

    }
 
    return chair <= 0 ? c : "Not enough!" ;//если не нужны стулья,возвращаем массив. иначе "Not enough"
}
//3

function count(num1,num2 , mark) {
    switch(mark){
        case "*":
            return num1 * num2;
        case "-":
            return num1 - num2;
        case "+":
            return num1 + num2;
        case "/":
            if (num2 !== 0){
                return num1 / num2;
            }else{
                return 'не делится'
            }
    }
}