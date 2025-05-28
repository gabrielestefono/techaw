# Padrão de Estilização

Por padrão, em todo o projeto será usado o `SCSS`, para nomear classes, será utilizada o padrão bem, começando a partir da primeira `tag` html do componente, por exemplo:

```jsx
return (
  <div className={styles.classe1}>
    <div classname={styles.classe1_classe2}>
      <span classname={styles.classe1_classe2__classe3}>Hello World!</span>
    </div>
  </div>
);
```