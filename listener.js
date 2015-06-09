window.onload = function () {
    
    // Game config settings, App Name should be able to be anything
    var gameConfig = new cast.receiver.games.GameManagerConfig();
    gameConfig.applicationName = 'com.dhaden.joust';
    gameConfig.maxPlayers = 32;
    
    window.gameManager = new cast.receiver.games.GameManager(gameConfig);
    
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
    

    // Available Listener Functions https://developers.google.com/cast/docs/reference/receiver/cast.receiver.games.GameManagerListener
    var gameManagerListener = new cast.receiver.games.GameManagerListener(); 

    gameManager.addEventListener(cast.receiver.games.EventType.PLAYER_DATA_CHANGED, function (event) {
        updateScreenPlayerStatus();
    });

    gameManager.addEventListener(cast.receiver.games.EventType.PLAYER_AVAILABLE, function (event) {
        var result = { type: 2, 'isHost': false };
        if (window.host == undefined) {
            result.isHost = true;
            window.host = event.playerInfo.playerId;
        }
        gameManager.sendGameMessageToPlayer(event.playerInfo.playerId, result);
        updateScreenPlayerStatus(window.gameManager.getConnectedPlayers());
        return result;
    });

    gameManager.addEventListener(cast.receiver.games.EventType.PLAYER_DROPPED, function (event) {
        playerLeft(event);
    });
    
    // Closes window in no players left
    // Swtiches host is previous host left
    function playerLeft(event) {
        if (window.host == event.playerInfo.playerId) {
            var nextHost = getNextBestHost(); // TODO Check assumption of player already taken out
            if (nextHost == null) {
                window.close();
            } else {
                window.host == nextHost.playerId;
                gameManager.sendGameMessageToPlayer(nextHost.playerId, {type: 2, isHost: true});
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

    gameManager.addEventListener(cast.receiver.games.EventType.PLAYER_QUIT, function (event) {
        playerLeft(event);
    });
    
    /*
    customObject Definitions:
        Settings: Only useable by host  // Rules Assessed before gameStart, based on players available
        Any Settings left blank will be defaulted
            {
                type: 0,
                gameMode: 0,  // 0 = FreeForAll, 1 = Teams, 2 = King, 3 = Traitors, 4 = King Traitors (Must have atleast 3 per team)
                teamLimit: 2, // Must be between 2 and number of ready players
                freeze: false, 
                invincibility: false 
            }
            
        Start: Only useable by host
            {
                type: 1
            }
            
        isHost: sent to player on join or change of host
            {
                type: 2,
                isHost: false
            }
            
        isDead: sent by player on death submission
            {
                type: 3,
                dead: true
            }
            
        gameUpdate: Sent by Receiver while playing
            {
                type: 4,
                maximumMove: 1.0,   // decimal value to represent maximum m/s^2 allowed
                gameFinished: false
            }
            
        nameChange: Sent by player before game
            {
                type: 5,
                name: "string"
            }
    */
    gameManager.addEventListener(cast.receiver.games.EventType.GAME_MESSAGE_RECEIVED, function(event) {
        var customObject = event.resultExtraMessageData;
        if(window.host == event.playerInfo.playerId) {
            if(customObject.type == 0) {
                var gameData = gameManager.getGameData();
                var boundFunction = replaceIfExists.bind(undefined, gameData, customObject);
                boundFunction('gameMode');
                boundFunction('teamLimit');
                boundFunction('freeze');
                boundFunction('invincibility');
                gameManager.updateGameData(gameData, false);
            } else if(customObject.type == 1) {
                
            }
        }
    });
    
    function replaceIfExists(toBeReplaced, replacer, attributeName) {
        toBeReplaced[attributeName] = replacer[attributeName] ? replacer[attributeName] : toBeReplaced[attributeName];
    }
    
    var gameSettings = {
        type: 0,
        gameMode: 0,
        teamLimit: 2,
        freeze: 0,
        invincibility: 0
    };
    
    gameManager.updateGameData(gameSettings, true);
    window.gameManager.addGameManagerListener(gameManagerListener);
    // >>>>> End Game Cast Setup
    
    // initialize the CastReceiverManager with an application status message
    window.castReceiverManager.start({ statusText: "Application is starting" });
    console.log('Receiver Manager started');

    // Open Lobby after reciever initiates
    window.gameManager.updateLobbyState(cast.receiver.games.LobbyState.OPEN, false);
    //gameManager.broadcastGameManagerStatus();
     
};

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
    var playing = gameManager.getPlayersInState(cast.receiver.games.PlayerState.PLAYING).length;
    
    updateSpan("players-idle", idle);
    updateSpan("players-ready", ready);
    updateSpan("players-available", available);
    updateSpan("players-playing", playing);
};
// <<<<<<<<<<<<<<<<<<<<<< END TEMP CODE