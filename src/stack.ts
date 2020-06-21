import { NotImplementedError } from "./helpers/errors";

/**
 * Class for a `Stack`.
 * 
 * ---
 * 
 * `Stack`의 구현 클래스입니다.
 */
export class Stack<T> {
    /**
     * Internal array containing stacked values.
     * 
     * NOTE: For this class, no methods from `Array` class should not be used.
     * Only indexer(`_array[idx]`) can be used.
     * 
     * ---
     * 
     * Stack에 저장된 값들을 담고 있는 array입니다.
     * 
     * NOTE: 이 구현 클래스에서는 `Array`클래스에서 제공하는 그 어떤 메소드도 사용해서는 안됩니다.
     * 오직 indexer(`_array[idx]`)만 사용가능합니다.
     */
    private _array: T[];

    /**
     * Internal pointer points to the last value pushed into stack.
     * 
     * If the stack is empty, this value should be -1.
     * 
     * NOTE: Usually in languages like C, which supports pointer or pointer-like concepts,
     * this `_ptr` is implemented in that pointer-concept, which points the actual address in 
     * memory space where the last pushed value resides.
     * However, JS(and also TS) does not support pointer, we will use it as index of the last value
     * pushed into stack.
     * 
     * ---
     * 
     * Stack에 저장된 마지막 원소를 가리키는 포인터입니다.
     * 
     * 만약 Stack이 비어있다면, 이 값은 -1이어야 합니다.
     * 
     * NOTE: 포인터 또는 포인터와 비슷한 개념을 제공하는 C를 비롯한 다른 언어에서는
     * `_ptr`을 해당 개념을 사용해서, 실제로 그 값이 존재하는 메모리 공간의 주소를 가리키도록 구현합니다.
     * 하지만 TS와 JS 모두 그러한 개념을 제공하지 않으므로, 역에서는 `_array`에서
     * 해당 값이 존재하는 index를 가리키도록 합니다.
     */
    private _ptr: number;

    /**
     * Constructs a single empty stack.
     * 
     * ---
     * 
     * 비어있는 stack을 하나 생성합니다.
     */
    constructor() {
        this._array = [];
        this._ptr = -1;
    }


    /**
     * Check if stack is empty or not.
     * 
     * ---
     * 
     * Stack이 비어있는지 체크합니다.
     */
    public isEmpty(): boolean {
        throw new NotImplementedError();
    }

    /**
     * Peek the last element without popping it.
     * If stack is empty, should return null.
     * 
     * ---
     * 
     * 가장 뒤에 있는 원소를 pop하지 않고 그 값을 읽습니다.
     * 만약 stack이 비어있다면 null을 반환합니다.
     */
    public peek(): T | null {
        throw new NotImplementedError();
    }

    /**
     * Inserts a single value at the end of stack.
     * 
     * ---
     * 
     * Stack의 맨 마지막에 하나의 값을 추가합니다.
     * @param value Value to be stacked at the end of this stack.
     */
    public push(value: T): void {
        throw new NotImplementedError();
    }

    /**
     * Remove the last element of the stack and returns it.
     * If stack is empty, should return null.
     * 
     * ---
     * 
     * Stack의 가장 마지막에 있는 원소를 제거하고 그 값을 반환합니다.
     * 만약 stack이 비어있다면 null을 반환합니다.
     */
    public pop(): T | null {
        throw new NotImplementedError();
    }

    /**
     * Returns string representation of stack.
     * 
     * Format: `[elem1,elem2,...]`, elemN is console-written value via `console.log` for primitive types,
     * JSON-stringified for objects.
     * 
     * ---
     * 
     * Stack의 문자열 표현을 반환합니다.
     * 
     * 형식: `[원소1,원소2,...]`이고, 원소N은 기본자료형에 대해서는 `console.log`로 console에 기록했을 때 나오는 형식과 동일하면 되고,
     * object에 대해서는 `JSON.stringify` 함수를 사용했을 때 나오는 결과와 동일하면 됩니다.
     */
    public toString(): string {
        throw new NotImplementedError();
    }
}
