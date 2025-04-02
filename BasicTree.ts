type NodeType ={
    root?: NodeType;
    value: string;
    parent: null | NodeType;
    children?: any[]
    addNode(value: string) : {node: NodeType, index:number}
    
}

class TreeNode {
    public children: any[] = [];
    constructor(public value:string , public parent: null | TreeNode = null ){}

    addNode(value: string){
        const segments = value.split('/');

        if(segments.length === 0){
            return
        }

        if(segments.length === 1){
            const node = new TreeNode(segments[0], this);
            this.children.push(node)
            return {node, index: this.children.length -1};
        }

        const existingChildNode = this.children.find(child => child.value === segments[0])
        if(existingChildNode){
            existingChildNode.addNode(segments.slice(1).join('/'));
        }else{
            const node = new TreeNode(segments[0], this);
            node.addNode(segments.slice(1).join('/'));
            this.children.push(node);
            return {node, index: this.children.length -1};
        }

    }

    removeNode(index: number){
        this.children.splice(index, 1);
    }
}

class Tree{
    public root:any;
    constructor(public rootValue: string){
        this.root = new TreeNode(rootValue)
    }
    add(path: string){
        this.root.addNode(path)
    }

    remove(path: string){}
}

const fileSystem = new Tree('/');
const documentsNodeData = fileSystem.root.addNode('documents');
const gamesNodeData = fileSystem.root.addNode('games');
documentsNodeData.node.addNode('results.txt')
gamesNodeData.node.addNode('code.exe');

fileSystem.add('documents/personal/tex.docx')
fileSystem.add('games/cod.exe')
fileSystem.add('games/cod2.exe')
fileSystem.remove('games/cod2.exe')

console.log(fileSystem);
