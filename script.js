
			// takes the form field value and returns true on valid number
			//source:http://stackoverflow.com/questions/12310837/implementation-of-luhn-algorithm

			function verifyCard() {
			var value = null;
			value = $("#creditNumber").val();
			//alert(value);

			// accept only digits, dashes or spaces
			    if (/[^0-9-\s]+/.test(value))
			    {
			    	alert("Invalid characters found !! Re-enter your card number");
			    	return false;
			   	}

			// The Luhn Algorithm.
			    var nCheck = 0, nDigit = 0, bEven = false;
			    value = value.replace(/\D/g, "");

			    for (var n = value.length - 1; n >= 0; n--) {
			        var cDigit = value.charAt(n),
			            nDigit = parseInt(cDigit, 10);

			        if (bEven) {
			            if ((nDigit *= 2) > 9) nDigit -= 9;
			        }

			        nCheck += nDigit;
			        bEven = !bEven;
			    }

			    //return (nCheck % 10) == 0;
			    if ((nCheck % 10) == 0){
					$.mobile.changePage("#validPage",{reverse: false, transition:"flip"});
					return true;
			    }
			    else{
			    	$.mobile.changePage("#invalidPage",{reverse: false, transition:"flip"});
			    	return false;
			    }
			}
