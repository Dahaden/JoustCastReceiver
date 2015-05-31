
//window.onresize = resize;
//
//var resize = function() {
//alert("running");
//document.body.style.height = window.innerHeight + 'px';
//alert("ran");
//};



var updateSpan = function(spanID, num) {
    var element = document.getElementById(spanID);
    element.innerText = num;
};

var numInSpan = function(spanID) {
    var element = document.getElementById(spanID);
    var num = parseInt(element.innerText);
    return num;    
};                    

var deltaSpan = function(spanID, delta) {
    updateSpan(spanID, numInSpan(spanID) + delta);
};


var updateScreenPlayerStatus = function(playersDetails) {
    var idle = 0, available = 0, ready = 0;
    
    for(var player in playersDetails ) {
        switch (player.playerState) {
            case cast.receiver.games.PlayerState.AVAILABLE:
                available++;
                break;
            case cast.receiver.games.PlayerState.READY:
                ready++;
                break;
            case cast.receiver.games.PlayerState.IDLE:
                idle++;
                break;
        }
    }
    updateSpan("player-idle", idle);
    updateSpan("player-ready", ready);
    updateSpan("player-available", available);
};

window.onload = function() {
    var gameConfig = new cast.receiver.games.GameManagerConfig();
    gameConfig.applicationName = 'com.dhaden.joust';
    gameConfig.maxPlayers = 32;

    cast.receiver.logger.setLevelValue(0);

    window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

    console.log('Starting Receiver Manager');

    // handler for the 'ready' event
    castReceiverManager.onReady = function(event) {
        console.log('Received Ready event: ' + JSON.stringify(event.data));
        window.castReceiverManager.setApplicationState("Application status is ready");
    };

    // handler for 'senderconnected' event
    castReceiverManager.onSenderConnected = function(event) {
        console.log('Received Sender Connected event: ' + event.data);
        console.log(window.castReceiverManager.getSender(event.data).userAgent);
        deltaSpan("connect-people", 1);
    };

    // handler for 'senderdisconnected' event
    castReceiverManager.onSenderDisconnected = function(event) {
        console.log('Received Sender Disconnected event: ' + event.data);
        deltaSpan("connect-people", -1);
//        if (window.castReceiverManager.getSenders().length == 0) {
//            window.close();
//        }
    };

    // handler for 'systemvolumechanged' event
    castReceiverManager.onSystemVolumeChanged = function(event) {
        console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' +
            event.data['muted']);
    };

    // create a CastMessageBus to handle messages for a custom namespace
    window.messageBus =
      window.castReceiverManager.getCastMessageBus(
          'urn:x-cast:com.dhaden.joust');

    // handler for the CastMessageBus message event
    window.messageBus.onMessage = function(event) {
        console.log('Message [' + event.senderId + ']: ' + event.data);
        // display the message from the sender
        //displayText(event.data);
        // inform all senders on the CastMessageBus of the incoming message event
        // sender message listener will be invoked
        //window.messageBus.send(event.senderId, event.data);
    };

    window.gameManager = new cast.receiver.games.GameManager(gameConfig);
    
    var gameManagerListener = new cast.receiver.games.GameManagerListener();

    gameManagerListener.onPlayerDataChanged = function(event) {
        updateScreenPlayerStatus(window.gameManager.getConnectedPlayers());
    };
    
    gameManagerListener.onPlayerAvailable = function(event) {
        var result = {'isHost' : false};
        if(window.host == undefined) {
            result.isHost = true;
        }
        updateScreenPlayerStatus(window.gameManager.getConnectedPlayers());
        return result;
    };
    
    window.gameManager.addGameManagerListener(gameManagerListener);
    
    // initialize the CastReceiverManager with an application status message
    window.castReceiverManager.start({statusText: "Application is starting"});
    console.log('Receiver Manager started');
    
    window.gameManager.updateLobbyState(cast.receiver.games.LobbyState.OPEN, true);
    gameManager.broadcastGameManagerStatus();
    
    //window.gameManager.onGameDataChanged = function(event) {};
    
    //window.gamemanager.onGameLoading = function(event) {};
    
    
};

