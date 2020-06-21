import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import "mocha";

chai.use(chaiAsPromised);
const should = chai.should();
const expect = chai.expect;

import { Stack } from "../src/stack";

interface IComplexType {
    width: number;
    height: number;
    name: string;
}

describe("Stack - construction", () => {
    it("Primitive type stack construction.", () => {
        const stack = new Stack<number>();
        stack.isEmpty().should.equal(true);
        should.equal(stack.peek(), null);
    });
    it("Complex type stack construction", () => {
        const stack = new Stack<IComplexType>();
        stack.isEmpty().should.equal(true);
        should.equal(stack.peek(), null);
    });
});

describe("Stack - misc", () => {
    it("Primitive type stack miscs.", () => {
        const stack = new Stack<number>();
        stack.toString().should.equal(`[]`);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.toString().should.equal(`[${[1, 2, 3].map((val) => val.toString()).join(",")}]`);
    });
    it("Complex type stack miscs.", () => {
        const stack = new Stack<IComplexType>();
        stack.toString().should.equal(`[]`);
        const values = [
            { width: 100, height: 100, name: "elem-1" },
            { width: 200, height: 200, name: "elem-2" },
            { width: 300, height: 300, name: "elem-3" },
        ];
        values.forEach((val) => stack.push(val));
        stack.toString().should.equal(`[${values.map((val) => JSON.stringify(val)).join(",")}]`);
    });
});

describe("Stack - basic operations", () => {
    it("Primitive type stack basic operations", () => {
        const stack = new Stack<number>();

        [1, 2, 3].forEach((val) => stack.push(val));
        stack.isEmpty().should.equal(false);
        should.equal(stack.peek(), 3);
        should.equal(stack.pop(), 3);

        [4, 5].forEach((val) => stack.push(val));
        should.equal(stack.peek(), 5);
        stack.isEmpty().should.equal(false);

        [5, 4, 2, 1].forEach((val) => {
            should.equal(stack.pop(), val);
        });
        should.equal(stack.peek(), null);
        stack.isEmpty().should.equal(true);

        stack.push(10);
        stack.isEmpty().should.equal(false);
        should.equal(stack.peek(), 10);
        should.equal(stack.pop(), 10);
        stack.isEmpty().should.equal(true);
        should.equal(stack.peek(), null);
        stack.push(10);
        stack.push(20);
        stack.isEmpty().should.equal(false);
        should.equal(stack.peek(), 20);
    });
    it("Complex type stack basic operations", () => {
        const stack = new Stack<IComplexType>();
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
        ].forEach((val) => stack.push(val));
        stack.isEmpty().should.equal(false);
        expect(stack.peek()).to.be.deep.equal({
            width: 300,
            height: 300,
            name: "elem-3",
        });
        expect(stack.pop()).to.be.deep.equal({
            width: 300,
            height: 300,
            name: "elem-3",
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
        ].forEach((val) => stack.push(val));
        expect(stack.peek()).to.be.deep.equal({
            width: 500,
            height: 500,
            name: "elem-5",
        });
        stack.isEmpty().should.equal(false);

        [
            {
                width: 500,
                height: 500,
                name: "elem-5"
            },
            {
                width: 400,
                height: 400,
                name: "elem-4"
            },
            {
                width: 200,
                height: 200,
                name: "elem-2"
            },
            {
                width: 100,
                height: 100,
                name: "elem-1",
            },
        ].forEach((val) => {
            expect(stack.pop()).to.be.deep.equal(val);
        });
        expect(stack.peek()).to.be.deep.equal(null);
        stack.isEmpty().should.equal(true);

        stack.push({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        stack.isEmpty().should.equal(false);
        expect(stack.peek()).to.be.deep.equal({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        expect(stack.pop()).to.be.deep.equal({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        stack.isEmpty().should.equal(true);
        expect(stack.peek()).to.be.deep.equal(null);
        stack.push({
            width: 1000,
            height: 1000,
            name: "elem-10",
        });
        stack.push({
            width: 2000,
            height: 2000,
            name: "elem-20",
        });
        stack.isEmpty().should.equal(false);
        expect(stack.peek()).to.be.deep.equal({
            width: 2000,
            height: 2000,
            name: "elem-20",
        });
    });
});
