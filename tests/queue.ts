import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import "mocha";

chai.use(chaiAsPromised);
const should = chai.should();
const expect = chai.expect;

import { Queue } from "../src/queue";

interface IComplexType {
    width: number;
    height: number;
    name: string;
}

describe("Queue - construction", () => {
    it("Primitive type queue construction.", () => {
        const queue = new Queue<number>();
        queue.isEmpty().should.equal(true);
        should.equal(queue.peek(), null);
    });
    it("Complex type queue construction", () => {
        const queue = new Queue<IComplexType>();
        queue.isEmpty().should.equal(true);
        should.equal(queue.peek(), null);
    });
});

describe("Queue - misc", () => {
    it("Primitive type queue miscs.", () => {
        const queue = new Queue<number>();
        queue.toString().should.equal(`[]`);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.toString().should.equal(`[${[1, 2, 3].map((val) => val.toString()).join(",")}]`);
    });
    it("Complex type queue miscs.", () => {
        const queue = new Queue<IComplexType>();
        queue.toString().should.equal(`[]`);
        queue.enqueue({ width: 100, height: 100, name: "elem-1" });
        queue.enqueue({ width: 200, height: 200, name: "elem-2" });
        queue.enqueue({ width: 300, height: 300, name: "elem-3" });
        queue.toString().should.equal(`[${[
            { width: 100, height: 100, name: "elem-1" },
            { width: 200, height: 200, name: "elem-2" },
            { width: 300, height: 300, name: "elem-3" }
        ].map((val) => JSON.stringify(val)).join(",")}]`);
    });
});

describe("Queue - basic operations", () => {
    it("Primitive type queue basic operations", () => {
        const queue = new Queue<number>();

        [1, 2, 3].forEach((val) => queue.enqueue(val));
        queue.isEmpty().should.equal(false);
        should.equal(queue.peek(), 1);
        should.equal(queue.dequeue(), 1);

        [4, 5].forEach((val) => queue.enqueue(val));
        should.equal(queue.peek(), 2);
        queue.isEmpty().should.equal(false);

        [2, 3, 4, 5].forEach((val) => {
            should.equal(queue.dequeue(), val);
        });
        should.equal(queue.peek(), null);
        queue.isEmpty().should.equal(true);

        queue.enqueue(10);
        queue.isEmpty().should.equal(false);
        should.equal(queue.peek(), 10);
        should.equal(queue.dequeue(), 10);
        queue.isEmpty().should.equal(true);
        should.equal(queue.peek(), null);
        queue.enqueue(10);
        queue.enqueue(20);
        queue.isEmpty().should.equal(false);
        should.equal(queue.peek(), 10);
    });

    it("Complex type queue basic operations", () => {
        const queue = new Queue<IComplexType>();
        [
            {
                width: 100,
                height: 100,
                name: "elem-1",
            },
            {
                width: 200,
                height: 200,
                name: "elem-2"
            },
            {
                width: 300,
                height: 300,
                name: "elem-3"
            },
        ].forEach((val) => queue.enqueue(val));
        queue.isEmpty().should.equal(false);
        expect(queue.peek()).to.be.deep.equal({
            width: 100,
            height: 100,
            name: "elem-1",
        });
        expect(queue.dequeue()).to.be.deep.equal({
            width: 100,
            height: 100,
            name: "elem-1",
        });

        [
            {
                width: 400,
                height: 400,
                name: "elem-4"
            },
            {
                width: 500,
                height: 500,
                name: "elem-5",
            },
        ].forEach((val) => queue.enqueue(val));
        expect(queue.peek()).to.be.deep.equal({
            width: 200,
            height: 200,
            name: "elem-2",
        });
        queue.isEmpty().should.equal(false);

        [
            {
                width: 200,
                height: 200,
                name: "elem-2"
            },
            {
                width: 300,
                height: 300,
                name: "elem-3"
            },
            {
                width: 400,
                height: 400,
                name: "elem-4"
            },
            {
                width: 500,
                height: 500,
                name: "elem-5",
            },
        ].forEach((val) => {
            expect(queue.dequeue()).to.be.deep.equal(val);
        });
        expect(queue.peek()).to.be.deep.equal(null);
        queue.isEmpty().should.equal(true);

        queue.enqueue({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        queue.isEmpty().should.equal(false);
        expect(queue.peek()).to.be.deep.equal({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        expect(queue.dequeue()).to.be.deep.equal({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        queue.isEmpty().should.equal(true);
        expect(queue.peek()).to.be.deep.equal(null);
        queue.enqueue({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        queue.enqueue({
            width: 2000,
            height: 2000,
            name: "elem-20",
        });
        queue.isEmpty().should.equal(false);
        expect(queue.peek()).to.be.deep.equal({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
    });
});
