<?php
require_once('zencoder-php/Services/Zencoder.php');
include "common.php";

$VideosArray1 = array(
    "/perftest/hd/beauty_taiwan_4K.mp4" => 186,
    "/perftest/hd/ChimeiInn_4K.mp4" => 43,
    "/perftest/hd/taipei_fireworks_4K.mp4" => 107,
    "/perftest/hd/PUPPIES_4K.mp4" => 150,
    "/perftest/hd/Honeybees_4K.mp4" => 230,
    "/perftest/hd/Hornet_4K.mp4" => 180,
    "/perftest/hd/timelapse_4K.mp4" => 44,
    "/perftest/hd/Solar_4K.mp4" => 190,
    "/perftest/hd/Greece_Norway_4K.mp4" => 66,
    "/perftest/hd/hddvd_demo_1080p.mkv" => 121,
    "/perftest/hd/animation.mp4" => 39,
    "/perftest/hd/Momentum.mp4" => 72,
    "/perftest/hd/life1.wmv" => 30,
    "/perftest/hd/big_buck_bunny.mp4" => 60,
    "/perftest/hd/Helicopter_720p.divx" => 108,
    "/perftest/hd/hddvd_demo_1080p.mkv" => 121,
    "/perftest/hd/adobe_aws.mp4" => 210
);

$VideosArray = array(
    "/perftest/hd/vertical2.mp4" => 15
);

$shared_key = "AKIAIQ5G3H2ETTRQSUUQ";
$secret_key = "DtVG2Cvx9Q%2FQ07OPksxlc6%2B%2BKskw%2BD24IDgPSvyM";
$zencoder_key = "fbb1bb9d9fe49f91ed5c4c3d01267b3a";
$adjusted_bitrate = 190;
$mbsize = 8192;
$destination_path1 = "/search_view/";
$destination_path2 = "/details_view/";
$private_bucket = "adbestkdev-priv-ire";
$public_bucket = "adbestkdev-pub-ire";
//$watermark_url="https://as.ftcdn.net/r/v1/pics/d539214827a53402879d9d2edd1b1c91177710dd/all/default/adobeLogoAndTitle.png";
$watermark_url="https://s3-eu-west-1.amazonaws.com/adbestkdev-pub-ire/adobestock_watermark.png";


