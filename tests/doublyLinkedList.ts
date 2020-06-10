import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import "mocha";

chai.use(chaiAsPromised);
const should = chai.should();
const expect = chai.expect;

import { DoublyLinkedList } from "../src/DoublyLinkedList";

describe("DoublyLinkedList - construction", () => {
    it("Primitive type doubly linked list construction.", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.length.should.equal(0);
        should.equal(doublyLinkedList.head, null);
        should.equal(doublyLinkedList.tail, null);
    });
    it("Complex type doubly linked list construction.", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        doublyLinkedList.length.should.equal(0);
        should.equal(doublyLinkedList.head, null);
        should.equal(doublyLinkedList.tail, null);
    });
});

describe("DoublyLinkedList - misc", () => {
    it("Primitive type doubly linked list miscs.", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.isEmpty().should.be.equal(true);
        doublyLinkedList.insert(1)
            .insert(2)
            .insert(3);

        doublyLinkedList.toArray().should.deep.equal([1, 2, 3]);
        doublyLinkedList.toString().should.equal(`[${[1, 2, 3].join(",")}]`);
        doublyLinkedList.isEmpty().should.be.equal(false);
    });
    it("Complex type doubly linked list miscs.", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        doublyLinkedList.isEmpty().should.be.equal(true);
        const testSet = [
            { width: 100, height: 100 },
            { width: 200, height: 300 },
            { width: 300, height: 200 },
        ];
        testSet.forEach((val) => doublyLinkedList.insert(val));

        doublyLinkedList.toArray().should.deep.equal(testSet);
        doublyLinkedList.toString().should.equal(`[${testSet.map((val) => JSON.stringify(val)).join(",")}]`);
        doublyLinkedList.isEmpty().should.be.equal(false);
    });
});

describe("DoublyLinkedList - insertion", () => {
    it("Primitive type doubly linked list insertion", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.length.should.equal(0);
        should.equal(doublyLinkedList.head, null);
        should.equal(doublyLinkedList.tail, null);

        doublyLinkedList.insert(1);
        doublyLinkedList.length.should.equal(1);
        should.equal(doublyLinkedList.head, 1);
        should.equal(doublyLinkedList.tail, 1);

        doublyLinkedList.insert(2);
        doublyLinkedList.insert(3);
        doublyLinkedList.length.should.equal(3);
        should.equal(doublyLinkedList.head, 1);
        should.equal(doublyLinkedList.tail, 3);
    });

    it("Complex type doubly linked list insertion", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        doublyLinkedList.length.should.equal(0);
        should.equal(doublyLinkedList.head, null);
        should.equal(doublyLinkedList.tail, null);

        doublyLinkedList.insert({ width: 100, height: 100 });
        doublyLinkedList.length.should.equal(1);
        expect(doublyLinkedList.head).to.be.deep.equal({ width: 100, height: 100 });
        expect(doublyLinkedList.tail).to.be.deep.equal({ width: 100, height: 100 });

        doublyLinkedList.insert({ width: 200, height: 200 });
        doublyLinkedList.insert({ width: 200, height: 300 });
        doublyLinkedList.length.should.equal(3);
        expect(doublyLinkedList.head).to.be.deep.equal({ width: 100, height: 100 });
        expect(doublyLinkedList.tail).to.be.deep.equal({ width: 200, height: 300 });

        doublyLinkedList.insert({ width: 200, height: 300 });
        doublyLinkedList.insert({ width: 200, height: 300 });
        doublyLinkedList.length.should.equal(5);
        expect(doublyLinkedList.head).to.be.deep.equal({ width: 100, height: 100 });
        expect(doublyLinkedList.tail).to.be.deep.equal({ width: 200, height: 300 });
    });
});

