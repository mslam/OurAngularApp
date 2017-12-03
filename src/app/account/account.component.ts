import {Component, OnInit, ViewChild} from '@angular/core';
import { TreeComponent } from 'angular-tree-component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];

  renamingFinished(node)
  {
    if(node.data.name) {
      node.data.renaming = false;
    }
  }

  keyPressed(node, $event)
  {
    if($event.key == 'Enter')
    {
      this.renamingFinished(node);
    }
  }

  renaming(node)
  {
    node.data.renaming = true;
  }

  addChildNode(node){
    var newNode = {renaming: true};
    if(node.data.children){
      node.data.children.push(newNode);
    }
    else {
      node.data.children = [newNode];
    }
    this.tree.treeModel.update();
    this.tree.treeModel.focusDrillDown();
    console.log(this.tree.treeModel);
    var currentNode = this.tree.treeModel.focusedNode;
    console.log(currentNode.children[currentNode.data.children.length - 1]);
    this.tree.treeModel.setFocusedNode(currentNode.children[currentNode.data.children.length - 1]);
  }
}
