const Heap = require('heap');

class HeapSet {
  constructor(cmpFunc, keyFunc) {
    this._set = {};
    this._heap = new Heap(cmpFunc);
    this._keyFunc = keyFunc ? keyFunc : function(item) { return item };
  }

  push(item) {
    if (this._keyFunc(item) in this._set) {
      return;
    }
    this._heap.push(item);
    this._set[this._keyFunc(item)] = item;
  }

  pop() {
    const item = this._heap.pop();
    delete this._set[this._keyFunc(item)];
    return item;
  }

  peek() {
    return this._heap.peek();
  }

  empty() {
    return this._heap.empty();
  }

  size() {
    return this._heap.size();
  }

  clear() {
    this._set = {};
    this._heap.clear();
  }

  toArray() {
    return this._heap.toArray();
  }
}

module.exports = HeapSet;
