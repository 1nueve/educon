$(document).ready(function() {

	var user = {};

	function validateEmpty(a, b){
		if (a === "") {
			console.log("Please give a " + b)
		}
	}

	function validateEmail(email){
		var input=$(email);
		var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
			allDataValid()
		}
		else{
			input.removeClass("valid").addClass("invalid");
			console.log("Email Invalid, please check")

		}
	}

	function validatePhoneLength(){
		if (user.phone !== "") {

			var phoneUser = user.phone;
			var phoneUserCount = phoneUser.length;

			if (phoneUserCount !== 10) {
				console.log("The number must be at least 10 digits, please verify")
			}else{
				validateEmail("#email")
			}
			
		}
	}

	function allDataValid(){
		console.log("Name: " + user.name +  " Phone: " + user.phone + " Email: " + user.email)
	}

	$("#submit").click(function(e){
		e.preventDefault();
		
		user.name = $("input#name").val();
		user.phone = $("input#phone").val();
		user.email = $("input#email").val();


		validateEmpty(user.name, "name") // Validate if the name is empty

		validateEmpty(user.phone, "phone")// Validate if the phone is empty
		
		validateEmpty(user.email, "email") // Validate if the email is empty

		if (user.name !== "") {
			if (user.phone !== "") {
				validatePhoneLength() // Validate if the phone length is correct.
			} 
		} 

	})
});