function loginAs(userData) {
    $("#loadingModal").modal({
        backdrop: 'static'
    });

    $.ajax("/account/login", {
        contentType: "application/json",
        data: JSON.stringify(userData),
        dataType: "json",
        method: "POST",
        success: function (data, status, jqXHR) {
            redirectTo("/transaction");
        },
        error: function (jqXHR, status, err) {
            var errorJson = JSON.parse(jqXHR.responseText);

            console.log("Error")

            $("#loginError").html(errorJson.message);
            $("#loadingModal").modal("hide");
        }
    });
};