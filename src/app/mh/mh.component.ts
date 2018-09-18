import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'mh',
  templateUrl: './mh.component.html',
  styleUrls: ['./mh.component.css']
})
export class MhComponent implements OnInit,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {

    if (this.datasource.length > this.pageSize) {


      this.length = Array(Math.ceil(this.datasource.length / this.pageSize)).fill(0);
      console.log(this.length)
    }
    this.dataPaging=this.paginate(this.datasource,this.pageSize,1)


  }

  @Input() datasource;
  @Input() index;
  @Input()isArray=true
  @Input() pageSize=25

  dataPaging=[]

  currentPage=1
  length = []

  constructor(private cd:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log(this.datasource)
    console.log(this.index)

if(this.index){
      this.isArray=false
}
    if (this.datasource.length > this.pageSize) {


      this.length = Array(Math.ceil(this.datasource.length / this.pageSize)).fill(0);
      console.log(this.length)
    }

    this.dataPaging=this.paginate(this.datasource,this.pageSize,1)

  }





  nextPage(){
    this.currentPage += 1
    this.dataPaging=this.paginate(this.datasource,this.pageSize,this.currentPage)





  }
  prvPage(){


    this.currentPage -= 1
    this.dataPaging=this.paginate(this.datasource,this.pageSize,this.currentPage)




  }
  page(i){

    this.currentPage = i
    this.dataPaging=this.paginate(this.datasource,this.pageSize,this.currentPage)





  }


  paginate (array, page_size, page_number) {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }


  viewCount(count){
    this.pageSize=count
    console.log(count)

    this.dataPaging=this.paginate(this.datasource,this.pageSize,this.currentPage)


    if (this.datasource.length > this.pageSize) {


      this.length = Array(Math.ceil(this.datasource.length / this.pageSize)).fill(0);
      console.log(this.length)
    }else {
      this.length = Array(1).fill(0);
    }
    console.log(this.dataPaging)
    this.cd.detectChanges()




  }

}
