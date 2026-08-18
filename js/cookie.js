document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const bottoneAccetta = document.getElementById("accetta-cookie");

    // Controlla se l'utente ha già accettato i cookie in passato
    if (!localStorage.getItem("cookieAccettati")) {
        // Se non ha ancora accettato, mostra il banner con un leggero ritardo d'effetto
        setTimeout(() => {
            banner.classList.remove("cookie-banner-hidden");
            banner.classList.add("cookie-banner-visible");
        }, 1000);
    }

    // Gestisce il click sul pulsante "Accetta"
    bottoneAccetta.addEventListener("click", function () {
        // Salva la scelta nel browser dell'utente (durerà anche se chiude la pagina)
        localStorage.setItem("cookieAccettati", "true");
        
        // Nasconde il banner con l'animazione verso il basso
        banner.classList.remove("cookie-banner-visible");
        banner.classList.add("cookie-banner-hidden");
    });
});
