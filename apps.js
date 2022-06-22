function publishResult(){
    const a=document.getElementById("a").value;
    const b=document.getElementById("b").value;
    const c=document.getElementById("c").value;
    const d=document.getElementById("d").value;
    let total= parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d);
    document.getElementById("sum").innerHTML="Overall! : " + total;
    let average=(total/4);
    document.getElementById("average").innerHTML="Average : " + average;
}