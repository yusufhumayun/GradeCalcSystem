function marksObtained()
{
    let s1 = parseInt(document.getElementById('sub1').value);
    let s2 = parseInt(document.getElementById('sub2').value);
    let s3 = parseInt(document.getElementById('sub3').value);
    let s4 = parseInt(document.getElementById('sub4').value);
    let s5 = parseInt(document.getElementById('sub5').value);

    if(s1 > 100 || s2 > 100 || s3 >100 || s4 > 100 || s5>100)
    {
        alert("Please enter correct value");
    }
    else{
        var obtainMarks = s1 + s2+ s3+ s4+ s5 ;
        document.getElementById("obtain").innerHTML=obtainMarks ;
        var per = obtainMarks/5;
        document.getElementById("percent").innerHTML=per ;

        //for remarks
        if(s1 > 40 && s2 > 40 && s3 > 40 && s4 > 40 && s5> 40)
        {
            document.getElementById('remarks').innerHTML = "<span style='color:green'>Pass</span>" ;
        }
        else
        {
            document.getElementById('remarks').innerHTML = "<span style='color:red'>Fail!</span>" ;
        }
       
        //for grade
        if(per >= 90)
        {
            document.getElementById('grade').textContent = "A+" ;
        }else if (per >= 80) {
            document.getElementById('grade').textContent = "A" ;
        }
        else if ( per >= 70 ) {
            document.getElementById('grade').textContent = "B+" ;
        }
        else if ( per >= 60 ) {
            document.getElementById('grade').textContent = "B" ;
        }
        else if ( per >= 50 ) {
            document.getElementById('grade').textContent = "C+" ;
        }
        else if ( per >= 40 ) {
            document.getElementById('grade').textContent = "C" ;
        } else {
            document.getElementById('grade').textContent = "F" ;
        }
    }
    return false ;
}
// function grade_find()
// {
//     if
// }