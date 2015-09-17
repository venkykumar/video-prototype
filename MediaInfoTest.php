<?php
/**
 * Created by PhpStorm.
 * User: venky
 * Date: 9/8/15
 * Time: 4:00 PM
 */
require_once('php-mediainfo/src/MediaInfo.php');
use Mhor\MediaInfo\MediaInfo;
//...
$mediaInfo = new MediaInfo();
$mediaInfoContainer = $mediaInfo->getInfo('music.mp3');