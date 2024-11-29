<?php
define('DB_NAME', 'lab3');
define('DB_USER', 'root');
define('DB_PASSWORD', 'lab3-example2');
define('DB_HOST', 'db:3306');

$table_prefix = 'wp_';

if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

require_once(ABSPATH . 'wp-settings.php');
?>
