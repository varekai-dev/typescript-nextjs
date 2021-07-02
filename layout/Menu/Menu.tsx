import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interfaces";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from "../../interfaces/page.interface";
import s from './Menu.module.css';
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
{route: '/courses', name: "Courses", icon: <CoursesIcon/>, id: TopLevelCategory.Courses },
{route: '/services', name: "Services", icon: <ServicesIcon/>, id: TopLevelCategory.Services },
{route: '/books', name: "Books", icon: <BooksIcon/>, id: TopLevelCategory.Books },
{route: '/products', name: "Products", icon: <ProductsIcon/>, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} =useContext(AppContext);

  const buildFirstLevel = ()=>{
    return (
      <>
      {firstLevelMenu.map(m=> (
        <div key={m.route}>
        <a href={`/${m.route}`}>
          <div className={cn(s.firstLevel, 
            {
              [s.firstLevelActive]: m.id === firstCategory
            })}>
            {m.icon}
            <span>{m.name}</span>
          </div>
        </a>
        {
        m.id === firstCategory &&  buildSecondLevel(m)
        }
        </div>
      ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem:  FirstLevelMenuItem)=>{
return (
  <div className={s.secondBlock}>
    {menu.map(m=> (
      <div key={m._id.secondCategory}>
        <div className={s.secondLevel}>  {m._id.secondCategory}</div>
          <div className={cn(s.secondLevelBlock,{
            [s.secondLevelBlockOpened]: m.isOpened})}>
              {buildThirdLevel(m.pages, menuItem.route )}
        </div>
      </div>
    ))}
  </div>
);
  };
  const buildThirdLevel = (pages: PageItem[], route: string)=>{
return(
 pages.map(p=>(
   <a href={`/${route}/${p.alias}` } className={cn(s.thirdLevel, {
     [s.thirdLevelActive]: false
   })}>
     {p.category}
   </a>
 )));
  };

  return (
    <div className={s.menu}>
    {buildFirstLevel()}
   
    </div>
  );
};
