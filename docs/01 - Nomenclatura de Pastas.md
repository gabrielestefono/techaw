# 1 - Padrão de nomenclatura de pastas

A nomenclatura de pasta irá seguir o seguinte padrão:

* src -> `Pasta principal do projeto, onde toda a lógica será colocada.`
  * app -> `A pasta **app** define todas as rotas. Apenas **layout.tsx** e **page.tsx** ficam na raiz; os demais arquivos são organizados em pastas.`
  * components - > `Pasta de componentes`
    * common -> `componentes comuns e básicos, que não dependem de outros componentes internos`
    * containers -> `são componentes mais complexos, que podem utilizar componentes internos`
    * features -> `componentes específicos de alguma página que não são forms`
      * nome da página -> `Pelo componente ser específico, o componente deve ser colocado na página com o nome da página onde será colocado`
    * forms -> `componentes de formulários`
    * icons -> `componentes de ícones, como heroicons ou fontawesome, qualquer fonte pode ser utilizada, mas transformada em tsx`
    * layout -> `componentes de layout, como header, footer.`
      * nome do layout -> `Caso necessário mais de um layout, nomear cada um deles`
    * lottie -> `Animações criadas com o lottie`
  * contexts -> `deve conter todos os contexts do react`
  * interfaces -> `deve conter as interfaces do typescript`
  * hooks -> `deve conter todos os hooks do react`
  * layouts -> `layouts para cada tipo de página`
  * mocks -> `essa página será utilizada somente durante o desenvolvimento para mockar dados, não deve ir pra prod`
  * styles -> `essa pasta deve conter os estilos globais de css`
  * types -> `deve conter os types do typescript`
  * utils -> `A pasta utils deve conter funções utilitárias`