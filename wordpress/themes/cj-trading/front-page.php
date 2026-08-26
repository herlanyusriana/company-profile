<?php
/** Front page — visual parity with the CJ Trading Next.js build. */
get_header();

$products = array();
if ( post_type_exists( 'cj_product' ) ) {
	$query = new WP_Query( array( 'post_type' => 'cj_product', 'post_status' => 'publish', 'posts_per_page' => -1, 'orderby' => array( 'menu_order' => 'ASC', 'date' => 'ASC' ) ) );
	foreach ( $query->posts as $product ) {
		$fallback = get_post_meta( $product->ID, 'cj_fallback_image', true ) ?: 'cj-hero-bathroom.png';
		$products[] = array(
			'title' => get_the_title( $product ),
			'label' => get_post_meta( $product->ID, 'cj_eyebrow', true ),
			'description' => get_the_excerpt( $product ),
			'image' => get_the_post_thumbnail_url( $product, 'full' ) ?: cj_asset_url( $fallback ),
			'url' => cj_page_url( 'contact' ),
		);
	}
	wp_reset_postdata();
}
if ( ! $products ) {
	$products = array(
		array( 'title' => 'Shower Systems', 'label' => 'Precision in every drop', 'description' => 'Immersive rain showers and controls engineered for a refined daily experience.', 'image' => cj_asset_url( 'cj-rain-shower.png' ), 'url' => cj_page_url( 'contact' ) ),
		array( 'title' => 'Basins & Faucets', 'label' => 'Sculpted for daily rituals', 'description' => 'Expressive forms and precise water delivery, composed as one seamless system.', 'image' => cj_asset_url( 'cj-basin-faucet.png' ), 'url' => cj_page_url( 'contact' ) ),
		array( 'title' => 'Complete Bathrooms', 'label' => 'One vision. Fully resolved.', 'description' => 'Coordinated collections that turn every fixture into part of a complete space.', 'image' => cj_asset_url( 'cj-hero-bathroom.png' ), 'url' => cj_page_url( 'contact' ) ),
		array( 'title' => 'Freestanding Bathtubs', 'label' => 'A statement in stillness', 'description' => 'Sculptural silhouettes designed for deep comfort and an unmistakable focal point.', 'image' => cj_asset_url( 'cj-freestanding-bathtub.png' ), 'url' => cj_page_url( 'contact' ) ),
	);
}

