function solve1()
{
    let kelvin=document.getElementById('kelvin');
    let forenhieght=document.getElementById('forenhieght');
    let celsius=document.getElementById('celsius');
    let kvl=kelvin.value;
    if (!isNaN(kvl)) {
        let cel=(kvl-273);
        let frn=(cel * 9 / 5) +32;

        celsius.textContent = cel.toFixed(2) + " °C";
        forenhieght.textContent = frn.toFixed(2) + " °F";
    }
    else
    {
        celsius.textContent =  "Invalid Input";
        forenhieght.textContent = "Invalid Input";
    }
    
}
function solve2()
{
    let kelvin2=document.getElementById('kelvin2');
    let forenhieght2=document.getElementById('forenhieght2');
    let celsius2=document.getElementById('celsius2');
    let cel2=parseFloat(celsius2.value);
    if (!isNaN(cel2)) {
        let kvl2=(cel2+273);
        let frn2=(cel2 * (9 / 5))+32 ;

        forenhieght2.textContent = frn2.toFixed(2) + " °F";
        kelvin2.textContent = kvl2.toFixed(2) + " K";
    }
    else
    {
        kelvin2.textContent =  "Invalid Input";
        forenhieght2.textContent = "Invalid Input";
    }
    
}
function solve3()
{
    let kelvin3=document.getElementById('kelvin3');
    let forenhieght3=document.getElementById('forenhieght3');
    let celsius3=document.getElementById('celsius3');
    let frn3=parseFloat(forenhieght3.value);
    if (!isNaN(frn3)) {
        let cel3=((frn3-32)*(5/9));
        let kvl3=((frn3-32) * (5 / 9)) +273;

        celsius3.textContent = cel3.toFixed(2) + " °C";
        kelvin3.textContent = kvl3.toFixed(2) + " K";
    }
    else
    {
        celsius3.textContent =  "Invalid Input";
        kelvin3.textContent= "Invalid Input";
    }
}