describe("DoublyLinkedList - search", () => {
    it("Primitive type doubly linked list search", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.includes(1).should.be.equal(false);
        doublyLinkedList.find(1).should.be.equal(-1);
        doublyLinkedList.insert(1);
        doublyLinkedList.includes(1).should.be.equal(true);
        doublyLinkedList.find(1).should.be.equal(0);
        doublyLinkedList.insert(2);
        doublyLinkedList.insert(3);
        doublyLinkedList.insert(3);
        doublyLinkedList.insert(3);
        doublyLinkedList.insert(4);
        doublyLinkedList.insert(5);

        doublyLinkedList.includes(3).should.be.equal(true);
        doublyLinkedList.includes(7).should.be.equal(false);

        doublyLinkedList.find(3).should.be.equal(2);
        doublyLinkedList.find(1).should.be.equal(0);
        doublyLinkedList.find(7).should.be.equal(-1);
    });
    it("Complex type doubly linked list search", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        doublyLinkedList.includes({ width: 100, height: 100 }).should.be.equal(false);
        doublyLinkedList.find({ width: 100, height: 100 }).should.be.equal(-1);
        doublyLinkedList.insert({ width: 100, height: 100 });
        doublyLinkedList.includes({ width: 100, height: 100 }).should.be.equal(true);
        doublyLinkedList.find({ width: 100, height: 100 }).should.be.equal(0);
        doublyLinkedList.insert({ width: 200, height: 200 });
        doublyLinkedList.insert({ width: 200, height: 200 });
        doublyLinkedList.insert({ width: 200, height: 200 });
        doublyLinkedList.insert({ width: 200, height: 300 });

        doublyLinkedList.includes({ width: 100, height: 100 }).should.be.equal(true);
        doublyLinkedList.includes({ width: 300, height: 100 }).should.be.equal(false);

        doublyLinkedList.find({ width: 200, height: 200 }).should.be.equal(1);
        doublyLinkedList.find({ width: 100, height: 100 }).should.be.equal(0);
        doublyLinkedList.find({ width: 200, height: 300 }).should.be.equal(4);
        doublyLinkedList.find({ width: 300, height: 200 }).should.be.equal(-1);
    });
});

describe("DoublyLinkedList - deletion", () => {
    it("Primitive type doubly linked list deletion", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.remove(1).toArray().should.be.deep.equal([]);
        doublyLinkedList.insert(1);
        doublyLinkedList.remove(2).toArray().should.be.deep.equal([1]);
        doublyLinkedList.remove(1).toArray().should.be.deep.equal([]);
        doublyLinkedList.insert(1)
            .insert(2)
            .insert(3)
            .insert(3)
            .insert(3)
            .insert(4)
            .insert(5)
            .insert(5)
            .insert(5);

        doublyLinkedList.length.should.be.equal(9);

        doublyLinkedList.remove(2);
        doublyLinkedList.length.should.be.equal(8);
        doublyLinkedList.includes(2).should.be.equal(false);
        doublyLinkedList.find(2).should.be.equal(-1);

        doublyLinkedList.remove(3);
        doublyLinkedList.length.should.be.equal(7);
        doublyLinkedList.includes(3).should.be.equal(true);
        doublyLinkedList.find(3).should.be.equal(1);

        doublyLinkedList.removeAll(4);
        doublyLinkedList.length.should.be.equal(6);
        doublyLinkedList.includes(4).should.be.equal(false);
        doublyLinkedList.find(4).should.be.equal(-1);

        doublyLinkedList.removeAll(5);
        doublyLinkedList.length.should.be.equal(3);
        doublyLinkedList.includes(5).should.be.equal(false);
        doublyLinkedList.find(5).should.be.equal(-1);
        doublyLinkedList.toArray().should.deep.equal([1, 3, 3]);

        doublyLinkedList.remove(1).toArray().should.deep.equal([3, 3]);
        doublyLinkedList.removeAll(3).toArray().should.deep.equal([]);
    });

    it("Complex type doubly linked list deletion", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        doublyLinkedList.removeAll({ width: 100, height: 100 }).toArray().should.be.deep.equal([]);
        doublyLinkedList.insert({ width: 100, height: 100 });
        doublyLinkedList.removeAll({ width: 100, height: 200 }).toArray().should.be.deep.equal([{ width: 100, height: 100 }]);
        doublyLinkedList.removeAll({ width: 100, height: 100 }).toArray().should.be.deep.equal([]);
        doublyLinkedList.insert({ width: 100, height: 100 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 300, height: 300 })
            .insert({ width: 300, height: 300 })
            .insert({ width: 300, height: 300 })
            .insert({ width: 400, height: 400 })
            .insert({ width: 500, height: 500 })
            .insert({ width: 500, height: 500 })
            .insert({ width: 500, height: 500 });

        doublyLinkedList.length.should.be.equal(9);

        doublyLinkedList.remove({ width: 200, height: 200 });
        doublyLinkedList.length.should.be.equal(8);
        doublyLinkedList.includes({ width: 200, height: 200 }).should.be.equal(false);
        doublyLinkedList.find({ width: 200, height: 200 }).should.be.equal(-1);

        doublyLinkedList.remove({ width: 300, height: 300 });
        doublyLinkedList.length.should.be.equal(7);
        doublyLinkedList.includes({ width: 300, height: 300 }).should.be.equal(true);
        doublyLinkedList.find({ width: 300, height: 300 }).should.be.equal(1);

        doublyLinkedList.removeAll({ width: 400, height: 400 });
        doublyLinkedList.length.should.be.equal(6);
        doublyLinkedList.includes({ width: 400, height: 400 }).should.be.equal(false);
        doublyLinkedList.find({ width: 400, height: 400 }).should.be.equal(-1);

        doublyLinkedList.removeAll({ width: 500, height: 500 });
        doublyLinkedList.length.should.be.equal(3);
        doublyLinkedList.includes({ width: 500, height: 500 }).should.be.equal(false);
        doublyLinkedList.find({ width: 500, height: 500 }).should.be.equal(-1);
        doublyLinkedList.toArray().should.deep.equal([{ width: 100, height: 100 }, { width: 300, height: 300 }, { width: 300, height: 300 }]);

        doublyLinkedList.remove({ width: 300, height: 300 }).toArray().should.deep.equal([{ width: 100, height: 100 }, { width: 300, height: 300 }]);
    });
});

