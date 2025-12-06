import * as http from 'http';
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');


    if (req.url === '/') {
        res.end('Home page');
    } else if (req.url === '/about') {
        res.end('About page');
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});


server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000')
})