$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select
    var interestStu = $("#interestStu");
    var nameStu = $("#nameStu");
    var emailStu = $("#inputEmailStu");
    var pwStu = $("#inputPWStu");
    var bioStu = $("#bioStu");

    //adding an event listener when profile is created (on submit button)
    $().on("submit", handleFormSubmit);
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing any of the required inputs
        if (!nameStu.val().trim() || !bioStu.val().trim() || !pwStu.val().trim() || !emailStu.val() || !interestStu.val()) {
            return;
        }
        //constructing a new sensei profile
        var newStudent = {
            name: nameStu
                .val()
                .trim(),
            bio: bioStu
                .val()
                .trim(),
            interest: interestStu
                .val()
                .trim(),
            email: emailStu
                .val()
                .trim(),
            pw: pwStu
                .val()
                .trim(),
            studentId: studentId.val()
        };

        submitStudent(newStudent);

    };
});