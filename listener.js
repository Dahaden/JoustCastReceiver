// >>>>>>>>>>>>>>>>>>>>>> BEGINNING TEMP CODE
var updateSpan = function (spanID, num) {
    var element = document.getElementById(spanID);
    element.innerText = num;
};

var numInSpan = function (spanID) {
    var element = document.getElementById(spanID);
    var num = parseInt(element.innerText);
    return num;
};

var deltaSpan = function (spanID, delta) {
    updateSpan(spanID, numInSpan(spanID) + delta);
};


var updateScreenPlayerStatus = function () {
    var idle = gameManager.getPlayersInState(cast.receiver.games.PlayerState.IDLE).length;
    var available = gameManager.getPlayersInState(cast.receiver.games.PlayerState.AVAILABLE).length;
    var ready = gameManager.getPlayersInState(cast.receiver.games.PlayerState.READY).length;

    updateSpan("player-idle", idle);
    updateSpan("player-ready", ready);
    updateSpan("player-available", available);
};
// <<<<<<<<<<<<<<<<<<<<<< END TEMP CODE

window.onload = function () {
    
    // Game config settings, App Name should be able to be anything
    var gameConfig = new cast.receiver.games.GameManagerConfig();
    gameConfig.applicationName = 'com.dhaden.joust';
    gameConfig.maxPlayers = 32;
    
    cast.receiver.logger.setLevelValue(0);
    
    // >>>>> Benginning Cast Setup (Not gamecast)
    window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

    console.log('Starting Receiver Manager');

    // handler for the 'ready' event
    castReceiverManager.onReady = function (event) {
        console.log('Received Ready event: ' + JSON.stringify(event.data));
        window.castReceiverManager.setApplicationState("Application status is ready");
    };

    // handler for 'systemvolumechanged' event
    castReceiverManager.onSystemVolumeChanged = function (event) {
        console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' +
            event.data['muted']);
    };
    // <<<<< END Cast Setup (Not gamecast)

    // >>>>> Start Game Cast Setup
    // Available GameManager Functions https://developers.google.com/cast/docs/reference/receiver/cast.receiver.games.GameManager
    window.gameManager = new cast.receiver.games.GameManager(gameConfig);

    // Available Listener Functions https://developers.google.com/cast/docs/reference/receiver/cast.receiver.games.GameManagerListener
    var gameManagerListener = new cast.receiver.games.GameManagerListener(); 

    gameManagerListener.onPlayerDataChanged = function (event) {
        updateScreenPlayerStatus();
    };

    gameManagerListener.onPlayerAvailable = function (event) {
        var result = { 'isHost': false };
        if (window.host == undefined) {
            result.isHost = true;
            window.host = event.playerInfo.playerId;
        }
        gameManager.sendGameMessageToPlayer(event.playerInfo.playerId, result);
        updateScreenPlayerStatus(window.gameManager.getConnectedPlayers());
        return result;
    };

    gameManagerListener.onPlayerDropped = function (event) {
        playerLeft(event);
    };
    
    // Closes window in no players left
    // Swtiches host is previous host left
    function playerLeft(event) {
        if (window.host == event.playerInfo.playerId) {
            var nextHost = getNextBestHost(); // TODO Check assumption of player already taken out
            if (nextHost == null) {
                window.close();
            } else {
                window.host == nextHost.playerId;
            }
        }
    }
    
    // Finds next best host in order from PLAYING -> READY -> AVAILABLE
    function getNextBestHost() {
        if (gameManager.getPlayersInState(cast.receiver.games.PlayerState.PLAYING).length > 0) {
            return gameManager.getPlayersInState(cast.receiver.games.PlayerState.PLAYING)[0];
        } else if (gameManager.getPlayersInState(cast.receiver.games.PlayerState.READY).length > 0) {
            return gameManager.getPlayersInState(cast.receiver.games.PlayerState.READY)[0];
        } else if (gameManager.getPlayersInState(cast.receiver.games.PlayerState.AVAILABLE).length > 0) {
            return gameManager.getPlayersInState(cast.receiver.games.PlayerState.AVAILABLE)[0];
        }
        return null;
    }

    gameManagerListener.onPlayerQuit = function (event) {
        playerLeft(event);
    };

    window.gameManager.addGameManagerListener(gameManagerListener);
    // >>>>> End Game Cast Setup
    
    // initialize the CastReceiverManager with an application status message
    window.castReceiverManager.start({ statusText: "Application is starting" });
    console.log('Receiver Manager started');

    // Open Lobby after reciever initiates
    window.gameManager.updateLobbyState(cast.receiver.games.LobbyState.OPEN, true);
    gameManager.broadcastGameManagerStatus();
     
};

