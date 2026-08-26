<?php
/**
 * CJ Trading theme bootstrap.
 *
 * @package CJ_Trading
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'CJ_TRADING_VERSION', '1.0.0' );
define( 'CJ_TRADING_DIR', get_template_directory() );
define( 'CJ_TRADING_URI', get_template_directory_uri() );

require_once CJ_TRADING_DIR . '/inc/template-tags.php';

function cj_trading_setup() {
	load_theme_textdomain( 'cj-trading', CJ_TRADING_DIR . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array( 'height' => 96, 'width' => 280, 'flex-height' => true, 'flex-width' => true ) );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
	register_nav_menus( array( 'primary' => __( 'Hamburger Navigation', 'cj-trading' ) ) );
}
add_action( 'after_setup_theme', 'cj_trading_setup' );

function cj_trading_assets() {
	$app_css = CJ_TRADING_DIR . '/assets/css/app.css';
	$style   = CJ_TRADING_DIR . '/style.css';
	$script  = CJ_TRADING_DIR . '/assets/js/theme.js';
	wp_enqueue_style( 'cj-trading-utilities', CJ_TRADING_URI . '/assets/css/app.css', array(), file_exists( $app_css ) ? filemtime( $app_css ) : CJ_TRADING_VERSION );
	wp_enqueue_style( 'cj-trading-style', get_stylesheet_uri(), array( 'cj-trading-utilities' ), file_exists( $style ) ? filemtime( $style ) : CJ_TRADING_VERSION );
	wp_enqueue_script( 'cj-trading-theme', CJ_TRADING_URI . '/assets/js/theme.js', array(), file_exists( $script ) ? filemtime( $script ) : CJ_TRADING_VERSION, true );

	$body_font    = get_theme_mod( 'cj_body_font', 'system' );
	$heading_font = get_theme_mod( 'cj_heading_font', 'system' );
	$fonts        = array(
		'system' => 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
		'georgia' => 'Georgia, "Times New Roman", serif',
		'arial'   => 'Arial, Helvetica, sans-serif',
	);
	$body_stack    = isset( $fonts[ $body_font ] ) ? $fonts[ $body_font ] : $fonts['system'];
	$heading_stack = isset( $fonts[ $heading_font ] ) ? $fonts[ $heading_font ] : $fonts['system'];
	wp_add_inline_style( 'cj-trading-style', ':root{--cj-font-body:' . $body_stack . ';--cj-font-heading:' . $heading_stack . ';}' );
}
add_action( 'wp_enqueue_scripts', 'cj_trading_assets' );

function cj_trading_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'cj_company', array( 'title' => __( 'CJ Trading — Company & Contact', 'cj-trading' ), 'priority' => 30 ) );
	$company_fields = array(
		'cj_company_name' => array( 'Company name', 'PT CJ Trading' ),
		'cj_tagline'      => array( 'Brand tagline', 'Bathroom Living' ),
		'cj_email'        => array( 'Email', 'hello@cjtrading.co.id' ),
		'cj_phone'        => array( 'Phone', '+62 21 0000 0000' ),
		'cj_location'     => array( 'Location', 'Jakarta, Indonesia' ),
		'cj_footer_copy'  => array( 'Footer description', 'Premium bathroom products and project solutions for considered spaces across Indonesia.' ),
	);
	foreach ( $company_fields as $id => $field ) {
		$wp_customize->add_setting( $id, array( 'default' => $field[1], 'sanitize_callback' => 'sanitize_text_field' ) );
		$wp_customize->add_control( $id, array( 'section' => 'cj_company', 'label' => __( $field[0], 'cj-trading' ), 'type' => 'text' ) );
	}

	$wp_customize->add_section( 'cj_home_content', array( 'title' => __( 'CJ Trading — Homepage Content', 'cj-trading' ), 'priority' => 31 ) );
	$content_fields = array(
		'cj_hero_kicker'        => array( 'Hero kicker', 'PT CJ Trading · Bathroom Solutions', 'text' ),
		'cj_hero_title'         => array( 'Hero title', "Bathroom.\nElevated.", 'textarea' ),
		'cj_hero_description'   => array( 'Hero description', 'Premium fixtures and complete bathroom solutions, curated for modern Indonesian spaces.', 'textarea' ),
		'cj_catalog_kicker'     => array( 'Catalog kicker', 'Explore our collections', 'text' ),
		'cj_catalog_title'      => array( 'Catalog heading', 'Your bathroom journey starts here.', 'text' ),
		'cj_catalog_description'=> array( 'Catalog description', 'Discover complete product families shaped around performance, material, and modern living.', 'textarea' ),
		'cj_about_title'        => array( 'Homepage about heading', 'Better spaces begin with better details.', 'textarea' ),
		'cj_about_copy'         => array( 'Homepage about copy', 'We connect thoughtful design with dependable products—helping homes, hotels, and commercial projects create bathrooms that look considered and perform beautifully.', 'textarea' ),
		'cj_contact_heading'    => array( 'Homepage contact heading', "Let's shape your next bathroom.", 'text' ),
	);
	foreach ( $content_fields as $id => $field ) {
		$wp_customize->add_setting( $id, array( 'default' => $field[1], 'sanitize_callback' => 'sanitize_textarea_field' ) );
		$wp_customize->add_control( $id, array( 'section' => 'cj_home_content', 'label' => __( $field[0], 'cj-trading' ), 'type' => $field[2] ) );
	}

	$wp_customize->add_section( 'cj_home_assets', array( 'title' => __( 'CJ Trading — Homepage Assets', 'cj-trading' ), 'description' => __( 'Choose images from the WordPress Media Library. Empty controls use the bundled theme assets.', 'cj-trading' ), 'priority' => 32 ) );
	$image_fields = array(
		'cj_hero_image'       => 'Hero image',
		'cj_highlight_one'    => 'Highlight 1 image',
		'cj_highlight_two'    => 'Highlight 2 image',
		'cj_highlight_three'  => 'Highlight 3 image',
		'cj_spec_one'         => 'Specification card 1 image',
		'cj_spec_two'         => 'Specification card 2 image',
		'cj_showroom_image'   => 'Showroom image',
		'cj_discover_one'     => 'Discover card 1 image',
		'cj_discover_two'     => 'Discover card 2 image',
		'cj_discover_three'   => 'Discover card 3 image',
	);
	foreach ( $image_fields as $id => $label ) {
		$wp_customize->add_setting( $id, array( 'default' => 0, 'sanitize_callback' => 'absint' ) );
		$wp_customize->add_control( new WP_Customize_Media_Control( $wp_customize, $id, array( 'section' => 'cj_home_assets', 'label' => __( $label, 'cj-trading' ), 'mime_type' => 'image' ) ) );
	}

	$wp_customize->add_section( 'cj_typography', array( 'title' => __( 'CJ Trading — Typography', 'cj-trading' ), 'priority' => 33 ) );
	$font_choices = array( 'system' => 'CJ Sans / System', 'georgia' => 'Georgia Serif', 'arial' => 'Arial / Helvetica' );
	$wp_customize->add_setting( 'cj_body_font', array( 'default' => 'system', 'sanitize_callback' => 'sanitize_key' ) );
	$wp_customize->add_control( 'cj_body_font', array( 'section' => 'cj_typography', 'label' => __( 'Body font', 'cj-trading' ), 'type' => 'select', 'choices' => $font_choices ) );
	$wp_customize->add_setting( 'cj_heading_font', array( 'default' => 'system', 'sanitize_callback' => 'sanitize_key' ) );
	$wp_customize->add_control( 'cj_heading_font', array( 'section' => 'cj_typography', 'label' => __( 'Heading font', 'cj-trading' ), 'type' => 'select', 'choices' => $font_choices ) );
}
add_action( 'customize_register', 'cj_trading_customize_register' );

function cj_trading_create_pages() {
	$pages = array(
		'home'               => 'Home',
		'about'              => 'About Us',
		'products'           => 'Products',
		'project-references' => 'Project References',
		'contact'            => 'Contact Us',
	);
	$ids = array();
	foreach ( $pages as $slug => $title ) {
		$page = get_page_by_path( $slug );
		if ( ! $page ) {
			$id = wp_insert_post( array( 'post_type' => 'page', 'post_status' => 'publish', 'post_title' => $title, 'post_name' => $slug ) );
			if ( ! is_wp_error( $id ) ) {
				$ids[ $slug ] = $id;
			}
		} else {
			$ids[ $slug ] = $page->ID;
		}
	}
	if ( isset( $ids['home'] ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $ids['home'] );
	}
}
add_action( 'after_switch_theme', 'cj_trading_create_pages' );

