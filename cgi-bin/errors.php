<?php  if (count($errors) > 0) : ?>
  <div class="error">
  	<?php foreach ($errors as $error) : ?>
  	  <p class = 'txt-white'><?php echo $error; ?></p>
  	<?php endforeach ?>
  </div>
<?php  endif ?>