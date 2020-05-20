import { LinkedList } from "./linkedList";

const ll = new LinkedList<number>();
ll.insert(1);
console.log(ll.head, ll.tail, ll.head === ll.tail, ll.length);
ll.insert(2);
console.log(ll.head, ll.tail, ll.head === ll.tail, ll.length);
ll.insert(3);
console.log(ll.head, ll.tail, ll.head === ll.tail, ll.length);
