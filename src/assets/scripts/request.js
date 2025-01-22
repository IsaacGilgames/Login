export function request(uzenet){
    var name_input = document.getElementById('name-input').value
    var email_input = document.getElementById('email-input').value
    var password_input = document.getElementById('password-input').value

    if(!uzenet){
        fetch ("https://localhost:44357/api/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name: name_input,
                Email: email_input,
                Passwd: password_input,
                BirthDate: "2025-01-14T11:31:17.809Z",
                Sex: true
            }),
       })
       //.then(response) => response.json()
        .then((response) => {
            console.log(response.status)
            if (!response.ok) {
                //409
                if(response.status === 409){
                    alert("Ez az e-mail cím már regisztrálva van.")
                }
                else{
                    throw new Error(`HTTP hiba! Státuszkód: ${response.status}`);
                }
            }
            else{
                alert("Sikeres regisztráció!");
            }
            return response.json()
        })
        /*.then((result) => {
        if (result.message === "EMAIL_EXISTS") {
            let errorElement = document.createElement("div");
            errorElement.classList.add("error");
            errorElement.textContent = "Ezzel az e-mail címmel már regisztráltak!";
            box.appendChild(errorElement);
        } else if (result.message === "SUCCESS") {
            
        } else {
            alert("Hiba történt. Próbáld újra később.");
        }
        })*/
        .catch((error) => {
            console.error("Hiba történt:", error);
            alert("Server hiba. Kérlek próbált meg később!");
        });
    }
}
