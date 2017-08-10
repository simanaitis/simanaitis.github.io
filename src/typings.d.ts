/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Window {
  eval?: any;
  all_products: any;
}

declare var window: Window;