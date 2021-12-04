<script>
  import { stores } from '@sapper/app'
  const { page } = stores()

  let menu = [
    {
      name: 'Онбординг',
      link: '/',
      exact: true,
      icon: 'onboarding',
      active: true,
    },
    { name: 'База знаний', link: '/base', icon: 'database' },
    { name: 'Личный кабинет', link: '/lk', icon: 'user' },
    { name: 'Моя команда', link: '/team', icon: 'star' },
  ]

  import Icon from '@ui/Icon.svelte'
</script>

{#if $page.path != '/login'}
  <div class="layout">
    <div class="side">
      <div class="logo">
        <img src="/logo.png" alt="" />
      </div>

      <ul class="side-menu">
        {#each menu as link}
          <li>
            <a href={link.link} class:active={link.active}>
              <div class="icon"><Icon name={link.icon} /></div>

              <span>{link.name} </span>
            </a>
          </li>
        {/each}
      </ul>

      <img class="plug" src="/plugs/side.png" alt="" />
    </div>

    <div class="wrapper">
      <slot />
    </div>
  </div>
{:else}
  <slot />
{/if}

<style lang="scss" global>
  @import '../styles/mixins';
  @import '../styles/main';

  .layout {
    display: flex;
    align-items: stretch;
    height: 100%;
  }

  .side {
    position: relative;
    @include cloud(skewX(3deg) translateX(-20px), skewX(3deg) translateX(-0px));
    width: 310px;
    padding: 30px;
    flex-shrink: 0;
  }

  .logo {
    margin-bottom: 80px;
  }

  .side-menu {
    list-style: none;
    width: 210px;
    padding: 0;
    li {
      padding: 0;
      a {
        display: flex;
        align-items: center;
        padding: 10px;
        position: relative;
        &:after {
          content: '';
          background-color: rgba(62, 114, 255, 0.06);
          transition: transform ease 0.3s;
          transform: scaleX(0);
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 6px;
        }
        color: #323242;
        opacity: 0.5;

        &.active {
          color: #2684ff;
          opacity: 1;
          &:after {
            transform: scaleX(1);
          }
          :global(svg) {
            fill: #2684ff;
            stroke: #2684ff;
          }
        }

        .icon {
          margin-right: 30px;
        }

        :global(svg) {
          fill: #323242;
          stroke: #323242;
        }
      }
    }
  }

  .plug {
    width: 200px;
    margin-top: 40px;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
