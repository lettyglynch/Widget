$.container.addEventListener("click", function(_event)
{
toggleButtonByIdClicked(_event.source.id);
}
); 
function toggleButtonByIdClicked(_buttonId)
{
if(_buttonId === "on")
{
$.on.hide();
$.off.show();
}else if(_buttonId === "off")
{
$.on.show();
$.off.hide();
}
}
