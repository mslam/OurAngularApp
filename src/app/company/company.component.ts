import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  currenciesControl: FormControl = new FormControl();

  countries = [
    "AFG","ALA","ALB","DZA","ASM","AND","AGO","AIA","ATA","ATG","ARG",
    "ARM","ABW","AUS","AUT","AZE","BHS","BHR","BGD","BRB","BLR","BEL","BLZ",
    "BEN","BMU","BTN","BOL","BES","BIH","BWA","BVT","BRA","IOT","BRN","BGR",
    "BFA","BDI","CPV","KHM","CMR","CAN","CYM","CAF","TCD","CHL","CHN","CXR",
    "CCK","COL","COM","COG","COD","COK","CRI","CIV","HRV","CUB","CUW","CYP",
    "CZE","DNK","DJI","DMA","DOM","ECU","EGY","SLV","GNQ","ERI","EST","ETH",
    "FLK","FRO","FJI","FIN","FRA","GUF","PYF","ATF","GAB","GMB","GEO","DEU",
    "GHA","GIB","GRC","GRL","GRD","GLP","GUM","GTM","GGY","GIN","GNB","GUY",
    "HTI","HMD","VAT","HND","HKG","HUN","ISL","IND","IDN","IRN","IRQ","IRL",
    "IMN","ISR","ITA","JAM","JPN","JEY","JOR","KAZ","KEN","KIR","PRK","KOR",
    "KWT","KGZ","LAO","LVA","LBN","LSO","LBR","LBY","LIE","LTU","LUX","MAC",
    "MKD","MDG","MWI","MYS","MDV","MLI","MLT","MHL","MTQ","MRT","MUS","MYT",
    "MEX","FSM","MDA","MCO","MNG","MNE","MSR","MAR","MOZ","MMR","NAM","NRU",
    "NPL","NLD","NCL","NZL","NIC","NER","NGA","NIU","NFK","MNP","NOR","OMN",
    "PAK","PLW","PSE","PAN","PNG","PRY","PER","PHL","PCN","POL","PRT","PRI",
    "QAT","REU","ROU","RUS","RWA","BLM","SHN","KNA","LCA","MAF","SPM","VCT",
    "WSM","SMR","STP","SAU","SEN","SRB","SYC","SLE","SGP","SXM","SVK","SVN",
    "SLB","SOM","ZAF","SGS","SSD","ESP","LKA","SDN","SUR","SJM","SWZ","SWE",
    "CHE","SYR","TWN","TJK","TZA","THA","TLS","TGO","TKL","TON","TTO","TUN",
    "TUR","TKM","TCA","TUV","UGA","UKR","ARE","GBR","USA","UMI","URY","UZB",
    "VUT","VEN","VNM","VGB","VIR","WLF","ESH","YEM","ZMB","ZWE"];

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

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.currenciesControl.valueChanges
        .startWith(null)
        .map(val => val ? this.filter(val) : this.currencies.slice());
  }

  filter(val: string): string[] {
    return this.currencies.filter(option =>
    option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