$highlights = array(
	array( 'Sanctuary, reimagined.', cj_image_url( 'cj_highlight_one', 'cj-spa-bathroom.png' ), '#collections' ),
	array( 'Hospitality without compromise.', cj_image_url( 'cj_highlight_two', 'cj-hotel-bathroom.png' ), cj_page_url( 'project-references' ) ),
	array( 'Experience CJ Trading.', cj_image_url( 'cj_highlight_three', 'cj-showroom.png' ), cj_page_url( 'contact' ) ),
);
$discoveries = array(
	array( 'Our expertise', 'About CJ Trading', cj_image_url( 'cj_discover_one', 'cj-spa-bathroom.png' ), cj_page_url( 'about' ) ),
	array( 'Designed to perform', 'Project solutions', cj_image_url( 'cj_discover_two', 'cj-hotel-bathroom.png' ), cj_page_url( 'project-references' ) ),
	array( 'Built together', 'Partner with us', cj_image_url( 'cj_discover_three', 'cj-vanity-storage.png' ), cj_page_url( 'contact' ) ),
);
?>
<main id="top" class="overflow-hidden bg-white text-zinc-950">
  <section class="relative min-h-[760px] h-[100svh] bg-zinc-950 text-white">
    <img src="<?php echo esc_url( cj_image_url( 'cj_hero_image', 'cj-hero-bathroom.png' ) ); ?>" alt="<?php esc_attr_e( 'Contemporary premium bathroom', 'cj-trading' ); ?>" class="cj-cover object-[62%_center]">
    <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/5"></div><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35"></div>
    <?php cj_site_header(); ?>
    <div class="relative z-10 flex h-full max-w-[1720px] items-end px-6 pb-14 sm:px-10 sm:pb-20 lg:px-24 lg:pb-24">
      <div class="max-w-4xl"><p class="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/70"><?php echo esc_html( get_theme_mod( 'cj_hero_kicker', 'PT CJ Trading · Bathroom Solutions' ) ); ?></p>
        <h1 class="max-w-3xl text-[clamp(3.7rem,8vw,8.8rem)] font-light leading-[0.84] tracking-[-0.065em]"><?php echo nl2br( esc_html( get_theme_mod( 'cj_hero_title', "Bathroom.\nElevated." ) ) ); ?></h1>
        <div class="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center"><a href="#collections" class="group inline-flex items-center gap-4 rounded-md bg-white px-6 py-4 text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-200"><?php esc_html_e( 'Discover more', 'cj-trading' ); ?><?php echo cj_arrow_icon( 'size-4 transition-transform duration-300 group-hover:translate-x-1' ); // phpcs:ignore ?></a><p class="max-w-sm text-sm leading-6 text-white/70"><?php echo esc_html( get_theme_mod( 'cj_hero_description', 'Premium fixtures and complete bathroom solutions, curated for modern Indonesian spaces.' ) ); ?></p></div>
      </div>
    </div>
    <div class="absolute bottom-8 right-8 z-20 hidden items-center gap-3 text-xs text-white/60 lg:flex"><span class="h-px w-12 bg-white/40"></span><?php esc_html_e( 'Scroll to explore', 'cj-trading' ); ?></div>
  </section>

  <section aria-label="CJ Trading highlights" class="bg-white px-5 py-24 text-zinc-950 sm:px-8 lg:px-14 lg:py-28"><div class="mx-auto grid max-w-[1120px] gap-5 md:grid-cols-3">
    <?php foreach ( $highlights as $item ) : ?><a href="<?php echo esc_url( $item[2] ); ?>" class="group relative h-[360px] overflow-hidden rounded-[1.6rem] bg-zinc-900 text-white sm:h-[400px] md:h-[330px] lg:h-[360px]"><img src="<?php echo esc_url( $item[1] ); ?>" alt="<?php echo esc_attr( $item[0] ); ?>" class="cj-cover transition duration-700 group-hover:scale-[1.035]"><div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent"></div><div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7"><h2 class="max-w-[15rem] text-xl font-medium leading-tight tracking-[-0.035em] lg:text-2xl"><?php echo esc_html( $item[0] ); ?></h2><span class="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition group-hover:bg-white group-hover:text-black"><?php echo cj_arrow_icon(); // phpcs:ignore ?></span></div></a><?php endforeach; ?>
  </div></section>

  <section id="collections" data-catalog-theme class="catalog-theme px-5 py-24 sm:px-8 lg:px-14 lg:py-32"><div class="mx-auto max-w-[1440px]">
    <div class="mb-14 flex flex-col justify-between gap-9 lg:mb-20 lg:flex-row lg:items-end"><div><p class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] opacity-45"><?php echo esc_html( get_theme_mod( 'cj_catalog_kicker', 'Explore our collections' ) ); ?></p><h2 data-catalog-reveal class="catalog-reveal max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.9] tracking-[-0.06em]"><?php echo esc_html( get_theme_mod( 'cj_catalog_title', 'Your bathroom journey starts here.' ) ); ?></h2></div><p class="max-w-sm text-sm leading-6 opacity-55"><?php echo esc_html( get_theme_mod( 'cj_catalog_description', 'Discover complete product families shaped around performance, material, and modern living.' ) ); ?></p></div>
    <div class="space-y-5">
      <?php foreach ( array_chunk( $products, 2 ) as $row ) : ?><div class="catalog-row"><?php foreach ( $row as $item ) : ?>
        <a href="<?php echo esc_url( $item['url'] ); ?>" class="catalog-card group relative h-[620px] overflow-hidden rounded-[1.75rem] bg-zinc-900 text-white sm:h-[700px] lg:h-[720px]"><img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>" class="cj-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/5 to-black/35"></div><div class="absolute inset-x-0 top-0 flex justify-center p-8 sm:p-10"><h3 class="text-center text-3xl font-semibold tracking-[-0.045em] drop-shadow-lg sm:text-4xl"><?php echo esc_html( $item['title'] ); ?></h3></div><div class="absolute inset-x-0 bottom-0 p-7 sm:p-10"><span class="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs backdrop-blur-md"><?php echo esc_html( $item['label'] ); ?></span><div class="flex items-end justify-between gap-6"><p class="max-w-xl text-base leading-6 text-white/90 sm:text-lg sm:leading-7"><?php echo esc_html( $item['description'] ); ?></p><span class="grid size-12 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition duration-300 group-hover:bg-white group-hover:text-black"><?php echo cj_arrow_icon(); // phpcs:ignore ?></span></div></div></a>
      <?php endforeach; ?></div><?php endforeach; ?>
    </div>
  </div></section>

  <section class="cj-spec-section border-t border-zinc-200 bg-white px-5 py-24 text-zinc-950 sm:px-8 lg:px-14 lg:py-32"><div class="mx-auto max-w-[1440px]"><p class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">More than fixtures</p><h2 class="mb-16 max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.9] tracking-[-0.06em]">From selection to specification.</h2><div class="grid gap-6 lg:grid-cols-2">
    <?php $specs = array( array( cj_image_url( 'cj_spec_one', 'cj-hero-bathroom.png' ), 'Signature collection', 'Quiet luxury, made tangible.', 'Statement pieces selected to bring calm, clarity, and lasting character into your bathroom.' ), array( cj_image_url( 'cj_spec_two', 'cj-showroom.png' ), 'Project partnership', 'From specification to delivery.', 'One dependable partner for developers, architects, designers, and hospitality projects.' ) ); foreach ( $specs as $spec ) : ?><article class="group relative min-h-[650px] overflow-hidden rounded-[2rem] bg-zinc-900 text-white"><img src="<?php echo esc_url( $spec[0] ); ?>" alt="<?php echo esc_attr( $spec[2] ); ?>" class="cj-cover transition duration-700 group-hover:scale-[1.025]"><div class="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25"></div><div class="absolute inset-x-0 bottom-0 p-7 sm:p-10"><span class="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs backdrop-blur"><?php echo esc_html( $spec[1] ); ?></span><div class="flex items-end justify-between gap-6"><div><h3 class="text-3xl font-medium tracking-[-0.04em]"><?php echo esc_html( $spec[2] ); ?></h3><p class="mt-3 max-w-lg text-sm leading-6 text-white/65"><?php echo esc_html( $spec[3] ); ?></p></div><span class="grid size-12 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur"><?php echo cj_arrow_icon(); // phpcs:ignore ?></span></div></div></article><?php endforeach; ?>
  </div></div></section>

  <section class="cj-showroom-section px-5 py-24 sm:px-8 lg:px-14 lg:py-32"><div class="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2rem] bg-black text-white lg:grid-cols-[0.9fr_1.2fr]"><div class="flex flex-col justify-center p-9 sm:p-14 lg:p-20"><p class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Experience the difference</p><h2 class="text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-6xl">See, feel, and specify with confidence.</h2><p class="mt-7 max-w-lg text-base leading-7 text-white/65">Visit our showroom and explore finishes, proportions, and complete bathroom combinations with our product specialists.</p><div class="mt-9"><a href="<?php echo esc_url( cj_page_url( 'contact' ) ); ?>" class="group inline-flex items-center gap-4 rounded-md bg-white px-6 py-4 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200">Plan your visit<?php echo cj_arrow_icon( 'size-4' ); // phpcs:ignore ?></a></div></div><div class="relative min-h-[480px] lg:min-h-[650px]"><img src="<?php echo esc_url( cj_image_url( 'cj_showroom_image', 'cj-showroom.png' ) ); ?>" alt="CJ Trading showroom" class="cj-cover"></div></div></section>

  <section class="px-5 pb-28 sm:px-8 lg:px-14 lg:pb-36"><div class="mx-auto max-w-[1180px]"><h2 class="mb-14 text-center text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Discover CJ Trading</h2><div class="grid gap-6 md:grid-cols-3"><?php foreach ( $discoveries as $item ) : ?><a href="<?php echo esc_url( $item[3] ); ?>" class="group relative h-[470px] overflow-hidden rounded-[1.75rem] bg-zinc-900 text-white"><img src="<?php echo esc_url( $item[2] ); ?>" alt="<?php echo esc_attr( $item[0] ); ?>" class="cj-cover transition duration-700 group-hover:scale-[1.04]"><div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div><div class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7"><div><p class="mb-2 text-xs uppercase tracking-[0.18em] text-white/60"><?php echo esc_html( $item[1] ); ?></p><h3 class="text-2xl font-medium tracking-[-0.035em]"><?php echo esc_html( $item[0] ); ?></h3></div><span class="grid size-11 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur"><?php echo cj_arrow_icon(); // phpcs:ignore ?></span></div></a><?php endforeach; ?></div></div></section>

  <section id="about" class="border-y border-zinc-200 px-5 py-24 sm:px-8 lg:px-14 lg:py-32"><div class="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2 lg:gap-24"><div><p class="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500"><?php echo esc_html( get_theme_mod( 'cj_company_name', 'PT CJ Trading' ) ); ?></p><h2 class="text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl"><?php echo nl2br( esc_html( get_theme_mod( 'cj_about_title', 'Better spaces begin with better details.' ) ) ); ?></h2></div><div class="flex flex-col justify-end"><p class="max-w-2xl text-xl leading-8 text-zinc-600"><?php echo esc_html( get_theme_mod( 'cj_about_copy', 'We connect thoughtful design with dependable products—helping homes, hotels, and commercial projects create bathrooms that look considered and perform beautifully.' ) ); ?></p><div class="mt-12 grid grid-cols-3 gap-5 border-t border-zinc-200 pt-8"><div><strong class="block text-3xl font-medium tracking-[-0.04em]">End-to-end</strong><span class="mt-2 block text-xs text-zinc-500">Project support</span></div><div><strong class="block text-3xl font-medium tracking-[-0.04em]">Curated</strong><span class="mt-2 block text-xs text-zinc-500">Product portfolio</span></div><div><strong class="block text-3xl font-medium tracking-[-0.04em]">Indonesia</strong><span class="mt-2 block text-xs text-zinc-500">Market expertise</span></div></div></div></div></section>

  <section id="contact" class="bg-[#050607] px-5 py-24 text-white sm:px-8 lg:px-14 lg:py-32"><div class="mx-auto max-w-[1440px]"><p class="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-white/45">Start a conversation</p><div class="flex flex-col justify-between gap-12 lg:flex-row lg:items-end"><h2 class="max-w-5xl text-[clamp(3.5rem,7vw,7.5rem)] font-light leading-[0.9] tracking-[-0.06em]"><?php echo esc_html( get_theme_mod( 'cj_contact_heading', "Let's shape your next bathroom." ) ); ?></h2><a href="mailto:<?php echo esc_attr( get_theme_mod( 'cj_email', 'hello@cjtrading.co.id' ) ); ?>" class="group inline-flex shrink-0 items-center gap-5 text-lg"><?php echo esc_html( get_theme_mod( 'cj_email', 'hello@cjtrading.co.id' ) ); ?><span class="grid size-14 place-items-center rounded-full bg-white text-black transition group-hover:translate-x-1"><?php echo cj_arrow_icon(); // phpcs:ignore ?></span></a></div><div class="mt-28 border-t border-white/15 pt-10"><?php cj_site_footer( true ); ?></div></div></section>
  <a href="<?php echo esc_url( cj_page_url( 'contact' ) ); ?>" class="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-medium text-black shadow-2xl transition hover:-translate-y-1 sm:flex"><span class="grid size-8 place-items-center rounded-full bg-black text-xs text-white">CJ</span>Talk to us</a>
</main>
<?php get_footer(); ?>
