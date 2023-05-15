import React from "react";
import logo from "./svg/logo.png";
import a from "./main.module.css";
import arrow from "./svg/downarrow.svg";
import profile from "./svg/profile.png";
import heart from "./svg/heart.png";
import bag from "./svg/shopping-bag.png";
import { ReactComponent as SearchPic } from "./svg/search.svg";
const Navbar = () => {
  return (
    <div>
      <nav id={a.navbar}>
        <div id={a.logo_div}>
          <img src={logo} alt="/" id={a.logo_img} />
        </div>
        <div id={a.menu_div}>
          <ul id={a.top_ul}>
            <li id={a.li1}>
              Cakes <img src={arrow} alt="" />
              <div id={a.megamenu_cakes}>
                <div id={a.byflavour_div}>
                  <h1>By Flavour</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/chocolate-cakes">Chocolate Cakes</a>
                  </div>
                  <div>
                    <a href="/black-forest-cakes">Black Forest Cakes</a>
                  </div>
                  <div>
                    <a href="/butterscotch-cakes">Butterscotch Cakes</a>
                  </div>
                  <div>
                    <a href="/strawberry-cakes">Strawberry Cakes</a>
                  </div>
                  <div>
                    <a href="/red-velvet-cakes">Red Velvet Cakes</a>
                  </div>
                  <div>
                    <a href="/vanilla-cakes">Vanilla Cakes</a>
                  </div>
                  <div>
                    <a href="/mango-cakes">Mango Cakes</a>
                  </div>
                  <div>
                    <a href="/pineapple-cakes">Pineapple Cakes</a>
                  </div>
                  <div>
                    <a href="/blueberry-cakes">Blueberry Cakes</a>
                  </div>
                  <div>
                    <a href="/fruit-cakes">Fruit Cakes</a>
                  </div>
                  <div>
                    <a href="/kit-kat-cakes">Kit Kat Cakes</a>
                  </div>
                </div>
                <div id={a.byflavour_div}>
                  <h1>By Type</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/cakes">All Cakes</a>
                  </div>
                  <div>
                    <a href="/heart-shape-cakes">Heart Shaped Cakes</a>
                  </div>
                  <div>
                    <a href="/photo-cakes">Photo Cakes</a>
                  </div>
                  <div>
                    <a href="/eggless-cakes">Eggless Cakes</a>
                  </div>
                  <div>
                    <a href="/vegan-cakes">Vegan Cakes</a>
                  </div>
                  <div>
                    <a href="/party-cakes">Party Cakes</a>
                  </div>
                  <div>
                    <a href="/cakes/midnight-delivery">Midnight Cakes</a>
                  </div>
                  <div>
                    <a href="/rose-cakes">Rose Cakes</a>
                  </div>
                  <div>
                    <a href="/wedding-cakes">Wedding Cakes</a>
                  </div>
                  <div>
                    <a href="/customised-cakes">Customised Cakes</a>
                  </div>
                </div>
                <div id={a.byflavour_div}>
                  <h1>Trending Cakes</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/pinata-cakes">Pinata Cakes</a>
                  </div>
                  <div>
                    <a href="/pull-me-up-cakes">Pull Me Up Cakes</a>
                  </div>
                  <div>
                    <a href="/half-cakes">Half Cakes</a>
                  </div>
                  <div>
                    <a href="/bomb-cakes">Bomb Cakes</a>
                  </div>
                  <div>
                    <a href="/surprise-cake-box">Surprise Cake Box</a>
                  </div>
                  <div>
                    <a href="/trending-cakes">All Trending Cakes</a>
                  </div>
                </div>
                <div id={a.cakes_img1_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/snicker-chocolate-cake.jpg"
                    data-sizes="auto"
                    alt="Delicious Cakes"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Delicious cakes</h1>
                  <span>Shop Now</span>
                </div>
                <div id={a.cakes_img1_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/bomb-cake.jpg"
                    data-sizes="auto"
                    alt="Bomb Cakes"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Bomb cakes</h1>
                  <span>Shop Now</span>
                </div>
              </div>
            </li>
            <span> &#124;</span>
            <li id={a.li2}>
              Designer cakes <img src={arrow} alt="" />
              <div id={a.megamenu_designercakes}>
                <div id={a.designercakesinner_div}>
                  <h1>Kids Cakes</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/1st-birthday-cakes">1st Birthday Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/barbie-cakes">Barbie Cakes</a>
                  </div>
                  <div>
                    <a href="/cakes/for-kids">Cakes for Kids</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/car-cakes">Car Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/cartoon-cakes">Cartoon Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/princess-cakes">Princess Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/jungle-theme-cakes">
                      Jungle Theme Cakes
                    </a>
                  </div>
                </div>
                <div id={a.designercakesinner_div}>
                  <h1>Character Cakes</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/designer-cakes/superhero-cakes">
                      Super Hero Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes/mickey-mouse-cakes">
                      Mickey Mouse Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes/minion-cakes">Minion Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/spiderman-cakes">
                      Spiderman Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes/chota-bheem-cakes">
                      Chota Bheem Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes/batman-cakes">Batman Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/avenger-cakes">Avenger Cakes</a>
                  </div>
                </div>
                <div id={a.designercakesinner_div2}>
                  <h1>Other Theme Cakes</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/designer-cakes/alphabet-cakes">Alphabet Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/baby-shower-cakes">
                      Baby shower Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes/cricket-cakes">
                      Cricket Theme Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes/number-cakes">Number Cakes</a>
                  </div>
                  <div>
                    <a href="/designer-cakes/free-fire-cakes">
                      Free Fire Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes/cocomelon-cakes">
                      Cocomelon Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/designer-cakes">All Designer Cakes</a>
                  </div>
                </div>
                <div id={a.designercakes_img1_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/sq-character-fondant-cake-them1292fav-A_0.jpg"
                    data-sizes="auto"
                    alt="Designer Cakes"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Designer cakes</h1>
                  <span>Shop now</span>
                </div>
                <div id={a.designercakes_img1_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/tom_cake_card.jpg"
                    data-sizes="auto"
                    alt="Cartoon Cakes"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Cartoon cakes</h1>
                  <span>Shop now</span>
                </div>
              </div>
            </li>
            <span> &#124;</span>
            <li id={a.li3}>
              Desserts <img src={arrow} alt="" />
              <div id={a.megamenu_desserts}>
                <div
                  id={a.designercakesinner_div}
                  style={{
                    marginLeft: 25,
                    width: 260,
                  }}
                >
                  <h1>Toothsome Desserts</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/pastries">Pastries</a>
                  </div>
                  <div>
                    <a href="/jar-cakes">Jar Cakes</a>
                  </div>
                  <div>
                    <a href="/cup-cakes">Cup Cakes</a>
                  </div>
                  <div>
                    <a href="/brownies">Brownies</a>
                  </div>
                  <div>
                    <a href="/dry-cakes">Dry Cakes</a>
                  </div>
                  <div>
                    <a href="/personalised-jar-cakes">Personalised Jar Cakes</a>
                  </div>
                  <div>
                    <a href="/personalised-cup-cakes">Personalised Cupcakes</a>
                  </div>
                  <div>
                    <a href="/all-desserts">All Desserts</a>
                  </div>
                </div>
                <div
                  id={a.designercakesinner_div}
                  style={{
                    marginLeft: 25,
                    width: 260,
                  }}
                >
                  <h1>Cookies &amp; Hampers</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/bakery-baskets">Gift Hampers</a>
                  </div>
                  <div>
                    <a href="/tea-cakes">Tea Cakes &amp; Cookies</a>
                  </div>
                </div>
                <div id={a.desserts_img_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/desserts.jpg"
                    data-sizes="auto"
                    alt="Desserts"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Desserts</h1>
                  <span>Shop now</span>
                </div>
                <div id={a.desserts_img_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/hamper.jpg"
                    data-sizes="auto"
                    alt="Bakery Hampers"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Bakery Hampers</h1>
                  <span>Shop now</span>
                </div>
              </div>
            </li>
            <span> &#124;</span>
            <li id={a.li4}>
              Anniversary <img src={arrow} alt="" />
              <div id={a.megamenu_anniversary}>
                <div
                  id={a.designercakesinner_div}
                  style={{
                    marginLeft: 60,
                    width: 260,
                  }}
                >
                  <h1>By Type</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/anniversary-cakes">All Anniversary Cakes</a>
                  </div>
                  <div>
                    <a href="/anniversary-photo-cakes">
                      Anniversary Photo Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/anniversary-cakes-for-parents">
                      Anniversary Cakes For Parents
                    </a>
                  </div>
                </div>
                <div id={a.designercakesinner_div}>
                  <h1>Milestone Cakes</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/1st-anniversary-cakes">1st Anniversary Cakes</a>
                  </div>
                  <div>
                    <a href="/5th-anniversary-cakes">5th Anniversary Cakes</a>
                  </div>
                  <div>
                    <a href="/10th-anniversary-cakes">10th Anniversary Cakes</a>
                  </div>
                  <div>
                    <a href="/25th-anniversary-cakes">25th Anniversary Cakes</a>
                  </div>
                  <div>
                    <a href="/50th-anniversary-cakes">50th Anniversary Cakes</a>
                  </div>
                </div>
                <div
                  id={a.desserts_img_div}
                  style={{ marginLeft: 70, width: 250, height: 200 }}
                >
                  <img
                    width={100}
                    height={150}
                    src="https://media.bakingo.com/menuimage/anniversary-cake.jpg"
                    data-sizes="auto"
                    alt="Anniversary Cakes"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Anniversary Cakes</h1>
                  <span>Shop now</span>
                </div>
                <div
                  id={a.desserts_img_div}
                  style={{ marginLeft: 70, width: 250, height: 200 }}
                >
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/anniversary-photo-cake.jpg"
                    data-sizes="auto"
                    alt="/"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Photo Cakes</h1>
                  <span>Shop now</span>
                </div>
              </div>
            </li>
            <span> &#124;</span>
            <li id={a.li5}>
              Birthday <img src={arrow} alt="" />
              <div id={a.megamenu_birthday}>
                <div id={a.designercakesinner_div} style={{ marginLeft: 70 }}>
                  <h1>By Type</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/birthday-cakes">All Birthday Cakes</a>
                  </div>
                  <div>
                    <a
                      class="category-subchild-title"
                      href="/1st-birthday-cakes"
                    >
                      1st Birthday Cakes
                    </a>
                  </div>
                  <div>
                    <a
                      class="category-subchild-title"
                      href="/birthday-photo-cakes"
                    >
                      Birthday Photo Cakes
                    </a>
                  </div>
                  <div>
                    <a href="/party-props">Party Props</a>
                  </div>
                </div>
                <div id={a.designercakesinner_div} style={{ marginLeft: 40 }}>
                  <h1>For Him</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/cakes/for-him">Cakes for Him</a>
                  </div>
                  <div>
                    <a
                      class="category-subchild-title"
                      href="/cakes/for-husband"
                    >
                      Cakes for Husband
                    </a>
                  </div>
                  <div>
                    <a href="/cakes/for-father">Cakes for Father</a>
                  </div>
                  <div>
                    <a
                      class="category-subchild-title"
                      href="/cakes/for-brother"
                    >
                      Cakes for Brother
                    </a>
                  </div>
                </div>
                <div id={a.designercakesinner_div} style={{ marginLeft: 40 }}>
                  <h1>For Her</h1>
                  <div id={a.byflavourbelow_div}>
                    <a href="/cakes/for-her">Cakes for Her</a>
                  </div>
                  <div>
                    <a href="/cakes/for-wife">Cakes for Wife</a>
                  </div>
                  <div>
                    <a href="/cakes/for-mother">Cakes for Mother</a>
                  </div>
                  <div>
                    <a href="/cakes/for-sister">Cakes for Sister</a>
                  </div>
                </div>
                <div id={a.designercakes_img1_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/birthday-cake.jpg"
                    data-sizes="auto"
                    alt="Birthday Cakes"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>Birthday cakes</h1>
                  <span>Shop now</span>
                </div>
                <div id={a.designercakes_img1_div}>
                  <img
                    width={100}
                    height={100}
                    src="https://media.bakingo.com/menuimage/first-birthday-cake.jpg"
                    data-sizes="auto"
                    alt="1st Birthday Cakes"
                    loading="lazy"
                    style={{ display: "inline", borderRadius: 5 }}
                  />
                  <h1>1st Birthday cakes</h1>
                  <span>Shop now</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id={a.search_div}>
          <div id={a.search_icon}>
            <SearchPic id={a.SearchPic} />
          </div>
          <input
            type={"text"}
            placeholder={"   Search for cakes, occasions, flavor and more"}
            id={a.search_bar}
          />
        </div>
        <div id={a.login_div}>
          <div className={a.profile_icon_div}>
            <img src={profile} alt="" />
            <h1 className={a.login_text}>Profile</h1>
          </div>
          <div className={a.wish_icon_div}>
            <img src={heart} alt="" className={a.heart} />
            <h1 className={a.login_text}>Wishlist</h1>
          </div>
          <div className={a.bag_icon_div}>
            <img src={bag} alt="" className={a.bag} />
            <h1 className={a.login_text}>Bag</h1>
          </div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
