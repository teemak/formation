class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        let result = String(this.value);
        if(this.next) {
            result += ` -> ${this.next.toString()}`;
        }
        return result;
    }
}

/*
let boston = new ListNode('Boston', null);
let philadelphia = new ListNode('Philadephia', boston);
let sacramento = new ListNode('Sacramento', philadelphia);
let austin = new ListNode('Austin', sacramento);
let miami = new ListNode('Miami', austin);
let oakland = new ListNode('Oakland', miami);

console.log(oakland.toString());
*/

module.exports = ListNode;
