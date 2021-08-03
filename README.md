# Eduzz Accounts

Projeto de exemplo de utilização da biblioteca Accounts da Eduzz

## Implementação

No arquivo index.html do seu projeto react adicione na tag head o trecho de código abaixo

```
<script src="https://cdn.eduzzcdn.com/accounts/accounts.js"></script>
```

No componente pai da rota que necessita de autenticação adicione o código abaixo

```
import { ACCOUNTS_PARTNER, ENV, LOGO, isRegister } from './settings';

useEffect(() => {
    const params = {
      logo: LOGO,
      env: ENV !== 'production' ? 'homolog' : ENV,
      register: isRegister ? 'true' : 'false'
    };

    window.Eduzz.Accounts.login(ACCOUNTS_PARTNER, params).subscribe((accountsToken: string) => console.log(accountsToken));
  });
```

Após isso é só usar o accounts token para autenticar o usuário em sua api.

## Utilizando esse projeto como exemplo

Para ver na prática o funcionamento basta clonar esse projeto, instalar as dependencias com o comando:

### `yarn`

Após instalar as dependências, basta ligar a vpn da eduzz e rodar o projeto com o comando:

### `yarn start`
