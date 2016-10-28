function checkForm(form)
{
    if(form.uname.value =="")
    {
        alert("User name is Required!");
        form.uname.focus();
        return false
    }
    if(form.password.value =="")
    {
        alert("Password is Required!");
        form.password.focus();
        return false;
    }
    if(form.cpassword.value =="")
    {
        alert("Confirm Password is Required!");
        form.cpassword.focus();
        return false;
    }
    if(form.password.value != form.cpassword.value)
    {
        alert("Password not match");
        return false;
    }
    if(form.phone.value =="")
    {
        alert("Phone is Required!");
        form.phone.focus();
        return false;
    }
    var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regex.test(form.phone.value)==false)
    {
        alert("phone number must be like this format XXX-XXX-XXXX        XXX.XXX.XXXX                  XXX XXX XXXX'");
        form.email.focus();
        return false;
    }
    if(form.email.value =="")
    {
        alert("Email is Required!");
        form.email.focus();
        return false;
    }
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if(re.test(form.email.value)==false)
    {
        alert("Email Address is not valid");
        form.email.focus();
        return false;
    }
    if(form.iban.value =="")
    {
        alert("IBAN is Required!");
        form.iban.focus();
        return false;
    }
}
function validateEmail(email) 
{
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return isEmpty(email) || re.test(email);
}