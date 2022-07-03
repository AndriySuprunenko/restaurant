// Imports
import Button from '../../elements/button/Button';
import styles from './menu.module.scss';
import { ButtonTypes } from '../../types/Button';
import Cart_2 from '../../assets/images/cart-2.png';
import Menu_1 from '../../assets/images/menu-1.png';
import Menu_2 from '../../assets/images/menu-2.png';
import Menu_3 from '../../assets/images/menu-3.png';
import Menu_4 from '../../assets/images/menu-4.png';
import Menu_5 from '../../assets/images/menu-5.png';
import Menu_6 from '../../assets/images/menu-6.png';
import Menu_7 from '../../assets/images/menu-7.png';
import Menu_8 from '../../assets/images/menu-8.png';
import Menu_9 from '../../assets/images/menu-9.png';
import Menu_10 from '../../assets/images/menu-10.png';

// Menu
const Menu = () => {
  return (
    <section className={styles.menu} id='sec-3'>
      <div className={styles.menu_container}>
        <div className={styles.special_dishes}>
          <div className={styles.special_dishes__title}>MENU</div>
          <div className={styles.special_dishes__subtitle}>
            Try Our Special Dishes
          </div>
          <div className={styles.special_dishes__text}>
            Every time you perfectly dine with us, it should happy for great
            inspired food in an environment designed with individual touches
            unique to the local area.
          </div>
          <div className={styles.special_dishes__img}>
            <img src={Cart_2} alt="cart-2" />
          </div>
          <div className={styles.special_dishes__button}>
            <Button text="See all dishes" type={ButtonTypes.WHITE_GOLD} />
          </div>
        </div>

        {/* Menu Block */}
        <div className={styles.menu_block}>
          <div className={styles.menu_block__title}>Starters</div>
          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_1} alt="menu1" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Raw Scallops from Erquy</div>
              <div className={styles.menu_block__text_text}>Shuck the scallop to that used for oysters</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$40</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_2} alt="menu2" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Spring Roll</div>
              <div className={styles.menu_block__text_text}>Add oil to a hot pan spring onion whites</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$20</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_3} alt="menu3" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>French Onion Soup</div>
              <div className={styles.menu_block__text_text}>Wheat flour, apple cider vinegar, bread</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$25</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_4} alt="menu4" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Tomato Bruschetta</div>
              <div className={styles.menu_block__text_text}>Bread, olive oil, garlic, black pepper</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$30</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__title}>Main Dish</div>
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_5} alt="menu5" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Grilled Salmon with Dill Sauce</div>
              <div className={styles.menu_block__text_text}>Brown sugar, salmon fillet, Dijon mustard</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$40</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_6} alt="menu6" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Roast Beef with Vegetable</div>
              <div className={styles.menu_block__text_text}>Green beans, rib eye, olive oil, beef</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$20</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_7} alt="menu7" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Marrkesh Vegetetarian Curruy</div>
              <div className={styles.menu_block__text_text}>Sweet potato, eggplant, garbanzo bean</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$25</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_8} alt="menu8" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Spicy Vegan Potato Curry</div>
              <div className={styles.menu_block__text_text}>Coconut milk, beans, potatoes, curry powder</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$35</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__title}>Dessert</div>
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_9} alt="menu9" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Apple Pie with Cream</div>
              <div className={styles.menu_block__text_text}>Whipping cream, egg white, cinnamon</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$15</div>
          </div>

          {/* String content */}
          <div className={styles.menu_block__string}>
            <div className={styles.menu_block__image}><img src={Menu_10} alt="menu10" /></div>
            <div className={styles.menu_block__text}>
              <div className={styles.menu_block__text_title}>Lemon Meringue Pie</div>
              <div className={styles.menu_block__text_text}>Frozen pie crust, meringue, lemon</div>
            </div>
            <div className={styles.menu_block__line}></div>
            <div className={styles.menu_block__price}>$30</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Menu;
