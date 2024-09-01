import os from "os"
import http from "http"
import path from "path"
import fs from "fs"

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/alumno') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Nombre:german martini, Comisión: DWN4AV');
    } else if (req.url === '/info') {
        const systemInfo = {
            platform: os.platform(),
            version: os.release(),
            memory: `${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
            cpu: os.cpus()[0].model,
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(systemInfo, null, 2));
    } else if (req.url === '/static') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error interno del servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
