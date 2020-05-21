import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import "mocha";

chai.use(chaiAsPromised);
const should = chai.should();
const expect = chai.expect;

import { LinkedList } from "../src/linkedList";

describe("LinkedList - construction", () => {
    it("Primitive type linked list construction.", () => {
        const linkedList = new LinkedList<number>();
        linkedList.length.should.equal(0);
        should.equal(linkedList.head, null);
        should.equal(linkedList.tail, null);
    });
    it("Complex type linked list construction.", () => {
        const linkedList = new LinkedList<{ width: number; height: number }>();
        linkedList.length.should.equal(0);
        should.equal(linkedList.head, null);
        should.equal(linkedList.tail, null);
    });
});

describe("LinkedList - misc", () => {
    it("Primitive type linked list miscs.", () => {
        const linkedList = new LinkedList<number>();
        linkedList.isEmpty().should.be.equal(true);
        linkedList.insert(1)
            .insert(2)
            .insert(3);

        linkedList.toArray().should.deep.equal([1, 2, 3]);
        linkedList.toString().should.equal(`[${[1, 2, 3].join(",")}]`);
        linkedList.isEmpty().should.be.equal(false);
    });
    it("Complex type linked list miscs.", () => {
        const linkedList = new LinkedList<{ width: number; height: number }>();
        linkedList.isEmpty().should.be.equal(true);
        const testSet = [
            { width: 100, height: 100 },
            { width: 200, height: 300 },
            { width: 300, height: 200 },
        ];
        testSet.forEach((val) => linkedList.insert(val));

        linkedList.toArray().should.deep.equal(testSet);
        linkedList.toString().should.equal(`[${testSet.map((val) => JSON.stringify(val)).join(",")}]`);
        linkedList.isEmpty().should.be.equal(false);
    });
});

describe("LinkedList - insertion", () => {
    it("Primitive type linked list insertion", () => {
        const linkedList = new LinkedList<number>();
        linkedList.length.should.equal(0);
        should.equal(linkedList.head, null);
        should.equal(linkedList.tail, null);

        linkedList.insert(1);
        linkedList.length.should.equal(1);
        should.equal(linkedList.head, 1);
        should.equal(linkedList.tail, 1);

        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.length.should.equal(3);
        should.equal(linkedList.head, 1);
        should.equal(linkedList.tail, 3);
    });

    it("Complex type linked list insertion", () => {
        const linkedList = new LinkedList<{ width: number; height: number }>();
        linkedList.length.should.equal(0);
        should.equal(linkedList.head, null);
        should.equal(linkedList.tail, null);

        linkedList.insert({ width: 100, height: 100 });
        linkedList.length.should.equal(1);
        expect(linkedList.head).to.be.deep.equal({ width: 100, height: 100 });
        expect(linkedList.tail).to.be.deep.equal({ width: 100, height: 100 });

        linkedList.insert({ width: 200, height: 200 });
        linkedList.insert({ width: 200, height: 300 });
        linkedList.length.should.equal(3);
        expect(linkedList.head).to.be.deep.equal({ width: 100, height: 100 });
        expect(linkedList.tail).to.be.deep.equal({ width: 200, height: 300 });

        linkedList.insert({ width: 200, height: 300 });
        linkedList.insert({ width: 200, height: 300 });
        linkedList.length.should.equal(5);
        expect(linkedList.head).to.be.deep.equal({ width: 100, height: 100 });
        expect(linkedList.tail).to.be.deep.equal({ width: 200, height: 300 });
    });
});

describe("LinkedList - search", () => {
    it("Primitive type linked list search", () => {
        const linkedList = new LinkedList<number>();
        linkedList.includes(1).should.be.equal(false);
        linkedList.find(1).should.be.equal(-1);
        linkedList.insert(1);
        linkedList.includes(1).should.be.equal(true);
        linkedList.find(1).should.be.equal(0);
        linkedList.insert(2);
        linkedList.insert(3);
        linkedList.insert(3);
        linkedList.insert(3);
        linkedList.insert(4);
        linkedList.insert(5);

        linkedList.includes(3).should.be.equal(true);
        linkedList.includes(7).should.be.equal(false);

        linkedList.find(3).should.be.equal(2);
        linkedList.find(1).should.be.equal(0);
        linkedList.find(7).should.be.equal(-1);
    });
    it("Complex type linked list search", () => {
        const linkedList = new LinkedList<{ width: number; height: number }>();
        linkedList.includes({ width: 100, height: 100 }).should.be.equal(false);
        linkedList.find({ width: 100, height: 100 }).should.be.equal(-1);
        linkedList.insert({ width: 100, height: 100 });
        linkedList.includes({ width: 100, height: 100 }).should.be.equal(true);
        linkedList.find({ width: 100, height: 100 }).should.be.equal(0);
        linkedList.insert({ width: 200, height: 200 });
        linkedList.insert({ width: 200, height: 200 });
        linkedList.insert({ width: 200, height: 200 });
        linkedList.insert({ width: 200, height: 300 });

        linkedList.includes({ width: 100, height: 100 }).should.be.equal(true);
        linkedList.includes({ width: 300, height: 100 }).should.be.equal(false);

        linkedList.find({ width: 200, height: 200 }).should.be.equal(1);
        linkedList.find({ width: 100, height: 100 }).should.be.equal(0);
        linkedList.find({ width: 200, height: 300 }).should.be.equal(4);
        linkedList.find({ width: 300, height: 200 }).should.be.equal(-1);
    });
});

