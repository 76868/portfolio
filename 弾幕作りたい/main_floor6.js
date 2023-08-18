// ゲーム画面
function floor6Start() {
    // ゲー
    var scene = new Scene();
    core.replaceScene(scene);
    scene.backgroundColor = "#000000";
    var gamepad = new Gamepad();

    var stage = new Group();
    scene.addChild(stage);

    var backGroup = new Group();
    stage.addChild(backGroup);
    // 敵グループ



    var enemyGroup = new Group();
    stage.addChild(enemyGroup);

    var bossgl = new Group();
    stage.addChild(bossgl)

    var markgl = new Group();
    stage.addChild(markgl)
    // アイテムグループ
    var itemGroup = new Group();
    stage.addChild(itemGroup);
    // 弾グループ
    var shotGroup = new Group();
    stage.addChild(shotGroup);
    // 弾グループ
    var shotGroup2 = new Group();
    stage.addChild(shotGroup2);
    // プレイヤーグループ
    // 敵の攻撃グループ

    var enemyShotGroup = new Group();
    stage.addChild(enemyShotGroup);


    var playerGroup = new Group();
    stage.addChild(playerGroup);

    var tamakawaGroup = new Group();
    stage.addChild(tamakawaGroup);

    var back = new Sprite(360, 540);
    back.image = core.assets.back;
    back.x = 0;
    back.y = 0;
    backGroup.addChild(back);

    var radian = 0;
    for (var a = 0; a <= 64; a++) {
        var tamakawa3 = new Sprite(64,64);
        tamakawa3.image = core.assets.enemybullet4;
        tamakawa3.centerX = -5;
        tamakawa3.centerY = -5;
        tamakawa3.moveX = 0;
        tamakawa3.moveY = 0;
        tamakawa3.move = 0;
        // tamakawa.tl.fadeTo(0, 0);
        tamakawaGroup.addChild(tamakawa3);
        objectpool4.push(tamakawa3);
        tamakawa3.on(Event.ENTER_FRAME, function () {
if (this.move ==1){
     this.centerX += this.moveX;
            this.centerY += this.moveY;
}
           

            if (this.centerY > 540 || this.centerY < -10 || this.centerX > scene.width || this.centerX < 0) {
                this.centerX = -5;
                this.centerY = -5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool4.push(this);

            }
            if (this.within(playerEntityGroup, 24)) {

                this.centerX = -5;
                this.centerY = -5;
                this.moveX = 0;
                this.moveY = 0;

                objectpool4.push(this);


            }

        });
    }

    for (var a = 0; a <= 356; a++) {
        var tamakawa = new Sprite(13, 13);
        // tamakawa.image = core.assets.enemybullet;

        tamakawa.image = core.assets.rba3;
        tamakawa.centerX = 5;
        tamakawa.centerY = 5;
        tamakawa.moveX = 0;
        tamakawa.moveY = 0;
        tamakawa.move = 0;
        // tamakawa.tl.fadeTo(0, 0);
        tamakawaGroup.addChild(tamakawa);
        objectpool2.push(tamakawa);

        var tamakawa2 = new Sprite(13, 13);
        // tamakawa2.image = core.assets.enemybullet;

        tamakawa2.image = core.assets.rba4;
        tamakawa2.centerX = 5;
        tamakawa2.centerY = 5;
        tamakawa2.moveX = 0;
        tamakawa2.moveY = 0;
        // tamakawa2.tl.fadeTo(0, 0);
        tamakawaGroup.addChild(tamakawa2);
        objectpool3.push(tamakawa2);
        tamakawa.on(Event.ENTER_FRAME, function () {
if(this.move ==1){
            this.centerX += this.moveX;
            this.centerY += this.moveY;
}
            if (this.centerY > 540 || this.centerY < -10 || this.centerX > scene.width || this.centerX < 0) {
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool2.push(this);

            }
            if (this.within(playerEntityGroup, 3)) {

                this.centerX = 3;
                this.centerY = 3;
                this.moveX = 0;
                this.moveY = 0;

                objectpool2.push(this);


            }

        });
        tamakawa2.on(Event.ENTER_FRAME, function () {

            this.centerX += this.moveX;
            this.centerY += this.moveY;

            if (this.centerY > 540 || this.centerY < -10 || this.centerX > scene.width || this.centerX < 0) {
                this.centerX = 5;
                this.centerY = 5;
                this.moveX = 0;
                this.moveY = 0;
                objectpool3.push(this);

            }
            if (this.within(playerEntityGroup, 3)) {

                this.centerX = 3;
                this.centerY = 3;
                this.moveX = 0;
                this.moveY = 0;

                objectpool3.push(this);


            }

        });

    }


    back.tl.moveTo(0, 0, 12);
    // back.tl.delay(400);
    back.tl.then(function () {
        // floor1Start();
        // enemyGroup.remove();
        // enemyShotGroup.remove();
        scene.tl.clear();
        // target.remove();
        enemyGroup.remove();
        // スクロールが終わったらボス出現
var patern = 0;
            var angle2 = 0;
            var plus = 0;
        var nh = -1;
        var nh2 = 1;
        var nhkaku = 0;
        var nhkaku2 = 12;
        var tamapatern = 0;
        var delay = 0;
        var loop = 0;
        // var nhkakuabs = 0;
        // var hi = 0;
        // var yk = 0;
        // var flx = 0;
        // var fl = 0;
        // var ykx = 0;
        // var hix = 0;
        // var ang = 25;
        var jtime = 0;
        var utime = 0
        var jou = 0;
        var djanp = 0;
        // var random = 0;
        var random = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var random2 = function (min, max) {
            return Math.random() * (max - min + 1) + min;
        }

        var ds = 0;
        var tamawide = 0;
        var boss = new Sprite(100, 66);
        boss.image = core.assets.enemy3;
        boss.centerX = 180;
        boss.centerY = 160;
        bossgl.addChild(boss);
        boss.hp = 6000;

        // boss.tl.delay(150);
        // boss.tl.moveBy(0, 350, 10);

        boss.tl.then(function () {

            // if (nhkaku > 0) {
            //     nh2 = 1;
            // }
            // if (nhkaku < 0) {
            //     nh2 = -1;
            // }
            // if (nhkaku2 >= 60) {
            //     nh2 = -1;
            // }
            // if (nhkaku2 <= -60) {
            //     nh2 = 1;
            // }
            if (nhkaku >= 150) {
                nh = -1;
            }
            if (nhkaku <= -150) {
                nh= 1;
            }
            // if (nhkaku <= -60) {
            //     nhkaku = 0;
            // }
            // if (nhkaku <= -20) {
            //     nh = 1;
            // }
            jou = nhkaku ** 2 * nh;
            jou2 = nhkaku ** 2 * -nh;
            while (jou >= 360) {
                jou -= 360;
            }
            while (jou <= -360) {
                jou += 360;
            }
            while (jou2 >= 360) {
                jou2 -= 360;
            }
            while (jou2 <= -360) {
                jou2 += 360;
            }

            nhkaku += nh * 1;
            nhkaku2 += nh2 * 1;
            // nhkaku += nh*10;
            // console.log(jou);
            ds = random(2, 4);
            ds = ds.toFixed();
            
            var tamaX = 0;
            var tamaY = 0;
            var a = -0;
            var b = 0;
            var c = 0;
            if (a >= 0 && b <= 0) {
                c = 1 + b; + Math.abs(a);
            } else {
                c = b + Math.abs(a);
            }
            // console.log(loop,patern);
         
            Random2 = random(-60, 60)

            
            //     if (objectpool3.length <= 1) return;
                
            //         for (i = a; i <= b; i++) {
                if(delay > 0){
                    delay -= 1;
                }else{
                       
                            if(loop==0){
                                loop = 12;
                            }
                          }
                    angle =0;
                    a = -0; 
                    b = 2;
                    c = 0;
              
                    // for (i = a; i <= b; i++) {
                //         if(delay <= 0){
                // tamakawa = objectpool4.pop();
                // tamaX = tamarr.centerX;
                // tamaY = tamarr.centerY;
                // tamakawa.centerX = tamaX;
                // tamakawa.centerY = tamaY;
                // radian =Math.atan2(playerEntityGroup.centerY-tamaY,playerEntityGroup.centerX-tamaX);
                // angle = radian * (180 / Math.PI);
                // angle = angle +random(-180,180);
                // tamakawa.moveX =3 * Math.cos(angle* (Math.PI / 180));
                // tamakawa.moveY =3 * Math.sin(angle * (Math.PI / 180));
                //         }
            // }
                    
                a = -3; 
                b = 3;
                c = 0;
                 Random = random(-10, 10);
                 Random2 = random (-10,10)
                for (i = a; i <= b; i++) {
                   
                    // ds = random(2, 5) ;
                    ds =5;
                    ds = ds.toFixed();
            tamakawa = objectpool2.pop();
            tamaX = tamarr.centerX;
            tamaY = tamarr.centerY;
            tamakawa.move = 1;
            tamakawa.centerX = tamaX;
            tamakawa.centerY = tamaY;
            radian =Math.atan2(playerEntityGroup.centerY-tamaY,playerEntityGroup.centerX-tamaX);
            angle =0;
            angle += i*8+ jou;
            tamakawa.moveX = ds * Math.cos(angle* (Math.PI / 180));
            tamakawa.moveY = ds * Math.sin(angle * (Math.PI / 180)); 

            tamakawa2 = objectpool3.pop();
            tamaX = tamarr.centerX;
            tamaY = tamarr.centerY;
            tamakawa2.move = 1;
            tamakawa2.centerX = tamaX;
            tamakawa2.centerY = tamaY;
            radian =Math.atan2(playerEntityGroup.centerY-tamaY,playerEntityGroup.centerX-tamaX);
            angle =0;
            angle += i*8+ jou2;
            tamakawa2.moveX = ds * Math.cos(angle* (Math.PI / 180));
            tamakawa2.moveY = ds * Math.sin(angle * (Math.PI / 180));  
            }
                 loop -= 1;
                if (loop == 0){
             patern = 0;
             tamakawa.move = 1+(-1)**plus 
                plus += 1; 
                }

    if(patern == 0&&loop ==0){

            delay = 30;
    }
        
        }); 
        
                boss.tl.delay(3);
        
        boss.tl.loop();






        boss.on(Event.ENTER_FRAME, function () {
            this.centerX = tamarr.centerX;
            this.centerY = tamarr.centerY;
            // this.centerX = bossEntityGroup.centerX;
            // this.centerY = bossEntityGroup.centerY;
        });

        // boss.addCollision(shotGroup);
        boss.on(Event.COLLISION, function (e) {
            if (this.hp > 0) {
                scoreLabel2.addScore(soten.score * 5);
                scoreLabel.addScore(-3);
                this.hp -= 1;
            } else {
                scoreLabel2.addScore(10000000);
                this.remove();
                enemyShotGroup.remove();
                gameClear();
                // floor1Start();

            }

            e.collision.target.remove();
        });

        boss.addCollision(shotGroup2);
        boss.on(Event.COLLISION, function (e) {
            if (this.hp > 0) {
                scoreLabel2.addScore(soten.score * 5);
                rocktime += 1;
                scoreLabel.addScore(-3);
                this.hp -= 1;
            } else {
                scoreLabel2.addScore(10000000);
                this.remove();
                enemyShotGroup.remove();
                gameClear();
                // floor1Start();

            }

            e.collision.target.remove();
        });
        // boss.on(Event.COLLISION, function (e) {
        //     if (this.hp > 0) {
        //         scoreLabel2.addScore(soten.score * 5);
        //         scoreLabel.addScore(-1);
        //         this.hp -= 1;
        //     } else {
        //         scoreLabel2.addScore(10000000);
        //         this.remove();
        //         enemyShotGroup.remove();
        //         gameClear();
        //         // floor1Start();

        //     }

        //     e.collision.target.remove();
        // });
    });



    var boss4pt = 0;


    var tamarr = new EntityGroup(1, 1);
    tamarr.centerX = 180;
    tamarr.centerY = 120;
    var tamarr2 = new EntityGroup(1, 1);
    tamarr2.centerX = 300;
    tamarr2.centerY = 60;
    var playerEntityGroup = new EntityGroup(3, 3);
    playerEntityGroup.centerX = 180;
    playerEntityGroup.centerY = 420;
    playerGroup.addChild(playerEntityGroup);
    var bossEntityGroup = new EntityGroup(1, 1)
    bossEntityGroup.centerX = 180;
    bossEntityGroup.centerY = 120;
    var player = new Sprite(3, 5);
    player.image = core.assets.player;
    player.backgroundColor = "000000"
    player.centerX = 160;
    player.centerY = 280;
    player.tl.fadeTo(0, 0)
    player.on(Event.ENTER_FRAME, function () {
        this.centerX = playerEntityGroup.centerX;
        this.centerY = playerEntityGroup.centerY;
    });
    // player.scale(5, 4);

    stage.addChild(player);
    // player.tl.fadeTo(1, 0);
    var player2 = new Sprite(29, 24);
    player2.image = core.assets.player;

    player2.centerX = playerEntityGroup.centerX;
    player2.centerY = playerEntityGroup.centerY;
    // player2.tl.fadeTo(0, 0)
    playerGroup.addChild(player2);
    player2.on(Event.ENTER_FRAME, function () {
        this.centerX = playerEntityGroup.centerX;
        this.centerY = playerEntityGroup.centerY;
    });

    scene.tl.loop();
    // player2.scale(0.7, 0.6);

    // player2.tl.fadeTo(0.1, 0);


    var oura = new Sprite(31, 31);
    oura.image = core.assets.aura;
    oura.centerX = 900;
    oura.centerY = 900;
    stage.addChild(oura);
    oura.scale(1.5, 1.5);
    var bomb = new Sprite(319, 319);
    bomb.image = core.assets.bomb;
    bomb.centerX = 1900;
    bomb.centerY = 1900;

    stage.addChild(bomb);
    bomb.tl.fadeTo(0.5, 0);
    // player2.tl.fadeTo(0.1, 0);
    // TODO: ➂プレイヤーの中心オブジェクト作成
    var playerCenter = new Sprite(1, 1);
    playerCenter.centerX = 32 / 2;
    playerCenter.centerY = 32 / 2;
    playerEntityGroup.addChild(playerCenter);


    player.shotPatern = 1;


    // player.shot = function () {

    //     if (this.shotPatern == 2) {
    //         bullet5(0, 4);
    //         if (rock >= 1) {
    //             bullet9(0, 0);
    //         }
    //         if (rock2 >= 1) {
    //             bullet10(0, 0);
    //         }
    //         if (rock3 >= 1) {
    //             bullet11(0, 0);
    //         }
    //         if (rock4 >= 1) {
    //             bullet12(0, 0);
    //         }
    //     } else if (this.shotPatern == 4) {
    //         // １方向か
    //         bullet5(0, 25);
    //         bullet5(0, 25);
    //         // bullet5(0);
    //         // bullet6(0, 0, 2, -15);
    //         // bullet6(0, 0, 2, -15);
    //         bullet6(0, 0, 2, -60, 1, 5);
    //         bullet6(0, 0, 2, -60, 1, 5);
    //         // bullet6(0, 0, 2, 5);
    //     }
    // };
    // player.shot2 = function () {
    //     if (this.shotPatern == 1) {

    //         // １方向か
    //         if (shotGroup.childNodes.length > 24) return;
    //         bullet(-220, 50);
    //         bullet2(220, 50);
    //         bullet7(360, 50);
    //         bullet8(-360, 50)
    //         bullet4(-17);
    //         bullet4(17);
    //     } else if (this.shotPatern == 3) {

    //         // １方向か
    //         if (shotGroup.childNodes.length > 40) return;
    //         bullet(-120, 30);
    //         bullet2(120, 30);
    //         bullet4(-17);
    //         bullet4(17);
    //     }
    // };
    // 定期的に弾を発射する

    // player.on(Event.ENTER_FRAME, function () {
    //     this.shot();

    // });

    // var playerCenter = new Sprite(4, 4);
    // playerCenter.centerX = 16;
    // playerCenter.centerY = 16;
    // playerEntityGroup.addChild(playerCenter);
    // playerCenter.addCollision(stairsDown);

    // player.addCollision(itemGroup);

    core.keybind("90", "x");
    core.keybind("88", "z");
    core.keybind("67", "c");
    keyflag = true;
    // keyflag2 = true;
    // プレイヤーの移動 
    var bom = 0;
    var tip1 = 0;
    var lest = 2;
    var bomber = 3;
    var mutekitime = 0;
    var wynd = 0;
    var wyndkaku = 0;
    var wyndplus = 0;
    var wyndminus = 0;
    var rock = 0;
    var rock2 = 0;
    var rock3 = 0;
    var rock4 = 0;
    var rocktime = 0;
    var shot = 0;
    var shot2 = 0;
    var ctlX = 0;
    var ctlY = 0;
    var ctlA = 0;
    var ctlB = 0;
    var ctlC = 0;
    scene.on(Event.ENTER_FRAME, function () {
        var gamepads = navigator.getGamepads();
        for (var gamepad of gamepads) {
            if (gamepad) {
                ctlX = 0;
                ctlY = 0;
                ctlA = 0;
                ctlB = 0;
                ctlC = 0;
                gamepad.buttons.forEach(function (button, index) {
                    if (button.pressed || button.touched || button.value > 0) {
                        // console.log("bt", gamepad.index, index, button.pressed, button.touched, button.value);
                        if (index == 0) {
                            ctlA = 1;
                        } else if (index == 3) {
                            ctlB = 1;
                        } else if (index == 5) {
                            ctlC = 1;
                        }
                    } else if (index == 0) {
                        ctlA = 0;
                        ctlB = 0;
                        ctlC = 0;
                    }

                });
                gamepad.axes.forEach(function (axes, index) {
                    // console.log("ax", gamepad.index,index, axes);
                    if (Math.abs(axes) > 0.1) {
                        // console.log("ax", gamepad.index, index, axes);
                        if (index == 0) {
                            if (axes > 0) {
                                ctlX = 1;
                            } else if (axes < 0) {
                                ctlX = -1;
                            }
                        } else if (index == 1) {
                            if (axes < 0) {
                                ctlY = 1;
                            } else if (axes > 0) {
                                ctlY = -1;
                            }
                        }

                    } else if (index == 0) {
                        ctlX = 0;
                        ctlY = 0;
                    }
                });
            }
        }
    });

    player.on(Event.ENTER_FRAME, function () {

        if (core.input.c == true && core.input.x == false || ctlC == 1 && core.input.x == false && ctlA == 0) {

            if (this.shotPatern == 2) {

                this.shotPatern -= 1;

            } else if (this.shotPatern == 4) {
                this.shotPatern -= 1;
            }
            shot2 = 0;
        } else {

            shot2 = 0;
        }
        if (core.input.z && hy.text == 100 || ctlB == 1 && hy.text == 100) {
            if (this.shotPatern == 1 || this.shotPatern == 2) {
                this.shotPatern += 2;
                hy.addScore(-100);
                time.addScore(100);
            }
        }

        if (core.input.x == true || ctlA == 1) {
            if (this.shotPatern == 1) {
                this.shotPatern += 1;
            } else if (this.shotPatern == 3) {
                this.shotPatern += 1;
            }
            shot = 0;
        }
        if (core.input.left && player2.x > 0) {
            if (core.input.x == true) {
                if (core.input.up || core.input.down) {
                    playerEntityGroup.x = playerEntityGroup.x - 3 / Math.SQRT2;
                } else {
                    playerEntityGroup.x = playerEntityGroup.x - 3;
                }
            } else {
                if (core.input.up || core.input.down) {
                    playerEntityGroup.x = playerEntityGroup.x - 5 / Math.SQRT2;
                } else {
                    playerEntityGroup.x = playerEntityGroup.x - 5;
                }

            }

        }
        if (ctlX == -1 && player2.x > 0) {
            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.x = playerEntityGroup.x - 1.2;
            } else {
                playerEntityGroup.x = playerEntityGroup.x - 5;
            }

        }
        if (core.input.right && player2.x < scene.width - 28) {
            if (core.input.x == true) {
                if (core.input.up || core.input.down) {
                    playerEntityGroup.x = playerEntityGroup.x + 3 / Math.SQRT2;
                } else {
                    playerEntityGroup.x = playerEntityGroup.x + 3;
                }

            } else {
                if (core.input.up || core.input.down) {
                    playerEntityGroup.x = playerEntityGroup.x + 5 / Math.SQRT2;
                } else {
                    playerEntityGroup.x = playerEntityGroup.x + 5;
                }

            }

        }
        if (ctlX == 1 && player2.x < scene.width - 28) {
            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.x = playerEntityGroup.x + 1.2;
            } else {
                playerEntityGroup.x = playerEntityGroup.x + 5;
            }

        }
        if (core.input.up && player2.y > 0) {
            if (core.input.x == true) {
                if (core.input.right || core.input.left) {
                    playerEntityGroup.y = playerEntityGroup.y - 3 / 2;
                } else {
                    playerEntityGroup.y = playerEntityGroup.y - 5;
                }


            } else {
                if (core.input.right || core.input.left) {
                    playerEntityGroup.y = playerEntityGroup.y - 5 / Math.SQRT2;
                } else {
                    playerEntityGroup.y = playerEntityGroup.y - 5;
                }


            }
        }
        if (ctlY == 1 && player2.y > 0) {
            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.y = playerEntityGroup.y - 1.2;

            } else {
                playerEntityGroup.y = playerEntityGroup.y - 5;

            }
        }
        if (core.input.down && player2.y < 456) {

            if (core.input.x == true) {
                if (core.input.right || core.input.left) {
                    playerEntityGroup.y = playerEntityGroup.y + 3 / Math.SQRT2;
                } else {
                    playerEntityGroup.y = playerEntityGroup.y + 5;
                }


            } else {
                if (core.input.right || core.input.left) {
                    playerEntityGroup.y = playerEntityGroup.y + 5 / Math.SQRT2;
                } else {
                    playerEntityGroup.y = playerEntityGroup.y + 5;
                }


            }
        }
        if (ctlY == -1 && player2.y < 456) {

            if (this.shotPatern == 2 || this.shotPatern == 4) {
                playerEntityGroup.y = playerEntityGroup.y + 1.2;

            } else {
                playerEntityGroup.y = playerEntityGroup.y + 3;

            }

        };

        // if (this.age % 3 !== 0) {
        // }

        if (shot2 == 1) {
            this.shot2();
        }
        if (shot == 1) {
            this.shot();
        }
        // }
    });

    // 定期的に敵が出現する
    scene.tl.delay(4);

    scene.tl.then(function () {
        if (enemyGroup.childNodes.length > 24) return;


        // TODO: [ctrl]+[Shift]+[F]で[enemies]を検索してみましょう
        // データの先頭を１件取り出して末尾に追加する
        // TODO: インターネットで３つのキーワード[javascript array shift]で検索してみましょう
        var enemyData = enemies.shift();
        // TODO: インターネットで３つのキーワード[javascript array push]で検索してみましょう
        enemies.push(enemyData);
        // TODO: enemyDataの中をコンソールで確認しましょう
        // console.log(this.shotPatern);
        // 敵
        // TODO: [ctrl]+[Shift]+[F]で[createEnemy]を検索してみましょう
        var enemy = createEnemy[enemyData.type](enemyData);

        enemyGroup.addChild(enemy);



        //    enemy.hp=20
        enemy.on(Event.COLLISION, function () {
            if (this.hp > 0) {
                scoreLabel2.addScore(10);
                this.hp -= 1;
            } else {
                scoreLabel2.addScore(soten.text * 10);
                this.remove();

            }
            if (this.item) {
                // for (var i = -1; i <= 1; i++) {
                var item = new Sprite(30, 48);
                item.image = core.assets.item2;
                item.x = this.x;
                item.y = this.y;
                itemGroup.addChild(item);
                // item.tl.fadeTo(0.5, 0)
                // item.scale(2, 2)
                // TODO: [ctrl]+[Shift]+[F]で「repeatOneByOne」を検索してみましょう
                item.frame = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].repeatOneByOne(2);
                item.on(Event.ENTER_FRAME, function () {

                    if (core.input.x == false && core.input.z == false && core.input.c == false) {
                        var radian = Math.atan2(item.y - playerEntityGroup.y, item.x - playerEntityGroup.x);
                        var angle = radian / (Math.PI / 180) + 180;
                        // 距離と角度から座標
                        // angle += i * 0;
                        item.moveX = 1 * Math.cos(angle * (Math.PI / 180));
                        item.moveY = 1 * Math.sin(angle * (Math.PI / 180));

                        item.on(Event.ENTER_FRAME, function () {

                            this.x += this.moveX;
                            this.y += this.moveY;


                            if (this.y > 580) this.remove();
                            if (this.y < -0) this.remove();
                            if (this.x > scene.width) this.remove();
                            if (this.x < 0) this.remove();

                        });
                    } else { this.y += 7; }
                })
                // if (this.y > 340) this.remove();

                // }
            }
            this.remove();
            e.collision.target.remove();
        });

        enemy.on(Event.ENTER_FRAME, function () {
            this.y += 2;
            if (this.age % 12 !== 0) return;
            if (enemyShotGroup.childNodes.length > 1024) return;
            if (time.text > 70 || time.text == 1) return;
            // for (var i = -1; i <= 1; i++) {
            // ２点間の角度
            // scoreLabel.addScore(1);



        });
        // }
    });



    scene.tl.loop();
    gamepad.init();// Initialize
    // HACK: フォントを変えてみましょう
    // style.css の font-family に指定されている文字列を設定してみましょう
    // 得点表示
    var scoreLabel = new Label();
    scoreLabel.width = 90;
    scoreLabel.x = 220;
    scoreLabel.y = 10;
    scoreLabel.font = "14px Robot";
    scoreLabel.color = "white";
    scoreLabel.textAlign = "right";
    scoreLabel.score = 6000;
    scoreLabel.text = 0;
    scoreLabel.addScore = function (score) {
        this.score = this.score + score;
        scoreLabel.text = this.score;
    }
    scene.addChild(scoreLabel);

    var scoreLabel2 = new Label();
    scoreLabel2.width = 90;
    scoreLabel2.x = 60;
    scoreLabel2.y = 10;
    scoreLabel2.font = "14px Robot";
    scoreLabel2.color = "white";
    scoreLabel2.textAlign = "right";
    scoreLabel2.score = 0;
    scoreLabel2.text = 0;
    scoreLabel2.addScore = function (score2) {
        this.score = this.score + score2;
        scoreLabel2.text = this.score;
    }
    scene.addChild(scoreLabel2);


    // scene.addChild(bombers);

}

        // TODO: オリジナル制作について
        // 1. 背景、自機、敵機を変えましょう
        // 2. 敵機の種類を増やしてみましょう
        // 3. アイテム取得時の変化を考えてみましょう
        // 4. ステージ２を作ってみましょう
