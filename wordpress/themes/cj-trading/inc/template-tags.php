<?php
/** Template helpers for CJ Trading. */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cj_asset_url( $filename ) {
	return CJ_TRADING_URI . '/assets/images/' . ltrim( $filename, '/' );
}

function cj_image_url( $setting, $fallback ) {
	$attachment_id = absint( get_theme_mod( $setting, 0 ) );
	$url           = $attachment_id ? wp_get_attachment_image_url( $attachment_id, 'full' ) : '';
	return $url ? $url : cj_asset_url( $fallback );
}

function cj_page_url( $slug ) {
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page ) : home_url( '/' . trim( $slug, '/' ) . '/' );
}

function cj_arrow_icon( $class = 'size-5' ) {
	return '<svg class="' . esc_attr( $class ) . '" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>';
}

function cj_brand( $light = false, $anchor = false ) {
	$href = $anchor ? '#top' : home_url( '/' );
	if ( has_custom_logo() ) {
		$logo_id = get_theme_mod( 'custom_logo' );
		$logo    = wp_get_attachment_image_url( $logo_id, 'full' );
		return '<a href="' . esc_url( $href ) . '" class="inline-flex items-center" aria-label="' . esc_attr( get_bloginfo( 'name' ) ) . '"><img src="' . esc_url( $logo ) . '" alt="' . esc_attr( get_bloginfo( 'name' ) ) . '" class="max-h-12 w-auto"></a>';
	}
	$name    = get_theme_mod( 'cj_company_name', 'PT CJ Trading' );
	$tagline = get_theme_mod( 'cj_tagline', 'Bathroom Living' );
	return '<a href="' . esc_url( $href ) . '" class="inline-flex items-center gap-3 ' . ( $light ? 'text-white' : 'text-black' ) . '" aria-label="' . esc_attr( $name ) . '"><span class="grid size-9 place-items-center rounded-full border border-current/40 text-sm font-semibold tracking-[-0.08em]">CJ</span><span class="text-[0.78rem] font-semibold uppercase leading-[0.85] tracking-[0.26em]">Trading<br><span class="text-[0.58rem] font-normal tracking-[0.19em] opacity-70">' . esc_html( $tagline ) . '</span></span></a>';
}

function cj_navigation_items() {
	$locations = get_nav_menu_locations();
	if ( isset( $locations['primary'] ) ) {
		$items = wp_get_nav_menu_items( $locations['primary'] );
		if ( $items ) {
			return array_map( static function ( $item ) { return array( $item->title, $item->url ); }, $items );
		}
	}
	return array(
		array( 'About Us', cj_page_url( 'about' ) ),
		array( 'Products', cj_page_url( 'products' ) ),
		array( 'Project References', cj_page_url( 'project-references' ) ),
		array( 'Contact Us', cj_page_url( 'contact' ) ),
	);
}

