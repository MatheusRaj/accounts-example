
interface IEduzz {
    Eduzz: {
      Accounts: {
        login: (partner: string, options?: ILoginOptions) => void;
        logout: (options: IDefaultOptions = {}) => void;
      };
    };
  }
  
  declare namespace Eduzz {}
  
  // eslint-disable-next-line @typescript-eslint/naming-convention
  declare interface Window {
    Eduzz: IEduzz & typeof Eduzz;
  }
  