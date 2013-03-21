<?php
/**
* @version 1.0 
* @package ImageSlider
* @copyright (C) 2013 Jordy Thijs
* @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
*/
 
/** ensure this file is being included by a parent file */
defined('_JEXEC') or die;
?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="modules/mod_imgslider/assets/jquery.slideImage.js"></script>

<script>
	$(document).ready(
		function(){
			$imagewidth = $('#greyscale').width();
			$imageheight = $('#greyscale').height();
			// Parameters: imagepath, imagewidth, imageheight, rowamount
			$.slideImage('<?php echo $SlideInfo['sliding_image'];?>', $imagewidth, $imageheight, <?php echo $SlideInfo['rowamount'];?>);
		}
	);
</script>
<div id="container" style="position: relative; left: 0; top: 0; overflow: hidden; width: 940px; height: 193px; background-color: transparent;">
	
	<div id="greyscale" style="position: relative; left: 0; top: 0; width: 940px; height: 193px; background-image: url('<?php echo $SlideInfo['original_image']; ?>'); background-repeat: no-repeat; background-position: center center; z-index: 1">
	</div>
</div>