type RegisteredFunc = (...args: any[]) => void;

export default class Watcher {
  private st: Set<RegisteredFunc>;

  constructor() {
    this.st = new Set();
  }

  register(handler: RegisteredFunc) {
    this.st.add(handler);
  }

  unregister(handler: RegisteredFunc) {
    this.st.delete(handler);
  }

  notify(...args: any[]) {
    for (const handler of this.st) {
      handler(...args);
    }
  }


  get DEBUG_stSize() {
    return this.st.size;
  }
}
