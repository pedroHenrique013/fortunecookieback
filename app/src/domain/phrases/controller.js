const phrases = require("../../../data/frases.json");

exports.randomPhrase = (req, res) => {
  try {
    const indiceAleatorio = Math.floor(Math.random() * phrases.length);
    const randomPhrases = phrases[indiceAleatorio];

    return res.status(200).send(randomPhrases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
