export function validation(){

    let errors = 
    [
        {errorThis: false, text:"Nem adtál meg nevet!"},
        {errorThis: false, text:"Nem adtál meg e-mail címet!"},
        {errorThis: false, text:"Nem megfelelő az e-mail cím formátuma!"},
        {errorThis: false, text:"A jelszó túl rövid!"},
        {errorThis: false, text:"A jelszóban nem szerepel nagybetű!"},
        {errorThis: false, text:"A jelszóban nem szerepel szám!"},
        {errorThis: false, text:"A jelszóban nem szerepel különleges karakter!"},
        {errorThis: false, text:"Olyan karaktert is tartalmaz, amelyet nem szabad!"},
        {errorThis: false, text:"A két jelszó nem egyezik meg!"}
    ]





        for (let e of errors) {
            e.errorThis = false
        }
        var name_input = document.getElementById('name-input').value
        var email_input = document.getElementById('email-input').value
        var email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        var password_input = document.getElementById('password-input').value
        var repeat_password_input = document.getElementById('repeat-password-input').value
        if(name_input === "" || name_input === null){
            errors[0].errorThis = true
            //console.log("Nem adtál meg nevet")
        }
        if(!email_input.match(email_regex)){
            errors[1].errorThis = true
            //console.log("Nem adtál meg e-mail címet")
        }
        if(!email_input.match(email_regex)){
            errors[2].errorThis = true
            //console.log("Nem megfelelő az e-mail cím formátuma")
        }
        if(password_input.length < 8){
            errors[3].errorThis = true
            //console.log(password_input.length)
            //console.log("A jelszó túl rövid!")
        }
        if(!/[A-Z]/.test(password_input)){
            errors[4].errorThis = true
            //console.log("A jelszóban nem szerepel nagybetű!")
        }
        if(!/[0-9]/.test(password_input)){
            errors[5].errorThis = true
            //console.log("A jelszóban nem szerepel szám!")
        }
        if(!(/[*!$,%?;+@#<>\-_=\/:\\]/.test(password_input))){
            errors[6].errorThis = true
            //console.log("A jelszóban nem szerepel különleges karakter!")
        }
        var abc = "abcdefghijklmnopqrstuvwxyz"
        var number = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
        password_input.split('').forEach(c => {
            if(!(abc.includes(c)) && !(abc.toUpperCase().includes(c)) && !(number.includes(parseInt(c))) && !(c.match(/[*!$,%?;+@#<>\-_=\/:\\]/))){
                errors[7].errorThis = true
                //console.log("Olyan karaktert is tartalmaz, amelyet nem szabad!")
                //console.log(c)
            }
        });
        if(password_input !== repeat_password_input){
            errors[8].errorThis = true
            //console.log("A két jelszó nem egyezik meg!")
        }
        var box = document.querySelector('.error_box')
        console.log(box)
        let uzenet = false
        box.innerHTML = ""
        for (let e of errors) {
            if(e.errorThis == true){
                let sor = document.createElement("div")
                sor.classList.add("error")
                sor.innerHTML = e.text
                box.appendChild(sor)
                uzenet = true
            }
        }
        return uzenet;
}
