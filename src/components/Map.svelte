<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

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
      .add('island2', '/map/island2.png')
      .add('island3', '/map/island3.png')
      .load((loader, resources) => {
        const water = new PIXI.Sprite(resources.water.texture)
        const islands = [
          new PIXI.Sprite(resources.island.texture),
          new PIXI.Sprite(resources.island2.texture),
          new PIXI.Sprite(resources.island3.texture),
        ]

        water.x = -200
        water.y = -300

        islands[0].x = 300
        islands[0].y = 300
        islands[1].x = 600
        islands[1].y = 350
        islands[2].x = 900
        islands[2].y = 400

        app.stage.addChild(water)

        islands.forEach((i) => {
          i.interactive = true

          i.hitArea = new PIXI.Circle(70, 70, 100)

          app.stage.addChild(i)

          let scale = { y: -10 }

          i.click = function () {
            console.log('hi')
          }
        })

        let waterOffset = {
          x: -200,
          y: -300,
        }

        anime({
          targets: waterOffset,
          y: -303,
          easing: 'linear',
          loop: true,
          direction: 'alternate',
        })

        app.ticker.add(() => {
          water.y = waterOffset.y
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
