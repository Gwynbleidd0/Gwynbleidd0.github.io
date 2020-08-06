function loading(){
    for (let i = 0; i < 10; i++) {
        let line = document.createElement('div')
        line.className = 'line'
        document.body.append(line);
        for (let j = 0; j < 10; j++) {
            let div = document.createElement('div')
            if (j == 9) {
                div.className = `${i}_${j} box endline`
            }
            else {
                div.className = `${i}_${j} box`
            }
            line.append(div);
        document.body.append(line);
          }
    }
    let player = document.getElementsByClassName('5_5')[0];
    console.log(player.classList);
    player.id = 'player'
    
} 
function move(x,y) {
    let player = document.getElementById('player');
    
    let adress = player.classList[0].split('_');
    if (Number(adress[0]) + y < 0 || Number(adress[1]) + x <0 || Number(adress[0]) + y > 9 || Number(adress[1]) + x > 9){
        console.log('break')
        return 0
    }
    else{
        player.id = ''
        let y_now = Number(adress[0]) + y
        let x_now = Number(adress[1]) + x
        console.log(y_now,x_now)
        player = document.getElementsByClassName(`${y_now}_${x_now}`)[0];
        player.id = 'player';
    }

    
}
window.onload = loading;
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW') {
        move(0,-1)
    };
    if (event.code == 'KeyD') {
        move(1,0)
    }
    if (event.code == 'KeyA') {
        move(-1,0)
    }
    if (event.code == 'KeyS') {
        move(0,1)
    }
  });


