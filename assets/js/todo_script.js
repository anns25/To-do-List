/* toggle strike through when the list item is clicked */

$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

/* remove list in delete icon is clicked */

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(300, function(){
			$(this).remove();
	} );
} );

/* add item that is entered in the text box to to do list */

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13 && $(this).val() != ""){
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + $(this).val() + "</li>"); 
		$(this).val("")
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle(100);
})