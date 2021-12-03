<script>
  import Icon from '@ui/Icon.svelte';
</script>

<div class="markdownViewer">

  <div class="content">
    <div class="backArea">
      <div class="back">
        <div class="back-icon">
          <img src="https://via.placeholder.com/20"/>
          <!--        <Icon name="back" />-->
        </div>
        <div class="text">
          Знакомство с архитектурой
        </div>
      </div>
      <div style="flex: 1"></div>
    </div>

    <div class="captionsArea">
      <div class="block" style="flex: 3">
        <div class="caption">Тема</div>
        <div class="content" style="font-size: 26px">Основы архитектуры проектов</div>
      </div>

      <div class="block" style="flex: 1">
        <div class="caption">Время</div>
        <div class="content">≈ 15 минут</div>
      </div>

      <div class="block" style="flex: 1">
        <div class="caption">Награда</div>
        <div class="content">42 капли</div>
      </div>
    </div>

    <div class="material">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus, sem id volutpat semper, arcu elit porta nibh, sit amet posuere augue turpis quis eros. Morbi sit amet nisi ut nunc rutrum viverra ut ut ex. Vivamus placerat ac arcu non rhoncus. Maecenas hendrerit nisi at odio porta, ac aliquet orci condimentum. Ut fermentum volutpat tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in egestas magna, id ullamcorper diam. <br><br>
      Suspendisse potenti. Donec vehicula consequat blandit. Quisque leo leo, eleifend et dolor ac, gravida ornare ex. Quisque mollis diam id cursus rhoncus. Donec ornare sit amet erat ac rutrum. Maecenas id imperdiet lectus, vel fermentum nisl. Phasellus fringilla massa ipsum, fermentum sodales risus posuere ut. Nunc rhoncus augue scelerisque ante ornare hendrerit. Morbi congue lacinia nunc, sit amet vehicula sem placerat at.<br><br>
      Proin interdum mi a lacinia mattis. Praesent tellus diam, aliquam vel ultricies a, tincidunt in diam. Suspendisse maximus nisl quis velit venenatis, sit amet laoreet lectus ullamcorper. Fusce a turpis non nibh varius blandit. Mauris eget vestibulum risus. Aliquam erat volutpat. Fusce risus lorem, hendrerit eu venenatis quis, sollicitudin in orci. Proin in varius ante. Proin a justo interdum, consectetur arcu ac, luctus enim. Sed nec hendrerit ipsum.<br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus, sem id volutpat semper, arcu elit porta nibh, sit amet posuere augue turpis quis eros. Morbi sit amet nisi ut nunc rutrum viverra ut ut ex. Vivamus placerat ac arcu non rhoncus. Maecenas hendrerit nisi at odio porta, ac aliquet orci condimentum. Ut fermentum volutpat tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas in egestas magna, id ullamcorper diam. <br><br>
      Suspendisse potenti. Donec vehicula consequat blandit. Quisque leo leo, eleifend et dolor ac, gravida ornare ex. Quisque mollis diam id cursus rhoncus. Donec ornare sit amet erat ac rutrum. Maecenas id imperdiet lectus, vel fermentum nisl. Phasellus fringilla massa ipsum, fermentum sodales risus posuere ut. Nunc rhoncus augue scelerisque ante ornare hendrerit. Morbi congue lacinia nunc, sit amet vehicula sem placerat at.
    </div>
  </div>

</div>

<style lang="scss">
  @import '../styles/mixins';

  .markdownViewer {
    font-family: 'Roboto', sans-serif;
    max-width: 800px;
    position: relative;
    padding: 20px;
    display: flex;
    align-items: center;
    @include cloud(skewX(3deg) translateX(0px), skewX(3deg) translate(10px));
  }

  .content {
    display: flex;
    gap: 20px;
    flex-direction: column;
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
      font-size: 14px;
      opacity: 0.66;
    }

    & .content {
      font-size: 18px;
      font-weight: 500;
      & .big {
        font-size: 26px;
      }
    }
  }

  .material {
    font-size: 20px;
    line-height: 1.18em;
  }
</style>
