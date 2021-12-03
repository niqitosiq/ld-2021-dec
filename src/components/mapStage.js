import anime from 'animejs/lib/anime.es.js';
import { getGraphsStage, getLinesStage } from './graph';

export const getMapApp = (map, openLearningPoint, activePoint) => {
  const nodes = getGraphsStage(undefined, openLearningPoint, activePoint);
  const lines = getLinesStage();

  const app = new PIXI.Application({
    transparent: true,
    width: map.offsetWidth,
    height: map.offsetHeight,
    antialias: true,
    ANISOTROPIC_LEVEL: 16,
  });

  const graph = new PIXI.Container();

  lines.forEach((n) => graph.addChild(n));
  nodes.forEach((n) => graph.addChild(n.gfx));

  graph.alpha = 0;

  map.appendChild(app.view);

  app.loader
    .add('water', '/map/background.png')
    .add('island1', '/map/island1.png')
    .add('island2', '/map/island2.png')
    .add('island3', '/map/island3.png')
    .load((loader, resources) => {
      const water = new PIXI.Sprite(resources.water.texture);
      const fade = new PIXI.Graphics();

      fade.beginFill(0x000000);
      fade.lineStyle(5, 0x000000);
      fade.drawRect(0, 0, map.offsetWidth * 2, map.offsetHeight * 2);
      fade.alpha = 0;

      const islands = [
        new PIXI.Sprite(resources.island1.texture),
        new PIXI.Sprite(resources.island2.texture),
        new PIXI.Sprite(resources.island3.texture),
      ];

      water.x = -200;
      water.y = -300;

      islands[0].x = 300;
      islands[0].y = 300;
      islands[0].scale.set(0.6, 0.6);

      islands[1].x = 600;
      islands[1].y = 350;
      islands[2].x = 900;
      islands[2].y = 400;

      app.stage.addChild(water);
      app.stage.addChild(fade);

      let alphaDiff = { op: 0, x: 0, y: 0, scale: 0.6 };
      let alphaIndex = -1;

      islands.forEach((i, index) => {
        i.resolution = 4;
        i.interactive = true;
        i.hitArea = new PIXI.Circle(100, 100, 200);
        i.buttonMode = true;
        i.zIndex = 1;

        app.stage.addChild(i);

        i.click = function () {
          anime({
            targets: alphaDiff,
            op: 1,
            x: i.x - 100,
            y: i.y - 200,
            scale: 1,
            easing: 'easeInOutQuint',
          });

          alphaIndex = index;
          i.zIndex = 10000;

          fade.alpha = 0.4;

          graph.zIndex = 999;
          graph.pivot.x = i.x * -1;
          graph.pivot.y = i.y * -1;

          openLearningPoint();
        };
      });

      let waterOffset = {
        x: -200,
        y: -300,
      };

      anime({
        targets: waterOffset,
        y: -303,
        easing: 'linear',
        loop: true,
        direction: 'alternate',
      });

      app.stage.addChildAt(graph, 2);

      app.ticker.add(() => {
        water.y = waterOffset.y;

        islands.forEach((i, index) => {
          if (index !== alphaIndex) {
            i.alpha = 1 - alphaDiff.op;
          } else {
            i.scale.set(alphaDiff.scale, alphaDiff.scale);
          }

          if (alphaIndex != -1) {
            i.interactive = false;
            i.buttonMode = false;

            fade.alpha = alphaDiff.op - 0.5;

            app.stage.pivot.x = alphaDiff.x;
            app.stage.pivot.y = alphaDiff.y;

            graph.alpha = alphaDiff.op;
          }
        });

        nodes.forEach((n) => {
          if (n.id === activePoint.id) {
            n.gfx.clear();
            n.gfx.lineStyle(1, 0xffffff);
            n.gfx.beginFill(0xffffff, 0.2);
            n.gfx.drawCircle(0, 0, 24);
            n.gfx.endFill();
          } else {
            n.gfx.clear();

            n.gfx.lineStyle(1, 0xffffff);
            n.gfx.drawCircle(0, 0, 24);
            n.gfx.endFill();
          }
        });
      });
    });

  return app;
};
