<head>
    <title>Adobe Stock - high quality royalty free stock photos and vectors | Adobe Stock</title><link href="https://as.ftcdn.net/r/v1/css/832739d90f3429c3f524338b6e2358d5513c7a5f/all_hashes_ssl.min.css" media="screen" rel="stylesheet" type="text/css" >
    <link href="https://as.ftcdn.net/favicon.ico" rel="icon" type="image/x-icon" >
    <link href="https://as.ftcdn.net/favicon.ico" rel="shortcut icon" type="image/x-icon" >
    <link href="https://as.ftcdn.net/search_plugin.xml" rel="search" type="application/opensearchdescription+xml" title="Adobe Stock" >
    <link href="https://as1.ftcdn.net" rel="dns-prefetch" >
    <link href="https://as2.ftcdn.net" rel="dns-prefetch" >
    <link href="https://as.ftcdn.net" rel="dns-prefetch" ><script type="text/javascript" src="https://as.ftcdn.net/r/v1/js/5b6f79e039911ece2a88b1e98448e4500f880f20/all_ssl.min.js"></script>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" >
    <script src="//use.typekit.net/luc1owi.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>
    <script>
        function onVideoMouseOver(id) {
            document.getElementById("video"+id).play();
            //document.getElementById("video-overlay").style.display = "block";
        }
    </script>
    <style>
        /*#video-overlay {
            position: absolute;
            text-align: center;
            font-size: 14px;
            width: 350px;
            top: 100px;
        }
        a.detail:link {
            background-color: #B2FF99;
        }

        a.detail:visited {
            background-color: #FFFF85;
        }

        a.detail:hover {
            background-color: #FF704D;
        }

        a.detail:active {
            background-color: #FF704D;
        }*/

        a.detail2:link {
            text-decoration: none;
            font-size: 200%;
        }

        a.detail2:visited {
            text-decoration: none;
            font-size: 200%;
        }

        a.detail2:hover {
            text-decoration: underline;
            font-size: 200%;
        }

        a.detail2:active {
            text-decoration: underline;
            font-size: 200%;
        }
    </style>
</head>
<?
$video_data = array_map('str_getcsv', file('video_data.csv'));
$quality = "q3";
$region="eu";
$width="700w";
$view_mode="details_view";
$view="detail";
$filesize="";
$detailsize="";
$video_width="350";
$video_height="250";
$detailviewUrl="video_detail.php?";

if(isset($_GET["zq"])) {
    if($_GET["zq"] == "q1" || $_GET["zq"] == "q2" || $_GET["zq"] == "q3") {
        $quality = $_GET["zq"];
    }
    $detailviewUrl=$detailviewUrl."zq=".$quality."&";
}

if(isset($_GET["width"])) {
    if($_GET["width"] == "700" || $_GET["width"] == "400") {
        $width = $_GET["width"]."w";
    }
}

if(isset($_GET["viewmode"])) {
    if($_GET["viewmode"] == "search") {
        $view_mode="search_view";
        $view="search";
        $width="400w";
    }
}

if(isset($_GET["filesize"])) {
    if($_GET["filesize"] == "1mb" || $_GET["filesize"] == "3mb" || $_GET["filesize"] == "5mb") {
        $view_mode="search_view";
        $view="search";
        $width="400w";
        $quality = $_GET["filesize"];
    }
    if($_GET["filesize"] == "1mb") {
        $detailsize="2mb";
    }
    if($_GET["filesize"] == "3mb") {
        $detailsize="4mb";
    }
    if($_GET["filesize"] == "5mb") {
        $detailsize="6mb";
    }
    //$detailsize="filesize=".$detailsize;
    $detailviewUrl=$detailviewUrl."filesize=".$detailsize."&";
}

$video_domain="http://test-video-eu.ftcdn.net";
if(isset($_GET["region"])) {
    if($_GET["region"] == "us") {
        $region = $_GET["region"];
        $video_domain="http://test-video-us.ftcdn.net";
    }
    $detailviewUrl=$detailviewUrl."&region=".$region;
}
if(isset($_GET["width"])) {
    $video_width = $_GET["width"];
}
if(isset($_GET["height"])) {
    $video_height = $_GET["height"];
}

