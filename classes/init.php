<?php

namespace ReactWooCart;

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

use ReactWooCart\Singleton;

/**
 * Class 
 * @package ReactWooCart\Classes
 * @author  Yarin Ayash
 */
class Init
{

    use Singleton;

    /**
     * Init constructor.
     */
    private function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'init_scripts']);
        add_action('wp_footer', [$this, 'init_frontend']);
    }

    public function init_scripts()
    {
        wp_enqueue_script(
            'store',
            WOOCART_URI . '/frontend/build/index.js',
            ['wp-element'],
            time(), // Change this to null for production
            true
        );
        wp_localize_script('store', 'storeApi', array(
            'nonce' => wp_create_nonce('wc_store_api')
        ));
    }

    public function init_frontend()
    {
        echo '<div id="woocommerce-react-app"></div>';
    }
}
