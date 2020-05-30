$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select
    var interestStu = $("#interestStu");
    var nameStu = $("#nameStu");
    var emailStu = $("#inputEmailStu");
    var pwStu = $("#inputPwStu");
    var bioStu = $("#bioStu");

    //adding an event listener when profile is created (on submit button)
    $("#studentSign").click(function() {
        alert("Handler for .click() called.");
        event.preventDefault();
        //constructing a new student profile
        var newStudent = {
            name: nameStu
                .val()
                .trim(),
            bio: bioStu
                .val(),
                // .trim(),
            interest: interestStu
                .val()
                .trim(),
            email: emailStu
                .val()
                .trim(),
            pw: pwStu
                .val()
                .trim(),
        
        }

        console.log(newStudent);
        submitStudent(newStudent);
        // location.replace("/profile");

        function submitStudent(student) {
            $.ajax({
                url: "/api/student",
                type: "POST",
                data: student
            })
        }

      });
});