foreach ($VideosArray as $key => $value) {
    $source_path = $key;
    $duration = $value;
    $broken_path = explode("/",$source_path);
    $filename = explode(".",$broken_path[count($broken_path)-1]);
    $outputurl1 = "s3://".$shared_key.":".$secret_key."@".$public_bucket.$source_path.$destination_path1.$filename[0]."_";
    $outputurl2 = "s3://".$shared_key.":".$secret_key."@".$public_bucket.$source_path.$destination_path2.$filename[0]."_";
    try {
        // Initialize the Services_Zencoder class
        $zencoder = new Services_Zencoder($zencoder_key);

        // New Encoding Job
        $encoding_job = $zencoder->jobs->create(
            array(
                "input" => "s3://" . $shared_key . ":" . $secret_key . "@" . $private_bucket . $source_path,
                "outputs" => array(
                    array(
                        "url" => $outputurl1 . "1mb.mp4",
                        "video_bitrate" => floor($mbsize / $duration),
                        "public" => 1,
                        "width" => 400,
                        "skip_audio" => true,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y" => "centered",
                            "width" => 150
                        ),
                        "thumbnails" => array(
                            "width" => 400,
                            "filename" => "search_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl1 . "1mb.mp4/thumbnails/",
                            "times" => array(0, 10, 20)
                        )
                    ),
                    /*array(
                        "url" => $outputurl1 . "3mb.mp4",
                        "video_bitrate" => floor($mbsize * 3 / $duration),
                        "public" => 1,
                        "width" => 400,
                        "skip_audio" => true,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y" => "centered",
                            "width" => 150
                        ),
                        "thumbnails" => array(
                            "width" => 400,
                            "filename" => "search_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl1 . "3mb.mp4/thumbnails/",
                            "times" => array(0, 10, 20)
                        )
                    ),
                    array(
                        "url" => $outputurl1 . "5mb.mp4",
                        "video_bitrate" => floor($mbsize * 5 / $duration),
                        "public" => 1,
                        "width" => 400,
                        "skip_audio" => true,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y" => "centered",
                            "width" => 150
                        ),
                        "thumbnails" => array(
                            "width" => 400,
                            "filename" => "search_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl1 . "5mb.mp4/thumbnails/",
                            "times" => array(0, 10, 20)
                        )
                    ),
                    array(
                        "url" => $outputurl1."q1.mp4",
                        "quality" => 1,
                        "public" => 1,
                        "width" => 400,
                        "skip_audio" => true,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y"=> "centered",
                            "width" => 150
                        ),
                        "thumbnails" => array(
                            "width" => 400,
                            "filename" => "search_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl1."q1.mp4/thumbnails/",
                            "times" => array (0,10,20)
                        )
                    ),
                    array(
                        "url" => $outputurl1."q2.mp4",
                        "quality" => 2,
                        "public" => 1,
                        "width" => 400,
                        "skip_audio" => true,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y"=> "centered",
                            "width" => 150
                        ),
                        "thumbnails" => array(
                            "width" => 400,
                            "filename" => "search_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl1."q2.mp4/thumbnails/",
                            "times" => array (0,10,20)
                        )
                    ),
                    array(
                        "url" => $outputurl1."q3.mp4",
                        "quality" => 3,
                        "public" => 1,
                        "width" => 400,
                        "skip_audio" => true,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y"=> "centered",
                            "width" => 150
                        ),
                        "thumbnails" => array(
                            "width" => 400,
                            "filename" => "search_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl1."q3.mp4/thumbnails/",
                            "times" => array (0,10,20)
                        )
                    ),
                    array(
                        "url" => $outputurl2 . "2mb.mp4",
                        "video_bitrate" => floor($mbsize * 2 / $duration),
                        "public" => 1,
                        "width" => 700,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y" => "centered",
                            "width" => 300
                        ),
                        "thumbnails" => array(
                            "width" => 700,
                            "filename" => "detail_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl2 . "2mb.mp4/thumbnails/",
                            "times" => array(0, 10, 20)
                        )
                    ),
                    array(
                        "url" => $outputurl2 . "4mb.mp4",
                        "video_bitrate" => floor($mbsize * 4 / $duration),
                        "public" => 1,
                        "width" => 700,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y" => "centered",
                            "width" => 300
                        ),
                        "thumbnails" => array(
                            "width" => 700,
                            "filename" => "detail_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl2 . "4mb.mp4/thumbnails/",
                            "times" => array(0, 10, 20)
                        )
                    ),
                    array(
                        "url" => $outputurl2 . "6mb.mp4",
                        "video_bitrate" => floor($mbsize * 6 / $duration),
                        "public" => 1,
                        "width" => 700,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y" => "centered",
                            "width" => 300
                        ),
                        "thumbnails" => array(
                            "width" => 700,
                            "filename" => "detail_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl2 . "6mb.mp4/thumbnails/",
                            "times" => array(0, 10, 20)
                        )
                    ),
                    array(
                        "url" => $outputurl2."q1.mp4",
                        "quality" => 1,
                        "public" => 1,
                        "width" => 700,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y"=> "centered",
                            "width" => 300
                        ),
                        "thumbnails" => array(
                            "width" => 700,
                            "filename" => "detail_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl2."q1.mp4/thumbnails/",
                            "times" => array (0,10,20)
                        )
                    ),
                    array(
                        "url" => $outputurl2."q2.mp4",
                        "quality" => 2,
                        "public" => 1,
                        "width" => 700,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y"=> "centered",
                            "width" => 300
                        ),
                        "thumbnails" => array(
                            "width" => 700,
                            "filename" => "detail_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl2."q2.mp4/thumbnails/",
                            "times" => array (0,10,20)
                        )
                    ),
                    array(
                        "url" => $outputurl2."q3.mp4",
                        "quality" => 3,
                        "public" => 1,
                        "width" => 700,
                        "watermarks" => array(
                            "url" => $watermark_url,
                            "x" => "centered",
                            "y"=> "centered",
                            "width" => 300
                        ),
                        "thumbnails" => array(
                            "width" => 700,
                            "filename" => "detail_thumbnail_{{width}}w_{{number}}",
                            "base_url" => $outputurl2."q3.mp4/thumbnails/",
                            "times" => array (0,10,20)
                        )
                    ),*/
                )
            )
        );


        $jobId = $encoding_job->id;

        //print("<pre>".print_r($zencoder->outputs->details($jobId),true)."</pre>");

        echo "Encoding JobId for ".$source_path." ".$jobId."<br>";
        $started = current_millis();
        $progress = $zencoder->jobs->progress($jobId)->state;

        while (strcmp($progress, 'finished') != 0) {
            $progress = $zencoder->jobs->progress($jobId)->state;
            print("<pre>" . print_r($zencoder->jobs->progress($jobId), true) . "</pre>");
            echo $progress;
        }
        echo "Encoding Job Took: " . $jobId . (current_millis() - $started) / 1000 . " seconds";
    } catch (Services_Zencoder_Exception $e) {
        // If were here, an error occured
        echo "Fail :(\n\n";
        echo "Errors:\n";
        foreach ($e->getErrors() as $error) echo $error . "\n";
        echo "Full exception dump:\n\n";
        print_r($e);
    }
}
