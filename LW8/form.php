<section class="form">
   <img src="/images/welcome.svg" class="form__image" alt="">
   <h2 class="form__title">Записаться на курс</h2>
   <form method="POST" action="/form_handler.php" class="activity">
      <input type="text" name="name" placeholder="Ваше имя" class="activity__elem">
      <input type="email" name="email" placeholder="Email" class="activity__elem">
      <select name="profession" id="" placeholder="Деятельность" class="activity__elem activity__choose">
         <option value="" selected disabled hidden>Деятельность</option>
         <option class="activity__choose_elem">Программист</option>
         <option class="activity__choose_elem">Дизайнер</option>
         <option class="activity__choose_elem">Маркетолог</option>
      </select>
      <div class="checkbox">
         <input class="agree__btn" type="checkbox" name="agree" id="agree">
         <label class="agree" for="agree">Согласен получать информационные материалы о старте курса</label>
      </div>
      <input class="form__button"  type="submit" name="send" value="Записаться на курс">
   </form>
</section>