<?php
/** Project References page. */
get_header();
the_post();
$hero = get_the_post_thumbnail_url( get_the_ID(), 'full' ) ?: cj_asset_url( 'cj-hotel-bathroom.png' );
$query = post_type_exists( 'cj_project' ) ? new WP_Query( array( 'post_type' => 'cj_project', 'post_status' => 'publish', 'posts_per_page' => -1, 'orderby' => array( 'menu_order' => 'ASC', 'date' => 'ASC' ) ) ) : null;
?>
<main class="bg-[#050607] text-white">
  <section class="relative flex min-h-[680px] items-end overflow-hidden px-6 pb-20 sm:px-10 lg:px-20"><?php cj_site_header(); ?><img src="<?php echo esc_url( $hero ); ?>" alt="Hospitality bathroom reference" class="cj-cover"><div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10"></div><div class="relative z-10 max-w-5xl"><p class="mb-5 text-xs uppercase tracking-[0.28em] text-white/60">Project references</p><h1 class="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]">Spaces brought<br>to life.</h1></div></section>
  <section class="px-5 py-24 sm:px-8 lg:px-14 lg:py-32"><div class="mx-auto max-w-[1400px]"><div class="grid gap-6 lg:grid-cols-2">
    <?php if ( $query && $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); $fallback = get_post_meta( get_the_ID(), 'cj_fallback_image', true ) ?: 'cj-showroom.png'; $image = get_the_post_thumbnail_url( get_the_ID(), 'full' ) ?: cj_asset_url( $fallback ); ?><article class="group relative min-h-[650px] overflow-hidden rounded-[2rem]"><img src="<?php echo esc_url( $image ); ?>" alt="<?php the_title_attribute(); ?>" class="cj-cover transition duration-700 group-hover:scale-[1.025]"><div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10"></div><div class="absolute inset-x-0 bottom-0 p-8 sm:p-10"><p class="mb-3 text-xs uppercase tracking-[0.2em] text-white/55"><?php echo esc_html( get_post_meta( get_the_ID(), 'cj_project_type', true ) ); ?></p><h2 class="text-3xl font-medium tracking-[-0.045em] sm:text-4xl"><?php the_title(); ?></h2></div></article><?php endwhile; wp_reset_postdata(); endif; ?>
  </div></div></section>
  <?php cj_site_footer(); ?>
</main>
<?php get_footer(); ?>

