<?php
/** About page. */
get_header();
the_post();
$hero = get_the_post_thumbnail_url( get_the_ID(), 'full' ) ?: cj_asset_url( 'cj-showroom.png' );
$content = trim( wp_strip_all_tags( get_the_content() ) ) ? apply_filters( 'the_content', get_the_content() ) : '<p class="text-xl leading-8 text-zinc-600">PT CJ Trading delivers curated bathroom products and dependable project support for residential, hospitality, and commercial spaces across Indonesia.</p><p class="mt-6 leading-7 text-zinc-500">We work alongside architects, designers, developers, and homeowners—from product selection and technical coordination through delivery.</p>';
?>
<main class="bg-white text-zinc-950">
  <section class="relative flex min-h-[760px] items-end overflow-hidden bg-black px-6 pb-20 text-white sm:px-10 lg:px-20 lg:pb-24"><?php cj_site_header(); ?><img src="<?php echo esc_url( $hero ); ?>" alt="<?php echo esc_attr( get_the_title() ); ?>" class="cj-cover"><div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-black/10"></div><div class="relative z-10 max-w-5xl"><p class="mb-6 text-xs uppercase tracking-[0.28em] text-white/60">About <?php echo esc_html( get_theme_mod( 'cj_company_name', 'PT CJ Trading' ) ); ?></p><h1 class="text-[clamp(4rem,9vw,9rem)] font-light leading-[0.85] tracking-[-0.065em]">Built around<br>better living.</h1></div></section>
  <section class="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"><div class="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-2 lg:gap-24"><h2 class="text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">The details define the experience.</h2><div class="cj-content"><?php echo wp_kses_post( $content ); ?></div></div></section>
  <section class="grid bg-[#f1f0ed] lg:grid-cols-2"><div class="relative min-h-[560px]"><img src="<?php echo esc_url( cj_asset_url( 'cj-spa-bathroom.png' ) ); ?>" alt="Premium spa bathroom" class="cj-cover"></div><div class="flex flex-col justify-center p-10 sm:p-16 lg:p-24"><p class="mb-5 text-xs uppercase tracking-[0.24em] text-zinc-500">Our approach</p><h2 class="text-4xl font-medium tracking-[-0.05em] sm:text-6xl">Curated. Coordinated. Dependable.</h2><p class="mt-7 max-w-xl leading-7 text-zinc-600">Every collection is considered for aesthetics, compatibility, performance, and long-term service—so beautiful ideas can become reliable spaces.</p></div></section>
  <?php cj_site_footer(); ?>
</main>
<?php get_footer(); ?>

