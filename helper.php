<?php
/**
* @version 1.0 
* @package ImageSlider
* @copyright (C) 2013 Jordy Thijs
* @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
*/
class modImgSliderHelper
{
	static function showImageSlide($params)
	{
		// Get the absolute paths to the two images set in the configuration panel of the module
		$original_image = JURI::root() . $params->get('firstimage'); 
		$sliding_image =  JURI::root() . $params->get('secondimage'); 
		$rowamount = $params->get('rowamount');
		$SlideInfo = array(
			"original_image" => $original_image, 
			"sliding_image" => $sliding_image, 
			"rowamount" => $rowamount
			);
		return $SlideInfo; 
	}
}
?>