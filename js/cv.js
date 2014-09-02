$(function()
{
	var itemSize = {};
	var menuItem = $("#itemFormation");
	itemSize.height = menuItem.outerHeight();
	itemSize.width = menuItem.outerWidth();
	
	$(".folder").each(function()
	{
		var menuItemId = getMenuItemIdFromFolder($(this));
		var top = $(menuItemId).offset().top + itemSize.height;
		var folderWidth = parseInt($(this).outerWidth());
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
			$(".sheetOpen").each(function () {closeMenu($(this));});
			//open current menu
			openMenu(currentMenuItem);
		}
	});
});

function getFolderIdFromMenuItem(menuItem)
{
	var menuItemId = menuItem.attr('id');
	return "#folder" + menuItemId.slice(4); //on supprime "item"
}

function getMenuItemIdFromFolder(folder)
{
	var folderId = folder.attr('id');
	return "#item" + folderId.slice(6); //on supprime "folder"
}

function closeMenu(menuItem)
{
	menuItem.removeClass("sheetOpen");
	menuItem.addClass("sheetClosed");
	
	folderId = getFolderIdFromMenuItem(menuItem);
	
	$(folderId).removeClass("sheetOpen");
	$(folderId).addClass("sheetClosed");
}

function openMenu(menuItem)
{
	menuItem.removeClass("sheetClosed");
	menuItem.addClass("sheetOpen");
	
	folderId = getFolderIdFromMenuItem(menuItem);
	
	$(folderId).removeClass("sheetClosed");
	$(folderId).addClass("sheetOpen");
}