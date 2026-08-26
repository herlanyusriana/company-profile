<?php
/** Contact page. */
get_header();
the_post();
$contact_status = isset( $_GET['contact'] ) ? sanitize_key( wp_unslash( $_GET['contact'] ) ) : '';
?>
<main class="bg-white text-zinc-950">
  <section class="relative flex min-h-[560px] items-end bg-[#050607] px-6 pb-20 text-white sm:px-10 lg:px-20"><?php cj_site_header(); ?><div><p class="mb-5 text-xs uppercase tracking-[0.28em] text-white/50">Contact us</p><h1 class="text-[clamp(4rem,9vw,8rem)] font-light leading-[0.86] tracking-[-0.065em]">Let's create<br>something considered.</h1></div></section>
  <section class="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"><div class="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.8fr_1.2fr]"><div><h2 class="text-4xl font-medium tracking-[-0.05em]">Talk to our team.</h2><div class="mt-10 space-y-7 text-zinc-600"><div><p class="text-xs uppercase tracking-[0.2em] text-zinc-400">Email</p><a href="mailto:<?php echo esc_attr( get_theme_mod( 'cj_email', 'hello@cjtrading.co.id' ) ); ?>" class="mt-2 block text-xl text-black"><?php echo esc_html( get_theme_mod( 'cj_email', 'hello@cjtrading.co.id' ) ); ?></a></div><div><p class="text-xs uppercase tracking-[0.2em] text-zinc-400">Phone</p><p class="mt-2 text-xl text-black"><?php echo esc_html( get_theme_mod( 'cj_phone', '+62 21 0000 0000' ) ); ?></p></div><div><p class="text-xs uppercase tracking-[0.2em] text-zinc-400">Location</p><p class="mt-2 text-xl text-black"><?php echo esc_html( get_theme_mod( 'cj_location', 'Jakarta, Indonesia' ) ); ?></p></div></div></div><div>
    <?php if ( 'success' === $contact_status ) : ?><div class="cj-contact-notice is-success">Thank you. Your inquiry has been sent.</div><?php elseif ( 'error' === $contact_status ) : ?><div class="cj-contact-notice is-error">The message could not be sent. Please verify the form or email us directly.</div><?php endif; ?>
    <form class="grid gap-5" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post"><input type="hidden" name="action" value="cj_contact_submit"><?php wp_nonce_field( 'cj_contact_submit', 'cj_contact_nonce' ); ?><label class="hidden" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label><div class="grid gap-5 sm:grid-cols-2"><label class="text-sm">Name<input required name="name" class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black"></label><label class="text-sm">Company<input name="company" class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black"></label></div><label class="text-sm">Email<input required name="email" type="email" class="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black"></label><label class="text-sm">Project details<textarea required name="message" rows="6" class="mt-2 w-full resize-none rounded-xl border border-zinc-300 px-4 py-4 outline-none focus:border-black"></textarea></label><button type="submit" class="justify-self-start rounded-md bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-zinc-700">Send inquiry →</button></form>
  </div></div></section>
  <?php cj_site_footer(); ?>
</main>
<?php get_footer(); ?>

