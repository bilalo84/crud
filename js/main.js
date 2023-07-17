var nameInput = document.getElementById("productName");
var pricInput = document.getElementById("productPrice");
var catInput = document.getElementById("productCategory");
var decInput = document.getElementById("productDescription");
var productList = [];
var productindex;
var addbtn = document.getElementById("addBtn");
var searchInput = document.getElementById("searchInput");
var index1;
if (localStorage.getItem("List") != null) {
  productList = JSON.parse(localStorage.getItem("List"));
  displayData();
}
function addProduct() {
  var product = {
    name: nameInput.value,
    price: pricInput.value,
    category: catInput.value,
    desc: decInput.value,
  };

  productList.push(product);
  localStorage.setItem("List", JSON.stringify(productList));
  displayData();
}

function displayData() {
  var temp = "";
  for (var i = 0; i < productList.length; i++) {
    temp =
      temp +
      `  <tr>
    <td>` +
      i +
      `</td>
    <td>` +
      productList[i].name +
      `</td>
    <td>` +
      productList[i].price +
      `</td>
    <td>` +
      productList[i].category +
      `</td>
    <td>` +
      productList[i].desc +
      `</td>
    <td>
        <button onclick="editItem(` +
      i +
      `)" class="btn btn-outline-warning">Update</button>
    </td>
    <td>

        <button onclick="deletItem(` +
      i +
      `)" class="btn btn-outline-danger">Delete</button>
    </td>
</tr>`;
  }

  document.getElementById("tableBody").innerHTML = temp;
}

function clearForm() {
  nameInput.value = "";
  pricInput.value = "";
  catInput.value = "";
  decInput.value = "";
}

function deletItem(indexItem) {
  productList.splice(indexItem, 1);
  localStorage.setItem("List", JSON.stringify(productList));
  displayData();
}


function editItem(index){
  var index
  nameInput.value = productList[index].name
  pricInput.value =  productList[index].price
  catInput.value = productList[index].category
  decInput.value =  productList[index].desc
  index1= index;
  document.getElementById("addproduct").style.display = "none"
  document.getElementById("addedit").style.display = "inline-block"
}
function edit(){
  productList[index1].name =  nameInput.value
  productList[index1].price =  pricInput.value
  productList[index1].category =  catInput.value
  productList[index1].desc =  decInput.value
  localStorage.setItem("List", JSON.stringify(productList));
  displayData();
  document.getElementById("addproduct").style.display = "inline-block"
  document.getElementById("addedit").style.display = "none"


}

function search() {
  var searchVal = searchInput.value.toLowerCase();
  var temp = "";
  for (var i = 0; i < productList.length; i++) {
    if (productList[i].category.toLowerCase().includes(searchVal) == true||
    productList[i].name.toLowerCase().includes(searchVal) == true
    ) {
      temp =
        temp +
        `  <tr>
    <td>` +
        i +
        `</td>
    <td>` +
        productList[i].name.toLowerCase().replace(searchVal,"<span class='bg-info'>"+searchVal+"</span>") +
        `</td>
    <td>` +
        productList[i].price +
        `</td>
    <td>` +
        productList[i].category.toLowerCase().replace(searchVal,"<span class='bg-info'>"+searchVal+"</span>") +
        `</td>
    <td>` +
        productList[i].desc +
        `</td>
    <td>
        <button onclick="editItem(` +
        i +
        `)" class="btn btn-outline-warning">Update</button>
    </td>
    <td>

        <button onclick="deletItem(` +
        i +
        `)" class="btn btn-outline-danger">Delete</button>
    </td>
</tr>`;
    }
  }

  document.getElementById("tableBody").innerHTML = temp;
}
