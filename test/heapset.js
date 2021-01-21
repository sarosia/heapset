const {expect} = require('chai');
const HeapSet = require('..');

describe('heapset', () => {
  it('No duplicates', () => {
    const heap = new HeapSet();
    heap.push(2);
    heap.push(3);
    heap.push(1);

    expect(heap.size()).to.be.equal(3);
    expect(heap.pop()).to.be.equal(1);
    expect(heap.pop()).to.be.equal(2);
    expect(heap.pop()).to.be.equal(3);
    expect(heap.size()).to.be.equal(0);
  });

  it('Duplicates', () => {
    const heap = new HeapSet();
    heap.push(2);
    heap.push(2);
    heap.push(3);
    heap.push(3);
    heap.push(1);
    heap.push(1);

    expect(heap.size()).to.be.equal(3);
    expect(heap.pop()).to.be.equal(1);
    expect(heap.pop()).to.be.equal(2);
    expect(heap.pop()).to.be.equal(3);
    expect(heap.size()).to.be.equal(0);
  });
});
