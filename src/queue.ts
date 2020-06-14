import { NotImplementedError } from "../src/helpers/errors";
import { LinkedList } from "./linkedList";

/**
 * Class for a `Queue`.
 * 
 * ---
 * 
 * `Queue`의 구현 클래스입니다.
 */
export class Queue<T> {
    /**
     * Internal linked list containing queued values.
     * 
     * ---
     * 
     * Queue에 들어온 값을 담고 있는 linked list입니다.
     */
    private _array: LinkedList<T>;

    /**
     * Constructs a single empty queue.
     * 
     * ---
     * 
     * 비어있는 queue를 하나 생성합니다.
     */
    constructor() {
        this._array = new LinkedList<T>();
    }

    /**
     * Check if queue is empty or not.
     * 
     * ---
     * 
     * Queue가 비어있는지 체크합니다.
     */
    public isEmpty(): boolean {
        throw new NotImplementedError();
    }

    /**
     * Peek the front-most element without dequeing it.
     * If queue is empty, should return null.
     * 
     * ---
     * 
     * 가장 앞에 있는 원소를 dequeue하지 않고 그 값을 읽습니다.
     * 만약 queue가 비어있다면 null을 반환합니다.
     */
    public peek(): T | null {
        throw new NotImplementedError();
    }

    /**
     * Inserts a single value at the end of queue.
     * 
     * ---
     * 
     * Queue의 맨 마지막에 하나의 값을 추가합니다.
     * @param value Value to enqueue at the end of this queue.
     */
    public enqueue(value: T): void {
        throw new NotImplementedError();
    }

    /**
     * Remove the front-most element of the queue and returns it.
     * If queue is empty, should return null.
     * 
     * ---
     * 
     * Queue의 가장 앞에 있는 원소를 제거하고 그 값을 반환합니다.
     * 만약 queue가 비어있다면 null을 반환합니다.
     */
    public dequeue(): T | null {
        throw new NotImplementedError();
    }

    /**
     * Returns string representation of queue.
     * 
     * Format: `[elem1,elem2,...]`, elemN is console-written value via `console.log` for primitive types,
     * JSON-stringified for objects.
     * 
     * ---
     * 
     * Queue의 문자열 표현을 반환합니다.
     * 
     * 형식: `[원소1,원소2,...]`이고, 원소N은 기본자료형에 대해서는 `console.log`로 console에 기록했을 때 나오는 형식과 동일하면 되고,
     * object에 대해서는 `JSON.stringify` 함수를 사용했을 때 나오는 결과와 동일하면 됩니다.
     */
    public toString(): string {
        throw new NotImplementedError();
    }
}
