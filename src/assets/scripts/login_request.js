export function login_request(setUser){
    var email_input = document.getElementById('email-input').value
    var password_input = document.getElementById('password-input').value

    if(true){
        fetch ("https://localhost:44357/api/Users/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Email: email_input,
                Passwd: password_input
            })
       })
       //.then(response) => response.json()
        .then((response) => {
            console.log(response.status)
            if (!response.ok) {
                //409
                if(response.status === 401){
                    alert("Hibás a jelszó.")
                }
                else if(response.status === 404){
                    alert("Az e-mail cím nem található!")
                }
                else{
                    throw new Error(`HTTP hiba! Státuszkód: ${response.status}`);
                }
            }
            else{
                console.log(response.body)
                alert("Sikeres bejelentkezés!");
                
            }
            return response.json()
        })
        .then((data) => {
            console.log(data)
            localStorage.setItem("user", JSON.stringify(data));
            // Beállítjuk a state-et, hogy az alkalmazás tudja, hogy a felhasználó be van jelentkezve
            setUser(data);  // Itt setUser egy setter függvény, amit props-on keresztül kapunk
        }) 
        .catch((error) => {
            console.error("Hiba történt:", error);
            alert("Server hiba. Kérlek próbált meg később!");
        });
    }
}
