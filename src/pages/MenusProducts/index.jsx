import { CarouselApps, CarouselBurger, CarouselDesserts, CarouselDrinks} from '../../components/MenusCarousels';
import { MenuPage } from '../../components/MenuPage';

export const MenuApps = () => (
	<MenuPage activeCategory="Entradas" Carousel={CarouselApps} />
);

export const MenuBurger = () => (
	<MenuPage activeCategory="Hambúrguers" Carousel={CarouselBurger} />
);

export const MenuDesserts = () => (
	<MenuPage activeCategory="Sobremesas" Carousel={CarouselDesserts} />
);

export const MenuDrinks = () => (
	<MenuPage activeCategory="Bebidas" Carousel={CarouselDrinks} />
);
