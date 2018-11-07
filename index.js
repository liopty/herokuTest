const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const server = express()
  .use(express.static(path.join(__dirname, 'home')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  io.on('connection', function(socket){
    //Ecrit dans la console lorsqu'un utilisateur se connecte
    console.log("un utilisateur s'est connecté");

    //Lors de l'evenement "disconnect", le socket lance la fonction
    socket.on('disconnect', function(){
      //Ecrit dans la console lorsqu'un utilisateur se déconnecte
      console.log("un utilisateur s'est déconnecté");
    });
  });
