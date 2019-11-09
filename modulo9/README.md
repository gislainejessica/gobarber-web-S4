#### Etapas:
[x] Estrutura configurada
[x] Ajustes na API
[x] Configurando rotas
[x] Configurando Reactotron
[x] Rotas privadas
[x] Layouts por página
[x] Estilos globais
[x] Utilizando Root Import
[x] Estilização da autenticação
[ ] Utilizando Unform
[ ] Validações
[ ] Configurando store
[ ] Autenticação
[ ] Armazenando perfil
[ ] Persistindo autenticação
[ ] Loading da autenticação
[ ] Exibindo toasts
[ ] Cadastro na aplicação
[ ] Requisições autenticadas
[ ] Configurando Header
[ ] Estilizando notificações
[ ] Notificações
[ ] Página de perfil
[ ] Atualizando perfil
[ ] Foto de perfil
[ ] Dados do Header
[ ] Logout da aplicação
[ ] Estilização do Dashboard
[ ] Navegando entre dias
[ ] Listando agendamentos

---

```js
  yarn add eslint -D
  yarn eslint --init
  yarn add prettier - D
  yarn add eslint-config-prettier -D
  yarn add eslint-plugin-prettier -D
  yarn add babel-eslint -D
  yarn add eslint-plugin-react-hooks -D
  yarn add eslint-plugin-jsx-a11y -D
  yarn add eslint-plugin-import -D
```

---

__Rotas__
`yarn add react-router-dom`
`yarn add history`
`yarn add reactotron-react-js `
`yarn add prop-types`
`yarn add styled-components`

__Root Import__
Fazer as importações dos arquivos a partir de um arquivo raiz, que será a base inicial para nagevagar para dentro dos arquivos, para não ter que ficar voltando niveis e se perdendo na hora de fazer a importação, para isso vamos fazer os sequinte:
- 1 `yarn add customize-cra react-app-rewired -D`
- 2 `yarn add babel-plugin-root-import -D`
- 3 Criar o arquivo _config-overrides.js_ na raiz

  ```js
    const { addBabelPlugin, override } = require('customize-cra')
    module.exports = override(
      addBabelPlugin([
        'babel-plugin-root-import',{
          rootPathSuffix: 'src',
        }
      ])
    )
  ```

- 4 Modificar os scripts do Json
  
  ```json
    "scripts": {
      "start": "react-app-rewired start",
      "build": "react-app-rewired build",
      "test": "react-app-rewired  test",
    }
  ```
- 5 agora já podemos usar o novo padrão para importação
  Antes:
  `import AuthLayout from '../pages/_layouts/auth' import DefaultLayout from '../pages/_layouts/default'`

  Depois:
  `import AuthLayout from '~/pages/_layouts/auth' import DefaultLayout from '~/pages/_layouts/default'`

- 6 Nesse padrão o Vscode não vai consegui direcionar para o arquivo ao clicar na importação, ele não entende como um padrão de navagação para os arquivos, para resolver isso, fazemos como segue:
  `yarn add eslint-import-resolver-babel-plugin-root-import -D`
  - Add no .eslintrs.js
  ```json
    settings: {
      "import/resolver": {
        "babel-plugin-root-import": {
          rootPathSuffix: "src"
        },
      },
    },
  ```
  - Criar um arquivo `jsconfig.json`
    ```json
    {
      "compilerOptions": {
        "baseUrl": "src",
        "paths": {
        "~/*": ["*"]
        }
      }
    }
    ```