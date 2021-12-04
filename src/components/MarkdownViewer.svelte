<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import Icon from '@ui/Icon.svelte'
  import showdown from 'showdown'

  export let id
  export let nodes

  let current
  let conv
  let text
  onMount(() => {
    conv = new showdown.Converter()
  })

  $: {
    current = nodes.find((n) => n.id === id)
    if (conv) {
      text = conv.makeHtml(current.description)
    }
  }
</script>

<div
  class="markdownViewer"
  transition:fly={{ delay: 400, duration: 500, x: 1000, opacity: 0 }}
>
  <div class="content">
    <div class="backArea">
      <div class="back">
        <div class="back-icon">
          <Icon name="back" />
        </div>
        <div class="text">Знакомство с архитектурой</div>
      </div>
      <div style="flex: 1" />
    </div>

    <div class="captionsArea">
      <div class="block" style="flex: 3">
        <div class="caption">Тема</div>
        <div class="content" style="font-size: 26px">
          {current.title}
        </div>
      </div>

      <div class="block" style="flex: 1">
        <div class="caption">Время</div>
        <div class="content">≈ 15 минут</div>
      </div>
    </div>

    <div class="material">
      {#if text}
        {@html text}
      {:else}
        {current.description}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @import '../styles/mixins';

  .markdownViewer {
    font-family: 'Roboto', sans-serif;
    position: absolute;
    right: 0;
    top: 0;
    width: 500px;
    padding: 30px;
    display: flex;
    align-items: center;
    @include cloud(
      skewX(0deg) translateX(0px),
      skewX(0deg) translate(-10px, 10px)
    );
  }

  .content {
    display: flex;
    gap: 20px;
    flex-direction: column;
    width: 100%;
  }

  .backArea {
    display: flex;
    flex-direction: row;
    align-items: center;

    & .back {
      display: flex;
      flex-direction: row;
      padding: 10px;
      gap: 5px;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 5px;
      }
    }
  }

  .back-icon {
    width: 20px;
    height: 20px;
    background-image: #f0f;

    & img {
      border-radius: 100%;
    }
  }

  .captionsArea {
    display: flex;
    flex-direction: row;
  }

  .block {
    & .caption {
      font-size: 12px;
      opacity: 0.66;
    }

    & .content {
      font-size: 16px;
      font-weight: 500;
      & .big {
        font-size: 26px;
      }
    }
  }

  .material {
    font-size: 16px;
    line-height: 1.18em;
    height: 510px;
    overflow: hidden auto;
  }
</style>
