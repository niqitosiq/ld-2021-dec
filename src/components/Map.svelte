<script>
  import { onMount } from 'svelte'
  let map

  onMount(() => {
    const app = new PIXI.Application({
      transparent: true,
      width: map.offsetWidth,
      height: map.offsetHeight,
    })

    map.appendChild(app.view)

    app.loader
      .add('water', '/map/background.png')
      .add('island', '/map/island.png')
      .load((loader, resources) => {
        const water = new PIXI.Sprite(resources.water.texture)
        const island = new PIXI.Sprite(resources.island.texture)

        water.x = -200
        water.y = -300

        island.x = 300
        island.y = 300

        app.stage.addChild(water)
        app.stage.addChild(island)

        app.ticker.add(() => {
          if (water.x > -200) {
            water.x += 1
            island.x += 1
          }
          if (water.y < -500) {
            water.y -= 2
            island.y -= 1
          }
        })
      })
  })
</script>

<div bind:this={map} id="container" />

<style>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
