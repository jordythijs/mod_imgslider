<?php
/**
* @version 1.0 
* @package ImageSlider
* @copyright (C) 2013 Jordy Thijs
* @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
*/
 
/** ensure this file is being included by a parent file */
defined('_JEXEC') or die;
if(!defined('DS'))
{
    define('DS',DIRECTORY_SEPARATOR);
}

require_once(dirname(__FILE__).DS.'helper.php');

$SlideInfo = modImgSliderHelper::showImageSlide($params);
require(JModuleHelper::getLayoutPath('mod_imgslider'));
?>