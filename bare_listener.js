window.onload = function () {
	var gameConfig = new cast.receiver.games.GameManagerConfig();
    gameConfig.applicationName = 'Joust';
    gameConfig.maxPlayers = 4;
    
    window.gameManager = new cast.receiver.games.GameManager(gameConfig);
	
	
	window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
	
	window.castReceiverManager.start({ statusText: "Application is starting" });
};