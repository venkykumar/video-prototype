<?php
require_once('zencoder-php/Services/Zencoder.php');
include "common.php";

$shared_key = "AKIAIQ5G3H2ETTRQSUUQ";
$secret_key = "DtVG2Cvx9Q%2FQ07OPksxlc6%2B%2BKskw%2BD24IDgPSvyM";
$zencoder_key = "fbb1bb9d9fe49f91ed5c4c3d01267b3a";
$source_path = "/perftest/hd/Helicopter_720p.divx";
$broken_path = explode("/",$source_path);
$filename = explode(".",$broken_path[count($broken_path)-1]);
$destination_path1 = "/700w/";
$destination_path2 = "/400w/";
$private_bucket = "adbestkdev-priv-ire";
$public_bucket = "adbestkdev-pub-ire";
//$watermark_url="https://as.ftcdn.net/r/v1/pics/d539214827a53402879d9d2edd1b1c91177710dd/all/default/adobeLogoAndTitle.png";
$watermark_url="https://s3-eu-west-1.amazonaws.com/adbestkdev-pub-ire/adobestock_watermark.png";
$outputurl1 = "s3://".$shared_key.":".$secret_key."@".$public_bucket.$source_path.$destination_path1.$filename[0];
$outputurl2 = "s3://".$shared_key.":".$secret_key."@".$public_bucket.$source_path.$destination_path2.$filename[0];

try {
    // Initialize the Services_Zencoder class
    $zencoder = new Services_Zencoder($zencoder_key);

    // New Encoding Job
    $encoding_job = $zencoder->jobs->create(
        array(
            "input" => "s3://".$shared_key.":".$secret_key."@".$private_bucket.$source_path,
            "outputs" => array(
                array(
                    "url" => $outputurl1."_q2.mp4",
                    "quality" => 2,
                    "width" => "700",
                    "public" => 1,
                    "watermarks" => array(
                        "url" => $watermark_url,
                        "x" => "centered",
                        "y"=> "centered"
                    )
                ),
                array(
                    "url" => $outputurl1."_q3.mp4",
                    "quality" => 3,
                    "width" => "700",
                    "public" => 1,
                    "watermarks" => array(
                        "url" => $watermark_url,
                        "x" => "centered",
                        "y"=> "centered"
                    ),
                    "thumbnails" => array(
                        "width" => 500,
                        "filename" => "thumbnail_{{width}}w_{{number}}",
                        "base_url" => "s3://".$shared_key.":".$secret_key."@".$public_bucket.$source_path."/thumbnails/",
                        "times" => array (0,10,20)
                    )
                ),
                array(
                    "url" => $outputurl1."_q4.mp4",
                    "quality" => 4,
                    "width" => "700",
                    "public" => 1,
                    "watermarks" => array(
                        "url" => $watermark_url,
                        "x" => "centered",
                        "y"=> "centered"
                    )
                ),

                array(
                    "url" => $outputurl2."_q2.mp4",
                    "quality" => 2,
                    "width" => "400",
                    "public" => 1,
                    "watermarks" => array(
                        "url" => $watermark_url,
                        "x" => "centered",
                        "y"=> "centered"
                    )
                ),
                array(
                    "url" => $outputurl2."_q3.mp4",
                    "quality" => 3,
                    "width" => "400",
                    "public" => 1,
                    "watermarks" => array(
                        "url" => $watermark_url,
                        "x" => "centered",
                        "y"=> "centered"
                    )
                ),
                array(
                    "url" => $outputurl2."_q4.mp4",
                    "quality" => 4,
                    "width" => "400",
                    "public" => 1,
                    "watermarks" => array(
                        "url" => $watermark_url,
                        "x" => "centered",
                        "y"=> "centered"
                    )
                ),
            )
        )
    );

    //print("<pre>".print_r($encoding_job,true)."</pre>");*/

    $jobId = $encoding_job->id;
    echo "Zencoder Job ID: ".$jobId."\n";

    $started = current_millis();
    $progress = $zencoder->jobs->progress($jobId)->state;

    while(strcmp($progress, 'finished') != 0) {
        $progress = $zencoder->jobs->progress($jobId)->state;
        print("<pre>".print_r($zencoder->jobs->progress($jobId),true)."</pre>");
        echo $progress;
    }
    echo "Encoding Job Took: " . (current_millis() - $started)/1000 . " seconds";
} catch (Services_Zencoder_Exception $e) {
    // If were here, an error occured
    echo "Fail :(\n\n";
    echo "Errors:\n";
    foreach ($e->getErrors() as $error) echo $error."\n";
    echo "Full exception dump:\n\n";
    print_r($e);
}
