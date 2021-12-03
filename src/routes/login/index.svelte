<script>
  import Button from '@ui/Button.svelte'
</script>

<div class="auth">
  <img src="/logo.png" alt="" />

  <div class="form">
    <input type="text" placeholder="Логин" />
    <input placeholder="Пароль" type="password" />
  </div>

  <Button>Войти</Button>
</div>

<style lang="scss">
  @import '../../styles/mixins';

  .auth {
    position: relative;
    @include cloud(skewX(3deg) translateX(0px), skewX(3deg) translate(10px));
    max-width: 300px;
    margin: 200px auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    img {
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }

  input {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
  }

  .form {
    margin-bottom: 10px;
  }
</style>
