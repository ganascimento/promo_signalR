$(document).ready(function () {
    Init();
});

function Init() {
    try {
        if (System.connection !== null && System.connection.state === 1) {
            System.connection.on("PromotionsConstruct", function (promotions) {
                var content = ConstructHtml(promotions);
                if (content !== null) $("#ContentPromotions").html(content);
            });
            GetPromotions();
        }
        else {
            setTimeout(function () { Init(); }, 500);
        }
    }
    catch (ex) {
        console.error(ex);
    }
}

async function GetPromotions() {
    try {
        var result = await System.connection.invoke("GetPromotions");

        if (result) {
            var content = ConstructHtml(result);
            if (content !== null) $("#ContentPromotions").html(content);
        }
    }
    catch (ex) {
        console.error(ex);
    }    
}
function SelectPromotion(id) {
    System.connection.invoke("SelectPromotion", id);
}

function ConstructHtml(promotions) {

    if (promotions.length === 0) return null;

    var content = '';
    var index = 1;

    promotions.forEach(item => {
        if (index === 1) content += '<div class="row">';

        content += `
        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="border border-dark content-promotion">
                <div class="row">
                    <div class="col-9">
                        <div class="col-12">
                            ${item.company}
                        </div>
                        <div class="col-12">
                            ${item.description}
                        </div>
                        <div class="col-12 text-right value-promotion">
                            R$ ${item.value}
                        </div>
                    </div>
                    <div class="col-3 border-left border-dark text-center">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="content-get-promotion" onclick="SelectPromotion(${item.id})">
                                    <p>Pegar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        `;

        if (index === 2) {
            content += '</div>';
            index = 1;
        }
        else index++;
    });

    return content;
}