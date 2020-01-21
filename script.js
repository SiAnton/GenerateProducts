
function generateProducts (products)
{

	let prod = JSON.parse(products),
		main_Catalog = document.querySelector('.main-catalog');

	for(let start = 0; start < prod.length; start++)
	{
	let product_Item = document.createElement("div"),
		product_Item_Title = document.createElement("h3"),
		product_Item_Description = document.createElement("div");

		product_Item.classList.add('product-item');
		product_Item_Title.classList.add('product-item-title');

		product_Item.appendChild(product_Item_Title);
		product_Item.appendChild(product_Item_Description);
		main_Catalog.appendChild(product_Item);

		product_Item_Title.textContent = prod[start].name;
		product_Item_Description.textContent = prod[start].description;
		product_Item.setAttribute('id',prod[start].id);
	}
}



function productsRemoveClass(modal)
{

	let close = document.querySelector('.close'),
		cancel = document.querySelector('button:last-child');

	close.addEventListener('click', function()
	{
		modal.classList.remove('visible');
	})

	cancel.addEventListener('click', function()
	{
		modal.classList.remove('visible');
	})

	document.addEventListener('keydown', function(evt)
	{
		if(evt.keyCode === 27)
		{
			modal.classList.remove('visible');
		}
	})

}

function productsShowModal()
{
	let products = document.querySelectorAll('.product-item'),
		modal = document.querySelector('.modal-window');

	for(let index = 0; index < products.length; index++ )
	{
		products[index].addEventListener('click', function()
		{
			modal.classList.add('visible');
			modal.childNodes[5].childNodes[2].value = this.childNodes[0].textContent;
			modal.childNodes[5].childNodes[5].value = this.childNodes[1].textContent;
			modal.childNodes[3].textContent = "ID " + this.getAttribute("id");
		});
	}

	productsRemoveClass(modal);
}

function productsChange()
{
let enter = document.querySelector('button:first-child'),
	modal = document.querySelector('.modal-window'),
	currentID = "",
	changeItem = "";

	enter.addEventListener('click', function()
	{
		currentID = Number(modal.childNodes[3].textContent[3]);
		changeItem = document.getElementById(currentID);
		changeItem.childNodes[0].textContent = modal.childNodes[5].childNodes[2].value;
		changeItem.childNodes[1].textContent = modal.childNodes[5].childNodes[5].value;
		modal.classList.remove('visible');
	})
}

generateProducts(productsList);
productsShowModal();
productsChange();


