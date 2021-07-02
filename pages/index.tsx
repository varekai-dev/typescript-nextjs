import { Htag, Button, P, Tag, Rating } from "../components";
import {useState} from 'react';
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interfaces";

 function Home({menu, firstCategory}: HomeProps): JSX.Element {
  const [rating, setRating]=useState<number>(4);
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" className="test" arrow="right">
        Knopka
      </Button>
      <Button appearance="ghost" arrow="right">
        Knopka
      </Button>
      <P size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        perspiciatis impedit asperiores architecto assumenda iste atque aliquam
        odio veniam, tempore aspernatur rerum nesciunt, magni nemo error
        quisquam ipsum eum accusamus. Saepe facilis dolore quia aliquid fuga
        labore accusantium minima maxime rem excepturi praesentium fugit
        deserunt iusto, recusandae repellat ex explicabo debitis nulla dolorum
 
      </P>
      <Tag size="m" color="green">
        Hello
      </Tag>
      <Tag size="s" color="red">
        Hello
      </Tag>
      <Tag size="m" color="grey">
        Hello
      </Tag>
      <Tag size="m">Hello</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>     
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async ()=>{
  const firstCategory = 0;
  const {data: menu}= await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };

};


interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}