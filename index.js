import express from 'express';
import planetData from './planets.json' assert { type: 'json' };

const app = express();
const port = 3001;

//Generate a Planet Based on an Existing Planet and Feature
app.get('/generate', (req, res) => {
    const base = req.query.base;
    const feature = req.query.feature;
    let generatedPlanet = {};

    if (feature && !base) {
        console.log("Feature-only request detected:", feature);

        if (planetData.randomElements[feature]) {
            generatedPlanet[feature] = planetData.randomElements[feature][Math.floor(Math.random() * planetData.randomElements[feature].length)].description;
        } else {
            return res.send("Please specify a valid feature to focus on (e.g., terrain, atmosphere).");
        }

        Object.keys(planetData.randomElements).forEach(key => {
            if (!generatedPlanet[key]) {
                generatedPlanet[key] = planetData.randomElements[key][Math.floor(Math.random() * planetData.randomElements[key].length)].description;
            }
        });

        return res.send(generatedPlanet);
    }

    if (base && planetData.basePlanets[base]) {
        const basePlanet = planetData.basePlanets[base];
        generatedPlanet = { ...basePlanet };

        if (feature && basePlanet[feature]) {
            generatedPlanet[feature] = `Enhanced ${feature}: ${basePlanet[feature].join(", ")}`;
        }

        return res.send(generatedPlanet);
    }

    res.send("Please provide a valid base planet (e.g., earth, mars, jupiter) or a valid feature.");
});

// Customize a Planet by Specific Feature 
app.get('/generate', (req, res) => {
    const feature = req.query.feature;
    let generatedPlanet = {};

    if (feature && planetData.randomElements[feature]) {
        generatedPlanet[feature] = planetData.randomElements[feature][Math.floor(Math.random() * planetData.randomElements[feature].length)].description;
        
        Object.keys(planetData.randomElements).forEach(key => {
            if (!generatedPlanet[key]) {
                generatedPlanet[key] = planetData.randomElements[key][Math.floor(Math.random() * planetData.randomElements[key].length)].description;
            }
        });

        return res.send(generatedPlanet);
    } else {
        return res.send("Please specify a valid feature to focus on (e.g., terrain, atmosphere).");
    }
});

//  Generate a Planet with Specific Age, Base, and Size
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
        description: `A ${size} planet inspired by ${base}, aged ${age} billion years.`,
        moons: basePlanet.moons || "No moons specified"
    };

    res.send(generatedPlanet);
});

app.listen(port, () => {
    console.log(`Planet Generator API is running on port ${port}`);
});