function cj_site_header() {
	?>
	<header class="cj-site-header absolute inset-x-0 top-0 z-40 flex h-24 items-center justify-between px-6 text-white sm:px-10 lg:px-16">
		<button type="button" data-cj-menu-open class="group flex items-center gap-3 py-2 text-sm font-medium" aria-label="<?php esc_attr_e( 'Open navigation', 'cj-trading' ); ?>">
			<span class="flex w-6 flex-col gap-[5px]"><span class="h-px w-full bg-white"></span><span class="h-px w-4 bg-white transition group-hover:w-full"></span></span>Menu
		</button>
		<div class="absolute left-1/2 -translate-x-1/2"><?php echo cj_brand( true ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
		<a href="<?php echo esc_url( cj_page_url( 'contact' ) ); ?>" class="hidden rounded-full border border-white/35 px-5 py-2.5 text-sm backdrop-blur transition hover:bg-white hover:text-black sm:block"><?php esc_html_e( 'Contact us', 'cj-trading' ); ?></a>
	</header>
	<div data-cj-menu class="cj-menu-overlay fixed inset-0 z-50 transition" aria-hidden="true">
		<button type="button" data-cj-menu-close class="cj-menu-backdrop absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity" aria-label="<?php esc_attr_e( 'Close navigation', 'cj-trading' ); ?>"></button>
		<nav class="cj-menu-panel absolute inset-y-0 left-0 flex w-full max-w-xl flex-col bg-[#f5f5f2] p-7 text-black transition-transform duration-500 sm:p-12">
			<div class="flex items-center justify-between"><?php echo cj_brand(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><button type="button" data-cj-menu-close class="grid size-11 place-items-center rounded-full border border-black/15 text-2xl" aria-label="<?php esc_attr_e( 'Close navigation', 'cj-trading' ); ?>">×</button></div>
			<div class="my-auto flex flex-col gap-2">
				<?php foreach ( cj_navigation_items() as $item ) : ?>
					<a href="<?php echo esc_url( $item[1] ); ?>" class="group flex items-center justify-between border-b border-black/10 py-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl"><?php echo esc_html( $item[0] ); ?><span class="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"><?php echo cj_arrow_icon( 'size-6' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span></a>
				<?php endforeach; ?>
			</div>
			<p class="text-xs uppercase tracking-[0.2em] text-zinc-500"><?php echo esc_html( get_theme_mod( 'cj_company_name', 'PT CJ Trading' ) . ' · ' . get_theme_mod( 'cj_location', 'Jakarta, Indonesia' ) ); ?></p>
		</nav>
	</div>
	<?php
}

function cj_site_footer( $embedded = false ) {
	$footer_class = $embedded ? '' : 'bg-[#050607] px-6 py-16 text-white sm:px-10 lg:px-16';
	$inner_class  = $embedded ? '' : 'mx-auto max-w-[1440px]';
	?>
	<footer class="<?php echo esc_attr( $footer_class ); ?>">
		<div class="<?php echo esc_attr( $inner_class ); ?>">
			<div class="grid gap-12 md:grid-cols-4">
				<div class="md:col-span-2"><?php echo cj_brand( true ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><p class="mt-6 max-w-sm text-sm leading-6 text-white/45"><?php echo esc_html( get_theme_mod( 'cj_footer_copy', 'Premium bathroom products and project solutions for considered spaces across Indonesia.' ) ); ?></p></div>
				<div><p class="mb-4 text-xs uppercase tracking-[0.18em] text-white/40"><?php esc_html_e( 'Pages', 'cj-trading' ); ?></p><div class="flex flex-col gap-3 text-sm"><?php foreach ( array_slice( cj_navigation_items(), 0, 3 ) as $item ) : ?><a href="<?php echo esc_url( $item[1] ); ?>"><?php echo esc_html( $item[0] ); ?></a><?php endforeach; ?></div></div>
				<div><p class="mb-4 text-xs uppercase tracking-[0.18em] text-white/40"><?php esc_html_e( 'Contact', 'cj-trading' ); ?></p><div class="flex flex-col gap-3 text-sm text-white/70"><span><?php echo esc_html( get_theme_mod( 'cj_location', 'Jakarta, Indonesia' ) ); ?></span><span><?php echo esc_html( get_theme_mod( 'cj_phone', '+62 21 0000 0000' ) ); ?></span><a href="mailto:<?php echo esc_attr( get_theme_mod( 'cj_email', 'hello@cjtrading.co.id' ) ); ?>"><?php echo esc_html( get_theme_mod( 'cj_email', 'hello@cjtrading.co.id' ) ); ?></a></div></div>
			</div>
			<div class="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row"><span>© <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php echo esc_html( get_theme_mod( 'cj_company_name', 'PT CJ Trading' ) ); ?>. All rights reserved.</span><a href="<?php echo esc_url( cj_page_url( 'contact' ) ); ?>" class="text-white/70"><?php esc_html_e( 'Start a conversation →', 'cj-trading' ); ?></a></div>
		</div>
	</footer>
	<?php
}
