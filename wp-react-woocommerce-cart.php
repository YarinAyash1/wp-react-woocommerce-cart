<?php

/**
 * Plugin Name: React Woocommerce Cart
 * Plugin URI: https://yarinayash.co.il
 * Description: React Woocommerce Cart
 * Version: 1.0.0
 * Author: Yarin Ayash
 * Text Domain: react-woocommerce-cart
 *
 * @package react-woocommerce-cart
 */

use ReactWooCart\Init;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define('WOOCART_URI', plugin_dir_url(__FILE__));

/**
 * Check if WooCommerce is active
 **/
if (in_array(
    'woocommerce/woocommerce.php',
    apply_filters('active_plugins', get_option('active_plugins'))
)) {
    require_once  __DIR__ . '/classes/autoloader.php';

    Init::get_instance();
}
