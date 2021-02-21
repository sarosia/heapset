const Heap = require('heap');

class HeapSet {

  /*
   * Construct a HeapSet, with 2 functions for comparing items and compute the
   * key used for deduplication.
   */
  constructor(cmpFunc, keyFunc) {
    this._set = {};
    this._heap = new Heap(cmpFunc);
    this._keyFunc = keyFunc ? keyFunc : function(item) { return item };
  }

  /*
   * Pushes an item into the heap. If the item exists in the heap, return false.
   * Otherwise return true.
   */
  push(item) {
    if (this._keyFunc(item) in this._set) {
      return false;
    }
    this._heap.push(item);
    this._set[this._keyFunc(item)] = item;
    return true;
  }

  /*
   * Pops an item from the heap. Returns null if no more items in the heap.
   */
  pop() {
    const item = this._heap.pop();
    if (item) {
      delete this._set[this._keyFunc(item)];
    }
    return item;
  }

  /*
   * Peeks the first item in the heap. Returns null if no more items in the
   * heap.
   */
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
