$(function () {
    $("#loginBtn").click(function () {
        console.log("Logging In");

        var form = $("form[name=loginForm]");
        var username = $("input[name=username]", form).val();
        var password = $("input[name=password]", form).val();

        $("#loginError").html("");

        if (username != '' && password != '') {
            loginAs({
                username,
                password
            });
        } else {
            $("#loginError").html("Username and Password required!");
        }
    });

    $("#btnDeposit").click(function(){
        var form = $("form[name=accountForm]");
        var accountID = $("input[name=accountID]", form).val();
        var amountString = $("input[name=amount]", form).val();
        if (!amountString) {
            displayError("Enter valid amount to deposit!");
            return;
        }

        var amount = +amountString;
        if (amount <= 0) {
            displayError("Enter a positive number");
            return;
        }

        console.log(amount);
        updateBalance(accountID, amount);
    });

    $("#btnWithdraw").click(function(){
        var form = $("form[name=accountForm]");
        var accountID = $("input[name=accountID]", form).val();
        var amountString = $("input[name=amount]", form).val();
        if (!amountString) {
            displayError("Enter valid amount to withdraw!");
            return;
        }

        var amount = +amountString;
        if (amount <= 0) {
            displayError("Enter a positive number");
            return;
        }
        updateBalance(accountID, -amount);
    })

    $("#btnPayNow").click(function(){
        var form = $("form[name=paymentForm]");
        var accountID = $("input[name=accountID]", form).val();
        var amountString = $("input[name=amount]", form).val();
        if(!amountString) {
            displayError("Enter valid payment amount!");
            return;
        }
        var amount = +amountString;
        if(amount <=0){
            displayError("Please enter a positive number");
        }
        updateLoanBalance(accountID, -amount);
    })

    $("#btnLoan").click(function(){
        var form = $("form[name=lendingForm]");
        var accountID = $("input[name=accountID]", form).val();
        var amountString = $("input[name=amount]", form).val();
        if(!amountString) {
            displayError("Enter valid loan amount!");
            return;
        }
        var amount = +amountString;
        if(amount <= 0){
            displayError("Please enter a positive number");
        }
        updateLoanBalance(accountID, amount);
    })
})
