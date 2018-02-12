<%@include file="protect.jsp"%>
<%@page import="classes.User"%>
<!DOCTYPE html> 
<html lang="en">
    <head>

        <style>
            /* Loading Spinner */
            .spinner{margin:0;width:70px;height:18px;margin:-35px 0 0 -9px;position:absolute;top:50%;left:50%;text-align:center}.spinner > div{width:18px;height:18px;background-color:#333;border-radius:100%;display:inline-block;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}
            .pageContent { display:none; }
            a,
            a label {
                cursor: pointer;
            }
        </style>


        <meta charset="UTF-8">
        <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
        <title> Proto </title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <!-- Favicons -->

        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/images/icons/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/images/icons/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/images/icons/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="assets/images/icons/apple-touch-icon-57-precomposed.png">
        <link rel="shortcut icon" href="assets/images/icons/favicon.png">



        <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.css">


        <!-- HELPERS -->

        <link rel="stylesheet" type="text/css" href="assets/helpers/animate.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/backgrounds.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/boilerplate.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/border-radius.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/grid.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/page-transitions.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/spacing.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/typography.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/utils.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/colors.css">

        <!-- ELEMENTS -->

        <link rel="stylesheet" type="text/css" href="assets/elements/badges.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/buttons.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/content-box.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/dashboard-box.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/forms.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/images.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/info-box.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/invoice.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/loading-indicators.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/menus.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/panel-box.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/response-messages.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/responsive-tables.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/ribbon.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/social-box.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/tables.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/tile-box.css">
        <link rel="stylesheet" type="text/css" href="assets/elements/timeline.css">



        <!-- ICONS -->

        <link rel="stylesheet" type="text/css" href="assets/icons/fontawesome/fontawesome.css">
        <link rel="stylesheet" type="text/css" href="assets/icons/linecons/linecons.css">
        <link rel="stylesheet" type="text/css" href="assets/icons/spinnericon/spinnericon.css">


        <!-- WIDGETS -->

        <link rel="stylesheet" type="text/css" href="assets/widgets/accordion-ui/accordion.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/calendar/calendar.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/carousel/carousel.css">

        <link rel="stylesheet" type="text/css" href="assets/widgets/charts/justgage/justgage.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/charts/morris/morris.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/charts/piegage/piegage.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/charts/xcharts/xcharts.css">

        <link rel="stylesheet" type="text/css" href="assets/widgets/chosen/chosen.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/colorpicker/colorpicker.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/datatable/datatable.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/datepicker/datepicker.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/datepicker-ui/datepicker.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/daterangepicker/daterangepicker.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/dialog/dialog.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/dropdown/dropdown.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/dropzone/dropzone.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/file-input/fileinput.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/input-switch/inputswitch.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/input-switch/inputswitch-alt.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/ionrangeslider/ionrangeslider.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/jcrop/jcrop.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/jgrowl-notifications/jgrowl.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/loading-bar/loadingbar.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/maps/vector-maps/vectormaps.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/markdown/markdown.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/modal/modal.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/multi-select/multiselect.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/multi-upload/fileupload.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/nestable/nestable.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/noty-notifications/noty.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/popover/popover.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/pretty-photo/prettyphoto.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/progressbar/progressbar.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/range-slider/rangeslider.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/slidebars/slidebars.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/slider-ui/slider.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/summernote-wysiwyg/summernote-wysiwyg.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/tabs-ui/tabs.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/theme-switcher/themeswitcher.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/timepicker/timepicker.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/tocify/tocify.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/tooltip/tooltip.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/touchspin/touchspin.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/uniform/uniform.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/wizard/wizard.css">
        <link rel="stylesheet" type="text/css" href="assets/widgets/xeditable/xeditable.css">

        <!-- SNIPPETS -->

        <link rel="stylesheet" type="text/css" href="assets/snippets/chat.css">
        <link rel="stylesheet" type="text/css" href="assets/snippets/files-box.css">
        <link rel="stylesheet" type="text/css" href="assets/snippets/login-box.css">
        <link rel="stylesheet" type="text/css" href="assets/snippets/notification-box.css">
        <link rel="stylesheet" type="text/css" href="assets/snippets/progress-box.css">
        <link rel="stylesheet" type="text/css" href="assets/snippets/todo.css">
        <link rel="stylesheet" type="text/css" href="assets/snippets/user-profile.css">
        <link rel="stylesheet" type="text/css" href="assets/snippets/mobile-navigation.css">

        <!-- APPLICATIONS -->

        <link rel="stylesheet" type="text/css" href="assets/applications/mailbox.css">

        <!-- Admin theme -->

        <link rel="stylesheet" type="text/css" href="assets/themes/admin/layout.css">
        <link rel="stylesheet" type="text/css" href="assets/themes/admin/color-schemes/default.css">

        <!-- Components theme -->

        <link rel="stylesheet" type="text/css" href="assets/themes/components/default.css">
        <link rel="stylesheet" type="text/css" href="assets/themes/components/border-radius.css">

        <!-- Admin responsive -->

        <link rel="stylesheet" type="text/css" href="assets/helpers/responsive-elements.css">
        <link rel="stylesheet" type="text/css" href="assets/helpers/admin-responsive.css">

        <!-- JS Core -->

        <script type="text/javascript" src="assets/js-core/jquery-core.js"></script>
        <script type="text/javascript" src="assets/js-core/jquery-ui-core.js"></script>
        <script type="text/javascript" src="assets/js-core/jquery-ui-widget.js"></script>
        <script type="text/javascript" src="assets/js-core/jquery-ui-mouse.js"></script>
        <script type="text/javascript" src="assets/js-core/jquery-ui-position.js"></script>
        <!--<script type="text/javascript" src="assets/js-core/transition.js"></script>-->
        <script type="text/javascript" src="assets/js-core/modernizr.js"></script>
        <script type="text/javascript" src="assets/js-core/jquery-cookie.js"></script>





        <script type="text/javascript">
            $(window).load(function () {
                setTimeout(function () {
                    $('#loading').fadeOut(400, "linear");
                }, 300);
            });
        </script>



    </head>


    <body>
        <div id="sb-site">


            <div id="loading">
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>

            <div id="page-wrapper">
                <div id="page-header" class="bg-gradient-9">
                    <div id="mobile-navigation">
                        <button id="nav-toggle" class="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span></span></button>
                        <a href="index.html" class="logo-content-small" title="MonarchUI"></a>
                    </div>
                    <div id="header-logo" class="logo-bg">
                        <a href="index.html" class="logo-content-big" title="Proto">
                            Savvy <i>0.2</i>
                            <span>The perfect solution for financial team management</span>
                        </a>
                        <a href="index.html" class="logo-content-small" title="Proto">
                            Savvy <i>0.2</i>
                            <span>The perfect solution for financial team management</span>
                        </a>
                        <a id="close-sidebar" href="#" title="Close sidebar">
                            <i class="glyph-icon icon-angle-left"></i>
                        </a>
                    </div>
                    <div id="header-nav-left">
                        <div class="user-account-btn dropdown">
                            <a href="#" title="My Account" class="user-profile clearfix" data-toggle="dropdown">
                                <span><% if (loginUser != null) {
                                        out.println(loginUser.getLastName() + " " + loginUser.getFirstName());
                                    } %></span>
                                <i class="glyph-icon icon-angle-down"></i>
                            </a>
                        </div>
                    </div><!-- #header-nav-left -->

                    <div id="header-nav-right">
                        <a href="#" class="hdr-btn" id="fullscreen-btn" title="Fullscreen">
                            <i class="glyph-icon icon-arrows-alt"></i>
                        </a>
                        <div class="dropdown" id="notifications-btn">
                            <div class="dropdown-menu box-md float-right">

                                <div class="popover-title display-block clearfix pad10A">
                                    Notifications
                                    <a class="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">
                                        More options...
                                    </a>
                                </div>

                                <div class="pad10A button-pane button-pane-alt text-center">
                                    <a href="#" class="btn btn-primary" title="View all notifications">
                                        View all notifications
                                    </a>
                                </div>
                            </div>
                        </div>


                        <a class="header-btn" id="logout-btn" href="logout.jsp" title="Lockscreen page example">
                            <i class="glyph-icon icon-linecons-lock"></i>
                        </a>

                    </div><!-- #header-nav-right -->

                </div>
                <%

                    try {

                        usertype = loginUser.checkAdmin();

                        if (usertype.equals("Admin")) {
                %>
                <div id="page-sidebar">
                    <div class="scroll-sidebar">


                        <ul id="sidebar-menu">
                            <li class="header"><span>Overview</span></li>
                            <li>
                                <a href="index.html" title="Admin Dashboard">
                                    <i class="glyph-icon icon-linecons-tv"></i>
                                    <span>Admin dashboard</span>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li class="no-menu">
                                <a href="../frontend-template/index.html" title="Frontend template">
                                    <i class="glyph-icon icon-linecons-beaker"></i>
                                    <span>Frontend template</span>
                                    <span class="bs-label label-danger">
                                        NEW
                                    </span>
                                </a>
                            </li>
                            <li class="header"><span>Components</span></li>
                            <li>
                                <a href="#" title="Elements">
                                    <i class="glyph-icon icon-linecons-diamond"></i>
                                    <span>Elements</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="buttons.html" title="Buttons"><span>Buttons</span></a></li>
                                        <li><a href="labels-badges.html" title="Labels &amp; Badges"><span>Labels &amp; Badges</span></a></li>
                                        <li><a href="content-boxes.html" title="Content boxes"><span>Content boxes</span></a></li>
                                        <li><a href="icons.html" title="Icons"><span>Icons</span></a></li>
                                        <li><a href="nav-menus.html" title="Navigation menus"><span>Navigation menus</span></a></li>
                                        <li><a href="response-messages.html" title="Response messages"><span>Response messages</span></a></li>
                                        <li><a href="images.html" title="Images"><span>Images</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Dashboard boxes">
                                    <i class="glyph-icon icon-linecons-lightbulb"></i>
                                    <span>Dashboard boxes</span>
                                    <span class="bs-label label-primary">Hot</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="chart-boxes.html" title="Chart boxes"><span>Chart boxes</span></a></li>
                                        <li><a href="tile-boxes.html" title="Tile boxes"><span>Tile boxes</span></a></li>
                                        <li><a href="social-boxes.html" title="Social boxes"><span>Social boxes</span></a></li>
                                        <li><a href="panel-boxes.html" title="Panel boxes"><span>Panel boxes</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Widgets">
                                    <i class="glyph-icon icon-linecons-wallet"></i>
                                    <span>Widgets</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="tabs.html" title="Responsive tabs"><span>Responsive tabs</span></a></li>
                                        <li><a href="collapsable.html" title="Collapsables"><span>Collapsable accordions</span></a></li>
                                        <li><a href="bs-carousel.html" title="Bootstrap Carousel"><span>Bootstrap carousel</span></a></li>
                                        <li><a href="calendar.html" title="Calendar"><span>Calendar</span></a></li>
                                        <li><a href="scrollbars.html" title="Custom scrollbars"><span>Custom scrollbars</span></a></li>
                                        <li><a href="modals.html" title="Modals"><span>Modals</span></a></li>
                                        <li><a href="notifications.html" title="Notifications"><span>Notifications</span></a></li>
                                        <li><a href="lazyload.html" title="Lazyload"><span>Lazyload</span></a></li>
                                        <li><a href="loading-feedback.html" title="Loading feedback"><span>Loading feedback</span></a></li>
                                        <li><a href="popovers-tooltips.html" title="Popovers &amp; Tooltips"><span>Popovers & Tooltips</span></a></li>
                                        <li><a href="progress-bars.html" title="Progress bars"><span>Progress bars</span></a></li>
                                        <li><a href="sortable-elements.html" title="Sortable elements"><span>Sortable elements</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Forms UI">
                                    <i class="glyph-icon icon-linecons-eye"></i>
                                    <span>Forms UI</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="forms-elements.html" title="Form elements"><span>Form elements</span></a></li>
                                        <li><a href="forms-validation.html" title="Form validation"><span>Form validation</span></a></li>
                                        <li><a href="pickers.html" title="Pickers"><span>Pickers</span></a></li>
                                        <li><a href="sliders.html" title="Sliders"><span>Sliders</span></a></li>
                                        <li><a href="forms-wizard.html" title="Form wizards"><span>Form wizards</span></a></li>
                                        <li><a href="forms-masks.html" title="Form input masks"><span>Form input masks</span></a></li>
                                        <li><a href="image-crop.html" title="Image crop"><span>Image crop</span></a></li>
                                        <li><a href="dropzone-uploader.html" title="Dropzone uploader"><span>Dropzone uploader</span></a></li>
                                        <li><a href="multi-uploader.html" title="Multi uploader"><span>Multi uploader</span></a></li>
                                        <li><a href="input-knobs.html" title="Input knobs"><span>Input knobs</span></a></li>
                                        <li><a href="ckeditor.html" title="Ckeditor"><span>Ckeditor</span></a></li>
                                        <li><a href="summernote.html" title="Summernote"><span>Summernote</span></a></li>
                                        <li><a href="markdown.html" title="Markdown editor"><span>Markdown editor</span></a></li>
                                        <li><a href="inline-editor.html" title="Inline editor"><span>Inline editor</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Advanced tables">
                                    <i class="glyph-icon icon-linecons-megaphone"></i>
                                    <span>Advanced tables</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="tables.html" title="Basic tables"><span>Basic tables</span></a></li>
                                        <li><a href="responsive-tables.html" title="Responsive tables"><span>Responsive tables</span></a></li>
                                        <li><a href="data-tables.html" title="Data tables"><span>Data tables</span></a></li>
                                        <li><a href="advanced-datatables.html" title="Advanced data tables"><span>Advanced data tables</span></a></li>
                                        <li><a href="fixed-datatables.html" title="Fixed data tables"><span>Fixed data tables</span></a></li>
                                        <li><a href="responsive-datatables.html" title="Responsive data tables"><span>Responsive data tables</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Charts">
                                    <i class="glyph-icon icon-linecons-paper-plane"></i>
                                    <span>Charts</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="flot-charts.html" title="Flot charts"><span>Flot charts</span></a></li>
                                        <li><a href="sparklines.html" title="Sparklines"><span>Sparklines</span></a></li>
                                        <li><a href="pie-gages.html" title="PieGages"><span>PieGages</span></a></li>
                                        <li><a href="just-gage.html" title="justGage"><span>justGage</span></a></li>
                                        <li><a href="morris-charts.html" title="Morris charts"><span>Morris charts</span></a></li>
                                        <li><a href="xcharts.html" title="xCharts"><span>xCharts</span></a></li>
                                        <li><a href="chart-js.html" title="Chart.js"><span>Chart.js</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Maps">
                                    <i class="glyph-icon icon-linecons-sound"></i>
                                    <span>Maps</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="gmaps.html" title="gMaps"><span>gMaps</span></a></li>
                                        <li><a href="vector-maps.html" title="Vector maps"><span>Vector maps</span></a></li>
                                        <li><a href="mapael.html" title="Mapael"><span>Mapael</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li class="header"><span>Extra</span></li>
                            <li>
                                <a href="#" title="Pages">
                                    <i class="glyph-icon icon-linecons-fire"></i>
                                    <span>Pages</span>
                                    <span class="bs-label badge-yellow">NEW</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="index-alt.html" title="Alternate dashboard"><span>Alternate dashboard</span></a></li>
                                        <li><a href="view-profile.html" title="View profile"><span>View profile</span></a></li>
                                        <li><a href="faq-section.html" title="FAQ section"><span>FAQ section</span></a></li>
                                        <li><a href="auto-menu.html" title="Auto menu"><span>Auto menu</span></a></li>
                                        <li><a href="invoice.html" title="Invoice"><span>Invoice</span></a></li>
                                        <li><a href="admin-blog.html" title="Blog posts list"><span>Blog posts list</span></a></li>
                                        <li><a href="admin-pricing.html" title="Pricing tables"><span>Pricing tables</span></a></li>
                                        <li><a href="portfolio-gallery.html" title="Portfolio gallery"><span>Portfolio gallery</span></a></li>
                                        <li><a href="portfolio-masonry.html" title="Portfolio masonry"><span>Portfolio masonry</span></a></li>
                                        <li><a href="slidebars.html" title="Slidebars"><span>Slidebars</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Other Pages">
                                    <i class="glyph-icon icon-linecons-cup"></i>
                                    <span>Other Pages</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="login-1.html" target="_blank" title="Login page 1"><span>Login page 1</span></a></li>
                                        <li><a href="login-2.html" target="_blank" title="Login page 2"><span>Login page 2</span></a></li>
                                        <li><a href="login-3.html" target="_blank" title="Login page 3"><span>Login page 3</span></a></li>
                                        <li><a href="login-4.html" target="_blank" title="Login page 4"><span>Login page 4</span></a></li>
                                        <li><a href="login-5.html" target="_blank" title="Login page 5"><span>Login page 5</span></a></li>
                                        <li><a href="lockscreen-1.html" target="_blank" title="Lockscreen page 1"><span>Lockscreen page 1</span></a></li>
                                        <li><a href="lockscreen-2.html" target="_blank" title="Lockscreen page 2"><span>Lockscreen page 2</span></a></li>
                                        <li><a href="lockscreen-3.html" target="_blank" title="Lockscreen page 3"><span>Lockscreen page 3</span></a></li>
                                        <li><a href="server-1.html" target="_blank" title="Server page 1"><span>Error 404 page</span></a></li>
                                        <li><a href="server-2.html" target="_blank" title="Server page 2"><span>Error 404 alternate</span></a></li>
                                        <li><a href="server-3.html" target="_blank" title="Server page 3"><span>Server 500 error</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Mailbox">
                                    <i class="glyph-icon icon-linecons-mail"></i>
                                    <span>Mailbox</span>
                                    <span class="bs-badge badge-danger">3</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="mailbox-inbox.html" title="Inbox"><span>Inbox</span></a></li>
                                        <li><a href="mailbox-compose.html" title="Compose message"><span>Compose message</span></a></li>
                                        <li><a href="mailbox-single.html" title="Single message"><span>Single message</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Snippets">
                                    <i class="glyph-icon icon-linecons-cd"></i>
                                    <span>Snippets</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="timeline.html" title="Timeline"><span>Timeline</span></a></li>
                                        <li><a href="chat.html" title="Chat"><span>Chat</span></a></li>
                                        <li><a href="checklist.html" title="Checklist"><span>Checklist</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Helpers">
                                    <i class="glyph-icon icon-linecons-doc"></i>
                                    <span>Helpers</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="helper-classes.html" title="Helper classes"><span>Helper classes</span></a></li>
                                        <li><a href="page-transitions.html" title="Page transitions"><span>Page transitions</span></a></li>
                                        <li><a href="animations.html" title="Animations"><span>Animations</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                        </ul><!-- #sidebar-menu -->


                    </div>
                </div>
                <%
                } else if (usertype.equals("Manager")) {
                %>
                <div id="page-sidebar">
                    <div class="scroll-sidebar">


                        <ul id="sidebar-menu">
                            <li class="header"><span>Overview</span></li>
                            <li>
                                <a href="index.html" title="Admin Dashboard">
                                    <i class="glyph-icon icon-linecons-tv"></i>
                                    <span>Admin dashboard</span>
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li class="header"><span>Components</span></li>
                            <li>
                                <a href="#" title="Elements">
                                    <i class="glyph-icon icon-linecons-diamond"></i>
                                    <span>Elements</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="buttons.html" title="Buttons"><span>Buttons</span></a></li>
                                        <li><a href="labels-badges.html" title="Labels &amp; Badges"><span>Labels &amp; Badges</span></a></li>
                                        <li><a href="content-boxes.html" title="Content boxes"><span>Content boxes</span></a></li>
                                        <li><a href="icons.html" title="Icons"><span>Icons</span></a></li>
                                        <li><a href="nav-menus.html" title="Navigation menus"><span>Navigation menus</span></a></li>
                                        <li><a href="response-messages.html" title="Response messages"><span>Response messages</span></a></li>
                                        <li><a href="images.html" title="Images"><span>Images</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Dashboard boxes">
                                    <i class="glyph-icon icon-linecons-lightbulb"></i>
                                    <span>Dashboard boxes</span>
                                    <span class="bs-label label-primary">Hot</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="chart-boxes.html" title="Chart boxes"><span>Chart boxes</span></a></li>
                                        <li><a href="tile-boxes.html" title="Tile boxes"><span>Tile boxes</span></a></li>
                                        <li><a href="social-boxes.html" title="Social boxes"><span>Social boxes</span></a></li>
                                        <li><a href="panel-boxes.html" title="Panel boxes"><span>Panel boxes</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Widgets">
                                    <i class="glyph-icon icon-linecons-wallet"></i>
                                    <span>Widgets</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="tabs.html" title="Responsive tabs"><span>Responsive tabs</span></a></li>
                                        <li><a href="collapsable.html" title="Collapsables"><span>Collapsable accordions</span></a></li>
                                        <li><a href="bs-carousel.html" title="Bootstrap Carousel"><span>Bootstrap carousel</span></a></li>
                                        <li><a href="calendar.html" title="Calendar"><span>Calendar</span></a></li>
                                        <li><a href="scrollbars.html" title="Custom scrollbars"><span>Custom scrollbars</span></a></li>
                                        <li><a href="modals.html" title="Modals"><span>Modals</span></a></li>
                                        <li><a href="notifications.html" title="Notifications"><span>Notifications</span></a></li>
                                        <li><a href="lazyload.html" title="Lazyload"><span>Lazyload</span></a></li>
                                        <li><a href="loading-feedback.html" title="Loading feedback"><span>Loading feedback</span></a></li>
                                        <li><a href="popovers-tooltips.html" title="Popovers &amp; Tooltips"><span>Popovers & Tooltips</span></a></li>
                                        <li><a href="progress-bars.html" title="Progress bars"><span>Progress bars</span></a></li>
                                        <li><a href="sortable-elements.html" title="Sortable elements"><span>Sortable elements</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Forms UI">
                                    <i class="glyph-icon icon-linecons-eye"></i>
                                    <span>Forms UI</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="forms-elements.html" title="Form elements"><span>Form elements</span></a></li>
                                        <li><a href="forms-validation.html" title="Form validation"><span>Form validation</span></a></li>
                                        <li><a href="pickers.html" title="Pickers"><span>Pickers</span></a></li>
                                        <li><a href="sliders.html" title="Sliders"><span>Sliders</span></a></li>
                                        <li><a href="forms-wizard.html" title="Form wizards"><span>Form wizards</span></a></li>
                                        <li><a href="forms-masks.html" title="Form input masks"><span>Form input masks</span></a></li>
                                        <li><a href="image-crop.html" title="Image crop"><span>Image crop</span></a></li>
                                        <li><a href="dropzone-uploader.html" title="Dropzone uploader"><span>Dropzone uploader</span></a></li>
                                        <li><a href="multi-uploader.html" title="Multi uploader"><span>Multi uploader</span></a></li>
                                        <li><a href="input-knobs.html" title="Input knobs"><span>Input knobs</span></a></li>
                                        <li><a href="ckeditor.html" title="Ckeditor"><span>Ckeditor</span></a></li>
                                        <li><a href="summernote.html" title="Summernote"><span>Summernote</span></a></li>
                                        <li><a href="markdown.html" title="Markdown editor"><span>Markdown editor</span></a></li>
                                        <li><a href="inline-editor.html" title="Inline editor"><span>Inline editor</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Advanced tables">
                                    <i class="glyph-icon icon-linecons-megaphone"></i>
                                    <span>Advanced tables</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="tables.html" title="Basic tables"><span>Basic tables</span></a></li>
                                        <li><a href="responsive-tables.html" title="Responsive tables"><span>Responsive tables</span></a></li>
                                        <li><a href="data-tables.html" title="Data tables"><span>Data tables</span></a></li>
                                        <li><a href="advanced-datatables.html" title="Advanced data tables"><span>Advanced data tables</span></a></li>
                                        <li><a href="fixed-datatables.html" title="Fixed data tables"><span>Fixed data tables</span></a></li>
                                        <li><a href="responsive-datatables.html" title="Responsive data tables"><span>Responsive data tables</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Charts">
                                    <i class="glyph-icon icon-linecons-paper-plane"></i>
                                    <span>Charts</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="flot-charts.html" title="Flot charts"><span>Flot charts</span></a></li>
                                        <li><a href="sparklines.html" title="Sparklines"><span>Sparklines</span></a></li>
                                        <li><a href="pie-gages.html" title="PieGages"><span>PieGages</span></a></li>
                                        <li><a href="just-gage.html" title="justGage"><span>justGage</span></a></li>
                                        <li><a href="morris-charts.html" title="Morris charts"><span>Morris charts</span></a></li>
                                        <li><a href="xcharts.html" title="xCharts"><span>xCharts</span></a></li>
                                        <li><a href="chart-js.html" title="Chart.js"><span>Chart.js</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Maps">
                                    <i class="glyph-icon icon-linecons-sound"></i>
                                    <span>Maps</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="gmaps.html" title="gMaps"><span>gMaps</span></a></li>
                                        <li><a href="vector-maps.html" title="Vector maps"><span>Vector maps</span></a></li>
                                        <li><a href="mapael.html" title="Mapael"><span>Mapael</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li class="header"><span>Extra</span></li>
                            <li>
                                <a href="#" title="Pages">
                                    <i class="glyph-icon icon-linecons-fire"></i>
                                    <span>Pages</span>
                                    <span class="bs-label badge-yellow">NEW</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="index-alt.html" title="Alternate dashboard"><span>Alternate dashboard</span></a></li>
                                        <li><a href="view-profile.html" title="View profile"><span>View profile</span></a></li>
                                        <li><a href="faq-section.html" title="FAQ section"><span>FAQ section</span></a></li>
                                        <li><a href="auto-menu.html" title="Auto menu"><span>Auto menu</span></a></li>
                                        <li><a href="invoice.html" title="Invoice"><span>Invoice</span></a></li>
                                        <li><a href="admin-blog.html" title="Blog posts list"><span>Blog posts list</span></a></li>
                                        <li><a href="admin-pricing.html" title="Pricing tables"><span>Pricing tables</span></a></li>
                                        <li><a href="portfolio-gallery.html" title="Portfolio gallery"><span>Portfolio gallery</span></a></li>
                                        <li><a href="portfolio-masonry.html" title="Portfolio masonry"><span>Portfolio masonry</span></a></li>
                                        <li><a href="slidebars.html" title="Slidebars"><span>Slidebars</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Other Pages">
                                    <i class="glyph-icon icon-linecons-cup"></i>
                                    <span>Other Pages</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="login-1.html" target="_blank" title="Login page 1"><span>Login page 1</span></a></li>
                                        <li><a href="login-2.html" target="_blank" title="Login page 2"><span>Login page 2</span></a></li>
                                        <li><a href="login-3.html" target="_blank" title="Login page 3"><span>Login page 3</span></a></li>
                                        <li><a href="login-4.html" target="_blank" title="Login page 4"><span>Login page 4</span></a></li>
                                        <li><a href="login-5.html" target="_blank" title="Login page 5"><span>Login page 5</span></a></li>
                                        <li><a href="lockscreen-1.html" target="_blank" title="Lockscreen page 1"><span>Lockscreen page 1</span></a></li>
                                        <li><a href="lockscreen-2.html" target="_blank" title="Lockscreen page 2"><span>Lockscreen page 2</span></a></li>
                                        <li><a href="lockscreen-3.html" target="_blank" title="Lockscreen page 3"><span>Lockscreen page 3</span></a></li>
                                        <li><a href="server-1.html" target="_blank" title="Server page 1"><span>Error 404 page</span></a></li>
                                        <li><a href="server-2.html" target="_blank" title="Server page 2"><span>Error 404 alternate</span></a></li>
                                        <li><a href="server-3.html" target="_blank" title="Server page 3"><span>Server 500 error</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Mailbox">
                                    <i class="glyph-icon icon-linecons-mail"></i>
                                    <span>Mailbox</span>
                                    <span class="bs-badge badge-danger">3</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="mailbox-inbox.html" title="Inbox"><span>Inbox</span></a></li>
                                        <li><a href="mailbox-compose.html" title="Compose message"><span>Compose message</span></a></li>
                                        <li><a href="mailbox-single.html" title="Single message"><span>Single message</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Snippets">
                                    <i class="glyph-icon icon-linecons-cd"></i>
                                    <span>Snippets</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="timeline.html" title="Timeline"><span>Timeline</span></a></li>
                                        <li><a href="chat.html" title="Chat"><span>Chat</span></a></li>
                                        <li><a href="checklist.html" title="Checklist"><span>Checklist</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Helpers">
                                    <i class="glyph-icon icon-linecons-doc"></i>
                                    <span>Helpers</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="helper-classes.html" title="Helper classes"><span>Helper classes</span></a></li>
                                        <li><a href="page-transitions.html" title="Page transitions"><span>Page transitions</span></a></li>
                                        <li><a href="animations.html" title="Animations"><span>Animations</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                        </ul><!-- #sidebar-menu -->


                    </div>
                </div>
                <%
                } else {
                %>
                <div id="page-sidebar">
                    <div class="scroll-sidebar">


                        <ul id="sidebar-menu">
                            <li class="header"><span>Overview</span></li>
                            <li>
                                <a href="index.html" title="Admin Dashboard">
                                    <i class="glyph-icon icon-linecons-tv"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li class="header"><span>Components</span></li>
                            <li>
                                <a href="#" title="Elements">
                                    <i class="glyph-icon icon-group"></i>
                                    <span>Clients</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a id ="addprospects" class="loadPage"><span>Add</span></a></li>
                                        <li><a id ="addprospects" class="loadPage"<span>Prospects</span></a></li>
                                        <li><a id ="addprospects" class="loadPage"<span>Customers</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Dashboard boxes">
                                    <i class="glyph-icon icon-linecons-money"></i>
                                    <span>Sales</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a id="view_sales_in_progress" class="loadPage" title="Chart boxes"><span>Add</span></a></li>
                                        <li><a href="tile-boxes.html" title="Tile boxes"><span>View</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Widgets">
                                    <i class="glyph-icon icon-linecons-fire"></i>
                                    <span>Goals</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a id="goalsagent" class="loadPage"><span>Add</span></a></li>
                                        <li><a href="collapsable.html" title="Collapsables"><span>View</span></a></li>
                                        <li><a href="bs-carousel.html" title="Bootstrap Carousel"><span>Edit</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>
                            <li>
                                <a href="#" title="Forms UI">
                                    <i class="glyph-icon icon-linecons-key"></i>
                                    <span>Performance</span>
                                </a>
                                <div class="sidebar-submenu">

                                    <ul>
                                        <li><a href="forms-elements.html" title="Form elements"><span>Form elements</span></a></li>
                                    </ul>

                                </div><!-- .sidebar-submenu -->
                            </li>









                        </ul><!-- #sidebar-menu -->


                    </div>
                </div>
                <%
                        }
                    } catch (NullPointerException e) {
                    }

                    out.println("<input type='hidden' id='userType' value='" + usertype + "' />");

                %>
                <div id="page-content-wrapper">
                    <div id="page-content">

                        <div class="container">


                            <!-- Sparklines charts -->

                            <script type="text/javascript" src="assets/widgets/charts/sparklines/sparklines.js"></script>
                            <script type="text/javascript" src="assets/widgets/charts/sparklines/sparklines-demo.js"></script>

                            <!-- Flot charts -->

                            <script type="text/javascript" src="assets/widgets/charts/flot/flot.js"></script>
                            <script type="text/javascript" src="assets/widgets/charts/flot/flot-resize.js"></script>
                            <script type="text/javascript" src="assets/widgets/charts/flot/flot-stack.js"></script>
                            <script type="text/javascript" src="assets/widgets/charts/flot/flot-pie.js"></script>
                            <script type="text/javascript" src="assets/widgets/charts/flot/flot-tooltip.js"></script>

                            <!-- PieGage charts -->

                            <script type="text/javascript" src="assets/widgets/charts/piegage/piegage.js"></script>
                            <script type="text/javascript" src="assets/widgets/charts/piegage/piegage-demo.js"></script>


                            <div id="theme-options" class="admin-options">
                                <a href="javascript:void(0);" class="btn btn-primary theme-switcher tooltip-button" data-placement="left" title="Color schemes and layout options">
                                    <i class="glyph-icon icon-linecons-cog icon-spin"></i>
                                </a>
                                <div id="theme-switcher-wrapper">
                                    <div class="scroll-switcher">
                                        <h5 class="header">Layout options</h5>
                                        <ul class="reset-ul">
                                            <li>
                                                <label for="boxed-layout">Boxed layout</label>
                                                <input type="checkbox" data-toggletarget="boxed-layout" id="boxed-layout" class="input-switch-alt">
                                            </li>
                                            <li>
                                                <label for="fixed-header">Fixed header</label>
                                                <input type="checkbox" data-toggletarget="fixed-header" id="fixed-header" class="input-switch-alt">
                                            </li>
                                            <li>
                                                <label for="fixed-sidebar">Fixed sidebar</label>
                                                <input type="checkbox" data-toggletarget="fixed-sidebar" id="fixed-sidebar" class="input-switch-alt">
                                            </li>
                                            <li>
                                                <label for="closed-sidebar">Closed sidebar</label>
                                                <input type="checkbox" data-toggletarget="closed-sidebar" id="closed-sidebar" class="input-switch-alt">
                                            </li>
                                        </ul>
                                        <div class="boxed-bg-wrapper hide">
                                            <h5 class="header">
                                                Boxed Page Background
                                                <a class="set-background-style" data-header-bg="" title="Remove all styles" href="javascript:void(0);">Clear</a>
                                            </h5>
                                            <div class="theme-color-wrapper clearfix">
                                                <h5>Patterns</h5>
                                                <a class="tooltip-button set-background-style pattern-bg-3" data-header-bg="pattern-bg-3" title="Pattern 3" href="javascript:void(0);">Pattern 3</a>
                                                <a class="tooltip-button set-background-style pattern-bg-4" data-header-bg="pattern-bg-4" title="Pattern 4" href="javascript:void(0);">Pattern 4</a>
                                                <a class="tooltip-button set-background-style pattern-bg-5" data-header-bg="pattern-bg-5" title="Pattern 5" href="javascript:void(0);">Pattern 5</a>
                                                <a class="tooltip-button set-background-style pattern-bg-6" data-header-bg="pattern-bg-6" title="Pattern 6" href="javascript:void(0);">Pattern 6</a>
                                                <a class="tooltip-button set-background-style pattern-bg-7" data-header-bg="pattern-bg-7" title="Pattern 7" href="javascript:void(0);">Pattern 7</a>
                                                <a class="tooltip-button set-background-style pattern-bg-8" data-header-bg="pattern-bg-8" title="Pattern 8" href="javascript:void(0);">Pattern 8</a>
                                                <a class="tooltip-button set-background-style pattern-bg-9" data-header-bg="pattern-bg-9" title="Pattern 9" href="javascript:void(0);">Pattern 9</a>
                                                <a class="tooltip-button set-background-style pattern-bg-10" data-header-bg="pattern-bg-10" title="Pattern 10" href="javascript:void(0);">Pattern 10</a>

                                                <div class="clear"></div>

                                                <h5 class="mrg15T">Solids &amp;Images</h5>
                                                <a class="tooltip-button set-background-style bg-black" data-header-bg="bg-black" title="Black" href="javascript:void(0);">Black</a>
                                                <a class="tooltip-button set-background-style bg-gray mrg10R" data-header-bg="bg-gray" title="Gray" href="javascript:void(0);">Gray</a>

                                                <a class="tooltip-button set-background-style full-bg-1" data-header-bg="full-bg-1 fixed-bg" title="Image 1" href="javascript:void(0);">Image 1</a>
                                                <a class="tooltip-button set-background-style full-bg-2" data-header-bg="full-bg-2 fixed-bg" title="Image 2" href="javascript:void(0);">Image 2</a>
                                                <a class="tooltip-button set-background-style full-bg-3" data-header-bg="full-bg-3 fixed-bg" title="Image 3" href="javascript:void(0);">Image 3</a>
                                                <a class="tooltip-button set-background-style full-bg-4" data-header-bg="full-bg-4 fixed-bg" title="Image 4" href="javascript:void(0);">Image 4</a>
                                                <a class="tooltip-button set-background-style full-bg-5" data-header-bg="full-bg-5 fixed-bg" title="Image 5" href="javascript:void(0);">Image 5</a>
                                                <a class="tooltip-button set-background-style full-bg-6" data-header-bg="full-bg-6 fixed-bg" title="Image 6" href="javascript:void(0);">Image 6</a>

                                            </div>
                                        </div>
                                        <h5 class="header">
                                            Header Style
                                            <a class="set-adminheader-style" data-header-bg="bg-gradient-9" title="Remove all styles" href="javascript:void(0);">Clear</a>
                                        </h5>
                                        <div class="theme-color-wrapper clearfix">
                                            <h5>Solids</h5>
                                            <a class="tooltip-button set-adminheader-style bg-primary" data-header-bg="bg-primary font-inverse" title="Primary" href="javascript:void(0);">Primary</a>
                                            <a class="tooltip-button set-adminheader-style bg-green" data-header-bg="bg-green font-inverse" title="Green" href="javascript:void(0);">Green</a>
                                            <a class="tooltip-button set-adminheader-style bg-red" data-header-bg="bg-red font-inverse" title="Red" href="javascript:void(0);">Red</a>
                                            <a class="tooltip-button set-adminheader-style bg-blue" data-header-bg="bg-blue font-inverse" title="Blue" href="javascript:void(0);">Blue</a>
                                            <a class="tooltip-button set-adminheader-style bg-warning" data-header-bg="bg-warning font-inverse" title="Warning" href="javascript:void(0);">Warning</a>
                                            <a class="tooltip-button set-adminheader-style bg-purple" data-header-bg="bg-purple font-inverse" title="Purple" href="javascript:void(0);">Purple</a>
                                            <a class="tooltip-button set-adminheader-style bg-black" data-header-bg="bg-black font-inverse" title="Black" href="javascript:void(0);">Black</a>

                                            <div class="clear"></div>

                                            <h5 class="mrg15T">Gradients</h5>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-1" data-header-bg="bg-gradient-1 font-inverse" title="Gradient 1" href="javascript:void(0);">Gradient 1</a>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-2" data-header-bg="bg-gradient-2 font-inverse" title="Gradient 2" href="javascript:void(0);">Gradient 2</a>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-3" data-header-bg="bg-gradient-3 font-inverse" title="Gradient 3" href="javascript:void(0);">Gradient 3</a>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-4" data-header-bg="bg-gradient-4 font-inverse" title="Gradient 4" href="javascript:void(0);">Gradient 4</a>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-5" data-header-bg="bg-gradient-5 font-inverse" title="Gradient 5" href="javascript:void(0);">Gradient 5</a>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-6" data-header-bg="bg-gradient-6 font-inverse" title="Gradient 6" href="javascript:void(0);">Gradient 6</a>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-7" data-header-bg="bg-gradient-7 font-inverse" title="Gradient 7" href="javascript:void(0);">Gradient 7</a>
                                            <a class="tooltip-button set-adminheader-style bg-gradient-8" data-header-bg="bg-gradient-8 font-inverse" title="Gradient 8" href="javascript:void(0);">Gradient 8</a>
                                        </div>
                                        <h5 class="header">
                                            Sidebar Style
                                            <a class="set-sidebar-style" data-header-bg="" title="Remove all styles" href="javascript:void(0);">Clear</a>
                                        </h5>
                                        <div class="theme-color-wrapper clearfix">
                                            <h5>Solids</h5>
                                            <a class="tooltip-button set-sidebar-style bg-primary" data-header-bg="bg-primary font-inverse" title="Primary" href="javascript:void(0);">Primary</a>
                                            <a class="tooltip-button set-sidebar-style bg-green" data-header-bg="bg-green font-inverse" title="Green" href="javascript:void(0);">Green</a>
                                            <a class="tooltip-button set-sidebar-style bg-red" data-header-bg="bg-red font-inverse" title="Red" href="javascript:void(0);">Red</a>
                                            <a class="tooltip-button set-sidebar-style bg-blue" data-header-bg="bg-blue font-inverse" title="Blue" href="javascript:void(0);">Blue</a>
                                            <a class="tooltip-button set-sidebar-style bg-warning" data-header-bg="bg-warning font-inverse" title="Warning" href="javascript:void(0);">Warning</a>
                                            <a class="tooltip-button set-sidebar-style bg-purple" data-header-bg="bg-purple font-inverse" title="Purple" href="javascript:void(0);">Purple</a>
                                            <a class="tooltip-button set-sidebar-style bg-black" data-header-bg="bg-black font-inverse" title="Black" href="javascript:void(0);">Black</a>

                                            <div class="clear"></div>

                                            <h5 class="mrg15T">Gradients</h5>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-1" data-header-bg="bg-gradient-1 font-inverse" title="Gradient 1" href="javascript:void(0);">Gradient 1</a>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-2" data-header-bg="bg-gradient-2 font-inverse" title="Gradient 2" href="javascript:void(0);">Gradient 2</a>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-3" data-header-bg="bg-gradient-3 font-inverse" title="Gradient 3" href="javascript:void(0);">Gradient 3</a>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-4" data-header-bg="bg-gradient-4 font-inverse" title="Gradient 4" href="javascript:void(0);">Gradient 4</a>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-5" data-header-bg="bg-gradient-5 font-inverse" title="Gradient 5" href="javascript:void(0);">Gradient 5</a>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-6" data-header-bg="bg-gradient-6 font-inverse" title="Gradient 6" href="javascript:void(0);">Gradient 6</a>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-7" data-header-bg="bg-gradient-7 font-inverse" title="Gradient 7" href="javascript:void(0);">Gradient 7</a>
                                            <a class="tooltip-button set-sidebar-style bg-gradient-8" data-header-bg="bg-gradient-8 font-inverse" title="Gradient 8" href="javascript:void(0);">Gradient 8</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12" id="pageContent">

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <script>
            $(document).ready(function () {
                $("body").on("click", ".loadPage", function () {
                    var pageTitle = this.id.trim();

                    var pageToLoad = null;
                    if (pageTitle == "admin_control") {
                        pageToLoad = pageTitle + ".jsp";
                    } else {
                        pageToLoad = pageTitle + ".html";
                    }
                    $("#pageContent").load(pageToLoad);

                });
            });
            $(window).load(function () {
                $('#pageContent').show();
            });

            $(function () {
                $("#loadingGIF").show();
                //loadReferenceData(function() {   // ensure reference data loaded before UI
                $("#loadingGIF").hide();
                <%                try {
                        if (usertype.equals("Admin")) {
                %>
                $("#pageContent").load("admin_control.jsp");
                <%
                } else if (usertype.equals("Manager")) {
                %>

                $("#pageContent").load("user_control.html");
                <%
                } else {

                %>
                $("#pageContent").load("addprospects.html");
                <%}

                    } catch (NullPointerException e) {

                    }
                %>


                //});
            });
            </script>
            <!-- WIDGETS -->

            <script type="text/javascript" src="assets/bootstrap/js/bootstrap.js"></script>

            <!-- Bootstrap Dropdown -->

            <!-- <script type="text/javascript" src="assets/widgets/dropdown/dropdown.js"></script> -->

            <!-- Bootstrap Tooltip -->

            <!-- <script type="text/javascript" src="assets/widgets/tooltip/tooltip.js"></script> -->

            <!-- Bootstrap Popover -->

            <!-- <script type="text/javascript" src="assets/widgets/popover/popover.js"></script> -->

            <!-- Bootstrap Progress Bar -->

            <script type="text/javascript" src="assets/widgets/progressbar/progressbar.js"></script>

            <!-- Bootstrap Buttons -->

            <!-- <script type="text/javascript" src="assets/widgets/button/button.js"></script> -->

            <!-- Bootstrap Collapse -->

            <!-- <script type="text/javascript" src="assets/widgets/collapse/collapse.js"></script> -->

            <!-- Superclick -->

            <script type="text/javascript" src="assets/widgets/superclick/superclick.js"></script>

            <!-- Input switch alternate -->

            <script type="text/javascript" src="assets/widgets/input-switch/inputswitch-alt.js"></script>

            <!-- Slim scroll -->

            <script type="text/javascript" src="assets/widgets/slimscroll/slimscroll.js"></script>

            <!-- Slidebars -->

            <script type="text/javascript" src="assets/widgets/slidebars/slidebars.js"></script>
            <script type="text/javascript" src="assets/widgets/slidebars/slidebars-demo.js"></script>

            <!-- PieGage -->

            <script type="text/javascript" src="assets/widgets/charts/piegage/piegage.js"></script>
            <script type="text/javascript" src="assets/widgets/charts/piegage/piegage-demo.js"></script>

            <!-- Screenfull -->

            <script type="text/javascript" src="assets/widgets/screenfull/screenfull.js"></script>

            <!-- Content box -->

            <script type="text/javascript" src="assets/widgets/content-box/contentbox.js"></script>

            <!-- Overlay -->

            <script type="text/javascript" src="assets/widgets/overlay/overlay.js"></script>

            <!-- Widgets init for demo -->

            <script type="text/javascript" src="assets/js-init/widgets-init.js"></script>

            <!-- Theme layout -->

            <script type="text/javascript" src="assets/themes/admin/layout.js"></script>

            <!-- Theme switcher -->

            <script type="text/javascript" src="assets/widgets/theme-switcher/themeswitcher.js"></script>

        </div>
    </body>
</html>