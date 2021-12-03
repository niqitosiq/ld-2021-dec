<script>
  import * as PIXI from 'pixi.js'

  let map
  const app = new PIXI.Application()

  map.appendChild(app.view)

  // load the texture we need
  app.loader.add('water', '/map/background.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const water = new PIXI.Sprite(resources.water.texture)

    // Setup the position of the bunny
    water.x = 0 //app.renderer.width
    water.y = 0 //app.renderer.height

    // Add the bunny to the scene we are building
    app.stage.addChild(water)

    // Listen for frame updates
    app.ticker.add(() => {})
  })
</script>

<div ref={map} id="container" />
