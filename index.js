import express from 'express';
import planetData from './planets.json' assert { type: 'json' }; 
const app = express();
const port = 3001;

// Generate a Planet Based on an Existing Planet and Feature
app.get('/generate', (req, res) => {
    const base = req.query.base;
    const feature = req.query.feature;

    if (!planetData.basePlanets[base]) {
        return res.send("Please provide a valid base planet (e.g., earth, mars, jupiter).");
    }

    const basePlanet = planetData.basePlanets[base];
    let generatedPlanet = { ...basePlanet };

    if (feature && basePlanet[feature]) {
        generatedPlanet[feature] = `Enhanced ${feature}: ${basePlanet[feature].join(", ")}`;
    }

    res.send(generatedPlanet);
});

//Customize a Planet by Feature Emphasis



// Generate a Planet with Specific Age, Base, and Size
app.get('/planet/:age', (req, res) => {
    const age = req.params.age;
    const base = req.query.base;
    const size = req.query.size || "medium"; 
    if (!planetData.basePlanets[base]) {
        return res.send("Please provide a valid base planet (e.g., earth, mars, jupiter).");
    }

    const basePlanet = planetData.basePlanets[base];
    const generatedPlanet = {
        ...basePlanet,
        age: `${age} billion years`,
        size: size,
        description: `A ${size} planet inspired by ${base}, aged ${age} billion years.`
    };

    res.send(generatedPlanet);
});

app.listen(port, () => {
    console.log(`Planet Generator API is running on port ${port}`);
});
