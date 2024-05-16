let phoneBooks = [];

class Contact {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}

function addContact(name, phone, email) {
    let add = new Contact(name, phone, email);
    phoneBooks.push(add);
}

function displayContact() {
    for(let i = 0; i < phoneBooks.length; i++) {
        console.log(`Tên: ${phoneBooks[i].name}, Số Điện Thoại: ${phoneBooks[i].phone}, Email: ${phoneBooks[i].email}`);
    }
}

addContact("Phan Nhựt Hào", "123456789", "haophannhut26@gmail.com");
addContact("Nguyễn Thanh Hạ", "987654321", "nguyenha@gmail.com");
addContact("Nguyễn Ngọc Diệp", "124343253", "NgocDiep39790@gmail.com")

displayContact();
