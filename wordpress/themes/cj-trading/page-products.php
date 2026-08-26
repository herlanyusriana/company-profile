<?php
/** Products page. */
get_header();
the_post();
$hero = get_the_post_thumbnail_url( get_the_ID(), 'full' ) ?: cj_asset_url( 'cj-hero-bathroom.png' );
$query = post_type_exists( 'cj_product' ) ? new WP_Query( array( 'post_type' => 'cj_product', 'post_status' => 'publish', 'posts_per_page' => -1, 'orderby' => array( 'menu_order' => 'ASC', 'date' => 'ASC' ) ) ) : null;
?>
<main class="bg-white text-zinc-950">
  <section class="relative flex min-h-[620px] items-end overflow-hidden bg-black px-6 pb-20 text-white sm:px-10 lg:px-20"><?php cj_site_header(); ?><img src="<?php echo esc_url( $hero ); ?>" alt="CJ Trading product collections" class="cj-cover object-[65%_center]"><div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent"></div><div class="relative z-10"><p class="mb-5 text-xs uppercase tracking-[0.28em] text-white/60">Product portfolio</p><h1 class="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]">Designed for<br>daily rituals.</h1></div></section>
  <section class="px-5 py-24 sm:px-8 lg:px-14 lg:py-32"><div class="mx-auto max-w-[1400px]"><div class="mb-14 max-w-2xl"><h2 class="text-5xl font-medium tracking-[-0.05em] sm:text-7xl"><?php echo esc_html( get_the_title() ); ?>.</h2><div class="cj-content mt-6 text-lg leading-7 text-zinc-600"><?php if ( trim( wp_strip_all_tags( get_the_content() ) ) ) { the_content(); } else { echo '<p>A coordinated portfolio for complete bathroom specifications.</p>'; } ?></div></div><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <?php if ( $query && $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); $fallback = get_post_meta( get_the_ID(), 'cj_fallback_image', true ) ?: 'cj-hero-bathroom.png'; $image = get_the_post_thumbnail_url( get_the_ID(), 'full' ) ?: cj_asset_url( $fallback ); ?><article class="overflow-hidden rounded-[1.75rem] bg-[#f2f1ee]"><div class="relative h-[460px]"><img src="<?php echo esc_url( $image ); ?>" alt="<?php the_title_attribute(); ?>" class="cj-cover"></div><div class="p-7"><h2 class="text-2xl font-medium tracking-[-0.04em]"><?php the_title(); ?></h2><p class="mt-3 text-sm leading-6 text-zinc-600"><?php echo esc_html( get_the_excerpt() ); ?></p></div></article><?php endwhile; wp_reset_postdata(); endif; ?>
  </div></div></section>
  <?php cj_site_footer(); ?>
</main>
<?php get_footer(); ?>

