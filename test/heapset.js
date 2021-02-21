const {expect} = require('chai');
const HeapSet = require('..');

describe('heapset', () => {
  it('No duplicates', () => {
    const heap = new HeapSet();
    expect(heap.push(2)).to.be.equal(true);
    expect(heap.push(3)).to.be.equal(true);
    expect(heap.push(1)).to.be.equal(true);

    expect(heap.size()).to.be.equal(3);
    expect(heap.pop()).to.be.equal(1);
    expect(heap.pop()).to.be.equal(2);
    expect(heap.pop()).to.be.equal(3);
    expect(heap.size()).to.be.equal(0);

    expect(heap.peek()).to.be.equal(undefined);
    expect(heap.pop()).to.be.equal(undefined);
  });

  it('Duplicates', () => {
    const heap = new HeapSet();
    expect(heap.push(2)).to.be.equal(true);
    expect(heap.push(2)).to.be.equal(false);
    expect(heap.push(3)).to.be.equal(true);
    expect(heap.push(3)).to.be.equal(false);
    expect(heap.push(1)).to.be.equal(true);
    expect(heap.push(1)).to.be.equal(false);

    expect(heap.size()).to.be.equal(3);
    expect(heap.pop()).to.be.equal(1);
    expect(heap.pop()).to.be.equal(2);
    expect(heap.pop()).to.be.equal(3);
    expect(heap.size()).to.be.equal(0);

    expect(heap.peek()).to.be.equal(undefined);
    expect(heap.pop()).to.be.equal(undefined);
  });
});
