<script>
  import { onMount } from 'svelte'
  import { getMapApp } from './mapStage'

  import MarkdownViewer from './MarkdownViewer.svelte'

  let map
  let mdVisible = false
  let activePoint = { id: '' }
  export let nodes

  $: {
    activePoint = { id: nodes[0].id }
  }

  function openLearningPoint(node) {
    mdVisible = true

    if (!node) {
      return
    }

    activePoint.id = node.id
  }
  onMount(() => {
    getMapApp(map, nodes, openLearningPoint, activePoint)
  })
</script>

<div class="map">
  <div bind:this={map} id="container" />

  {#if mdVisible}
    <MarkdownViewer {nodes} id={activePoint.id} />
  {/if}
</div>

<style>
  .map {
    width: 100%;
    height: 100%;
    position: relative;
    margin-left: -30px;
  }
  #container {
    width: 100%;
    height: 100%;
  }
</style>
