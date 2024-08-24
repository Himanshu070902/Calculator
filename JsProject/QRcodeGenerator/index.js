function generateQRCode(){
    var website=document.getElementById('website').value
    if(website){
        let generateQRCode=document.getElementById('qrcode')
        generateQRCode.innerHTML=""
        new QRCode(generateQRCode,website)
        document.getElementById('qrcode-container').style.display="block"
    }
    else{
        alert("please the valid url")
    }
}
generateQRCode()