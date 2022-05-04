var btn = document.querySelector('#btn')
var price = document.querySelector('#price')


btn.addEventListener('click', function(){

    const XHR = new XMLHttpRequest();
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    XHR.onreadystatechange = function() {
        if(XHR.readyState == 4 && XHR.status ==200){
            const data = JSON.parse(XHR.responseText)
            price.innerHTML = '$ ' + data.bpi.USD.rate
            console.log(data.bpi.USD.rate);
        }
    }



    XHR.open('GET', url);
    XHR.send();
})