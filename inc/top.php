<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<?php if ($title) { ?><title><?php print $title; ?></title><?php } ?>
<?php if (isset($_GET['doubleroom']) ) {?>
<base target="_parent" />
<?php } ?>
<link type="text/css" rel="stylesheet" href="/wp-content/themes/listings/functions/css/shortcodes.css">
<link rel="stylesheet" type="text/css" href="/venere/inc/style.css" />
<?php if (!isset($_GET['no_js']) ) {?>
<script type="text/javascript" src="/venere/inc/nights.js"></script>
<?php } ?>
<?php if (!isset($_GET['doubleroom']) ) {?>
<?php } ?>
</head>
<body>
