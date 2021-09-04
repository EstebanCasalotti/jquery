
class users {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const data = (e) => {
    e.preventDefault()
    
    const user = $("#user").val()
    const userEmail = $("#email").val()
    const usuario = new users(user, userEmail)
    printData(usuario)
}
const printData = (users) => {

    const print = $("#data")
    print.append(`
    <p>${users.name} ${users.email}</p>
    
    
`);

}







const buttom = $("#btn")
buttom.on("click", data)
