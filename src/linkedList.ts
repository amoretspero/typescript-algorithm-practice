/* eslint-disable max-classes-per-file */
import { NotImplementedError } from "./helpers/errors";
import { isEqual } from "lodash";

/**
 * Class for a single `Node` in `LinkedList`.
 * 
 * ---
 * 
 * `LinkedList`의 한 `Node`에 대한 구현 클래스입니다.
 */
class LinkedListNode<T> {
    /**
     * Value of this node.
     * 
     * ---
     * 
     * 이 node가 갖고 있는 값.
     */
    public value: T;

    /**
     * Next node of this node.
     * 
     * If value is not null, then next node is present,
     * otherwise this node is the last node in linked list.
     * 
     * NOTE: In an abstracted context, it is said that `next` "points" to the next node in linked list,
     * and in C-like programming lanauges which supports `pointer` concepts, `next` is mostly have type of `pointer` to
     * the next node.
     * Since JS has no concepts like pointer, we will use just `LinkedListNode` type.
     * 
     * ---
     * 
     * 이 node의 다음 node.
     * 
     * 만약 값이 `null`이 아니라면 다음 node가 있고,
     * `null`이라면 다음 node가 없다는 것을, 즉 이 node가 linked list의 마지막 node임을 나타냅니다.
     * 
     * NOTE: 추상화된 개념에서 일반적으로 `next`는 현재 node의 다음 node를 "가리킨다"라고 합니다.
     * 또한 C처럼 pointer의 개념을 지원하는 언어에서는 대부분 `next`가 pointer 타입을 갖습니다.
     * 하지만 JS에서는 pointer를 지원하지 않으므로, 이 구현에서는 node와 동일한 타입을 사용합니다.
     */
    public next: LinkedListNode<T> | null;

    /**
     * Constructs a single node with given value.
     * 
     * ---
     * 
     * 주어진 값을 갖는 node를 만듭니다.
     * @param _value value to be contained.
     */
    constructor(_value: T) {
        this.value = _value;
        this.next = null;
    }
}

/**
 * Class for a `LinkedList`.
 * 
 * ---
 * 
 * `LinkedList`의 구현 클래스입니다.
 */
export class LinkedList<T> {
    /**
     * Head, the first node of linked list.
     * If list is empty, this should be `null`.
     * 
     * ---
     * 
     * LinkedList의 첫 번째 node입니다. 만약 빈 리스트라면 `null`입니다.
     */
    private _head: LinkedListNode<T> | null;

    /**
     * Tail, the last node of linked list.
     * If list is empty, this should be `null`.
     * 
     * ---
     * 
     * LinkedList의 마지막 node입니다. 만약 빈 리스트라면 `null`입니다.
     */
    private _tail: LinkedListNode<T> | null;

    /**
     * Comparer for node value types.
     * 
     * ---
     * 
     * Node의 타입에 대한 비교 연산입니다.
     */
    private _equal: (a: T, b: T) => boolean;

    /**
     * Constructs a single empty linked list.
     * 
     * ---
     * 
     * 빈 LinkedList를 하나 생성합니다.
     */
    constructor() {
        this._head = null;
        this._tail = null;
        this._equal = (a: T, b: T) => isEqual(a, b);
    }

    /**
     * Get the length of linked list.
     * 
     * ---
     * 
     * LinkedList의 길이를 반환합니다.
     */
    get length(): number {
        throw new NotImplementedError();
    }

    /**
     * Get the value of head of linked list.
     * If linked list is empty, returns `null`.
     * 
     * ---
     * 
     * LinkedList의 head의 값을 반환합니다.
     * 만약 LinkedList가 비어있다면 `null`을 반환합니다.
     */
    get head(): T | null {
        throw new NotImplementedError();
    }

    /**
     * Get the value of tail of linked list.
     * If linked list is empty, returns `null`.
     * 
     * ---
     * 
     * LinkedList의 tail의 값을 반환합니다.
     * 만약 LinkedList가 비어있다면 `null`을 반환합니다.
     */
    get tail(): T | null {
        throw new NotImplementedError();
    }

    /**
     * Check if linked list is empty.
     * 
     * ---
     * 
     * LinkedList가 비어있는지의 여부를 반환합니다.
     */
    public isEmpty(): boolean {
        throw new NotImplementedError();
    }

