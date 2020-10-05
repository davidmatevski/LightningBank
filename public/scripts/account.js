function updateBalance(accountID, amount) {
    $("#actionLoadingModal").modal({
        backdrop: 'static'
    });

    var routeName;
    if (amount > 0) {
        routeName = "/transaction/deposit";
    } else {
        amount = -amount;
        routeName = "/transaction/withdraw";
    }

    $.ajax(routeName, {
        contentType: "application/json",
        data: JSON.stringify({ accountID, amount }),
        dataType: "json",
        method: "POST",
        success: function (data, status, jqXHR) {
            redirectTo("/transaction");
        },
        error: function (jqXHR, status, err) {
            var errorJson = JSON.parse(jqXHR.responseText);

            displayError(errorJson.message);
            $("form[name=accountForm] input[name=amount]").val("");
            $("#actionLoadingModal").modal("hide");
        }
    });
};

function updateLoanBalance(accountID, amount){

    $("#actionLoadingModal").modal({
        backdrop: 'static'
    });

    var routeName;
    var type;
    if (amount > 0) {
        routeName = "/transaction/lending";
        type = "lending";
    } else {
        amount = -amount;
        routeName = "/transaction/payment";
        type = "payment";
    }

    $.ajax(routeName, {
        contentType: "application/json",
        data: JSON.stringify({ accountID, amount }),
        dataType: "json",
        method: "POST",
        success: function (data, status, jqXHR) {
            redirectTo("/transaction");
        },
        error: function (jqXHR, status, err) {
            var errorJson = JSON.parse(jqXHR.responseText);

            displayError(errorJson.message);

            var form;
            if (type == "payment") {
                form = $("form[name=paymentForm");
            } else if (type == "lending") {
                form = $("form[name=lendingForm");
            } else {
                $("form");
            }

            $("input[name=amount]", form).val("");

            $("#actionLoadingModal").modal("hide");
        }
    });

}

function displayError(msg) {
    clearError();
    $("#msgSection").html(`<div class="alert alert-danger">${msg}</div>`);
}

function clearError() {
    $("#msgSection div").remove();
}