var deg = 6;
var hr = document.getElementById('hr');
var mn = document.getElementById('mn');
var sg = document.getElementById('sg');
setInterval(function(){
    var date = new Date();
    var horas  = date.getHours()*30;
    var minutos = date.getMinutes()*deg;
    var segundos = date.getSeconds()*deg;
    hr.style.transform = `rotateZ(${horas+(minutos/12)}deg)`;
    mn.style.transform =`rotateZ(${minutos}deg)`
    sg.style.transform =`rotateZ(${segundos}deg)`
})



var teste = 6 
var hrDigital = document.getElementById('hr2')
var minDigital = document.getElementById('mn2')
//var segDigital = document.getElementById('sg2')
function carregar(){
    var data = new Date()
    horasDigital = data.getHours() 
    minutosDigital = data.getMinutes() 
    //segundosDigital = data.getSeconds() 

    hrDigital.innerHTML = ` ${horasDigital}`
    minDigital.innerHTML = `${minutosDigital}`
    //segDigital.innerHTML = `${segundosDigital}`
}