$(document).ready(function () {
    System.Init();
});

var System = System || {};

System = {
    connection: null,
    Init: function () {
        System.connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:44303/Promo").build();

        System.connection.start()
            .then(function () {
                System.connection.on("NewPromotions", function () {
                    $(".card-abs-message").fadeIn("slow");
                    setTimeout(function () { $(".card-abs-message").fadeOut("slow"); }, 1500);
                });
            })
            .catch(function () {
                System.connection = false;
                console.error("Error connection SignalR");
            });
    }
};