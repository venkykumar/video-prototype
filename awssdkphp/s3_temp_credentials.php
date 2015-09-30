<?php
require 'vendor/autoload.php';
define("AWS_ACCESS_KEY", "AKIAIQ5G3H2ETTRQSUUQ");
define("AWS_SECRET_KEY", "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");
define("S3_EUROPE_BUCKET","adbestkdev-priv-ire");

use Aws\Sts\StsClient;
use Aws\S3\S3Client;

try {

    $config = array(
        'key'    => AWS_ACCESS_KEY,
        'secret' => AWS_SECRET_KEY,
        'region' => "eu-west-1"
    );

    $sts = StsClient::factory($config);

    /*$result = $sts->getFederationToken(array(
        'Name'            => 'User1',
        'DurationSeconds' => 3600,
        'Policy'          => json_encode(array(
            'Statement' => array(
                array(
                    'Sid'      => 'randomstatementid' . time(),
                    'Action'   => array('s3:ListBucket','s:ListBucket'),
                    'Effect'   => 'Allow',
                    'Resource' => 'arn:aws:s3:::'.S3_EUROPE_BUCKET
                )
            )
        ))
    ));

    $credentials = $result->get('Credentials');*/


    $credentials = $sts->getSessionToken()->get('Credentials');
    echo $credentials['AccessKeyId']."<br>";
    echo urlencode($credentials['SecretAccessKey'])."<br><br>";
    echo $credentials['SessionToken']."<br><br>";

    $s3 = S3Client::factory(array(
        'key'    => $credentials['AccessKeyId'],
        'secret' => $credentials['SecretAccessKey'],
        'region' => "eu-west-1"
    ));

    /*$objects = $s3->getIterator('ListObjects', array('Bucket' => S3_EUROPE_BUCKET));
    foreach ($objects as $object) {
        echo $object['Key'] . "<br>";
    }*/

} catch (Exception  $exception) {
    echo "Exception Occured".$exception->getMessage();
}

?>
