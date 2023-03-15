module.exports = async app =>{
    const chatgpt = require("../controllers/openai.controller.js")
  var router = require("express").Router();

  router.get("/ask",await chatgpt.ask)

  app.use('/api/chat',router)
}