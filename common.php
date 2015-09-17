<?php
require 'awssdkphp/vendor/autoload.php';
require_once('zencoder-php/Services/Zencoder.php');
define("AWS_ACCESS_KEY", "AKIAIQ5G3H2ETTRQSUUQ");
define("AWS_SECRET_KEY", "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");
define("S3_EUROPE_BUCKET","adbestkdev-priv-ire");
use Aws\S3\S3Client;

function csv_to_array($filename='', $delimiter=',')
{
    if(!file_exists($filename) || !is_readable($filename))
        return FALSE;

    $header = NULL;
    $data = array();
    if (($handle = fopen($filename, 'r')) !== FALSE)
    {
        while (($row = fgetcsv($handle, 1000, $delimiter)) !== FALSE)
        {
            if(!$header)
                $header = $row;
            else
                $data[] = array_combine($header, $row);
        }
        fclose($handle);
    }
    return $data;
}

function add_to_csv($data,$filename)
{
    if(!file_exists($filename) || !is_readable($filename))
        return FALSE;

    $fp = fopen($filename, 'a');

    foreach ($data as $fields) {
        fputcsv($fp, $fields);
    }

    fclose($fp);
}

function getPresignedUrl($path) {
    try {

        $config = array(
            'key'    => AWS_ACCESS_KEY,
            'secret' => AWS_SECRET_KEY,
            'region' => "eu-west-1"
        );

        $s3client = S3Client::factory($config);

        $url = S3_EUROPE_BUCKET.$path;

        $signedUrl = $s3client->createPresignedUrl($s3client->get($url), '+30 minutes');

        return $signedUrl;

    } catch (Exception  $exception) {
         echo "Exception Occured.$exception->getMessage()";
    }
}

function current_millis() {
    list($usec, $sec) = explode(" ", microtime());
    return round(((float)$usec + (float)$sec) * 1000);
}