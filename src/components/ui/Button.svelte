<script>
  import { createEventDispatcher } from 'svelte'

  export let type = 'button'
  export let styling = ''

  const dispatch = createEventDispatcher()

  const emitEvent = (type, event) => {
    dispatch(type, event)
  }
</script>

<button {type} class={styling} on:click={(event) => emitEvent('click', event)}>
  <slot name="custom">
    <span>
      <slot />
    </span>
  </slot>
</button>

<style lang="scss">
  button {
    position: relative;
    border: none;
    width: 100%;
    padding: 24px 24px;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    border-radius: 30px;
    border: none;
    background-color: transparent;
    > :global(span),
    > :global(div) {
      display: block;
      position: relative;
      z-index: 8;
      color: #fff;
      font-weight: 700;
      transition: transform ease 0.3s;
      transform: translateY(-5px);
    }
    &:focus {
      outline: 0;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 10px;
      transition: transform ease 0.3s;
      transform: translateY(-5px) skewX(3deg);
      z-index: 7;
      background: #2684ff;
    }
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 10px;
      transition: transform ease 0.3s;
      z-index: 6;
      background: rgba(38, 132, 255, 0.4);
      transform: translateY(0px) skewX(3deg);
    }

    &:hover {
      &:after,
      > :global(span),
      > :global(div) {
        transform: translateY(0) skewX(3deg);
      }
    }
  }
</style>
