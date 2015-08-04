//Aliases
let Container = PIXI.Container,
  autoDetectRenderer = PIXI.autoDetectRenderer,
  loader = PIXI.loader,
  TextureCache = PIXI.utils.TextureCache,
  Texture = PIXI.Texture,
  Sprite = PIXI.Sprite,
  RenderTexture = PIXI.RenderTexture,
  TilingSprite = PIXI.extras.TilingSprite;

//Create a Pixi stage and renderer
let stage = new Container(),
  renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

//load resources (images and fonts)
loader
  .add("images/animals.json")
  .load(setup);

//Set the initial game state
let state = play;

//Define any variables that are used in more than one function
let cat, hedgehog, tiger;

function setup() {

  cat = Sprite.fromFrame("cat.png");
  cat.position.set(32, 32);
  stage.addChild(cat);

  hedgehog = Sprite.fromFrame("hedgehog.png");
  hedgehog.position.set(96, 96);
  stage.addChild(hedgehog);

  tiger = Sprite.fromFrame("tiger.png");
  tiger.position.set(160, 160);
  stage.addChild(tiger);

  //Change the tint
  cat.tint = 0xFFF660;
  tiger.tint = 0x66FF66;
  hedgehog.tint = 0xFF6666;

  //Start the game loop
  gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Run the current state
  state();

  //Render the stage
  renderer.render(stage);
}

function play() {

}
