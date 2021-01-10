name_of_the_student_Array=[];
function submit(){
    var name_1=document.getElementById("name_of_the_student_1").value;
    var name_2=document.getElementById("name_of_the_student_2").value;
    var name_3=document.getElementById("name_of_the_student_3").value;
    var name_4=document.getElementById("name_of_the_student_4").value;
    var name_5=document.getElementById("name_of_the_student_5").value;
    
    name_of_the_student_Array.push(name_1);
    name_of_the_student_Array.push(name_2);
    name_of_the_student_Array.push(name_3);
    name_of_the_student_Array.push(name_4);
    name_of_the_student_Array.push(name_5);

    console.log (name_of_the_student_Array);
    document.getElementById("display_name").innerHTML=name_of_the_student_Array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_the_student_Array.sort();
    console.log (name_of_the_student_Array);
    document.getElementById("display_name").innerHTML=name_of_the_student_Array;
}
    
