export function show_hide(id){
    var passwordInput = document.getElementById(id)
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Átállítjuk text-re
    } else {
        passwordInput.type = 'password'; // Visszaállítjuk password-re
    }
}