<h1>Project Challenge: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Goal:</b>
                <p>Mario Kart is a race game series developed and published by Nintendo. Our challenge is to create a video game logic to simulate Mario Kart races, taking into consideration the rules and mecanics below.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Maneuverability: 3</p>
                <p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Maneuverability: 4</p>
                <p>Power: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Maneuverability: 4</p>
                <p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 5</p>
                <p>Maneuverability: 2</p>
                <p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Maneuverability: 4</p>
                <p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Maneuverability: 2</p>
                <p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Rules & Mecanics:</h3>

<b>Players:</b>

<p>The computer must receive two characters to run the race in one object each.</p>

<b>Tracks:</b>

<ul>
  <li><p>The characters will run in random tracks in 5 rounds.</p></li>
  <li><p>In each round, the track will be sorted out between: straight, curve or confront.</p></li>
    <ul>
      <li><p>In case the track is straight, the player must roll a dice for speed. The winner gets a point.</p></li>
      <li><p>In case the track is a curve, the player must roll a dice for maneuverability. The winner gets a point.</p></li>
      <li><p>In case the track is a confront, the player must roll a dice for power. The loser losts a point.</p></li>
      <li><p>None of the players can have negative points (below 0).</p></li>
    </ul>
  </li>
</ul>

<b>Winning condition:</b>

<p>At the end, the winner is the one with most points.</p>


<h3>🎮 New Implementations:</h3>

<b>Mecanics:</b>

<ul>
  <li><p>The player will select one character at the start of the game</p></li>
  <li><p>There will be 10 rounds in the game.</p></li>
  <li><p>The confront will be enhanced and there will be two types of penalties: Turtle shell (-1 point) or bomb (-2 points). The winner can also randomly get a star bonus (+1 point).</p></li>
</ul>

<b>Code:</b>
<ul>
    <li><p>The characters will be in a separate JSON file.</p></li>
</ul>
