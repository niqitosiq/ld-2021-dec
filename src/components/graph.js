let defpoints = [
  { x: 0, y: 0, name: 'Начало графов', id: '1', target: ['1', '3'] },
  { x: 300, y: 30, id: '2', name: 'Середина например', target: ['2', '4', '1'] },
  { x: 150, y: 400, id: '4', name: 'Середина 2 например', target: ['2', '1'] },
  { x: 200, y: -100, id: '3', name: 'Привет!', target: ['3', '2', '1'] },
  { x: 400, y: 0, id: '5', name: 'Я никита', target: ['2', '1'] },
];

function getTargetGraphCoords(nodes, id) {
  const { x, y } = nodes.find((n) => n.id === id);

  return {
    x,
    y,
  };
}

export function getLinesStage(nodes = defpoints) {
  const lines = [];

  nodes.forEach((node) => {
    const { target } = node;
    const line = new PIXI.Graphics();

    target.forEach((t) => {
      const { x, y } = getTargetGraphCoords(nodes, t);
      line.alpha = 0.2;
      line.lineStyle(1, 0xffffff);
      line.moveTo(node.x, node.y);
      line.lineTo(x, y);
    });

    lines.push(line);
  });

  return lines;
}

export function getGraphsStage(nodes = defpoints, pointClickEvent, activePoint) {
  nodes.forEach((node) => {
    const { name, x, y } = node;

    node.gfx = new PIXI.Graphics();
    node.gfx.lineStyle(1, 0xffffff);
    node.gfx.drawCircle(0, 0, 24);
    node.gfx.endFill();
    node.gfx.on('click', (e) => {
      pointClickEvent(node);
    });

    node.gfx.interactive = true;
    node.gfx.buttonMode = true;
    node.gfx.resolution = 20;

    node.gfx.hitArea = new PIXI.Circle(0, 0, 24);

    const text = new PIXI.Text(name, {
      fontSize: 12,
      fill: '#FFFFFF',
    });
    text.anchor.set(0.5);
    text.resolution = 20;

    node.gfx.addChild(text);

    node.gfx.position = new PIXI.Point(x, y);
  });

  return nodes;
}
