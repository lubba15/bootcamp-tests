var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
var findItemsOver =  function(items,threshold){
  var threshList = [];
  for (i=0; i < items.length; i++){
    var fruit = items[i];
    var name = fruit.name;
    var quantity= fruit.qty;
    if(quantity>threshold){
      threshList.push(items[i]);
    }
  }
  console.log(JSON.stringify(threshList));
  return threshList;
}
findItemsOver(itemList,20)
