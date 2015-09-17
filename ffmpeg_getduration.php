<?php

$videofile="/Users/venky/Desktop/videos/life2.wmv";
$xyz = shell_exec("ffmpeg -i ".$videofile." 2>&1");
//echo $xyz;
$search='/Duration: (.*?),/';

preg_match($search, $xyz, $matches);
$explode = explode(':', $matches[1]);
echo 'Hour: ' . $explode[0];
echo 'Minute: ' . $explode[1];
echo 'Seconds: ' . $explode[2];