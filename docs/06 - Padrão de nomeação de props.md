# 4 - Padrão de Nomenclatura de Props

As props devem ser nomeadas de maneira clara e autoexplicativa, seguindo o padrão de que o nome da prop deve refletir seu propósito. Deve-se utilizar o `camelCase` para as props.

## 1. Props de Comportamento

Props que controlam o comportamento do componente devem seguir o formato:

- `[ação][Estado]`, por exemplo:
  * `isOpen` (para indicar se um modal está aberto ou fechado)
  * `isDisabled` (para desabilitar um botão ou input)
  * `isChecked` (para um checkbox)
  
Quando a prop for um valor booleano, é comum começar com `is`, `has`, ou `can`, para indicar que a prop define uma condição.

## 2. Props de Estilo

Props que controlam o estilo visual do componente devem seguir o formato:

- `[Tipo de Estilo][Propriedade]`, por exemplo:
  * `backgroundColor`
  * `borderRadius`
  * `textColor`

## 3. Props de Tamanho

Props que definem o tamanho do componente ou seu espaçamento devem seguir o formato:

- `[Elemento][Espaçamento, se houver]Size`, por exemplo:
  * `buttonSize`
  * `inputPaddingSize`
  * `marginTopSize`

## 4. Props de Evento

Props que representam eventos, como cliques ou mudanças de estado, devem ser nomeadas com o nome do evento e o elemento em questão. Use `on` como prefixo:

- `onClick`
- `onChange`
- `onSubmit`

Em caso de eventos personalizados, o nome da prop deve refletir o comportamento do evento:

- `onInputFocus`
- `onModalClose`

## 5. Props de Dados

Props que representam dados passados para o componente devem ser nomeadas com base no tipo de dado que está sendo passado. O nome da prop deve ser singular ou plural, dependendo de se está recebendo um único valor ou uma lista de valores.

- `data` (geral)
- `userData`
- `itemsData`
  
Para listas ou objetos mais complexos, o nome da prop deve refletir isso, podendo ser mais descritivo.

- `usersList`
- `inputValues`

---

Esse padrão ajudará sua equipe a criar componentes de forma mais intuitiva, além de facilitar a leitura e manutenção do código.