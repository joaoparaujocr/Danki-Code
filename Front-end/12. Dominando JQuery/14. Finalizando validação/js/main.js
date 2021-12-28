$(document).ready(function() {
    //Open a registration form
    function openForm(){
        $('.btn').click(function(e){
            $('.bg').fadeIn();
            e.stopPropagation();
        });
    }
    //Close a registration form
    function closeForm(){
        $('body, .btn-close').click(function(){
            $('.bg').fadeOut();
        })

        $('.form').click(function(e){
            e.stopPropagation();
        })
    }

    //function to disable an input and show the user
    function fieldInvalidation(element){
        element.css('border', '3px solid red').css('color', 'red');
        element.val('Campo Invalido');
    }

    //function to validate the username in the registration
    function validationName(nameForm){
        if(nameForm == ''){
            return false;
        }
        var nameVal = nameForm.val().toUpperCase();
        var amountName = nameVal.split(" ").length;
        var strName = nameVal.split(" ");
        if(amountName >= 2){
            for(var i = 0; i < amountName; i++){
                if(strName[i].match(/^[A-Z]{1,}$/) && nameVal != 'CAMPO INVALIDO'){
                    return true;
                }
                else{
                    fieldInvalidation(nameForm);
                    return false;
                }
            }
        }
        else{
            fieldInvalidation(nameForm);
            return false;
        }
    }
    
    //function to reset the invalid field to its original form
    function resetFieldInvalidation(element){
        element.css('border', '0px solid red').css('color', 'black');
        element.val('');
    }

    //function to validate the phone number
    function validationPhone(phoneNumber){
        var valPhone = phoneNumber.val();
        if(valPhone == ''){
            return false;
        }

        if(valPhone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null && valPhone != 'CAMPO INVALIDO'){
            return false;
        }
    }

    //function to validate the email
    function validationEmail(emailForm){
        var valueEmail = emailForm.val();

        if(valueEmail == ' '){
            return false;
        }
        if(valueEmail.match(/^([a-z0-9-._]{1,})+@+([a-z.]{1,})$/) == null && valueEmail != 'CAMPO INVALIDO'){
            return false
        }
    }

    $('form#form1').submit(function(e){
        //e.preventDefault()
        var nameForm = $('input[name=nome]');
        var phoneNumber = $('input[name=phone]');
        var emailForm = $('input[name=email]')
        
        if(validationName(nameForm) == false || validationPhone(phoneNumber) == false || validationEmail(emailForm) == false){
            if(validationName(nameForm) == false){
                fieldInvalidation(nameForm);
            }

            if(validationPhone(phoneNumber) == false){
                fieldInvalidation(phoneNumber);
            }

            if(validationEmail(emailForm) == false){
                fieldInvalidation(emailForm);
            }

            return false;
        }

        else if(validationEmail(emailForm) != false && validationPhone(phoneNumber) != false && validationName(nameForm) != false){
            alert('formulário enviado');
        }
    });

    $('input[type=text], input[type=email]').focus(function(){
        resetFieldInvalidation($(this));
    })
    
    openForm();
    closeForm();
});