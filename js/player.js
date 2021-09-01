class Player {
    constructor() {
        this.rank = 0
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;

        
    }

    getPlayerAtEnd(){
        var playerAtEnd = database.ref('playerAtEnd')
        playerAtEnd.on()
    }

    updatePlayerAtEnd(){
        var playerAtEnd = database.ref('playerAtEnd')
        update.playerAtEnd()
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
