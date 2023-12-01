const checkValidateData = (name,email) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isname = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(name);
    if (!isEmailValid) return "Email Id not valid";
    if(!isname) return "name is not valid";
    console.log(name);
}

export default checkValidateData;
