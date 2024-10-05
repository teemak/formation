function Node(data, next) {
	this.data = data;
	this.next = next;

	this.getData = function() {
		return this.data;
	}
}

function init() {
	let head = new Node('New York', null);
	let tail = null;

	let nodeBoston = new Node('Boston', null);
	head.next = nodeBoston;

	let nodeHartford = new Node('Hartford', null);
	nodeBoston.next = nodeHartford;

	let nodeNorwich = new Node('Norwich', null);
	nodeHartford.next = nodeNorwich;

	tail = new Node('Fremont', null);
	nodeNorwich.next = tail;

	return head;
}

function printNode(node) {
	let p = node;
	let string = '';
	while(p != null) {
		let data = p.getData();
		string += data + " -> ";
		// console.log(data + " -> ");
		p = p.next;
	}
	let linkedList = string;
	console.log(linkedList);
	console.log('End');
}

//console.log(init());
let node1 = init();
printNode(node1);
