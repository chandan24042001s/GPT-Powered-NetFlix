const checkValidateData = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
    //const isName=/^[a-zA-Z ]{2,30}$/.test(name);
    const isPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    if (!isEmailValid) return "Email Id not valid";
    //if(!isName) return "Name is not valid";
   if(!isPassword) return "Password not Valid"
   
}

export default checkValidateData;
