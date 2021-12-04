function getLinkedGraphCoords(nodes, id) {
  const { x, y } = nodes.find((n) => n.id === id);

  return {
    x,
    y,
  };
}

export function getLinesStage(nodes) {
  const lines = [];

  nodes.forEach((node) => {
    const { linked = [] } = node;
    const line = new PIXI.Graphics();

    linked.forEach((t) => {
      const { x, y } = getLinkedGraphCoords(nodes, t);
      line.alpha = 0.2;
      line.lineStyle(1, 0xffffff);
      line.moveTo(node.x, node.y);
      line.lineTo(x, y);
    });

    lines.push(line);
  });

  return lines;
}

export function getGraphsStage(nodes, pointClickEvent, activePoint) {
  nodes.forEach((node) => {
    const { title, x, y } = node;

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

    const text = new PIXI.Text(title, {
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
