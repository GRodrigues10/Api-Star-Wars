import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

// Schema para filmes, séries, documentários, populares e jogos.
const Data = mongoose.model("Data", {
  title: String,
  description: String,
  backdrop_url: String,
  poster_url: String,
  trailer_url: String,
  cast: String,
  age_rating: String,
  duration: String,
  seasons: Number,
  year: Number,

  types: {
    type: [
      {
        type: String,
        enum: [
          "filme",
          "documentario",
          "serie_live_action",
          "serie_animada",
          "desenho",
          "jogo",
          "populares",
        ],
      },
    ],
    required: true,
  },
});

app.get("/", async (req, res) => {
  const data = await Data.find();
  return res.send(data);
});

app.get("/data/:id", async (req, res) => {
  try {
    const item = await Data.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item não encontrado" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/", async (req, res) => {
  try {
    const data = new Data({
      title: req.body.title,
      description: req.body.description,
      backdrop_url: req.body.backdrop_url,
      poster_url: req.body.poster_url,
      trailer_url: req.body.trailer_url,
      age_rating: req.body.age_rating,
      duration: req.body.duration,
      seasons: req.body.seasons,
      year: req.body.year,
      cast: req.body.cast,
      types: req.body.types,
    });

    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/:id", async (req, res) => {
  const data = await Data.findByIdAndDelete(req.params.id);
  return res.send(data);
});

app.put("/:id", async (req, res) => {
  try {
    const data = await Data.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        backdrop_url: req.body.backdrop_url,
        poster_url: req.body.poster_url,
        trailer_url: req.body.trailer_url,
        age_rating: req.body.age_rating,
        duration: req.body.duration,
        seasons: req.body.seasons,
        year: req.body.year,
        cast: req.body.cast,
        types: req.body.types,
      },
      { new: true }
    );
    return res.send(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Schema para personagens.

const Character = mongoose.model("Character", {
  name: String,
  age: Number,
  side: String,
  description: String,
  apprentices: [String],
  poster_url: String,
  backdrop_url: String,
});

app.get("/personagens", async (req, res) => {
  const character = await Character.find();
  return res.send(character);
});

app.get("/", async (req, res) => {
  const data = await Data.find();
  return res.send(data);
});

app.get("/personagens/:id", async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ error: "Personagem não encontrado" });
    res.json(character);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/personagens", async (req, res) => {
  try {
    const character = new Character({
      name: req.body.name,
      age: req.body.age,
      side: req.body.side,
      description: req.body.description,
      apprentices: req.body.apprentices,
      poster_url: req.body.poster_url,
      backdrop_url: req.body.backdrop_url,
    });

    await character.save();
    res.status(201).json(character); // retorna o personagem criado
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/personagens/:id", async (req, res) => {
  const character = await Character.findByIdAndDelete(req.params.id);
  return res.send(character);
});

app.put("/personagens/:id", async (req, res) => {
  const character = await Character.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    age: req.body.age,
    side: req.body.side,
    description: req.body.description,
    apprentices: req.body.apprentices,
    poster_url: req.body.poster_url,
    backdrop_url: req.body.backdrop_url,
  });
  return res.send(character);
});

const port = 4000;
app.listen(port, () => {
  console.log("Servidor Rodando!");
});
