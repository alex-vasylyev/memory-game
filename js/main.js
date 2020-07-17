import {GameUtils} from './utils/utils.js'
import {GameModel} from "./model/model.js";
import {GameView} from "./view/view.js";
import {GameController} from "./controller/controller.js";

const model = new GameModel();
const view = new GameView(model);
const utils = new GameUtils();
const controller = new GameController(view, model, utils);

controller.prepareGame();

function startGame() {
    view.drawCardsRows();
    view.updateCardsRows();
    controller.checkTheEnd();
    requestAnimationFrame(startGame);
}

//Start Game
startGame();
