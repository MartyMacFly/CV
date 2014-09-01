$(function()
{
	$(".menuItem").click(function()
	{
		var currentMenuItem = $(this);
		
		if(currentMenuItem.hasClass("menuItemOpen"))
		{
			closeMenu(currentMenuItem);
		}
		else
		{
			//close all other menu
			closeMenu($(".menuItemOpen"));
			//open current menu
			openMenu(currentMenuItem);
		}
	});
});

function closeMenu(menuItem)
{
	menuItem.removeClass("menuItemOpen");
	menuItem.addClass("menuItemClosed");
	
	menuItem.children(".contentItem").css("visibility", "hidden");
}

function openMenu(menuItem)
{
	menuItem.removeClass("menuItemClosed");
	menuItem.addClass("menuItemOpen");
	
	menuItem.children(".contentItem").css("visibility", "visible");
}