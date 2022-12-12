function deleteProduct(confirmRequest) {
    let message

    if(confirmRequest){
        message = 'The product is deleted';
    }else {
        message = 'No product is deleted';
    }
    return message;
}

let confirmRequest = confirm('Do you want to delete?');
let msg = deleteProduct(confirmRequest);

alert(msg);