    /**
     * Insert a node with given value, to the end of linked list. Returns resulting linked list.
     * 
     * ---
     * 
     * LinkedList의 끝에 주어진 값을 갖는 node를 추가하고, 추가된 LinkedList를 반환합니다.
     * @param value Value to be inserted at the end of linked list.
     */
    public insert(value: T): LinkedList<T> {
        throw new NotImplementedError();
    }

    /**
     * Check if there exists node(s) with given value.
     * 
     * ---
     * 
     * 주어진 값을 갖는 node가 LinkedList에 존재하는지의 여부를 반환합니다.
     * @param value Value to be checked if it exists in linked list.
     */
    public includes(value: T): boolean {
        throw new NotImplementedError();
    }

    /**
     * Get the index of a first node that contains given value.
     * Return `-1` if there is no such node.
     * 
     * ---
     * 
     * 주어진 값을 갖는 첫 번째 node의 index를 반환합니다. 만약 없다면 `-1`을 반환합니다.
     * @param value Value to find index of the first occurence of a node having it.
     */
    public find(value: T): number {
        throw new NotImplementedError();
    }

    /**
     * Removes the first node that contains given value. Returns resulting linked list.
     * If there is no such node, nothing is changed for linked list.
     * 
     * ---
     * 
     * 주어진 값을 갖는 첫 번째 node를 LinkedList에서 삭제하고, 삭제한 뒤의 LinkedList를 반환합니다.
     * 만약 주어진 값을 갖는 node가 없다면 LinkedList에는 아무런 변화가 없습니다.
     * @param value Value to be removed from linked list.
     */
    public remove(value: T): LinkedList<T> {
        throw new NotImplementedError();
    }

    /**
     * Removes all nodes that contains given value. Returns resulting linked list.
     * If there are no such nodes, nothing is changed for linked list.
     * 
     * ---
     * 
     * 주어진 값을 갖는 모든 node를 LinkedList에서 삭제하고, 삭제한 뒤의 LinkedList를 반환합니다.
     * 만약 주어진 값을 갖는 node가 없다면 LinkedList에는 아무런 변화가 없습니다.
     * @param value Value to be removed all from linked list.
     */
    public removeAll(value: T): LinkedList<T> {
        throw new NotImplementedError();
    }

    /**
     * Reverses given linked list, i.e. order of node is in exactly opposite order.
     * For example, if `1 -> 2 -> 3` is given linked list, reverse should be `3 -> 2 -> 1`.
     * 
     * ---
     * 
     * 현재 LinkedList를 뒤집은, 즉 노드의 순서가 정반대인 LinkedList를 반환합니다.
     * 만약 LinkedList가 `1 -> 2 -> 3`이라면 뒤집은 결과는 `3 -> 2 -> 1`이 되어야 합니다.
     */
    public reverse(): LinkedList<T> {
        throw new NotImplementedError();
    }

    /**
     * Traverses through given linked list in head to tail order,
     * and executes callback function with each node's value for its single argument.
     * 
     * ---
     * 
     * head에서 tail로 가는 순서로 주어진 LinkedList를 순회하면서,
     * 주어진 callback 함수를 각 node의 value에 대해 실행합니다.
     * @param callback Function to called with each node's value for its single argument.
     */
    public traverse(callback: (nodeValue: T) => void): void {
        throw new NotImplementedError();
    }

    /**
     * Arrayify given linked list.
     * 
     * ---
     * 
     * LinkedList를 `Array`로 변환합니다.
     */
    public toArray(): Array<T> {
        throw new NotImplementedError();
    }

    /**
     * Stringify given linked list.
     * 
     * Format: `[elem1,elem2,...]`, elemN is console-written value via `console.log` for primitive types,
     * JSON-stringified for objects.
     * 
     * ---
     * 
     * LinkedList의 문자열 표현을 반환합니다.
     * 
     * 형식: `[원소1,원소2,...]`이고, 원소N은 기본자료형에 대해서는 `console.log`로 console에 기록했을 때 나오는 형식과 동일하면 되고,
     * object에 대해서는 `JSON.stringify` 함수를 사용했을 때 나오는 결과와 동일하면 됩니다.
     */
    public toString(): string {
        throw new NotImplementedError();
    }

    /**
     * Prints toString-ed version of linked list to stdout.
     * 
     * ---
     * 
     * `LinkedList.toString`함수를 호출한 결과를 stdout에 씁니다.
     */
    public print(): void {
        throw new NotImplementedError();
    }
}
