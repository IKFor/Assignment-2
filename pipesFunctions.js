import { minHeight, maxHeight } from "./properties.js";

function updatePipes(pipes) {
    pipes.forEach(pipe => {
        if(pipe.x <= -100){
        pipe.destroy();
        }
    })
}

function createPipes(pipes, passColliders, distanceBetween, gameSpeed, addObject) {
    const position = minHeight - Math.floor(Math.random() * (minHeight - maxHeight - distanceBetween));
    const bottomPipe = addObject.image(320, position, "pipe").setOrigin(0.5, 0).setImmovable(true).setVelocityX(-gameSpeed);
    const topPipe = addObject.image(320, position - distanceBetween, "pipe").setOrigin(0.5, 1).setImmovable(true).setFlipY(true).setVelocityX(-gameSpeed);
  
    //зони не рухаються. setOrigin тут не працює. Якщо є інші варіанти спробувати їх
    const passCollider = addObject.image(320, position - 0.5 * distanceBetween).setSize(25, distanceBetween).setImmovable(true).setVelocityX(-gameSpeed);
    passCollider.wasPassed = false;
  
    bottomPipe.depth = 0;
    pipes.add(bottomPipe);
    pipes.add(topPipe);
    passColliders.add(passCollider);
}

function stopPipes(pipes) {
    pipes.forEach(pipe => {
      pipe.setVelocity(0, 0);
    });
}
  
function deletePipes(pipes) {
    while (pipes.length > 0) {
      pipes[0].destroy();
    }
}

export {
    createPipes,
    updatePipes,
    deletePipes,
    stopPipes
}