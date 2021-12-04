<script>
  import Map from '../components/Map.svelte'
  import { onMount } from 'svelte'
  import { Circle } from 'svelte-loading-spinners'

  let nodes

  async function parseArticle() {
    const jwt = localStorage.getItem('jwt')

    const resp = await fetch(
      'http://192.168.1.221:8001/api/onboardingRoute/get',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      }
    )

    const [data] = await resp.json()

    const { startArch, archs } = data

    const arch = archs.find((a) => a.id === startArch.id)
    nodes = arch.lps
  }

  onMount(parseArticle)
</script>

{#if nodes}
  <Map {nodes} />
{:else}
  <Circle color="#2684ff" />
{/if}
