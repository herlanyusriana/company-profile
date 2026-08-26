<?php
get_header();
?>
<main class="min-h-screen bg-white px-6 py-32 text-zinc-950">
  <div class="mx-auto max-w-[900px]">
    <h1 class="text-5xl font-medium tracking-[-0.05em]"><?php bloginfo( 'name' ); ?></h1>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <article <?php post_class( 'mt-12 border-t border-zinc-200 pt-8' ); ?>>
        <h2 class="text-3xl font-medium"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <div class="cj-content mt-5 text-zinc-600"><?php the_content(); ?></div>
      </article>
    <?php endwhile; endif; ?>
  </div>
</main>
<?php get_footer(); ?>

