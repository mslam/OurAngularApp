import {Component, OnInit, ViewChild} from '@angular/core';
import { TreeComponent } from 'angular-tree-component';
import {AccountService} from "../shared/account/account.service";
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService,
              private route: ActivatedRoute) {
  }

  mode = "Reading";
  setEditingMode()
  {
    this.mode = "Editing";
  }

  setReadingMode()
  {
    this.mode = "Reading";
  }

  originNodes = [];
  ngOnInit() {
    var companyId = this.route.snapshot.paramMap.get('company_id');
    this.accountService.getNodes(Number(companyId)).then((nodes) => {
      this.nodes = nodes;
      // Merge object2 into object1
      $.extend(true, this.originNodes, nodes);
      // this.originNodes = nodes.map(x => Object.assign({}, x));
      console.log(this.originNodes);
    });

    this.filteredOptions = this.currenciesControl.valueChanges
        .startWith(null)
        .map(val => val ? this.filter(val) : this.currencies.slice());
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
    this.setEditingMode();
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
    this.setEditingMode();
    console.log(node);
    if (!node.hasChidlren && node.parent) {
      node.parent.data.children.splice(node.index,1);
      this.tree.treeModel.update();
    }
  }

  addAccount(node) {
    this.setEditingMode();
    this.currentAccount = {
      id: 0,
      company_id: node.company_id,
      name: "New Account",
      is_account_node: true,
      balance: 0,
      currency: "USD",
      node_id: node.data.id
    };
  }

  cancel(){
    this.nodes =  this.originNodes;
    this.setReadingMode();
  }
  currenciesControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  currencies = [
    "AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM",
    "BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC",
    "BTN","BWP","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP",
    "CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP",
    "ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD",
    "GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP",
    "INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR",
    "KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL",
    "LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO",
    "MTL","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK",
    "NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR",
    "RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP",
    "SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND",
    "TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF",
    "VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPD","XPF",
    "XPT","YER","ZAR","ZMK","ZMW","ZWL"];
  filter(val: string): string[] {
    return this.currencies.filter(option =>
    option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}