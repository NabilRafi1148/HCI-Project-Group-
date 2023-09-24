function validate(){
    const name=document.getElementById('in_name').value
    const email=document.getElementById('in_email').value
    const pass=document.getElementById('in_pass').value
    const age=document.getElementById('in_age').value
    const address=document.getElementById('in_address').value
    const tnc=document.getElementById('in_check').checked
    const male=document.getElementById('in_gender_male').checked
    const female=document.getElementById('in_gender_female').checked

    if(!name||!email||!pass||!age||!address){
        alert('All field must be filled!')
        return false
    } else if(name.length<=3){
        alert('Name must contain more than 3 characters!')
        return false
    } else if(!email.endsWith('.com')){
        alert('Email must ends with .com!')
        return false
    } else if(pass.length<5){
        alert('Password must contain 5 or more characters!')
        return false
    } else if(age < 0){
        alert('Age must be more than 0!')
        return false
    } else if(!male&&!female){
        alert('Gender must be choosen!')
        return false
    } else if(tnc==false){
        alert('You must agree with the Terms and Conditions!')
        return false
    }
    return true
}

