function teste() {
    alert("funcionou");
}

function abreLink(link, bot) {
    try {
        const numBot = Number(bot);
        let linkAjustado = "";
        if (numBot == 1)
            linkAjustado = "malito:" + link;
        window.location.href = linkAjustado;
    }
    catch (e) {
        console.error(e.message);
    }
}