?>
<body class="astock-style-base astock-style-en_US" lang="en" data-locale="en_US">
<script type="text/javascript">try {mboxCreate("adbe_en_stock_search_TopOfBody");} catch (e) {}</script>
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
        <div class="search-results-sidebar">

            <div id="search-results" class="row-large ftl-mosaic-container">
                <?php
                $i=0;
                foreach ($video_data as $key => $value) {?>
                    <div class="search-result-cell js-search-result-cell ftl-thumb-mosaic js-hover-container" style="margin-right: 20px;">
                        <div class="video-thumb-frame">
                            <?php
                            $thumburl = str_replace("q3",$quality,$video_domain.$value[3]);
                            $thumburl2 = str_replace("details_view",$view_mode,$thumburl);
                            $thumburl3 = str_replace("detail",$view,$thumburl2);
                            $thumburl4 = str_replace("700w",$width,$thumburl3);
                            $playurl = str_replace("q3",$quality,$video_domain.$value[2]);
                            $playurl2 = str_replace("details_view",$view_mode,$playurl);
                            ?>
                            <video  id='video<?php echo $i; ?>'
                                       poster='<?php echo $thumburl4 ?>'
                                       preload="none"
                                       width="<?php echo $video_width ?>"
                                       height="<?php echo $video_height ?>"
                                       onMouseOver="onVideoMouseOver(<?php echo $i; ?>);"
                                       onmouseout="video<?php echo $i; ?>.pause()"
                                    <source src='<?php echo $playurl2 ?>' type='video/mp4' />
                                </video>
                        </div>
                        <div align="center"><a href="<?php echo $detailviewUrl; ?>id=<?php echo $value[0]; ?>" class="detail2" ><?php echo $value[1]; ?></a></div>
                    </div>
                    <?php
                    $i++;
                }?>
            </div>

        </div>

        <div class="pagination-wrapper">
            <form action="/search" method="get">
                <input type="hidden" name="k" value="nature" id="k"><input type="hidden" name="filters[content_type:photo]" value="1" id="filters-content_type:photo"><input type="hidden" name="filters[content_type:video]" value="1" id="filters-content_type:video"><input type="hidden" name="filters[content_type:illustration]" value="1" id="filters-content_type:illustration"><input type="hidden" name="filters[content_type:zip_vector]" value="1" id="filters-content_type:zip_vector"><input type="hidden" name="safe_search" value="1" id="safe_search"><input type="hidden" name="order" value="relevance" id="order"><ul class="pagination-list">
                    <li class=" active-pagination"><a href="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Avideo%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=1">1</a></li>
                    <li class=""><a href="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Avideo%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=2">2</a></li>
                    <li class=""><a href="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Avideo%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=3">3</a></li>
                    <li class=""><a href="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Avideo%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=4">4</a></li>
                    <li class=""><a href="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Avideo%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=5">5</a></li>
                    <li class="ellipses">...</li>
                    <li class=""><a href="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Avideo%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=100">100</a></li>
                    <li title="Next page"><a href="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Avideo%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=2" rel="nofollow"><i class="icon-arrow-right"></i></a></li>
                    <li><input type="text" class="pagination-page-jump numeric" name="search_page" id="search_page" placeholder="Jump to page"></li></ul>
            </form>
        </div>
        <input type="hidden" id="pagination-total-page-count" value="100" />
        <input type="hidden" id="pagination-current-page" value="4" />
        <input type="hidden" id="pagination-next-page" value="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=5&detail_offset=1" />
        <input type="hidden" id="pagination-previous-page" value="/search?k=nature&amp;filters%5Bcontent_type%3Aphoto%5D=1&amp;filters%5Bcontent_type%3Aillustration%5D=1&amp;filters%5Bcontent_type%3Azip_vector%5D=1&amp;safe_search=1&amp;colors=&amp;order=relevance&amp;search_page=3&detail_offset=-1" />
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
    
    <script type="text/javascript" src="https://as.ftcdn.net/r/v1/js/212effd3d56be2689417abcb7248022bc2741712/build/search.js"></script>

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
<script type="text/javascript">try {mboxCreate("adbe_en_stock_search_BottomOfBody");} catch (e) {}</script>
</body>
</html>