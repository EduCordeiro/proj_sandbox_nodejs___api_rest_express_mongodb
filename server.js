const http = require("http");
const port = 3000;

const rotas = {
    '/' : 'Curso de Node',
    '/livros': 'Entrei na pag. de livros',
    '/autores': 'Lista de autores',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Contnt-type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log('Servidor escutando em http://localhost: ' + port);
})