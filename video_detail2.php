<!DOCTYPE html>
<?
include "common.php";
$thumbnailUrl = "http://video-js.zencoder.com/oceans-clip.png";
$videoUrl ="http://video-js.zencoder.com/oceans-clip.mp4";
$videoId="1234";
$videoTitle="Oceans";
$vttUrl="";
$sourceVideoUrl="";

$id = "";

if(isset($_GET["id"])) {
    $id = $_GET["id"];
}
$quality = "3";
if(isset($_GET["q"])) {
    if($_GET["q"] == "2" || $_GET["q"] == "3" || $_GET["q"] == "4") {
        $quality = $_GET["q"];
    }
}

$video_domain="http://test-video-eu.ftcdn.net";
if(isset($_GET["region"])) {
    if($_GET["region"] == "us") {
        $region = $_GET["region"];
        $video_domain="http://test-video-us.ftcdn.net";
    }
}

$video_data = array_map('str_getcsv', file('video_data.csv'));
foreach ($video_data as $key => $value) {
    if($value[0] == $id) {
        $thumbnailUrl=$value[3];
        $videoUrl=$value[2];
        $videoTitle=$value[1];
        $vttUrl=$value[4];
        break;
    }
}
$broken_path = explode("/",$videoUrl);
$sourceVideoUrl=implode("/", array_slice($broken_path, 0, 4));
?>
<head>
    <title><? echo($videoTitle) ?> | Adobe Stock</title><link href="https://as.ftcdn.net/r/v1/css/832739d90f3429c3f524338b6e2358d5513c7a5f/all_hashes_ssl.min.css" media="screen" rel="stylesheet" type="text/css" >
    <link href="https://as.ftcdn.net/favicon.ico" rel="icon" type="image/x-icon" >
    <link href="https://as.ftcdn.net/favicon.ico" rel="shortcut icon" type="image/x-icon" >
    <link href="https://as.ftcdn.net/search_plugin.xml" rel="search" type="application/opensearchdescription+xml" title="Adobe Stock" >
    <link href="https://as1.ftcdn.net" rel="dns-prefetch" >
    <link href="https://as2.ftcdn.net" rel="dns-prefetch" >
    <link href="https://as.ftcdn.net" rel="dns-prefetch" >
    <link href="https://stock.adobe.com/oembed?url=https%3A%2F%2Fstock.adobe.com%2Fstock-photo%2Ftree-silhouette-at-sunset%2F83411331" rel="alternate" type="application/json+oembed" title="tree-silhouette-at-sunset" >
    <link href="https://stock.adobe.com/oembed?url=https%3A%2F%2Fstock.adobe.com%2Fstock-photo%2Ftree-silhouette-at-sunset%2F83411331&amp;format=xml" rel="alternate" type="application/xml+oembed" title="tree-silhouette-at-sunset" >
    <meta name="og:title" content="tree silhouette at sunset - image" >
    <meta name="og:type" content="website" >
    <meta name="og:image" content="https://as2.ftcdn.net/jpg/00/83/41/13/500_F_83411331_rhdfX1TiCu6X56P8HAUsoQ0RGAX6Rzf8.jpg" >
    <meta name="og:url" content="https://stock.adobe.com/stock-photo/tree-silhouette-at-sunset/83411331" >
    <meta name="og:site_name" content="Adobe Stock" >
    <meta name="description" content="tree silhouette at sunset - image" >
    <meta name="og:description" content="Over 40,000,000 million professional high quality royalty free stock photos" ><script type="text/javascript">window.dtmContainer = {"member_status":0};</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="//use.typekit.net/luc1owi.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
    <script src="http://content.jwplatform.com/libraries/V6NfEzT7.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=9" />
    <link rel="stylesheet" type="text/css" href="https://as.ftcdn.net/r/v1/css/736ee0a047cbd2976f461a89556305d9d0000357/adobestock/ie-fixes.css" media="screen" />
    <![endif]-->
    <script type='text/javascript'>
        function load(){
            gapi.client.setApiKey('AIzaSyCCd7R6tUAGAwFNlq0hV_C7GWNEZNhzxa4');
        }
        window.onload = load;
        $(document).ready(function () {
            $.extend({
                setupPlayer: function () {
                    var defaults = {
                        file: '<?php echo str_replace("q3","q".$quality,$video_domain.$videoUrl); ?>',
                        width: '700',
                        height: '550',
                        image: "<? echo $video_domain.$thumbnailUrl ?>",
                        tracks: [{
                            file: "vtts/<? echo $vttUrl ?>",
                            kind: "thumbnails"
                        }]
                    };
                    jwplayer('player').setup(defaults);
                }
            });
            $.setupPlayer();
        });
    </script>
    <style>
        .meta {
            vertical-align: top;
            padding: 200px;
        }
    </style>
