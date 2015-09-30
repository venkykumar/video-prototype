<?php
require 'vendor/autoload.php';
define("AWS_ACCESS_KEY", "AKIAIQ5G3H2ETTRQSUUQ");
define("AWS_SECRET_KEY", "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");
define("S3_EUROPE_BUCKET","adbestkvideosdev-ire");
use Aws\S3\S3Client;
try {

    $config = array(
        'key'    => AWS_ACCESS_KEY,
        'secret' => AWS_SECRET_KEY,
        'region' => "eu-west-1"
    );

    $s3client = S3Client::factory($config);

    $url1 = S3_EUROPE_BUCKET."/content/test/perf/Momentum.mp4";
    $url2 = S3_EUROPE_BUCKET."/content/test/perf/Momentum_converted.mp4";

    $result = $s3client->listBuckets();


    foreach ($result['Buckets'] as $bucket) {
        // Each Bucket value will contain a Name and CreationDate
        //echo "{$bucket['Name']}  - {$bucket['CreationDate']}\n\n<br>";
        foreach ($bucket as $name) {
            echo "$name<br>";
        }
    }


    //$plainUrl = $s3client->getObjectUrl(S3_EUROPE_BUCKET, 'waterfalls.mp4');
    //$signedUrl = $s3client->getObjectUrl(S3_EUROPE_BUCKET, '/content/test/perf/Momentum_1080_1.mp4',"+10 minutes");

    $request1 = $s3client->get($url1);
    $request2 = $s3client->put($url2);

    $signedUrl1 = $s3client->createPresignedUrl($request1, '+5000 minutes');
    $signedUrl2 = $s3client->createPresignedUrl($request2, '+5000 minutes');

    echo $signedUrl1;
    echo "<br>";
    echo $signedUrl2;

} catch (Exception  $exception) {
    echo "Exception Occured".$exception->getMessage();
}

?>
