<?php
/**
 * Plugin Name: CJ Trading Content
 * Description: Products, project references, metadata, starter content, and contact handling for the CJ Trading website.
 * Version: 1.0.0
 * Requires at least: 6.6
 * Requires PHP: 8.0
 * Author: PT CJ Trading
 * Text Domain: cj-trading-content
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cj_content_register_post_types() {
	register_post_type(
		'cj_product',
		array(
			'labels' => array( 'name' => __( 'Products', 'cj-trading-content' ), 'singular_name' => __( 'Product', 'cj-trading-content' ), 'add_new_item' => __( 'Add New Product', 'cj-trading-content' ), 'edit_item' => __( 'Edit Product', 'cj-trading-content' ) ),
			'public' => true, 'show_in_rest' => true, 'has_archive' => false, 'rewrite' => array( 'slug' => 'product' ),
			'menu_icon' => 'dashicons-products', 'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' ),
		)
	);
	register_post_type(
		'cj_project',
		array(
			'labels' => array( 'name' => __( 'Project References', 'cj-trading-content' ), 'singular_name' => __( 'Project Reference', 'cj-trading-content' ), 'add_new_item' => __( 'Add New Project', 'cj-trading-content' ), 'edit_item' => __( 'Edit Project', 'cj-trading-content' ) ),
			'public' => true, 'show_in_rest' => true, 'has_archive' => false, 'rewrite' => array( 'slug' => 'project' ),
			'menu_icon' => 'dashicons-building', 'supports' => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes' ),
		)
	);
}
add_action( 'init', 'cj_content_register_post_types' );

function cj_content_meta_boxes() {
	add_meta_box( 'cj_product_details', __( 'Catalog Card Details', 'cj-trading-content' ), 'cj_content_product_meta_box', 'cj_product', 'side' );
	add_meta_box( 'cj_project_details', __( 'Project Card Details', 'cj-trading-content' ), 'cj_content_project_meta_box', 'cj_project', 'side' );
}
add_action( 'add_meta_boxes', 'cj_content_meta_boxes' );

function cj_content_product_meta_box( $post ) {
	wp_nonce_field( 'cj_content_save_meta', 'cj_content_nonce' );
	$value = get_post_meta( $post->ID, 'cj_eyebrow', true );
	echo '<p><label for="cj_eyebrow"><strong>' . esc_html__( 'Eyebrow / badge', 'cj-trading-content' ) . '</strong></label></p><input class="widefat" id="cj_eyebrow" name="cj_eyebrow" value="' . esc_attr( $value ) . '">';
	echo '<p class="description">' . esc_html__( 'Use Featured Image for the catalog photograph and Excerpt for the card description.', 'cj-trading-content' ) . '</p>';
}

function cj_content_project_meta_box( $post ) {
	wp_nonce_field( 'cj_content_save_meta', 'cj_content_nonce' );
	$value = get_post_meta( $post->ID, 'cj_project_type', true );
	echo '<p><label for="cj_project_type"><strong>' . esc_html__( 'Project type', 'cj-trading-content' ) . '</strong></label></p><input class="widefat" id="cj_project_type" name="cj_project_type" value="' . esc_attr( $value ) . '">';
	echo '<p class="description">' . esc_html__( 'Use Featured Image for the project photograph.', 'cj-trading-content' ) . '</p>';
}

function cj_content_save_meta( $post_id ) {
	if ( ! isset( $_POST['cj_content_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['cj_content_nonce'] ) ), 'cj_content_save_meta' ) || ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	if ( isset( $_POST['cj_eyebrow'] ) ) {
		update_post_meta( $post_id, 'cj_eyebrow', sanitize_text_field( wp_unslash( $_POST['cj_eyebrow'] ) ) );
	}
	if ( isset( $_POST['cj_project_type'] ) ) {
		update_post_meta( $post_id, 'cj_project_type', sanitize_text_field( wp_unslash( $_POST['cj_project_type'] ) ) );
	}
}
add_action( 'save_post', 'cj_content_save_meta' );

function cj_content_seed_posts() {
	cj_content_register_post_types();
	$products = array(
		array( 'Shower Systems', 'Precision in every drop', 'Immersive rain showers and controls engineered for a refined daily experience.', 'cj-rain-shower.png' ),
		array( 'Basins & Faucets', 'Sculpted for daily rituals', 'Expressive forms and precise water delivery, composed as one seamless system.', 'cj-basin-faucet.png' ),
		array( 'Complete Bathrooms', 'One vision. Fully resolved.', 'Coordinated collections that turn every fixture into part of a complete space.', 'cj-hero-bathroom.png' ),
		array( 'Freestanding Bathtubs', 'A statement in stillness', 'Sculptural silhouettes designed for deep comfort and an unmistakable focal point.', 'cj-freestanding-bathtub.png' ),
		array( 'Smart Toilets', 'Comfort meets intelligence', 'Advanced hygiene, intuitive functions, and streamlined wall-hung proportions.', 'cj-smart-toilet.png' ),
		array( 'Vanities & Storage', 'Order, beautifully resolved', 'Integrated basins and considered storage that keep every detail effortlessly organized.', 'cj-vanity-storage.png' ),
		array( 'Spa Bathrooms', 'A private place to restore', 'Nature-led materials and calming water experiences for restorative private spaces.', 'cj-spa-bathroom.png' ),
		array( 'Hospitality Solutions', 'Built for memorable stays', 'Durable, elevated bathroom specifications for hotels, resorts, and residences.', 'cj-hotel-bathroom.png' ),
		array( 'Bathroom Accessories', 'The detail completes the room', 'Coordinated finishing pieces that bring clarity and consistency to the bathroom.', 'cj-bathroom-accessories.png' ),
	);
	if ( 0 === (int) wp_count_posts( 'cj_product' )->publish ) {
		foreach ( $products as $order => $product ) {
			$id = wp_insert_post( array( 'post_type' => 'cj_product', 'post_status' => 'publish', 'post_title' => $product[0], 'post_excerpt' => $product[2], 'menu_order' => $order ) );
			if ( ! is_wp_error( $id ) ) {
				update_post_meta( $id, 'cj_eyebrow', $product[1] );
				update_post_meta( $id, 'cj_fallback_image', $product[3] );
			}
		}
	}
	$projects = array(
		array( 'Luxury Hospitality', 'Hotels & Resorts', 'cj-hotel-bathroom.png' ),
		array( 'Private Sanctuary', 'Premium Residential', 'cj-spa-bathroom.png' ),
		array( 'Contemporary Living', 'Residential Development', 'cj-hero-bathroom.png' ),
		array( 'Curated Experience', 'Showroom & Retail', 'cj-showroom.png' ),
	);
	if ( 0 === (int) wp_count_posts( 'cj_project' )->publish ) {
		foreach ( $projects as $order => $project ) {
			$id = wp_insert_post( array( 'post_type' => 'cj_project', 'post_status' => 'publish', 'post_title' => $project[0], 'menu_order' => $order ) );
			if ( ! is_wp_error( $id ) ) {
				update_post_meta( $id, 'cj_project_type', $project[1] );
				update_post_meta( $id, 'cj_fallback_image', $project[2] );
			}
		}
	}
	flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'cj_content_seed_posts' );
register_deactivation_hook( __FILE__, 'flush_rewrite_rules' );

function cj_content_contact_submit() {
	if ( ! isset( $_POST['cj_contact_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['cj_contact_nonce'] ) ), 'cj_contact_submit' ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'error', wp_get_referer() ?: home_url( '/' ) ) );
		exit;
	}
	if ( ! empty( $_POST['website'] ) ) {
		wp_safe_redirect( home_url( '/' ) );
		exit;
	}
	$name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$company = isset( $_POST['company'] ) ? sanitize_text_field( wp_unslash( $_POST['company'] ) ) : '';
	$email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';
	$target  = sanitize_email( get_theme_mod( 'cj_email', get_option( 'admin_email' ) ) );
	if ( ! $name || ! is_email( $email ) || ! $message ) {
		$sent = false;
	} else {
		$subject = sprintf( '[CJ Trading Website] Inquiry from %s', $name );
		$body    = "Name: {$name}\nCompany: {$company}\nEmail: {$email}\n\nProject details:\n{$message}";
		$sent    = wp_mail( $target, $subject, $body, array( 'Reply-To: ' . $name . ' <' . $email . '>' ) );
	}
	$redirect = wp_get_referer() ?: home_url( '/contact/' );
	wp_safe_redirect( add_query_arg( 'contact', $sent ? 'success' : 'error', $redirect ) );
	exit;
}
add_action( 'admin_post_nopriv_cj_contact_submit', 'cj_content_contact_submit' );
add_action( 'admin_post_cj_contact_submit', 'cj_content_contact_submit' );

