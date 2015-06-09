window.onload = function () {
	var gameConfig = new cast.receiver.games.GameManagerConfig();
    gameConfig.applicationName = 'com.dhaden.joust';
    gameConfig.maxPlayers = 4;
    
    window.gameManager = new cast.receiver.games.GameManager(gameConfig);
    
    gameManager.addEventListener(cast.receiver.games.EventType.PLAYER_AVAILABLE, function (event) {
        var result = { type: 2, 'isHost': true };
        gameManager.sendGameMessageToPlayer(event.playerInfo.playerId, result);
    });
	
    gameManager.addEventListener(cast.receiver.games.EventType.PLAYER_READY, function (event) {
        var result = { type: 2, 'isHost': true };
        gameManager.sendGameMessageToPlayer(event.playerInfo.playerId, result);
    });
	
	window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
	
	// handler for the 'ready' event
    castReceiverManager.onReady = function (event) {
        console.log('Received Ready event: ' + JSON.stringify(event.data));
        window.castReceiverManager.setApplicationState("Ready");
    };
	
	window.castReceiverManager.start({ statusText: "Application is starting" });
    gameManager.updateGameStatusText("Ready");
};