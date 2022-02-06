function getHello(req, res) {
  res.send("¡Hola Mundo desde controllers!");
}

module.exports = {
  getHello,
};
