import path from 'path';
import { wrapContainerPage, generateTile } from './templates';
import { readFileSync } from 'fs';

const express = require('express');

const app = express();

const host = 'localhost';
const port = 8001;

function build_page(config) {
  return wrapContainerPage(config.tiles.map(tile => {
    return generateTile(tile.name, tile.url, tile.icon);
  }).join('\n'));
}

app.get('/', (req, res) => {
  const config = JSON.parse(readFileSync(path.resolve(__dirname + '/../config.json')));
  res.send(build_page(config));
});

app.get('/icons/:icon', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../icons/' + req.params.icon));
});

app.get('/styles.css', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../style/styles.css'));
});

app.listen(port, () => {
  console.log(`Listening at http://${host}:${port}`);
});