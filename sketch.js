const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    ball=new Ball(400,350,50)

    box1=new Box(900,540,100,100)
    box2=new Box(900,440,100,100)
    box3=new Box(900,340,100,100)
    box4=new Box(900,240,100,100)

    box5=new Box(800,540,100,100)
    box6=new Box(800,440,100,100)
    box7=new Box(800,340,100,100)
    box8=new Box(800,420,100,100)
   
    
    string = new String(ball.body,{x:400, y:50});
}

function draw(){
        background(0);
    
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    ground.display();
    
    box5.display();
    box6.display();
    box7.display();
    box8.display();
  

    ball.display();
    string.display();   

    

    
}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
