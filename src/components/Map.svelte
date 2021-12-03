<script>
  import { onMount } from 'svelte'
  import { getMapApp } from './mapStage'

  import MarkdownViewer from './MarkdownViewer.svelte'

  let map
  let mdVisible = false
  let activePoint = { id: '1' }

  function openLearningPoint(node) {
    mdVisible = true

    if (!node) {
      return
    }

    activePoint.id = node.id
  }
  onMount(() => {
    getMapApp(map, openLearningPoint, activePoint)
  })
</script>

<div class="map">
  <div bind:this={map} id="container" />
  {mdVisible}
  {#if mdVisible}
    <MarkdownViewer />
  {/if}
</div>

<style>
  .map {
    width: 100%;
    height: 100%;
    position: relative;
  }
  #container {
    width: 100%;
    height: 100%;
  }
</style>
