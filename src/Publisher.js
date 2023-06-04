class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  publish(data) {
    this.subscribers.forEach(callback => callback(data));
  }
}

export default Publisher;
