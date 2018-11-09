class BinaryTree{
    constructor(){
        this.root=null;
    }

    alturaArvore(node){
        if (node == null){
            return 0;
        }
        else {
            return Math.max(this.alturaArvore(node.left), this.alturaArvore(node.right)) + 1;
        }

    }

    insert(element){
        let node = new Node(element);
        if(this.root===null){
            this.root=node;
        }else{
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node){
        if(node.content<root.content){
            if(root.left===null){
                root.left=node;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            if(root.right===null){
                root.right=node;
            }else{
                this.insertNode(root.right, node);
            }
        }
    }

    inOrderTraverseNode(node, callback){
        if(node!==null){
            this.inOrderTraverseNode(node.left, callback);
            callback(node.content);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback){
        if(node!==null){
            callback(node.content);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
	
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }
	
    preOrderTraverseNodeArvore(node, start_width, end_width, start_height, level){
		var x = (start_width+end_width)/3;
		var y = start_height+level/10;
		var saida = document.getElementById('saida');
		var span = document.createElement('span');
		
		saida.appendChild(span);
		
		span.style.position = "absolute";
		span.setAttribute("class", "numberCircle");
		span.innerHTML = node.content;
		span.style.left = x+'px';
		span.style.top = y+'px';


		if(node.left!==null){
			this.preOrderTraverseNodeArvore(node.left, start_width, (start_width+end_width)/2, start_height+level, level);
		}
		
		if(node.right!==null){
			this.preOrderTraverseNodeArvore(node.right, (start_width+end_width)/2, end_width, start_height+level, level);
		}
    }

    preOrderTraverseArvore(){
        this.preOrderTraverseNodeArvore(this.root, 0, 1200, 0, 600/this.alturaArvore(this.root) );
    }
	

    postOrderTraverseNode(node, callback){
        if(node!==null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.content);
        }
    }
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }
}