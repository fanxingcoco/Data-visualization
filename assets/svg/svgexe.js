
	function mouseStyleIn() {
		console.log('kkk');
	}

	function mouseStyleOut() {

		console.log('dddd');
	}

	function mouseClick(e) {
		$(window.parent.document).find('.stationDetails').addClass('detailsShow');
		if(e.getAttribute("id")=='DYF'){
			$(window.parent.document).find('.stationDetails>.station').html('大羊坊收费站');
		}else if(e.getAttribute("id")=='MJQ'){
			$(window.parent.document).find('.stationDetails>.station').html('马驹桥收费站');
		}else if(e.getAttribute("id")=='CY'){
			$(window.parent.document).find('.stationDetails>.station').html('采育收费站');
		}else if(e.getAttribute("id")=='LF'){
			$(window.parent.document).find('.stationDetails>.station').html('廊坊收费站');
		}else if(e.getAttribute("id")=='SCD'){
			$(window.parent.document).find('.stationDetails>.station').html('泗酒店收费站');
		}else if(e.getAttribute("id")=='YC'){
			$(window.parent.document).find('.stationDetails>.station').html('杨村收费站');
		}else if(e.getAttribute("id")=='XZZ'){
			$(window.parent.document).find('.stationDetails>.station').html('下朱庄收费站');
		}else if(e.getAttribute("id")=='YXF'){
			$(window.parent.document).find('.stationDetails>.station').html('宜兴埠收费站');
		}else if(e.getAttribute("id")=='JZL'){
			$(window.parent.document).find('.stationDetails>.station').html('金钟路收费站');
		}else if(e.getAttribute("id")=='JC'){
			$(window.parent.document).find('.stationDetails>.station').html('机场收费站');
		}else if(e.getAttribute("id")=='KG'){
			$(window.parent.document).find('.stationDetails>.station').html('空港收费站');
		}else if(e.getAttribute("id")=='TGX'){
			$(window.parent.document).find('.stationDetails>.station').html('塘沽西收费站');
		}else if(e.getAttribute("id")=='TG'){
			$(window.parent.document).find('.stationDetails>.station').html('塘沽收费站');
		}
		

	}
	


