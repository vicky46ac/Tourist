function openMe(event){
    event.preventDefault();
    let c = document.querySelector("#openmenu");
    c.style.display="block";
}
function close1(event){
    let a=document.querySelector("#close");
     let c = document.querySelector("#openmenu");
    c.style.display="none";
}
 function sub(event){
        let n=document.getElementById("name").value;
        let e=document.getElementById("email").value;
        let p=document.getElementById("phone").value;
        let s=document.getElementById("subject").value;
        let m=document.getElementById("message").value;
            event.preventDefault();
            if(n && e && p && s && m){
                alert(`Welcome! ${n} your form submitted successfully!`);
                f1.reset();
            }
            else{
                alert("Fill all input");
            }
        }