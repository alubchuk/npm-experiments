'use strict';

const app = module.exports = require('koa')();



const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>A small live reload test page</title>
            <script type="text/javascript" src="//localhost:9091"></script>
        </head>
        <body>
            Page rendered at: <span id="demo"></span>
            <script type="text/javascript">
                document.getElementById("demo").innerHTML = new Date();
            </script>
        </body>
    </html>
`;
app.use(function *() {
    if (this.request.path == '/client') {
        this.body = html;
        return;
    }
    this.body = "Koa says Hi!";
});

let port = process.env.PORT || (process.argv[2] || 3000);

if(!module.parent){
    app.listen(port);
    console.log(`Application started. Listening on port: ${port}`);
}
