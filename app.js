var items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

renderItems();

function renderItems() {
  var tbody = $("#crud-table tbody");
  tbody.empty();

  items.forEach(function (item) {
    var row = $("<tr>");
    row.append("<td>" + item.id + "</td>");
    row.append("<td>" + item.name + "</td>");
    row.append(
      '<td><button onclick="editItem(' +
        item.id +
        ')">Edit</button>' +
        '<button onclick="deleteItem(' +
        item.id +
        ')">Delete</button></td>'
    );

    tbody.append(row);
  });
}

function addItem() {
  var newItem = {
    id: items.length + 1,
    name: $("#item").val(),
  };

  items.push(newItem);
  renderItems();
  $("#item").val("");
}

function editItem(id) {
  var itemName = prompt(
    "Edit Item:",
    items.find((item) => item.id === id).name
  );
  if (itemName !== null) {
    var index = items.findIndex((item) => item.id === id);
    items[index].name = itemName;
    renderItems();
  }
}

function deleteItem(id) {
  var confirmDelete = confirm("Are you sure you want to delete this item?");
  if (confirmDelete) {
    items = items.filter((item) => item.id !== id);
    renderItems();
  }
}
