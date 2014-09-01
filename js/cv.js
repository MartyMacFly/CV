$(function()
{
	$(".menuItem").click(function()
	{
		var currentMenuItem = $(this);
		currentMenuItem.removeClass("menuItem");
		
		if(currentMenuItem.hasClass("menuItemOpen"))
		{
			closeMenu(currentMenuItem);
		}
		else
		{
			//close all other menu
			closeMenu($("menuItemOpen"));
			//open current menu
			openMenu(currentMenuItem);
		}
	});
});

function closeMenu(menuItem)
{
	menuItem.removeClass("menuItemOpen");
	menuItem.addClass("menuItemClosed");
}

function openMenu(menuItem)
{
	menuItem.removeClass("menuItemClosed");
	menuItem.addClass("menuItemOpen");
}