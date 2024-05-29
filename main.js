//this generater password was maid by ZAIDI Mohamed known as friizor 



function genpass(length, includelower, majuscule, num, specialchar){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const upperrcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numlist = "0123456789";
    const special = "!@#$%^&*()_+=-.";
    let selectedMethods = '';
    let password = '';
    selectedMethods += includelower ? lowercase : "";
    selectedMethods += majuscule ? upperrcase : "";
    selectedMethods += num ? numlist : "";
    selectedMethods += specialchar ? special : "";
    for(let i = 0; i < length; i++){
        const choiceChar = Math.floor(Math.random() * selectedMethods.length);
        password += selectedMethods[choiceChar];
    }
    console.log(selectedMethods);
    console.log(password);
    return password;
}


function generate(){
    const length = document.getElementById('length').value;
    const includelower = document.getElementById('minscule').checked ? true : false;
    const includeupper = document.getElementById('majuscule').checked ? true : false;
    const incluednumber = document.getElementById('Number').checked ? true : false;
    const includesymbol = document.getElementById('Symbols').checked ? true : false;
    const result = document.getElementById('result');
    const GeneratedPassword = document.getElementById('Generated-Password');
    const img = document.getElementById('img');

    
    if(!includelower && !includeupper && !incluednumber && !includesymbol || length < 8){
        result.textContent = `Password length must be at least 8, and one combination must be selected `;
    }
    else{
        const password = genpass(length, includelower, includeupper, incluednumber ,includesymbol);
        result.textContent = `The Generated Password is :`
        GeneratedPassword.style.display = 'block';
        GeneratedPassword.textContent = password;
    }
}
