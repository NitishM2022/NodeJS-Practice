const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('welcome to our homepage')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('here is about page')
        res.end()
    }
    else
    { 
        res.write(`
            <h1>404</h1>
            <p>Page you are looking for does not exist</p>
            <a href="/">back home </a>
        `)
        res.end()
    }
})

server.listen(2000) 