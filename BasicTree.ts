type NodeType = {
    root?: NodeType;
    value: string;
    parent: null | NodeType;
    children?: any[]
    addNode(value: string): { node: NodeType, index: number }

}

class TreeNode {
    public children: any[] = [];
    constructor(public value: string, public parent: null | TreeNode = null) { }

    addNode(value: string) {
        const segments = value.split('/');

        if (segments.length === 0) {
            return
        }
        const existingChildNode = this.children.find(child => child.value === segments[0])

        if (segments.length === 1 && !existingChildNode) {
            const node = new TreeNode(segments[0], this);
            this.children.push(node)
            return { node, index: this.children.length - 1 };
        }

        if (existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/'));
        } else {
            const node = new TreeNode(segments[0], this);
            node.addNode(segments.slice(1).join('/'));
            this.children.push(node);
            return { node, index: this.children.length - 1 };
        }

    }

    removeNode(value: string) {
        const segments = value.split('/');

        if (segments.length === 0) {
            return
        }
        if (segments.length === 1) {
            const existingNodeIndex = this.children.findIndex(child => child.value === segments[0]);
            if (existingNodeIndex < 0) {
                throw new Error('Could not find matching value')
            }
            this.children.splice(existingNodeIndex, 1)
        }
        if (segments.length > 1) {
            const existingChildNode = this.children.find(child => child.value === segments[0])
            if(!existingChildNode){
                throw new Error('Could not find matchin path. Path segment:' + segments[0])
            }

            existingChildNode.removeNode(segments.slice(1).join('/'))
        }
    }

    find(value: string){
        // depth-first
        for(const child of this.children){
            
            if(child.value === value){
                
                return child;
            }
            const nestedChildNode = child.find(value);
            if(nestedChildNode){
                return nestedChildNode
            }
        }

        
        // breadth-first
        for(const child of this.children){
            
            if(child.value === value){
                
                return child;
            }
        }
        for(const child of this.children){
            const nestedChildNode = child.find(value);
            if(nestedChildNode){
                return nestedChildNode
            }
        }
    }
}

class Tree {
    public root: any;
    constructor(public rootValue: string) {
        this.root = new TreeNode(rootValue)
    }
    add(path: string) {
        this.root.addNode(path)
    }

    remove(path: string) {
        this.root.removeNode(path)
    }

    find(value: string){
        if(this.root.value === value){
            return this.root;
        }
        return this.root.find(value)
    }
}

// simulating a file system tree structure

const fileSystem = new Tree('/');
const documentsNodeData = fileSystem.root.addNode('documents');
const gamesNodeData = fileSystem.root.addNode('games');
documentsNodeData.node.addNode('results.txt')
gamesNodeData.node.addNode('cod.exe');

fileSystem.add('documents/personal/tex.docx')
fileSystem.add('games/cod.exe')
fileSystem.add('games/cod2.exe')
fileSystem.remove('games/cod2.exe')

console.log(fileSystem.find('personal'));


console.log(fileSystem);