describe("LinkedList - deletion", () => {
    it("Primitive type linked list deletion", () => {
        const linkedList = new LinkedList<number>();
        linkedList.remove(1).toArray().should.be.deep.equal([]);
        linkedList.insert(1);
        linkedList.remove(2).toArray().should.be.deep.equal([1]);
        linkedList.remove(1).toArray().should.be.deep.equal([]);
        linkedList.insert(1)
            .insert(2)
            .insert(3)
            .insert(3)
            .insert(3)
            .insert(4)
            .insert(5)
            .insert(5)
            .insert(5);

        linkedList.length.should.be.equal(9);

        linkedList.remove(2);
        linkedList.length.should.be.equal(8);
        linkedList.includes(2).should.be.equal(false);
        linkedList.find(2).should.be.equal(-1);

        linkedList.remove(3);
        linkedList.length.should.be.equal(7);
        linkedList.includes(3).should.be.equal(true);
        linkedList.find(3).should.be.equal(1);

        linkedList.removeAll(4);
        linkedList.length.should.be.equal(6);
        linkedList.includes(4).should.be.equal(false);
        linkedList.find(4).should.be.equal(-1);

        linkedList.removeAll(5);
        linkedList.length.should.be.equal(3);
        linkedList.includes(5).should.be.equal(false);
        linkedList.find(5).should.be.equal(-1);
        linkedList.toArray().should.deep.equal([1, 3, 3]);

        linkedList.remove(1).toArray().should.deep.equal([3, 3]);
        linkedList.removeAll(3).toArray().should.deep.equal([]);
    });

    it("Complex type linked list deletion", () => {
        const linkedList = new LinkedList<{ width: number; height: number }>();
        linkedList.removeAll({ width: 100, height: 100 }).toArray().should.be.deep.equal([]);
        linkedList.insert({ width: 100, height: 100 });
        linkedList.removeAll({ width: 100, height: 200 }).toArray().should.be.deep.equal([{ width: 100, height: 100 }]);
        linkedList.removeAll({ width: 100, height: 100 }).toArray().should.be.deep.equal([]);
        linkedList.insert({ width: 100, height: 100 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 300, height: 300 })
            .insert({ width: 300, height: 300 })
            .insert({ width: 300, height: 300 })
            .insert({ width: 400, height: 400 })
            .insert({ width: 500, height: 500 })
            .insert({ width: 500, height: 500 })
            .insert({ width: 500, height: 500 });

        linkedList.length.should.be.equal(9);

        linkedList.remove({ width: 200, height: 200 });
        linkedList.length.should.be.equal(8);
        linkedList.includes({ width: 200, height: 200 }).should.be.equal(false);
        linkedList.find({ width: 200, height: 200 }).should.be.equal(-1);

        linkedList.remove({ width: 300, height: 300 });
        linkedList.length.should.be.equal(7);
        linkedList.includes({ width: 300, height: 300 }).should.be.equal(true);
        linkedList.find({ width: 300, height: 300 }).should.be.equal(1);

        linkedList.removeAll({ width: 400, height: 400 });
        linkedList.length.should.be.equal(6);
        linkedList.includes({ width: 400, height: 400 }).should.be.equal(false);
        linkedList.find({ width: 400, height: 400 }).should.be.equal(-1);

        linkedList.removeAll({ width: 500, height: 500 });
        linkedList.length.should.be.equal(3);
        linkedList.includes({ width: 500, height: 500 }).should.be.equal(false);
        linkedList.find({ width: 500, height: 500 }).should.be.equal(-1);
        linkedList.toArray().should.deep.equal([{ width: 100, height: 100 }, { width: 300, height: 300 }, { width: 300, height: 300 }]);

        linkedList.remove({ width: 300, height: 300 }).toArray().should.deep.equal([{ width: 100, height: 100 }, { width: 300, height: 300 }]);
    });
});

describe("LinkedList - reverse", () => {
    it("Primitive type linked list reverse", () => {
        const linkedList = new LinkedList<number>();
        linkedList.insert(1)
            .insert(2)
            .insert(3);
        linkedList.reverse().toArray().should.deep.equal([3, 2, 1]);
    });
    it("Complext type linked list reverse", () => {
        const linkedList = new LinkedList<{ width: number; height: number }>();
        linkedList.insert({ width: 100, height: 100 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 300, height: 300 });
        linkedList.reverse().toArray().should.deep.equal([
            { width: 300, height: 300 },
            { width: 200, height: 200 },
            { width: 200, height: 200 },
            { width: 200, height: 200 },
            { width: 100, height: 100 },
        ]);
    });
});

describe("LinkedList - traverse", () => {
    it("Primitive type linked list traverse", () => {
        const linkedList = new LinkedList<number>();
        linkedList.insert(1)
            .insert(2)
            .insert(3);
        let sum = 0;
        linkedList.traverse((val) => {
            sum += val * val;
        });
        sum.should.be.equal(14);
    });
    it("Complext type linked list traverse", () => {
        const linkedList = new LinkedList<{ width: number; height: number }>();
        linkedList.insert({ width: 100, height: 100 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 300, height: 300 });
        let widthSum = 0;
        let heightMax = 0;
        linkedList.traverse((val) => {
            widthSum += val.width;
            heightMax = Math.max(heightMax, val.height);
        });
        widthSum.should.be.equal(1000);
        heightMax.should.be.equal(300);
    });
});
