var QRCode = require('qrcode')
var http = require('http')
QRCode.toDataURL('bnjj!', function (err, url) {
    console.log(url)
})

// var fs = require('fs'),
//     path = require('path');
// var barcode = require('barcode');
// var code39 = barcode('code39', {
//     data: "it works",
//     width: 400,
//     height: 100,
// });


// var outfile = path.join(__dirname, 'imgs', 'mycode.png')
// code39.saveImage(outfile, function (err) {
//     if (err) throw err;return canvas.toDataURL("image/png");

//     console.log('File has been written!');
// });



