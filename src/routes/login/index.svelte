<script>
  import Button from '@ui/Button.svelte'
  import { goto } from '@sapper/app'

  let login, password

  async function doLogin() {
    const response = await fetch('http://192.168.1.221:8001/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: login,
        pass: password,
      }),
    })

    const jwt = (await response.json()).jwt
    console.log(jwt)

    if (!jwt) return

    localStorage.setItem('jwt', jwt)

    goto('/')
  }
</script>

<form on:submit|preventDefault={doLogin} class="auth">
  <img src="/logo.png" alt="" />

  <div class="form">
    <input bind:value={login} type="text" placeholder="Логин" />
    <input bind:value={password} placeholder="Пароль" type="password" />
  </div>

  <Button type="submit">Войти</Button>
</form>

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
