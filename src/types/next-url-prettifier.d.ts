declare module 'next-url-prettifier' {
  export interface Route {
    page: string;
    prettyUrl?: string;
  }

  class Router {
    constructor(routes: Route[]);

    public forEachPattern(apply: (page: string, pattern?: string, defaultParams?: any) => void): void;

  }

  export default Router;
}
