 $(function () {
            $("#dvSource img").draggable({
                revert: "invalid",
                refreshPositions: true,
                preventCollision: true,
                drag: function (event, ui) {
                    ui.helper.addClass("draggable");
                },
                stop: function (event, ui) {
                    //ui.helper.removeClass("draggable");
                    //var image = this.src.split("/")[this.src.split("/").length - 1];
                    // if ($.ui.ddmanager.drop(ui.helper.data("draggable"), event)) {
                    //    // alert(image + " dropped.");
                    // }
                    // else {
                    //     //alert(image + " not dropped.");
                    // }
                }
            });
            $("#dvDest").droppable({
                drop: function (event, ui) {
                    if ($("#dvDest img").length == 0) {
                        $("#dvDest").html("");
                    }
                    ui.draggable.addClass("dropped");
                    $("#dvDest").append(ui.draggable);                    
                    var imgCount=$(this).find('img').length;
					var imageArray=$($(this).find('img'));
					if(imgCount>1)
					{
                    	$($($(this).find('img'))[imgCount-1]).addClass('img-droped-on-cycle');
                	}
                    //add class to css file
                   
                }
            });
        });
