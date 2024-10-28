Planet Generator API

Overview

The **Planet Generator API** generates fictional planets with customizable features, inspired by real celestial bodies or entirely randomized. Customize planets based on age, size, terrain, climate, atmosphere, and other unique features.


Endpoints

1. Generate a Planet Based on an Existing Planet and Feature

- **Endpoint**: `/generate`
- **Parameters**:
  - `base` (optional): The base planet to use (e.g., `earth`, `mars`, `jupiter`).
  - `feature` (optional): A specific feature to emphasize (e.g., `terrain`, `atmosphere`).
- **Example Query**: curl "https://five-2-71ex.onrender.com/generate?base=earth&feature=terrain"

- **Description of Results**:
- Returns a fictionalized planet based on the selected base planet, with an emphasis on the specified feature.
- **Example Result**:
  ```
  {
    "name": "Earth-inspired Planet",
    "gravity": "9.8 m/s²",
    "terrain": "Enhanced terrain: oceans, mountains, forests",
    "climate": "temperate",
    "temperatureRange": "15°C - 45°C",
    "moons": 1
  }
  ```

---

2. Customize a Planet by Specific Feature Emphasis

- **Endpoint**: `/generate`
- **Parameters**:
- `feature` (optional): A feature to emphasize in the planet’s creation, such as `terrain`, `climate`, or `atmosphere`.
- **Example Query**:curl "https://five-2-71ex.onrender.com/generate?feature=atmosphere"

- **Description of Results**:
- Generates a planet with a unique or random feature focus, with random values for other attributes.
- **Example Result**:
  ```
  {
    "name": "Atmospheric Planet",
    "atmosphere": "dense fog of glowing spores",
    "terrain": "glass deserts",
    "climate": "foggy with bioluminescent mist",
    "moons": "three irregularly shaped moons"
  }
  ```

---

3. Generate a Planet with Specific Age, Base, and Size

- **Endpoint**: `/planet/:age`
- **Path Parameter**:
- `age` (required): The age of the planet in billions of years.
- **Query Parameters**:
- `base` (optional): The base planet to use as inspiration (e.g., `mars`, `jupiter`).
- `size` (optional): Specify the size of the planet (`small`, `medium`, `large`).
- **Example Query**:curl "https://five-2-71ex.onrender.com/planet/4.5?base=mars&size=large"

- **Description of Results**:
- Generates a planet inspired by the specified base with specific age and size characteristics.
- **Example Result**:
  ```
  {
    "name": "Mars-inspired Planet",
    "age": "4.5 billion years",
    "gravity": "high",
    "terrain": ["rocky deserts", "volcanoes", "polar ice caps"],
    "climate": "cold and dry",
    "moons": 2
  }
  ```

---

Random Planet Generation

If no parameters are specified, the API generates a fully randomized planet.

- **Example Query**:curl "https://five-2-71ex.onrender.com/generate"
- **Example Result**:
```
{
"name": "Xalonium",
"gravity": "low",
"terrain": "mushroom forests",
"climate": "constant rainfall",
"atmosphere": "thin layer with reflective particles",
"moons": "an orbiting asteroid belt"
}
```


---

Example Queries

1. **Generate a Small, Cold Planet with Desert Terrain**: curl "https://five-2-71ex.onrender.com/generate?size=small&climate=cold&terrain=desert-like"

2. **Generate a Planet with a Unique Atmosphere and Rings**: curl "https://five-2-71ex.onrender.com/generate?feature=atmosphere&moons=one tidal-locked moon"

3. **Generate a Randomized Planet**: curl "https://five-2-71ex.onrender.com/generate"

   
---

Descriptions of Results

- **Base Planet Features**: Returns data inspired by real planets like Earth, Mars, and Jupiter, with enhancements based on input parameters.
- **Randomized Elements**: If no `base` planet is specified, a fictional planet is generated with features like "mushroom forests" or "dense fog of glowing spores" for a unique result.
- **Age and Size Customization**: Specifying age and size adjusts elements like gravitational strength, atmospheric composition, and terrain variety.






