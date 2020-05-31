$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select
    var skillSen = $("#skillSen");
    var nameSen = $("#nameSen");
    var interestSen = $("#interestSen");
    var emailSen = $("#inputEmailSen");
    var pwSen = $("#inputPwSen");
    var bioSen = $("#bioSen");

    //adding an event listener when profile is created (on submit button)
    $("#senseiSign").click(function() {
        event.preventDefault();
        var newSensei = {
            name: nameSen
                .val()
                .trim(),
            bio: bioSen
                .val()
                .trim(),
            skill: skillSen
                .val()
                .trim(),
            interest: interestSen
                .val()
                .trim(),
            email: emailSen
                .val()
                .trim(),
            pw: pwSen
                .val()
                .trim()
        }
        console.log(newSensei);
        submitSensei(newSensei);
        // location.replace("/profile");

        function submitSensei(sensei) {
            $.ajax({
                url: "/api/sensei",
                type: "POST",
                data: sensei
            })
        }
        location.href = "/";
      });
});

    
        // // Wont submit the post if we are missing any of the required inputs
        // // if (!nameSen.val().trim() || !bioSen.val().trim() || !pwSen.val().trim() || !emailSen.val() || !interestSen.val() || !skillSen.val()) {
        //     console.log(nameSen);
        // //     return;
       



