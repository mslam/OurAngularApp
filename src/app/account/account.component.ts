import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
}
