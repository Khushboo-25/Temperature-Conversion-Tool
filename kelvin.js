function kelvinConverter()
{
    let kvl=document.getElementById('kelvin');
    let frn=document.getElementById('forenhieght');
    let cel=document.getElementById('celsius');
    let kl=kvl.value;
    if (!isNaN(kl)) {
        let cl=(kl-273);
        let fn=(cl * 9 / 5) +32;

        cel.textContent = cl.toFixed(2) + " °C";
        frn.textContent = fn.toFixed(2) + " °F";
    }
    else
    {
        cel.textContent =  "Invalid Input";
        frn.textContent = "Invalid Input";
    }
    
}
function celsiusConverter()
{
    let kvl2=document.getElementById('kelvin2');
    let frn2=document.getElementById('forenhieght2');
    let cel2=document.getElementById('celsius2');
    let cl2=parseFloat(cel2.value);
    if (!isNaN(cl2)) {
        let kl2=(cl2+273);
        let fn2=(cl2 * (9 / 5))+32 ;

        frn2.textContent = fn2.toFixed(2) + " °F";
        kvl2.textContent = kl2.toFixed(2) + " K";
    }
    else
    {
        kvl2.textContent =  "Invalid Input";
        frn2.textContent = "Invalid Input";
    }
    
}
function forenhieghtConverter()
{
    let kvl3=document.getElementById('kelvin3');
    let frn3=document.getElementById('forenhieght3');
    let cel3=document.getElementById('celsius3');
    let fn3=parseFloat(frn3.value);
    if (!isNaN(fn3)) {
        let cl3=((fn3-32)*(5/9));
        let kl3=((fn3-32) * (5 / 9)) +273;

        cel3.textContent = cl3.toFixed(2) + " °C";
        kvl3.textContent = kl3.toFixed(2) + " K";
    }
    else
    {
        cel3.textContent =  "Invalid Input";
        kvl3.textContent= "Invalid Input";
    }
    
}
