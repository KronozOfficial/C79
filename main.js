student_name = [];

function submit()
{
    var n1 = document.getElementById("s_1").value;
    var n2 = document.getElementById("s_2").value;
    var n3 = document.getElementById("s_3").value;
    var n4 = document.getElementById("s_4").value;

    student_name.push(n1);
    student_name.push(n2);
    student_name.push(n3);
    student_name.push(n4);

    console.log(student_name);

    document.getElementById("display_name").innerHTML = student_name;
    document.getElementById("sub").style.display="none";
    document.getElementById("sor").style.display="inline";
}
function sorting()
{
student_name.sort();
console.log(student_name);
document.getElementById("display_name").innerHTML = student_name;





}