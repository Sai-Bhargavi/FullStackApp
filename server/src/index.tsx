import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";
import { dbconn } from "./Connection.js";
import { PlantRepository } from './PlantRepository.js';
import { PlantGarden, PlantStatus } from './Plants.js';

const PORT = process.env.PORT || 3001;

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});




//////////////////
const newPlant = new PlantGarden();
newPlant.name = "Cherry";
newPlant.category = 2;
newPlant.status = PlantStatus.Pending;
app.get("/plant", async (req, res) => {
    dbconn.then(conn => conn.getCustomRepository(PlantRepository))
        .then(result => result.save(newPlant))
        .then(() => res.sendStatus(200));
});




app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});