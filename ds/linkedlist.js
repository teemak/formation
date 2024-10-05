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
	while(p != null) {
		let data = p.getData();
		console.log(data + " -> ");
		p = p.next;
	}
	console.log('End\n\n');
}

console.log(init());
