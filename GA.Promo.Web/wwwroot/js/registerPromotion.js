$(document).ready(function () {
    Init();
    $("#btnRegister").on("click", RegisterPromotion);
});

var connectionState = false;

function Init() {
    try {
        if (System.connection !== null && System.connection.state === 1) {
            connectionState = true;
        }
        else {
            setTimeout(function () { Init(); }, 1000);
        }
    }
    catch (ex) {
        console.error(ex);
    }
}

async function RegisterPromotion() {

    if (connectionState === false) return;

    var promotion = {
        Description: $("#Description").val(),
        Value: $("#Value").val(),
        Company: $("#Company").val()
    };

    if (promotion.Company === "" || promotion.Value === "" || promotion.Description === "") {
        $("#MsgWarning").fadeIn("slow");
        return;
    }

    var result = await System.connection.invoke("RegisterPromotion", promotion);

    if (result === true) {
        $("#MsgWarning").hide();
        $("#MsgSuccess").fadeIn("slow");
        setTimeout(function () { $("#MsgSuccess").fadeOut(); }, 2500);
        $('input[type="text"],input[type="number"]').val("");
    }
}