type NodeType ={
    root?: NodeType;
    value: string;
    parent: null | NodeType;
    children?: any[]
    addNode(value: string) : {node: NodeType, index:number}
    
}

class TreeNode {
    public children: NodeType[] = [];
    constructor(public value , public parent: null | TreeNode = null ){}

    addNode(value: string){
        const node = new TreeNode(value, this)
        this.children.push(node)
        return {node, index: this.children.length -1};
    }

    removeNode(index: number){
        this.children.splice(index, 1);
    }
}

class Tree{
    public root:NodeType;
    constructor(public rootValue){
        this.root = new TreeNode(rootValue)
    }
}

const fileSystem = new Tree('/');
const documentsNodeData = fileSystem.root.addNode('/documents');
const gamesNodeData = fileSystem.root.addNode('/games');
documentsNodeData.node.addNode('results.txt')
gamesNodeData.node.addNode('code.exe');

console.log(fileSystem);
