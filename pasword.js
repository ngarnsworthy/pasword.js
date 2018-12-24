// put this in server var pasword = []
//  if (req.method == "POST") {
  //   var body = "", obArr;
  //
  //   req.on("data", function(data) {
  //     body += data;
  //   });
  //   req.on('end', function() {
  //     console.log(body);
  //     objArr = body.split('&').map(function(o) { return o.split("=")} );
  //     logon.push( { un: objArr[0][1], pw: objArr[1][1], remember: objArr[3][1]==="on" });
  //
  //     jsonfile.writeFile("data.json", logon, function(err) {
  //       console.error(err);
  //     })
  //
  //     console.log(logon);
  //     console.log("END");
  //   });
  //   res.writeHead(200, {
  //     'Content-Type': 'text/html'
  //   });
  //   res.end('post received');
  // } else {
  //
  //   switch (filePath) {
  //     case "action_page.php":
  //
  //     break;
  //     default:
  //       fs.readFile(filePath, function(error, content) {
  //         if (error) {
  //           if (error.code == 'ENOENT') {
  //             fs.readFile('./404.html', function(error, content) {
  //               res.writeHead(200, {
  //                 'Content-Type': contentType
  //               });
  //               res.end(content, 'utf-8');
  //             });
  //           } else {
  //             res.writeHead(500);
  //             res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
  //             res.end();
  //           }
  //         } else {
  //           res.writeHead(200, {
  //             'Content-Type': contentType
  //           });
  //           res.end(content, 'utf-8');
  //         }
  //       });
  //   }
  // }
