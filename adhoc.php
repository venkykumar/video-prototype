<?php
ini_set('memory_limit', '-1');
set_time_limit(0);
//ini_set('user_agent','Mozilla/4.0 (compatible; MSIE 6.0)');
$source = 'https://videos-0.s3-eu-central-1.amazonaws.com/00/64/60/70/F_64607050_a8goC2BotBsLcFkYRidZ6dsuESvQtupK.video?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIZT3S72MQ7UUALPQ%2F20150929%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20150929T162133Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5bc895593e133bfd344dd0d8015653d77f6e6addbdfe40a262edbbb43d0cbe28';
$destination = '/tmp/1.video';
$counter = 14;

function storeUrlToFilesystem($url, $localFile) {
try {
$data = file_get_contents($url,null,null);
$handle = fopen($localFile, "w");
fwrite($handle, $data);
fclose($handle);
return true;
} catch (Exception $e) {
echo 'Caught exception: ',  $e->getMessage(), "\n";
}
return false;
}

function download($file_source, $file_target) {
    $rh = fopen($file_source, 'rb');
    $wh = fopen($file_target, 'w+b');
    if (!$rh || !$wh) {
        return false;
    }

    while (!feof($rh)) {
        if (fwrite($wh, fread($rh, 4096)) === FALSE) {
            return false;
        }
        echo ' ';
        flush();
    }

    fclose($rh);
    fclose($wh);

    return true;
}

function downloadFile ($url, $path) {

    $newfname = $path;
    $file = fopen ($url, "rb");
    if ($file) {
        $newf = fopen ($newfname, "wb");

        if ($newf)
            while(!feof($file)) {
                fwrite($newf, fread($file, 1024 * 8 ), 1024 * 8 );
            }
    }

    if ($file) {
        fclose($file);
    }

    if ($newf) {
        fclose($newf);
    }
}


/*if (storeUrlToFilesystem($source, $destination)) {
echo 'Download of the whole web to '.$destination.' succeeded.';
}*/
$filehandle = fopen("/tmp/videos.urls", "r");
if ($filehandle) {
    while (($buffer = fgets($filehandle, 4096)) !== false) {
        echo $buffer."<br>";
        echo $counter."<br>";
        if (downloadFile(trim($buffer),"/stockvideos/".$counter.".video" )) {
            echo 'Download succeeded for'.$buffer."<br>";
        }
        echo "------------<br>";
        $counter ++;
    }
    if (!feof($filehandle)) {
        echo "Error: unexpected fgets() fail\n";
    }
    fclose($filehandle);
} else {
    echo "Failed";
}