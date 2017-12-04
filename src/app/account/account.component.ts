import {Component, OnInit, ViewChild} from '@angular/core';
import { TreeComponent } from 'angular-tree-component';
import {AccountService} from "../shared/account/account.service";
import {ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService,
              private route: ActivatedRoute) {
  }

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        {id: 2, name: 'child1'},
        {id: 3, name: 'child2'}
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        {id: 5, name: 'child2.1'},
        {
          id: 6,
          name: 'child2.2',
          children: [
            {id: 7, name: 'subsub'}
          ]
        }
      ]
    }
  ];

  ngOnInit() {
    var companyId = this.route.snapshot.paramMap.get('company_id');
    this.accountService.getNodes(Number(companyId)).then((nodes) => {
      this.nodes = nodes;
    });
  }


  @ViewChild(TreeComponent)
  private tree: TreeComponent;


  renamingFinished(node) {
    if (node.data.name) {
      node.data.renaming = false;
    }
  }

  keyPressed(node, $event) {
    if ($event.key == 'Enter') {
      this.renamingFinished(node);
    }
  }

  renaming(node) {
    node.data.renaming = true;
  }

  addChildNode(node) {
    var newNode = {renaming: true, name:"New node"};
    if (node.data.children) {
      node.data.children.push(newNode);
    }
    else {
      node.data.children = [newNode];
    }
    this.tree.treeModel.update();
    this.tree.treeModel.focusDrillDown();
    console.log(this.tree.treeModel);
    // var currentNode = this.tree.treeModel.focusedNode;
    // console.log(currentNode.children[currentNode.data.children.length - 1]);
    // this.tree.treeModel.setFocusedNode(currentNode.children[currentNode.data.children.length - 1]);
  }

  removeChildNode(node) {
    console.log(node);
    if (!node.hasChidlren && node.parent) {
      node.parent.data.children.splice(node.index,1);
      this.tree.treeModel.update();
    }
  }
}