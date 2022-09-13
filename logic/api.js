fetch('https://api.sportsdata.io/v3/nfl/scores/json/AreAnyGamesInProgress?key=8956c6ccf6af46909f2b910be894ce35')
.then(data =>{
    const areGames = document.querySelector('#games-yes-no')
    const value = data.bodyUsed.toString()
    
    
    areGames.textContent = value
})