</head>
<body class="astock-style-base astock-style-en_US" lang="en" data-locale="en_US">
<div class="all-content-wrapper">
    <header>
        <div class="header">
            <div class="header-logo">
                <a href="/">
                    <h2>Adobe Stock</h2>
                </a>
            </div>
            <div class="header-menu">
                <ul>
                    <li>
                        <a href="/plans">Subscribe</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="/Member/LicenseHistory" id="memberLicensesCounter">
                            <span class="badge">0</span> Images                    </a>
                    </li>
                    <li class="divider"></li>
                    <li class="libraries">
                        <a href="/Libraries">Libraries</a>
                    </li>
                    <li class="divider"></li>
                    <li class="avatar">
                        <a href="#" class="js-profile-expand" id="profile-expand-link">
                            <div class="avatar-img" style="background-image: url(https://a3.behance.net/img/profile/no-image-138.jpg?cb=1931727727)"></div>
                            <span class="avatar-username">Venky</span>
                            <i class="icon-down"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="header-dropdown-menu hidden">
            <ul>
                <li class="list-header">
                    Account
                </li>
                <li>
                    <a href="/Member/LicenseHistory">
                        <i class="icon-license-history"></i>
                        <span>License History</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="js-gnav-section" data-gnavsection="profile">
                        <i class="icon-creative-cloud"></i>
                        <span>My Creative Cloud</span>
                    </a>
                </li>
                <li>
                    <a href="https://accounts.adobe.com">
                        <i class="icon-adobe"></i>
                        <span>Manage My Adobe ID</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="js-susi-logout" id="sign-out-link">
                        <i class="icon-log-out"></i>
                        <span>Sign Out</span>
                    </a>
                </li>
                <li class="list-plans"><a href="/plans">Subscribe</a></li>
            </ul>
        </div>
        <div id="search-header">
            <input type="hidden" id="memberDefaultLibraryId" value="desktop" />
            <form id="filter-content-form" class="hidden">
                <input type="checkbox" name="filters[content_type:photo]" checked="checked" value="1" />
                <input type="checkbox" name="filters[content_type:illustration]" checked="checked" value="1" />
                <input type="checkbox" name="filters[content_type:zip_vector]" checked="checked" value="1" />
            </form>
            <form id="search-form" method="get" action="/search">
            <span class="search-header-container">
                <i class="icon-search"></i>
                <input type="text" id="search-box" name="k" value="nature" placeholder="Search" />
            </span>

                <input type="submit" class="rounded-button blue search-form-submit-button" value="Go" />

                <div class="filter-options-menu search-filter-options-menu">
                    <label class="pretty-checkbox js-pretty-checkbox">
                        <input type="checkbox" name="filters[content_type:photo]" id="filters-content_type:photo" checked="checked" value="1" />
                        <i class="icon-checkbox"></i>
                        <span class="filter-label">Photos</span>
                    </label>
                    <label class="pretty-checkbox js-pretty-checkbox">
                        <input type="checkbox" name="filters[content_type:illustration]" id="filters-content_type:illustration" checked="checked" value="1" />
                        <i class="icon-checkbox"></i>
                        <span class="filter-label">Illustrations</span>
                    </label>
                    <label class="pretty-checkbox js-pretty-checkbox">
                        <input type="checkbox" name="filters[content_type:zip_vector]" id="filters-content_type:zip_vector" checked="checked" value="1" />
                        <i class="icon-checkbox"></i>
                        <span class="filter-label">Vectors</span>
                    </label>
                </div>
            </form>

            <ul class="header-list">
                <li class="results">7,082,297 results</li>
                <li class="sort">
                    <div class="dropdown">
                        <a href="#" data-toggle="dropdown">Sort by Relevance<i class="icon-down"></i></a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="clear-fix"></div>
    </header>
    <div class="view-container">
        <div><h2><? echo($videoTitle) ?></h2>
        <br>
        <table border="2">
            <tr>
                <td>
                    <div id="player">&nbsp;</div>
                </td>
                <td class="meta" >
                    <table>
                        <tr>
                            <td><b>Video Metadata</td>
                            <td colspan="2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                        <tr><td colspan="3">&nbsp;&nbsp;&nbsp;</td></tr>
                        <tr>
                            <td><a href="<? echo $video_domain.$videoUrl ?>">Download Preview</a></td>
                            <td>&nbsp;&nbsp;&nbsp;</td>
                            <td><a href="<? echo getPresignedUrl($sourceVideoUrl) ?>">Download Source</a></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </div>
        <!--
        <div class="detail_panel_content" data-content-id="83411331"></div>
        <div id="image-detail-json" class="hidden">{"83411331":{"content_id":"83411331","title":"tree silhouette at sunset","content_thumb_url":"https:\/\/as2.ftcdn.net\/jpg\/00\/83\/41\/13\/160_F_83411331_rhdfX1TiCu6X56P8HAUsoQ0RGAX6Rzf8.jpg","content_thumb_large_url":"https:\/\/as2.ftcdn.net\/jpg\/00\/83\/41\/13\/500_F_83411331_rhdfX1TiCu6X56P8HAUsoQ0RGAX6Rzf8.jpg","content_height":338,"content_width":500,"content_original_height":2322,"content_original_width":3445,"size":"3445px x 2322px","format":"jpeg","comp_file_path":"\/Download\/Watermarked\/83411331","author":"trac1","author_url":"\/search?creator_id=205411074","content_url":"https:\/\/stock.adobe.com\/stock-photo\/tree-silhouette-at-sunset\/83411331","is_purchasable":true,"downloaded":false}}</div>
        <iframe id="downloadTarget" style="display:none"></iframe> -->

    </div>
    <footer class="footer-main">
        <div class="pull-left">
            <ul class="footer-links left-menu">
                <li>
                    <a href="#" target="modal-frame" data-modal-target=".region-list .dropdown" data-modal-wrapper=".modal-region" class="region-selector-toggler">
                        <i class="icon-change-region"></i>Change region
                    </a>
                </li>
                <li>
                    <a href="//helpx.adobe.com/support.html" title="Learn &amp; Support" target="_self">Learn &amp; Support</a>
                </li>
                <li>
                    <a href="//www.adobe.com/company.html" title="Company" target="_self">Company</a>
                </li>
                <li>
                    <a href="/contributor" title="Sell Images" target="_self">Sell Images</a>
                </li>
            </ul>
        </div>
        <div class="pull-right">
            <ul class="footer-links right-menu">
                <li class="copyright unpadded">
                    <span>Copyright &copy; 2015 Adobe Systems Incorporated. All rights reserved.</span>
                </li>
                <li>
                    <a href="//www.adobe.com/privacy.html" title="Privacy" target="_self">Privacy</a>
                </li>
                <li >
                    <a href="//www.adobe.com/legal/general-terms.html" title="Terms of Use" target="_self">Terms of Use</a>
                </li>
                <li class="unpadded">
                    <a id="_bapw-link" href="#" target="_blank"><img id="_bapw-icon"/><span>AdChoices</span></a>
                </li>
            </ul>
        </div>
        <div class="clear-fix"></div>
    </footer>


    <script type="application/json" id="js-page-config">{"SUSI":{"COOKIE_IMS_ACCESS_TOKEN_TTL":86400,"COOKIE_IMS_LOGGED_OUT_TTL":60,"COOKIE_IMS_ACCESS_TOKEN":"iat0","COOKIE_IMS_LOGGED_OUT":"ilo0","COOKIE_VHOST":"cv0","COOKIES_DISABLED":"ilo0","LOGIN_DISABLED":false,"OMNITURE_AC_STATE":"stock.adobe.com","QS_IMS_SSO_INBOUND":"sso_inbound","QS_IMS_SSO_COUNTRY_CHECK":"ssocc","QS_IMS_SIGNIN_ATTEMPT":"isa0","SCOPES":["AdobeID","openid","creative_cloud","creative_sdk","cc_private","gnav","sao.stock","additional_info.address.mail_to","additional_info.dob","read_organizations"],"CLIENT_ID":"AdobeStockClient1","URLS":{"IMS":"\/\/ims-na1.adobelogin.com\/ims\/imslib.js?client_id=AdobeStockClient1&locale=en_US","FAQ_THIRD_PARTY_COOKIES":"\/","LOGOUT":"https:\/\/stock.adobe.com\/"},"COOKIE_IMS_IMPERSONATOR_TOKEN":"iatx","IGNORE_COOKIE_UPDATE":false,"DEFAULT_IMS_CONTEXT_ID":"adbstk_c"},"ANYWARE":{"CLIENT_ID":"adobe_stock","LANDSCAPE":"prod","TIMEOUT":10,"anyware_tracking_enabled":true,"DEFAULT_IMS_CONTEXT_ID":"adbstk_c"},"base_url":"","static_base_uri":"https:\/\/as.ftcdn.net","libraries_service_url":"https:\/\/cc-api-assets.adobe.io","libraries_use_stock_thumbnails":true,"libraries_stock_base_url":"https:\/\/as1.ftcdn.net","dirty_l10n":false,"accounts_url":"https:\/\/accounts.adobe.com","globalnav":{"js":"\/\/wwwimages2.adobe.com\/assets\/globalnav\/v1.1.4\/js\/globalnav.js","css":"\/\/wwwimages2.adobe.com\/assets\/globalnav\/v1.1.4\/css\/globalnav.css"},"default_country_code":"US","x_request_id":"3784430896605d28b821d3db8174e71a","member":[],"flash_messages":null,"adchoices_on":true}</script>

    <script type="text/javascript" src="https://as.ftcdn.net/r/v1/js/7e92da0158a44dde4c57b04e9f6c7ce664316c52/build/detailImage.js"></script>

    <script type="text/javascript">
        try {
            _satellite.pageBottom();

            // AdChoices
            (function() {
                var ev = document.createElement('script'); ev.type = 'text/javascript'; ev.async = true; ev.setAttribute('data-ev-tag-pid', 5655); ev.setAttribute('data-ev-tag-ocid', 414);
                ev.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/pub/tag.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ev, s);
            })();

        } catch(e) {
        }
    </script>

</div>
</body>
</html>
