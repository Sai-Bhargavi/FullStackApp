import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";
//import { dbconn } from "./Connection.js";
import { PlantRepository, PlantRepositorySave } from './PlantRepository.js';
import { PlantGarden, PlantStatus } from './Plants.js';
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.static('public'));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.resolve(__dirname, '../../client/build')));
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.post("/addFruit", (req, res) => {
    PlantRepositorySave.savetoDb(req.body.name, req.body.category, req.body.status)
        .then(respon => console.log(respon))
        .then(() => res.sendStatus(200));
});
//////////////////
const newPlant = new PlantGarden();
newPlant.name = "Cherry";
newPlant.category = 2;
newPlant.status = PlantStatus.Pending;
app.get("/plant", async (req, res) => {
    PlantRepository.find({
        select: { name: true, category: true, status: true, image_url: true },
    }).then(respon => res.send(respon));
    // dbconn.then(conn => conn.getCustomRepository(PlantRepository))
    //     .then(result => result.save(newPlant))
    //     .then(() => res.sendStatus(200));
});
app.get("/plant/:name", async (req, res) => {
    PlantRepository.findByName(req.params.name)
        .then(respon => console.log(respon))
        .then(() => res.sendStatus(200));
    // app.get("/plant/:name", async (req, res) => {
    //     PlantRepository.findBy({ name: req.params.name })
    //         .then(respon => console.log(respon))
    //         .then(() => res.sendStatus(200));
    // dbconn.then(conn => conn.getCustomRepository(PlantRepository))
    //     .then(result => result.findByName(req.params.name))
    //     .then(respon => console.log(respon))
    //     .then(() => res.sendStatus(200));
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
