function calcu(){
    let n1 =parseInt(document.getElementById('n1').value);
    let n2 =parseInt(document.getElementById('n2').value);
    let oper =document.getElementById('oper').value;

    if(oper === '+'){
        document.getElementById('result').innerHTML='Result: '+(n1+n2);
    }
    if(oper === '-'){
        document.getElementById('result').innerHTML='Result: '+(n1-n2);
    }
    if(oper === '*'){
        document.getElementById('result').innerHTML='Result: '+n1*n2;
    }
    if(oper === '/'){
        document.getElementById('result').innerHTML='Result: '+n1/n2;
    }
    if(oper === 'select'){
        document.getElementById('result').innerHTML='Select Opertor first!';
    }
   
}
