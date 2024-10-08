// JavaScript Document
$(document).ready(function () {
  "use strict";

  /*----------------------------------------------------*/
  /*  Cntact Form Send Function
    /*----------------------------------------------------*/

  $(".contact-form").submit(function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    var flag = false;

    var name = $(".name");
    if (name.val() == "") {
      name.closest(".form-control").addClass("error");
      name.focus();
      flag = false;
      return false;
    } else {
      name.closest(".form-control").removeClass("error").addClass("success");
    }

    var email = $(".email");
    if (email.val() == "") {
      email.closest(".form-control").addClass("error");
      email.focus();
      flag = false;
      return false;
    } else {
      email.closest(".form-control").removeClass("error").addClass("success");
    }

    var msg = $(".message");

    $(".loading").fadeIn("slow").html("Loading...");
    $(".loading")
      .fadeIn("slow")
      .html('<font color="#48af4b">Mail sent Successfully.</font>')
      .delay(3000)
      .fadeOut("slow");
    $.ajax({
      type: "POST",
      data: new URLSearchParams(formData).toString(),
      url: "/",
      cache: false,
      success: function (d) {
        $(".form-control").removeClass("success");
        if (d) {
          // Message Sent? Show the 'Thank You' message and hide the form
          $(".loading")
            .fadeIn("slow")
            .html('<font color="#48af4b">Mail sent Successfully.</font>')
            .delay(3000)
            .fadeOut("slow");
        } else {
          $(".loading")
            .fadeIn("slow")
            .html('<font color="#ff5607">Mail not sent.</font>')
            .delay(3000)
            .fadeOut("slow");
          $(".contact-form").reset();
        }
      },
    });
    return false;
  });

  $("#reset").on("click", function () {
    $(".form-control").removeClass("success").removeClass("error");
  });

  /*----------------------------------------------------*/
  /*  Contact Form Validation
    /*----------------------------------------------------*/

  $(".contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 1,
        maxlength: 16,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 2,
      },
    },
    messages: {
      name: {
        required: "Please enter no less than (1) characters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      message: {
        required: "Please enter no less than (2) characters",
      },
    },
  });
});