describe("DoublyLinkedList - reverse", () => {
    it("Primitive type doubly linked list reverse", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.insert(1)
            .insert(2)
            .insert(3);
        doublyLinkedList.reverse().toArray().should.deep.equal([3, 2, 1]);
    });
    it("Complext type doubly linked list reverse", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        doublyLinkedList.insert({ width: 100, height: 100 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 300, height: 300 });
        doublyLinkedList.reverse().toArray().should.deep.equal([
            { width: 300, height: 300 },
            { width: 200, height: 200 },
            { width: 200, height: 200 },
            { width: 200, height: 200 },
            { width: 100, height: 100 },
        ]);
    });
});

describe("DoublyLinkedList - traverse", () => {
    it("Primitive type doubly linked list traverse", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        doublyLinkedList.insert(1)
            .insert(2)
            .insert(3);
        let sum = 0;
        doublyLinkedList.traverse((val) => {
            sum += val * val;
        });
        sum.should.be.equal(14);
    });
    it("Complext type doubly linked list traverse", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        doublyLinkedList.insert({ width: 100, height: 100 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 200, height: 200 })
            .insert({ width: 300, height: 300 });
        let widthSum = 0;
        let heightMax = 0;
        doublyLinkedList.traverse((val) => {
            widthSum += val.width;
            heightMax = Math.max(heightMax, val.height);
        });
        widthSum.should.be.equal(1000);
        heightMax.should.be.equal(300);
    });
});

describe("DoublyLinkedList - forEach", () => {
    it("Primitive type doubly linked list forEach function", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        [1, 2, 3, 4, 5].forEach((num) => doublyLinkedList.insert(num));
        const resultArray: number[] = [];
        doublyLinkedList.forEach((val, idx) => {
            resultArray.push(val * val + idx);
        });
        resultArray.should.deep.equal([1, 5, 11, 19, 29]);
    });
    it("Complex type doubly linked list forEach function", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        [
            { width: 100, height: 100 },
            { width: 200, height: 100 },
            { width: 100, height: 200 },
            { width: 200, height: 200 },
            { width: 300, height: 300 },
        ].forEach((val) => doublyLinkedList.insert(val));
        const resultArray: Array<{ width: number; height: number }> = [];
        doublyLinkedList.forEach((val, idx) => {
            resultArray.push({
                width: val.height * (2 + idx),
                height: val.width * (1 + idx),
            });
        });
        resultArray.should.deep.equal([
            { width: 200, height: 100 },
            { width: 300, height: 400 },
            { width: 800, height: 300 },
            { width: 1000, height: 800 },
            { width: 1800, height: 1500 },
        ]);
    });
});

describe("DoublyLinkedList - map", () => {
    it("Primitive type doubly linked list map function", () => {
        const doublyLinkedList = new DoublyLinkedList<number>();
        [1, 2, 3, 4, 5].forEach((num) => doublyLinkedList.insert(num));
        doublyLinkedList.map((val, idx) => val * val + idx).should.deep.equal([1, 5, 11, 19, 29]);
    });
    it("Complex type doubly linked list map function", () => {
        const doublyLinkedList = new DoublyLinkedList<{ width: number; height: number }>();
        [
            { width: 100, height: 100 },
            { width: 200, height: 100 },
            { width: 100, height: 200 },
            { width: 200, height: 200 },
            { width: 300, height: 300 },
        ].forEach((val) => doublyLinkedList.insert(val));
        doublyLinkedList
            .map((val, idx) => ({ width: val.height * (2 + idx), height: val.width * (1 + idx) }))
            .should.deep.equal([
                { width: 200, height: 100 },
                { width: 300, height: 400 },
                { width: 800, height: 300 },
                { width: 1000, height: 800 },
                { width: 1800, height: 1500 },
            ]);
    });
});
