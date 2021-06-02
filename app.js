let workhrs = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00']
function randNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let table1 = document.getElementById('salesdata')    
let salesTable = document.createElement('table');
table1.appendChild(salesTable);


let branches = [];
function cookiesStore(storeName,min, max, avg){
    this.minCustomer = min;
    this.maxCustomer = max;
    this.avgCookies = avg;
    this.saleHour = [];
    this.totalSales = 0;
    this.storeName= storeName;
    branches.push(this);

    
    
}

cookiesStore.prototype.checkSales = function(){
    for(let i=0; i<workhrs.length; i++){
        let sales = Math.floor(this.avgCookies*randNum(this.minCustomer,this.maxCustomer));
        this.totalSales = this.totalSales + sales;
        this.saleHour.push(sales);
    }
    
}
function Rows(){
    let heading = document.createElement('tr');
    table1.appendChild(heading);
    let th1 = document.createElement('th');
    heading.appendChild(th1);
    
    for(let i=0; i<workhrs.length;i++){
        let theading = document.createElement('th');
        heading.appendChild(theading);
        theading.textContent=workhrs[i];    
        
    }
    let dailyTotal = document.createElement('th');
    heading.appendChild(dailyTotal);
    dailyTotal.textContent= 'Daily Total';
}
Rows();

cookiesStore.prototype.render=function(){
    let tr = document.createElement('tr');
    table1.appendChild(tr);
    let cell1 = document.createElement('th');
    tr.appendChild(cell1);
    cell1.textContent= this.storeName;
    for(let c=0; c<workhrs.length;c++){
        let tds = document.createElement('td');
        tr.appendChild(tds);
        tds.textContent=this.saleHour[c];
    }
    let totalcell = document.createElement('th');
    tr.appendChild(totalcell);
    totalcell.textContent=this.totalSales;

}


   

let seattleStore = new cookiesStore('Seattle',23, 65, 6.3);
// seattleStore.checkSales();
// seattleStore.render();
 
 let tokyoStore = new cookiesStore('Tokyo',3, 24, 1.2);
 // tokyoStore.checkSales();
//  tokyoStore.render();
 let dubaiStore = new cookiesStore('Dubai',11, 38, 3.7);
//  dubaiStore.checkSales();
//  dubaiStore.render();
 let parisStore = new cookiesStore('Paris',20, 38, 2.3);
//  parisStore.checkSales();
//  parisStore.render();
 let liamStore = new cookiesStore('Lima',2, 16, 4.6);
//  liamStore.checkSales();
//  liamStore.render();
for(let i=0; i<branches.length;i++){
    branches[i].checkSales();
    branches[i].render();
}

function Footrow(){
    let tots = document.createElement('tr');
    table1.appendChild(tots);
    let frstCell = document.createElement('th');
    tots.appendChild(frstCell);
    frstCell.textContent= 'Totals';
    let allTotal = 0;
    for(let i=0; i<workhrs.length;i++){
        let sum =0;
        for(let t =0; t<branches.length; t++){
            sum+= branches[t].saleHour[i];
        }
    let td = document.createElement('td');
    tots.appendChild(td);
    td.textContent= sum;
    allTotal+=sum;



    }
    let all = document.createElement('th');
    tots.appendChild(all);
    all.textContent= allTotal;
    
}
Footrow();