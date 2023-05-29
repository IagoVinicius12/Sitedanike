function mudarairforce(){
    window.document.getElementById("airforce").src="airforce.png"
}
function mudarairforce2(){
    window.document.getElementById("airforce").src="airforce2.png"
}
function mudarairforce3(){
    window.document.getElementById("airforce").src="airforce3.png"
}
function mudardownshifter(){
    window.document.getElementById("downshifter").src="downshifter.png"
}
function mudardownshifter2(){
    window.document.getElementById("downshifter").src="downshifter2.png"
}
function mudardownshifter3(){
    window.document.getElementById("downshifter").src="downshifter3.png"
}
function mudarairjordan(){
    window.document.getElementById("airjordan").src="airjordan.png"
}
function mudarairjordan2(){
    window.document.getElementById("airjordan").src="airjordan2.png"
}
function mudarairjordan3(){
    window.document.getElementById("airjordan").src="airjordan3.png"
} 
function fazerLogin() {
    var email = window.document.getElementById("email").value.toString();
    var senha = window.document.getElementById("senha").value.toString();
    
    console.log("Email:", email);
    console.log("Senha:", senha);
    
    if (email=="erolnazori@gmail.com" &&senha=="Iago250103#" ) {
        window.document.getElementById("quadrado").style.background = "green";
    } else {
        window.document.getElementById("quadrado").style.background = "red";
    }
}