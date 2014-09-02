$(function()
{
	var itemSize = {};
	var menuItem = $("#itemFormation");
	itemSize.height = parseInt(menuItem.css("height"));
	itemSize.width = parseInt(menuItem.css("width"));
	
	$(".folder").each(function()
	{
		var folderWidth = parseInt($(this).outerWidth());
		var top = itemSize.height;
		var left =  itemSize.width - folderWidth;
		$(this).css({"top" : top, "left" : left});
	});

	$(".menuItem").click(function()
	{
		var currentMenuItem = $(this);
		
		if(currentMenuItem.hasClass("sheetOpen"))
		{
			closeMenu(currentMenuItem);
		}
		else
		{
			//close all other menu
			closeMenu($(".sheetOpen"));
			//open current menu
			openMenu(currentMenuItem);
		}
	});
});

function closeMenu(menuItem)
{
	menuItem.removeClass("sheetOpen");
	menuItem.addClass("sheetClosed");
	
	$("#folderFormation").removeClass("sheetOpen");
	$("#folderFormation").addClass("sheetClosed");
}

function openMenu(menuItem)
{
	menuItem.removeClass("sheetClosed");
	menuItem.addClass("sheetOpen");
	
	$("#folderFormation").removeClass("sheetClosed");
	$("#folderFormation").addClass("sheetOpen");
}